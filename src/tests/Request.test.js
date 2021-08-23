import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockAxios from "axios";
import {newReleases, featuredPlaylists, categories} from "../apis/request";
import config from '../config';

afterEach(cleanup);

test("check new releases songs", async () => {
  //setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { albums: {}
      }
    })
  );
  
  // work
  const items = await newReleases();

  //expects
  expect(items).toEqual({});
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${config.api.baseUrl}/browse/new-releases?country=SE&offset=0&limit=20`, 
   );
});

afterEach(cleanup);

test("check featured Playlists songs", async () => {
  //setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { playlists: {}
      }
    })
  );
  
  // work
  const items = await featuredPlaylists();

  //expects
  expect(items).toEqual({});
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${config.api.baseUrl}/browse/featured-playlists`, 
   );
});

afterEach(cleanup);

test("check categories", async () => {
  //setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { categories: {}
      }
    })
  );
  
  // work
  const items = await categories();

  //expects
  expect(items).toEqual({});
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${config.api.baseUrl}/browse/categories`, 
   );
});
