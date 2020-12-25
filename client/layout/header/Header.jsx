import { useRouter } from "next/router";

import TopNavbar from "../navbar/TopNavbar";
import DefaultCover from "../cover/DefaultCover";
import PostCover from "../cover/PostCover";

const Header = () => {
  const { pathname } = useRouter();

  const isHomeOrCategory = pathname === "/" || pathname === "/[category]";

  const GetCover = () => {
    if (isHomeOrCategory) {
      return <DefaultCover />;
    }
    return <PostCover />;
  };

  return (
    <header>
      <TopNavbar />
      <GetCover />
    </header>
  );
};

export default Header;
