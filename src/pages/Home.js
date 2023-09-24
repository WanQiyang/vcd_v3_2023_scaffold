import { Typography, Result } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import { useTitle } from 'ahooks';

import './Home.css';

const Home = () => {
  const intl = useIntl();
  useTitle(intl.formatMessage({ id: 'home.title' }));

  return (
    <>
      <div className='home-slogan'>
        <Typography.Title className='home-slogan-h1'>
          <FormattedMessage id='home.slogan' />
        </Typography.Title>
        <Typography.Title level={3} className='home-slogan-h3'>
          <FormattedMessage id='home.subslogan' />
        </Typography.Title>
      </div>
      <Result
        status='404'
        title='Oops!'
        subTitle={<FormattedMessage id='app.todo' />}
      />
    </>
  );
};

export default Home;
