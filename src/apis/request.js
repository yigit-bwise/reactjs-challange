import config from '../config';
import axios from 'axios';

export const getToken = () => {
    return axios(config.api.authUrl, {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(config.api.clientId + ':' + config.api.clientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
}

export const newReleases = (token) => {
    return axios(`${config.api.baseUrl}/browse/new-releases?country=SE&offset=0&limit=20`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
      })
}

export const featuredPlaylists = (token) => {
    return axios(`${config.api.baseUrl}/browse/featured-playlists`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
      })
}

export const categories = (token) => {
    return axios(`${config.api.baseUrl}/browse/categories`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
      })
}
