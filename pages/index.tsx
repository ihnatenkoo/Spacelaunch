import type { NextPage } from 'next';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header primary />
      <div style={{ height: 400 }}></div>
      <Footer />
    </>
  );
};

export default Home;
