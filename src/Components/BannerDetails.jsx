import Rabiul from "../assets/images/Rabiul.png";
import "../Style/Banner.css";
const BannerDetails = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 lg:mt-36">
        <div></div>
        <div className="slow">
          <span className=" slow absolute bottom-0 right-0 transition duration-700  bg-gradient-to-br from-[rgba(62,135,207,0.66)] to-[#ebe9e991] rounded-tl-full h-[480px] w-[550px] hover:bg-gradient-to-tr from-[#0d0e0f] to-[#ebe9e9] rounded-tl-full h-[480px] w-[550px]"></span>
          <img className="absolute bottom-0 right-0 " src={Rabiul} alt="" />
        </div>
      </div>
    </>
  );
};

export default BannerDetails;
