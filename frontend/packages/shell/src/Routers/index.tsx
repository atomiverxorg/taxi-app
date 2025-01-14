import Local from './Local';
import RemoteRideRouters from 'ride/Routers';
import RemoteApp2Routers from 'app2/Routers';
import RootLayout from '../components/RootLayout';

const Routers = () => [
  Local(),
  { ...RemoteApp2Routers(), element: <RootLayout /> },
  { ...RemoteRideRouters(), element: <RootLayout /> },
];

export default Routers;
