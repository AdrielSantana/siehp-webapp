import { LandingPageLayoutProps } from "./types";
import Header from "./Header";
import Footer from "./Footer";

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LandingPageLayout;
