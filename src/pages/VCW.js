import { Typography } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import { useTitle } from 'ahooks';

import './VCW.css';

const VCW = () => {
  const intl = useIntl();
  useTitle(intl.formatMessage({ id: 'vcw.title' }));

  return (
    <>
      <div className='vcw-slogan'>
        <Typography.Title className='vcw-slogan-h1'>
          <FormattedMessage id='vcw.slogan' />
        </Typography.Title>
        <Typography.Title level={3} className='vcw-slogan-h3'>
          <FormattedMessage id='vcw.subslogan' />
        </Typography.Title>
      </div>
    </>
  );
};

export default VCW;
