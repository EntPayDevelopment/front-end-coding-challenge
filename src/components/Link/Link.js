import styled from "styled-components";
import PropTypes from "prop-types";

import { Link as RouterLink } from "react-router-dom";

export const Link = (props) => {
  const { to, text, otherProps } = props;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledLink to={to} {...otherProps} onClick={handleClick}>
      {text}
    </StyledLink>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const StyledLink = styled(RouterLink)`
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.lightBlue};
  background-color: none;
  border-radius: 1rem;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue};
  }

  @media ${(props) => props.theme.device.tablet} {
    padding: 0.7rem 1.2rem;
    border-radius: 1.2rem;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;
