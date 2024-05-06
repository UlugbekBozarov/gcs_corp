import PrivateRouts from "./private/PrivateRouts";
import PublicRouts from "./public/PublicRouts";

import { getAuthorization } from "services/custom";

const Routes = () => {
  const authorization = getAuthorization();
  if (authorization) {
    return <PrivateRouts />;
  } else {
    return <PublicRouts />;
  }
};

export default Routes;
