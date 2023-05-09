import React from "react";
import ImageProfile from "../../../public/images/image-jeremy.png";
import { CardProfile } from "../CardProfile";
import { Date } from "../../enum";

interface ISidebar {
  onClick: (e: any) => void;
  isActive: string;
}

const Sidebar = ({ onClick, isActive }: ISidebar) => {
  return (
    <aside className="bg-darkBlue text-white w-[100%] rounded-xl overflow-hidden">
      <div className=" w-[100%]">
        <CardProfile
          img={ImageProfile}
          widthImg={"78px"}
          heightImg={"78px"}
          text={"Report for"}
          name={"Jeremy Robson"}
        />
      </div>

      <ul className="p-[32px] grid grid-cols-3 sm:grid-cols-1 text-[18px] cursor-pointer">
        {React.Children.toArray(
          [Date.Daily, Date.Weekly, Date.Monthly].map((x) => (
            <li
              value={x}
              className={`${
                isActive === x ? "text-desaturatedBlue" : "text-white"
              }  justify-self-center first:justify-self-start last:justify-self-end even:justify-self-start sm:last:justify-self-start`}
              onClick={() => onClick(x)}
            >
              {x}
            </li>
          ))
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
