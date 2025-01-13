import { FC } from 'react';
import RemoteRideLayout from 'ride/Layout';
import { LayoutProps } from '@mf-types/ride_microfrontend/Layout';

const Layout: FC<LayoutProps> = props => {
  return <RemoteRideLayout {...props} />;
};
const RootLayout = () => {
  return (
    <Layout
      mainSideMenu={[
        { label: 'host', value: '/' },
        { label: 'ride', value: '/ride' },
        { label: 'app-2', value: '/app-2' },
      ]}
    />
  );
};

export default RootLayout;
