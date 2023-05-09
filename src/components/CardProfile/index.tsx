interface ICardProfile {
  img: string;
  widthImg: string;
  heightImg: string;
  text: string;
  name: string;
}

export const CardProfile = ({
  img,
  heightImg,
  name,
  text,
  widthImg,
}: ICardProfile) => {
  return (
    <div>
      <div className="h-[100%] sm:h-[355px] bg-desaturatedBlue rounded-xl p-[32px] w-[100%] grid sm:grid-cols-1 grid-cols-[78px_auto] gap-3 sm:gap-0 items-center">
        <div className="">
          <img
            className="border-2 border-white rounded-[50%] drop-shadow-lg"
            src={img}
            alt={name}
            width={widthImg}
            height={heightImg}
          />
        </div>

        <div className="">
          <p className="text-[15px] font-[400] leading-[18px]">{text}</p>
          <p className="xl:text-[40px] text-[24px] font-[300] xl:leading-[47.7px] leading-[28px]">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};
