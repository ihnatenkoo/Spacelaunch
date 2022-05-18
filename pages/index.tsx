import type { NextPage } from 'next';
import HomeIntro from '../components/HomeIntro/HomeIntro';
import MainLayout from '../layout/MainLayout';
import introImage from '../public/images/home-intro.jpg';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeIntro image={introImage} />
      <div className="container fill"></div>
    </MainLayout>
  );
};

export default Home;
