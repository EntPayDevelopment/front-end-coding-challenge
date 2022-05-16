import { size } from "./Breakpoints";

export const Theme = {
  colors: {
    background: "#212529",
    white: "#ffffff",
    lightBlue: "#03c1f3",
    blue: "#0366a4",
    darkBlue: "#003778",
    black: "#2a2a2a",
  },
  fonts: '"Montserrat", sans-serif',
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  borderRadius: "1rem",
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },
};
