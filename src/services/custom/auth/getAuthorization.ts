import { STORAGE_NAMES } from "constants/Storage.constants";

import getItemCookie from "../../cookies/getItemCookie";

const getAuthorization = () => {
  try {
    const key = getItemCookie(STORAGE_NAMES.authorizationKey);
    const secret = getItemCookie(STORAGE_NAMES.authorizationSecret);

    if (key && secret) {
      return {
        key,
        secret,
      };
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default getAuthorization;
