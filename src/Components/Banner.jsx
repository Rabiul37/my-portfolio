import "../Style/Banner.css";
import BannerDetails from "./BannerDetails";
import Navber from "./Navber";
const Banner = () => {
  return (
    <>
      <div className="banner h-[99vh] relative">
        <Navber></Navber>
        <BannerDetails></BannerDetails>
      </div>
    </>
  );
};

export default Banner;
