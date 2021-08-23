import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockAxios from "axios";
import {getToken} from "../apis/request";
import config from '../config';

afterEach(cleanup);

test("check token api", async () => {
  //setup
  mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: { access_token: '' }
    })
  );
  
  // work
  const token = await getToken();

  //expects
  expect(token).toEqual("");
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
  expect(mockAxios.post).toHaveBeenCalledWith(
    config.api.authUrl,
    "grant_type=client_credentials",
    {"headers": 
      {"Authorization": 
      'Basic ' + btoa(config.api.clientId + ':' + config.api.clientSecret), 
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  );
});