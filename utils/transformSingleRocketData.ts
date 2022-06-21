import { SingleRocketData } from '../Interfaces';
interface InputRocket {
  image_url: string;
  name: string;
  full_name: string;
  maiden_flight: string;
  description: string;
  family: string;
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

  manufacturer: RocketManufacturer;
}
interface RocketManufacturer {
  name: string;
  abbrev: string;
  type: string;
  country_code: string;
}

export const transformSingleRocketData = (data: InputRocket): SingleRocketData => {
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

  const { name: nameCompany, abbrev: abbrevCompany, type, country_code } = data.manufacturer;

  const singleRocketData = {
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
  };

  return singleRocketData;
};
