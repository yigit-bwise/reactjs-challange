import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

import { getToken, newReleases, featuredPlaylists, categories } from '../../../apis/request';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  async componentDidMount() {
    const token = await getToken().then(tokenResponse => {      
      return tokenResponse.data.access_token;
    });
    
    await newReleases(token).then(newReleasesResponse => {
      this.setState({ newReleases: newReleasesResponse.data.albums.items }) 
    });

    await featuredPlaylists(token).then(playlistsResponse => {
      this.setState({ playlists: playlistsResponse.data.playlists.items }) 
    });

    await categories(token).then(categoriesResponse => {
      this.setState({ categories: categoriesResponse.data.categories.items }) 
    });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock  text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
