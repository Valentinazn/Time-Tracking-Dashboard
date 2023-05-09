import IconEllipsis from "../../images/icon-ellipsis.svg";

interface ICard {
  img: string;
  text: string;
  categoryText: string;
  lastWeekHours: number;
  currencyHours: number;
}

const Card = ({
  img,
  categoryText,
  lastWeekHours,
  currencyHours,
  text,
}: ICard) => {
  let bgColor;

  switch (categoryText) {
    case "Work":
      bgColor = "bg-lightRedWork";
      break;
    case "Play":
      bgColor = "bg-softBluePlay";
      break;

    case "Study":
      bgColor = "bg-lightRedStudy";
      break;

    case "Social":
      bgColor = "bg-violetSocial";
      break;

    case "Self Care":
      bgColor = "bg-softOrangeSelfCare";
      break;

    default:
      bgColor = "bg-limeGreenExercise";
      break;
  }
  return (
    <div
      className={` ${bgColor} w-[100%] rounded-xl relative sm:h-[100%] h-[160px] overflow-hidden`}
    >
      <div className=" absolute top-0 right-3">
        <img src={img} alt="ellipsis" />
      </div>

      <div className="  bg-darkBlue sm:h-[80%] h-[122px] rounded-xl grid grid-cols-1 text-left xl:p-[29px] p-[24px]  z-50 bottom-0 absolute w-[100%]">
        <div className="grid grid-cols-[80%_20%] h-[22px] items-center content-center xl:gap-2">
          <p className="text-[18px] text-white font-[500]">{categoryText}</p>
          <img className="justify-self-end" src={IconEllipsis} alt="btn" />
        </div>
        <div className="grid sm:items-end  grid-cols-[auto_auto] sm:grid-cols-1 items-center content-center gap-2">
          <p className="xl:text-[56px] text-[32px] text-white font-[300] xl:leading-[66px] ">
            {currencyHours}Hrs
          </p>
          <p className="text-paleBlue font-[400] text-[15px] leading-[18x] justify-self-end sm:justify-self-start">
            {text} - {lastWeekHours}Hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
