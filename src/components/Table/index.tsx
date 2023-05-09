import React from "react";

import { IData } from "../../types";
import Card from "../Card";

interface ITable {
  data: IData[];
  timeFrames: string;
}

const Table = ({ data, timeFrames }: ITable) => {
  return (
    <main className=" text-black  grid  grid-cols-1 sm:grid-cols-3 gap-6">
      {React.Children.toArray(
        data.map((x) => {
          let current;
          let prev;
          let text;

          switch (timeFrames) {
            case "Monthly":
              prev = x.timeframes.monthly.previous;
              current = x.timeframes.monthly.current;
              text = "Last Month";
              break;
            case "Weekly":
              prev = x.timeframes.weekly.previous;
              current = x.timeframes.weekly.current;
              text = " Last Week";
              break;

            default:
              prev = x.timeframes.daily.previous;
              current = x.timeframes.daily.current;
              text = "Today";
              break;
          }
          return (
            <Card
              text={text}
              img={x.img}
              categoryText={x.title}
              lastWeekHours={prev}
              currencyHours={current}
            />
          );
        })
      )}
    </main>
  );
};

export default Table;
