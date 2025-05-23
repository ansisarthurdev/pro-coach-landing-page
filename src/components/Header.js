import React, { useEffect, useState } from "react";
import { Flex, Text, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { List, X } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Apply to Coach",
      link: "/",
    },
    {
      name: "Community",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
  ];

  return (
    <HeaderWrapper scrolled={scrolled}>
      <HeaderContainer
        style={{
          background: scrolled
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0.08)",
          border: scrolled
            ? "1px solid rgba(0,0,0,0.1)"
            : "1px solid rgba(255,255,255,0.4)",
        }}
      >
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <img
            src={scrolled ? "/images/logo.svg?black" : "/images/logo.svg"}
            alt="Logo"
            style={{
              height: "30px",
              width: "auto",
              filter: scrolled ? "invert(1)" : "none",
            }}
          />

          <Text as="p" size="3" style={{ color: scrolled ? "black" : "white" }}>
            ProCoach
          </Text>
        </Link>

        <DekstopNavigation scrolled={scrolled}>
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link to={item.link}>
                  <Text
                    as="p"
                    size="3"
                    style={{
                      color: scrolled ? "black" : "white",
                      padding: "8px 16px",
                      borderRadius: "999px",
                      transition: "background 0.3s, color 0.3s",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </DekstopNavigation>

        <MobileNavigationBtn onClick={() => setMobileNavOpen(true)}>
          <List
            size="24"
            style={{ minWidth: "24px", color: scrolled ? "black" : "white" }}
          />
        </MobileNavigationBtn>

        <SignInSignOutBtns>
          <Link to="/">
            <Button size="3" style={{ backgroundColor: "transparent" }}>
              <Text size="3" style={{ color: scrolled ? "black" : "white" }}>
                Sign Up
              </Text>
            </Button>
          </Link>
          <Link to="/">
            <Button size="3">
              <Text size="3" style={{ color: scrolled ? "black" : "black" }}>
                Sign In
              </Text>
            </Button>
          </Link>
        </SignInSignOutBtns>
      </HeaderContainer>
      <AnimatePresence>
        {mobileNavOpen && (
          <MobileNavDrawer
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <CloseBtn onClick={() => setMobileNavOpen(false)}>
              <X size="24" style={{ color: "black" }} />
            </CloseBtn>
            <MobileNavLinks>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.link} onClick={() => setMobileNavOpen(false)}>
                    <Text size="6">{item.name}</Text>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" onClick={() => setMobileNavOpen(false)}>
                  <Text size="6">Sign Up</Text>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setMobileNavOpen(false)}>
                  <Text size="6">Sign In</Text>
                </Link>
              </li>
            </MobileNavLinks>
          </MobileNavDrawer>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
};

const SignInSignOutBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 4px;

  @media (max-width: 868px) {
    display: none;
  }
`;

const MobileNavigationBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  @media (max-width: 868px) {
    display: flex;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4px 4px 0 16px;
  border-radius: 999px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(2px);

  @media (max-width: 1024px) {
    border-radius: 0;
    box-shadow: none;
    padding-right: 1.5rem;
  }

  @media (max-width: 868px) {
    padding: 16px;
  }
`;

const HeaderWrapper = styled.div`
  max-width: var(--container-width);
  width: 100%;
  padding: 0 1.5rem 0;
  top: 20px;
  position: fixed;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1024px) {
    max-width: 100vw;
    padding: 0;
    top: 0;
  }
`;

const DekstopNavigation = styled.nav`
  @media (max-width: 868px) {
    display: none;
  }

  ul {
    display: flex;

    li {
      border-bottom: 4px solid transparent;
      transition: border-color 0.3s;
      &:hover {
        border-color: var(--lime-10);
      }
    }
  }
`;

const MobileNavDrawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 200;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  box-shadow: -2px 0 16px rgba(0, 0, 0, 0.08);
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  align-self: flex-end;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  li a {
    color: black;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: var(--lime-10, #a3e635);
    }
  }
`;

export default Header;
