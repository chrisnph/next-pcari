import Navbar from "./navbar";
import Footer from "./footer";
import layoutStyles from "../styles/Layout.module.scss";
import Listing from "../pages/Listing";

const Layout = ({ children }) => (
  <>
    <div className="flex flex-col">
      <div
        className={`${layoutStyles.bgLinearBlack270} row-span-4 h-auto relative flex flex-col justify-between pb-20`}
      >
        <Navbar />
        <div className={`bg-transparent row-span-5 h-auto`}>{children}</div>
      </div>
      <div className="">
        <Listing />
      </div>
      <div className="row-span-3">
        <Footer />
      </div>
    </div>
  </>
);

export default Layout;
