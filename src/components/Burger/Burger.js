import styled from "styled-components";
import PropTypes from "prop-types";

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.prototype = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

const StyledBurger = styled.button`
  position: absolute;
  top: 1.65rem;
  right: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.65rem;
  height: 1.6rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 99;

  &:focus {
    outline: none;
  }

  &:hover div {
    background: ${(props) => props.theme.colors.lightBlue};
  }

  div {
    width: 1.65rem;
    height: 0.2rem;
    background: ${(props) =>
      props.open ? props.theme.colors.darkBlue : props.theme.colors.lightBlue};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(10px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
