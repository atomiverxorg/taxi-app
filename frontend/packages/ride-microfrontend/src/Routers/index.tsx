import { ReactNode } from 'react';
import HomePage from '../pages/HomePage';
import RideRequestPage from '../pages/RideRequestPage';

type SubRoutChild = {
  path?: string;
  element?: ReactNode;
  children?: SubRoutChild[];
};
export type PathRoutePropsItems = {
  path: string;
  element?: ReactNode;
  children: SubRoutChild[];
};

const Routers = (): PathRoutePropsItems | {} => {
  return {
    path: 'ride',
    children: [
      { path: '', element: <HomePage /> },
      { path: 'request-ride', element: <RideRequestPage /> },
    ],
  };
};

export default Routers;
