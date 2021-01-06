// Components
import TopNavbar from "../navbar/TopNavbar";

// Hooks
import useWindowSize from "@hooks/useWindowSize";

const Header = ({ logo }) => {
  const isSmallDevice = useWindowSize() === "sm";

  return (
    <header className={isSmallDevice && "sticky-top"}>
      <TopNavbar logo={logo} />
    </header>
  );
};

export default Header;
