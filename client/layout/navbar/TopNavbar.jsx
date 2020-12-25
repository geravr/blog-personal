import React from "react";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

// Styles
import style from "./Navbar.module.scss";

// React Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

// Icons
import DevIcon from "@components/icons/DevIcon";
import DevopsIcon from "@components/icons/DevopsIcon";

// Hooks
import useWindowSize from "@hooks/useWindowSize";

export default function TopNavbar() {
  const isSmallDevice = useWindowSize() === "sm";

  return (
    <>
      {isSmallDevice && (
        <Navbar variant="light" className={style.navbarContainer}>
          <Container className="d-flex justify-content-center">
            <Link href="/" passHref>
              <Navbar.Brand className="d-flex align-items-center">
                Logo
              </Navbar.Brand>
            </Link>
          </Container>
        </Navbar>
      )}

      <Navbar
        variant="light"
        className={`${style.navbarContainer} ${
          isSmallDevice && "fixed-bottom"
        }`}
      >
        <Container className={isSmallDevice && 'd-flex justify-content-center'}>
          {!isSmallDevice && (
            <Link href="/" passHref>
              <Navbar.Brand className="d-flex align-items-center">
                Logo
              </Navbar.Brand>
            </Link>
          )}

          <Nav className={`${style.navbar}`}>
            <ActiveLink
              href="/desarrollo"
              activeClassName={style.active}
              passHref
            >
              <Nav.Link
                className={`mx-3 d-flex flex-column align-items-center ${style.navbarLink}`}
              >
                <DevIcon color="primary" />
                Desarrollo
              </Nav.Link>
            </ActiveLink>
            <ActiveLink href="/devops" activeClassName={style.active} passHref>
              <Nav.Link
                className={`mx-3 d-flex flex-column align-items-center ${style.navbarLink}`}
              >
                <DevopsIcon color="primary" />
                DevOps
              </Nav.Link>
            </ActiveLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
