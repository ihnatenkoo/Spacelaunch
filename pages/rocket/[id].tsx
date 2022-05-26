import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MainLayout } from '../../layout';
import { RocketInfo, RocketIntro } from '../../components';

interface RocketProps {
  name: string;
  description: string;
  image: string;
  firstFlight: string;
  nameCompany: string;
  abbrevCompany: string;
  type: string;
  country_code: string;
  family: string;
  fullName: string;
  variant: string;
  alias: string;
  min_stage: string;
  max_stage: string;
  length: string;
  diameter: string;
  launch_mass: string;
  to_thrust: string;
  apogee: string;
  leo_capacity: string;
  vehicle_range: string;
  total_launch_count: string;
  successful_launches: string;
  failed_launches: string;
}

const Rocket: NextPage<RocketProps> = ({
  name,
  description,
  image,
  firstFlight,
  nameCompany,
  abbrevCompany,
  type,
  country_code,
  family,
  fullName,
  variant,
  alias,
  min_stage,
  max_stage,
  length,
  diameter,
  launch_mass,
  to_thrust,
  apogee,
  leo_capacity,
  vehicle_range,
  total_launch_count,
  successful_launches,
  failed_launches
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
      <div className="container fill">
        <RocketInfo
          nameRocket={name}
          fullNameRocket={fullName}
          family={family}
          type={type}
          countryCode={country_code}
          variant={variant}
          alias={alias}
          min_stage={min_stage}
          max_stage={max_stage}
          length={length}
          diameter={diameter}
          launch_mass={launch_mass}
          to_thrust={to_thrust}
          apogee={apogee}
          leo_capacity={leo_capacity}
          vehicle_range={vehicle_range}
          total_launch_count={total_launch_count}
          successful_launches={successful_launches}
          failed_launches={failed_launches}
        />
      </div>
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
    name,
    full_name: fullName,
    maiden_flight: firstFlight,
    description,
    family,
    variant,
    alias,
    min_stage,
    max_stage,
    length,
    diameter,
    launch_mass,
    to_thrust,
    apogee,
    leo_capacity,
    vehicle_range,
    total_launch_count,
    successful_launches,
    failed_launches
  } = data;

  const {
    name: nameCompany,
    abbrev: abbrevCompany,
    type,
    country_code
  } = data.manufacturer;

  return {
    props: {
      name,
      fullName,
      description,
      image,
      firstFlight,
      nameCompany,
      abbrevCompany,
      type,
      country_code,
      family,
      variant,
      alias,
      min_stage,
      max_stage,
      length,
      diameter,
      launch_mass,
      to_thrust,
      apogee,
      leo_capacity,
      vehicle_range,
      total_launch_count,
      successful_launches,
      failed_launches
    }
  };
};
