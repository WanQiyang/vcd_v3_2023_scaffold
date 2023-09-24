import { Typography } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import { useTitle } from 'ahooks';

import './VSA.css';

const VSA = () => {
  const intl = useIntl();
  useTitle(intl.formatMessage({ id: 'vsa.title' }));

  return (
    <>
      <div className='vsa-slogan'>
        <Typography.Title className='vsa-slogan-h1'>
          <FormattedMessage id='vsa.slogan' />
        </Typography.Title>
        <Typography.Title level={3} className='vsa-slogan-h3'>
          <FormattedMessage id='vsa.subslogan' />
        </Typography.Title>
      </div>
      {/* TODO: begin here */}
    </>
  );
};

export default VSA;
