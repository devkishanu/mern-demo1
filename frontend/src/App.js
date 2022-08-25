import React from 'react';
import {Layout, Image, Typography} from 'antd';
import logo from './images/Instaverse.png';
import Home from './components/Home';
import styles from './styles';

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout style={styles.layout}>
        <Header style={styles.header}>
          <Image width="45" preview="false" src={logo} style={styles.image} />
          &nbsp;
          <Title style={styles.title}> Instaverse </Title>
        </Header>
        <Home />
        <Footer style={styles.footer}>2022 Instaverse</Footer>
    </Layout>
  )
}

export default App;
