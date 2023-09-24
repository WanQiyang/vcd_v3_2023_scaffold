import { ConfigProvider, Layout, Menu, Dropdown, Tooltip, Result, Modal, Space, Tag } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useResponsive, useMount, useCookieState, useSessionStorageState } from 'ahooks';
import { HomeOutlined, DatabaseOutlined, PlayCircleOutlined, ApiOutlined, InfoCircleOutlined, TranslationOutlined } from '@ant-design/icons';
import Bowser from 'bowser';

import Home from './Home';
import VCW from './VCW';
import VSA from './VSA';
import VAI from './VAI';
import About from './About';

import logoPng from '../assets/logo.png';

import { switchLang } from '../redux/slices/config';
import { switchPage } from '../redux/slices/global';

import en_US from '../locales/en-US';
import zh_CN from '../locales/zh-CN';
import './App.css';
import { useState } from 'react';

const langs = [
  {
    key: 'en-US',
    label: 'English',
    messages: en_US,
  },
  {
    key: 'zh-CN',
    label: '简体中文',
    messages: zh_CN,
  }
];

const pages = [
  {
    key: 'home',
    page: <Home />,
    icon: <HomeOutlined />,
  },
  {
    key: 'vcw',
    page: <VCW />,
    icon: <DatabaseOutlined />,
  },
  {
    key: 'vsa',
    page: <VSA />,
    icon: <PlayCircleOutlined />,
  },
  {
    key: 'vai',
    page: <VAI />,
    icon: <ApiOutlined />,
  },
  {
    key: 'about',
    page: <About />,
    icon: <InfoCircleOutlined />,
  },
];

const Header = () => {
  const currPage = useSelector((state) => state.global.page);
  const setPrevLang = useCookieState('prev-lang')[1];
  const setPrevPage = useSessionStorageState('prev-page', { defaultValue: 'home' })[1]

  const dispatch = useDispatch();

  const menuItems = pages.map((page) => {
    const label = <FormattedMessage id={`app.header.${page.key}`} />;
    return ({
      key: page.key,
      label,
      icon: (
        <Tooltip overlayClassName='app-layout-header-menu-tooltip' placement='bottom' title={label} >
          {page.icon}
        </Tooltip >
      ),
    });
  });

  const langItems = langs.map((lang) => ({
    key: lang.key,
    label: (
      <a target='_blank' onClick={() => {
        dispatch(switchLang(lang.key));
        setPrevLang(lang.key);
      }}>
        {lang.label}
      </a>
    ),
  }));

  const menuOnClick = ({ key }) => {
    dispatch(switchPage(key));
    setPrevPage(key);
  };

  return (
    <>
      {/* <img className='app-layout-header-logo' src={viplLogoPng} /> */}
      <img className='app-layout-header-logo' src={logoPng} alt='logo' />
      <Menu className='app-layout-header-menu' theme='light' mode='horizontal' selectedKeys={[currPage]} items={menuItems} onClick={menuOnClick} />
      <Dropdown menu={{ items: langItems }}>
        <a onClick={(e) => e.preventDefault()} style={{ color: '#000', fontSize: '24px' }}>
          <TranslationOutlined />
        </a>
      </Dropdown>
    </>
  );
};

const App = () => {
  const currLang = useSelector((state) => state.config.lang);
  const colorPrimary = useSelector((state) => state.config.colorPrimary);
  const currPage = useSelector((state) => state.global.page);
  const prevLang = useCookieState('prev-lang')[0];
  const prevPage = useSessionStorageState('prev-page', { defaultValue: 'vcw' })[0];

  const [engineName, setEngineName] = useState('Blink');
  const dispatch = useDispatch();
  const responsive = useResponsive();

  const ALLOWED_ENGINES = ['Blink', 'Gecko'];
  const messages = langs.find((lang) => lang.key === currLang).messages;
  const alertMessage = !ALLOWED_ENGINES.includes(engineName) ? <FormattedMessage id='app.browserlimit' /> :
    !responsive.md ? <FormattedMessage id='app.widthlimit' /> : null;

  useMount(() => {
    const browser = Bowser.getParser(window.navigator.userAgent);
    setEngineName(browser.getEngineName());

    const newLang = prevLang || navigator.language || navigator.userLanguage;
    if (langs.find((lang) => lang.key === newLang)) {
      dispatch(switchLang(newLang));
    }

    if (pages.find((page) => page.key === prevPage)) {
      dispatch(switchPage(prevPage));
    }
  });

  return (
    <IntlProvider locale={currLang} messages={messages}>
      <ConfigProvider locale={messages.antd} theme={{ token: { colorPrimary } }}>
        <Layout className='app-layout'>
          <Layout.Header className='app-layout-header'>
            <Header />
          </Layout.Header>
          <Layout.Content className='app-layout-content'>
            {pages.find((page) => page.key === currPage).page}
          </Layout.Content>
          <Layout.Footer className='app-layout-footer' >
            <Space>
              <Tag color='geekblue'>ver. {process.env.REACT_APP_VERSION}</Tag>
              <FormattedMessage id='app.footer.copyright' />
            </Space>
          </Layout.Footer>
        </Layout >
        <Modal
          centered={true}
          closeIcon={null}
          footer={null}
          keyboard={false}
          maskClosable={false}
          open={alertMessage}
        >
          <Result
            status='403'
            title='Oops!'
            subTitle={alertMessage}
          />
        </Modal>
      </ConfigProvider>
    </IntlProvider>
  );
}

export default App;
