import config from '../config';
import axios from 'axios';


var customServices = axios;

export const getToken = async () => {
  const response = await customServices.post(config.api.authUrl, 'grant_type=client_credentials', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(config.api.clientId + ':' + config.api.clientSecret)
    }
  })
  customServices = axios.create({
    headers: {'Authorization': 'Bearer '+ response.data.access_token}
  });
  return response.data.access_token
}

export const newReleases = async () => {  
  const response = await customServices.get(`${config.api.baseUrl}/browse/new-releases?country=SE&offset=0&limit=20`)
  return response.data.albums
}

export const featuredPlaylists = async () => {
  const response = await customServices.get(`${config.api.baseUrl}/browse/featured-playlists`)
  return response.data.playlists
}

export const categories = async () => {
  const response = await customServices.get(`${config.api.baseUrl}/browse/categories`)
  return response.data.categories
}
