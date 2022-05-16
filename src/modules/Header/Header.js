import { useState, useRef } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { useOnClickOutside } from "../../hooks";

import CRAVE_LOGO from "../../assets/logo/crave.svg";

import { Link, Burger, MenuForMobile } from "../../components";

export const Header = () => {
  const node = useRef();
  const [open, setOpen] = useState(false);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Container>
      <RouterLink to="/" aria-label="Home">
        <Logo src={CRAVE_LOGO} alt="logo" width={114} />
      </RouterLink>
      <MenuContainer>
        <LinkContainer>
          <Link to="/" text="Media List" aria-label="Media List" />
          <Link to="/watch-list" text="Watch List" aria-label="Watch List" />
        </LinkContainer>
        {/* Hamburger menu for only small screen */}
        <MenuForMobileContainer ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <MenuForMobile open={open} setOpen={setOpen} />
        </MenuForMobileContainer>
      </MenuContainer>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
  padding: 16px 4vw;
  height: 5rem;
  width: 100%;
  z-index: 97;
`;

const Logo = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  cursor: pointer;
`;

const MenuContainer = styled.div``;

const LinkContainer = styled.div`
  display: none;

  @media ${(props) => props.theme.device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

const MenuForMobileContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.device.tablet} {
    display: none;
  }
`;
