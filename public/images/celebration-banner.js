import Btn from "./btn";
import Header from "./header";
import PropTypes from "prop-types";

const CelebrationBanner = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-full right-[0px] bottom-[-116px] left-[0px] h-[5610px] max-w-full text-left text-81xl text-black font-yeseva-one mq1500:h-auto mq1500:min-h-[5610] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start max-w-full h-full">
        {/* <img
          className="h-[5610px] flex-1 relative max-w-full overflow-hidden"
          alt=""
          src="/line.svg"
        /> */}
        <h1 className="!m-[0] w-[1031px] absolute top-[377px] left-[-185px] text-[5rem] font-extrabold capitalize font-[inherit] inline-block z-[1] mq450:text-11xl mq850:text-31xl">
  Celebrating Your<br /> <br /> <br />
  Special Day with Us
</h1>

        {/* <Btn
          propBackgroundColor="#000"
          propMargin="0 !important"
          propPosition="absolute"
          propTop="987px"
          propRight="-77.5px"
          propBorderTop="1px solid #000"
          propBorderRight="1px solid #000"
          propBorderBottom="3px solid #000"
          propBorderLeft="1px solid #000"
          login="contact now"
          propMinWidth="127px"
          propColor="#fff"
        /> */}
        {/* <Header /> */}
        <img
          className="h-[570px] w-[588px] absolute !m-[0] top-[2503px] left-[-365px] object-cover z-[1]"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className="h-[48.3px] w-[710.4px] absolute !m-[0] right-[-259.6px] bottom-[2738.7px] z-[1]"
          loading="lazy"
          alt=""
          src="/sign-up-with-us-and-on-your-birthday-youll-receive-a-personalized-message-filled-with-blessings-from-the-temple.svg"
        />
        <div className="w-[1400px] !m-[0] absolute bottom-[695px] left-[-209px] bg-gray flex flex-col items-start justify-start p-[70px] box-border gap-[55px] z-[1] text-5xl">
          <div className="w-[1400px] h-[255px] relative bg-gray hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-center max-w-full">
            <div className="flex flex-row items-start justify-start relative max-w-full">
              <div className="h-px w-[1261px] absolute !m-[0] bottom-[9px] left-[calc(50%_-_630px)] border-black border-t-[1px] border-solid box-border opacity-[0.5] z-[1]" />
              <div className="bg-gray flex flex-row items-start justify-start py-[1.5px] px-1 box-border max-w-full z-[2]">
                <div className="relative leading-[17px] mq450:text-lgi mq450:leading-[32px]">
                  <span className="capitalize">{`OVER 1K+ BUSINESSES GROWING WITH `}</span>
                  <span className="uppercase">Market</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-[79.5px] max-w-full mq1500:flex-wrap">
            <div className="w-[486.1px] flex flex-row items-start justify-between py-0 pl-0 pr-[70px] box-border max-w-full gap-5 mq850:flex-wrap mq850:justify-center">
              <img
                className="self-stretch w-[133.2px] relative max-h-full overflow-hidden shrink-0 min-h-[40px] z-[1]"
                loading="lazy"
                alt=""
                src="/spotify-svg.svg"
              />
              <img
                className="self-stretch w-[203.4px] relative max-h-full overflow-hidden shrink-0 min-h-[40px] z-[1]"
                loading="lazy"
                alt=""
                src="/dropbox-svg.svg"
              />
            </div>
            <div className="w-[197.7px] flex flex-col items-start justify-start">
              <img
                className="w-[127.7px] h-10 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/google-svg.svg"
              />
            </div>
            <img
              className="self-stretch w-[127.7px] relative max-h-full overflow-hidden shrink-0 min-h-[40px] z-[1]"
              loading="lazy"
              alt=""
              src="/airbnb-svg.svg"
            />
            <img
              className="self-stretch w-[210px] relative max-h-full overflow-hidden shrink-0 min-h-[40px] z-[1]"
              loading="lazy"
              alt=""
              src="/envato-svg.svg"
            />
          </div>
        </div>
        <h1 className="!m-[0] absolute bottom-[1345px] left-[329px] text-[2rem] capitalize font-semibold font-[inherit] z-[1] mq450:text-11xl mq850:text-31xl">
          Say Hello to Market!
        </h1>
      </div>
      <img
        className="absolute top-[2573px] left-[133px] w-[328px] h-[328px] object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/image-7@2x.png"
      />
      <img
        className="absolute top-[2567.5px] left-[529px] w-[333px] h-[187.5px] z-[1]"
        loading="lazy"
        alt=""
        src="/how-it-works.svg"
      />
    </div>
  );
};

CelebrationBanner.propTypes = {
  className: PropTypes.string,
};

export default CelebrationBanner;
