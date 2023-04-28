export type order = {
  id: number;
  customerId: number;
  drivers: Array<number>;
  technics: Array<number>;
  date: {
    from: string;
    to: string;
    period: string;
  };
  priority: boolean;
  state: string;
  description: string;
};

export type customer = {
  customerId: number;
  telNum: string;
  orders: Array<number>;
};

export type driver = {
  business: boolean;
  position: {
    lat: number;
    lon: number;
  };
  driverId: number;
  orders: Array<number>;
};
