// Components
import TopNavbar from "../navbar/TopNavbar";

// Hooks
import useWindowSize from "@hooks/useWindowSize";

const Header = ({ logo, categories }) => {
  const isSmallDevice = useWindowSize() === "sm";

  return (
    <header className={isSmallDevice ? "sticky-top" : undefined}>
      <TopNavbar logo={logo} categories={categories} />
    </header>
  );
};

export default Header;
