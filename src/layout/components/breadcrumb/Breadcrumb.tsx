import { memo, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Trans } from "react-i18next";
import { Breadcrumbs } from "@mui/material";
import { get } from "lodash";

import { Breadcrumb as BreadcrumbIcon } from "assets/icons";

import { StyledDot, StyledLink } from "./Breadcrumb.style";

const Breadcrumb = () => {
  const location = useLocation();

  const locationItems = useMemo(() => {
    if (get(location, "pathname", "") === "/") {
      return [""];
    }

    let array = get(location, "pathname", "").split("/");

    if (array.at(-2) === "edit") {
      return array.slice(0, -1);
    }
    return array;
  }, [location]);

  return (
    <Breadcrumbs separator={<StyledDot />} aria-label="breadcrumb">
      {locationItems.map((item, index) => (
        <StyledLink
          to="/"
          isLast={locationItems.length === index + 1}
          key={index}
        >
          {item === "" ? <BreadcrumbIcon /> : ""}
          <Trans>{item || "home"}</Trans>
        </StyledLink>
      ))}
    </Breadcrumbs>
  );
};

export default memo(Breadcrumb);
