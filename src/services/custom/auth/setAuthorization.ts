import { STORAGE_NAMES } from "constants/Storage.constants";
import setItemCookie from "../../cookies/setItemCookie";

const setAuthorizationToken = (key: string, secret: string, expires: Date) => {
  setItemCookie(STORAGE_NAMES.authorizationKey, key, { expires });
  setItemCookie(STORAGE_NAMES.authorizationSecret, secret, { expires });
};

export default setAuthorizationToken;
