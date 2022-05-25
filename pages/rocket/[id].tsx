import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import RocketIntro from '../../components/RocketIntro/RocketIntro';
import { MainLayout } from '../../layout';

interface RocketProps {
  name: string;
  description: string;
  image: string;
  firstFlight: string;
  nameCompany: string;
  abbrevCompany: string;
}

const Rocket: NextPage<RocketProps> = ({
  name,
  description,
  image,
  firstFlight,
  nameCompany,
  abbrevCompany
}) => {
  return (
    <MainLayout header="secondary">
      <RocketIntro
        image={image}
        name={name}
        description={description}
        firstFlight={firstFlight}
        nameCompany={nameCompany}
        abbrevCompany={abbrevCompany}
      />
      <div className="container fill">Info about Rocket</div>
    </MainLayout>
  );
};

export default Rocket;

export const getServerSideProps: GetServerSideProps = async ({
  params
}: GetServerSidePropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const { data } = await axios.get(
    `https://spacelaunchnow.me/api/ll/2.1.0/config/launcher/${params.id}`
  );

  const {
    image_url: image,
    full_name: name,
    maiden_flight: firstFlight,
    description
  } = data;

  const { name: nameCompany, abbrev: abbrevCompany } = data.manufacturer;
  return {
    props: { name, description, image, firstFlight, nameCompany, abbrevCompany }
  };
};
