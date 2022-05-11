import React from "react";

const CRAVE_LOGO = process.env.PUBLIC_URL + "/logo/crave.svg";

export const Header = () => (
  <header>
    <img src={CRAVE_LOGO} alt="logo" width={114} />
  </header>
);
