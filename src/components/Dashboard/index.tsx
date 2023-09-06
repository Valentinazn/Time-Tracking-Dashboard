import { useEffect, useState } from "react";
import { IData } from "../../types";
import { Date } from "../../enum";
import axios from "axios";
import Sidebar from "../Sidebar";
import Table from "../Table";

function Dashboard() {
  const [date, setDate] = useState<IData[]>();
  const [isActive, setIsActive] = useState<string>(Date.Daily);

  const getData = () => {
    return axios
      .get("data.json")
      .then((res) => setDate(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6  content-center min-h-[518px]">
      <div className="grid w-[100%] sm:col-[1_/_span_3]">
        <Sidebar onClick={(e: string) => setIsActive(e)} isActive={isActive} />
      </div>
      <div className="grid w-[100%] sm:col-[4_/_span_9]">
        <Table data={date ?? []} timeFrames={isActive} />
      </div>
    </div>
  );
}

export default Dashboard;
