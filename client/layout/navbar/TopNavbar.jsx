import Link from "next/link";
import ActiveLink from "./ActiveLink";
import Image from "next/image";

// Styles
import style from "./Navbar.module.scss";

// Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

export default function TopNavbar({ logo, categories }) {
  return (
    <Navbar variant="light" className={`${style.navbarContainer}`} expand="md">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="d-flex align-items-center">
            <Image
              src={process.env.API_HOST_CONTAINER + logo.url}
              alt={logo.alternativeText}
              width={190}
              height={36}
              quality={100}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-md-end"
        >
          <Nav className={`pt-3 pt-md-0 ${style.navbar}`}>
            {categories.map((category) => (
              <ActiveLink
                key={category.id}
                href={`/${category.slug}`}
                activeClassName={style.active}
                passHref
              >
                <Nav.Link
                  className={`mx-md-2 my-2 my-md-0 d-flex flex-column align-items-center ${style.navbarLink}`}
                >
                  {category.name}
                </Nav.Link>
              </ActiveLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
