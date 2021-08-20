import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

import { getToken, newReleases } from '../../../apis/request';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentDidMount() {
    getToken().then(tokenResponse => {      
      // console.log(tokenResponse.data.access_token)
      const token = tokenResponse.data.access_token;
      newReleases(token).then(playlistResponse => {      
        console.log(playlistResponse)
      });
      // return tokenResponse.data.access_token
    });
    
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
