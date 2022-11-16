import { isEmpty } from 'lodash';
import { getAuthToken } from './localStorage.util';

export const isUserLoggedIn = () => {
  if (!isEmpty(getAuthToken())) {
    return true;
  }
  return false;
};
