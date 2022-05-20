import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { LaunchesRequestData, HomeProps } from '../Interfaces';
import HomeIntro from '../components/HomeIntro/HomeIntro';
import HomeLaunches from '../components/HomeLaunches/HomeLaunches';
import MainLayout from '../layout/MainLayout';
import introImage from '../public/images/home-intro.jpg';

const Home: NextPage<HomeProps> = ({ launchesData }) => {
  return (
    <MainLayout>
      <HomeIntro image={introImage} />
      <div className="container fill">
        <HomeLaunches launchesData={launchesData} />
      </div>
    </MainLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    'https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed&limit=6&offset=0'
  );

  const launchesData = data.results.map((item: LaunchesRequestData) => {
    const { id, name, net: date } = item;
    const { image_url: image } = item.rocket.configuration;

    return {
      name,
      image,
      id,
      date
    };
  });

  return {
    props: { launchesData }
  };
};
