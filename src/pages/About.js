import { useIntl } from 'react-intl';
import { useTitle } from 'ahooks';

import './About.css';

const About = () => {
  const intl = useIntl();
  useTitle(intl.formatMessage({ id: 'about.title' }));

  return null;
};

export default About;
