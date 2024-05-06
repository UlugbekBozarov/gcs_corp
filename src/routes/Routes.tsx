import { getItemCookie } from "services";
import { STORAGE_NAMES } from "constants/Storage.constants";

import PrivateRouts from "./private/PrivateRouts";
import PublicRouts from "./public/PublicRouts";

const Routes = () => {
  const token = getItemCookie(STORAGE_NAMES.authorization);
  if (!token) {
    return <PrivateRouts />;
  } else {
    return <PublicRouts />;
  }
};

export default Routes;
