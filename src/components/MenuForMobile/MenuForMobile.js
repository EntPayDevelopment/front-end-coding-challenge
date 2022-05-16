import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

export const MenuForMobile = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" aria-label="Media List" onClick={() => setOpen(!open)}>
        Media Link
      </Link>
      <Link
        to="/watch-list"
        aria-label="Watch List"
        onClick={() => setOpen(!open)}
      >
        Watch List
      </Link>
    </StyledMenu>
  );
};

MenuForMobile.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.white};
  min-height: 100vh;
  max-width: 100%;
  min-width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 98;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.open ? "translateX(0%)" : "translateX(-100%)"};

  a {
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${(props) => props.theme.colors.darkBlue};
    text-decoration: none;
    transition: color 0.3s linear;

    @media ${(props) => props.theme.device.tablet} {
      font-size: 2rem;
    }

    &:hover {
      color: ${(props) => props.theme.colors.lightBlue};
    }
  }
`;
