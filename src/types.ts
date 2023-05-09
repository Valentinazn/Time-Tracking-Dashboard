export interface ITime {
  current: number;
  previous: number;
}

export interface IData {
  title: string;
  img: string;
  timeframes: {
    daily: ITime;
    weekly: ITime;
    monthly: ITime;
  };
}
