import { Row, Typography } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import { useTitle } from 'ahooks';

import './VAI.css';

const VAI = () => {
  const intl = useIntl();
  useTitle(intl.formatMessage({ id: 'vai.title' }));

  return (
    <>
      <div className='vai-slogan'>
        <Typography.Title className='vai-slogan-h1'>
          <FormattedMessage id='vai.slogan' />
        </Typography.Title>
        <Typography.Title level={3} className='vai-slogan-h3'>
          <FormattedMessage id='vai.subslogan' />
        </Typography.Title>
      </div>
      <Row gutter={48} className='vai-mainrow'>
      </Row>
    </>
  );
};

export default VAI;
