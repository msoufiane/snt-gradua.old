/**
 * Created by soufiaane on 7/22/17.
 */

import axios  from 'axios';
import cookie from "react-cookies";

export const authenticate = (username, password) => {
  const request = axios.create();

  request.defaults.headers.common = {
    'X-CSRFToken': cookie.load('csrftoken')
  };

  request.post('api/auth/login/', {username, password})
    .then(response => response.data).catch((error) => {
    throw error;
  });
};

// eslint-disable-next-line consistent-return
export const logout = () => {
  const request = axios.create({baseURL: 'api/auth/logout/'});
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState !== null) {
      request.defaults.headers.common.Authorization = `Token ${serializedState.authUser.token}`;
      return request.post('api/auth/logout/')
        .then(response => response.data)
        .catch((error) => {
          throw error;
        });
    }
  } catch (error) {
    throw error;
  }
};
