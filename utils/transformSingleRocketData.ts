import { SingleRocketData } from '../Interfaces';

export const transformSingleRocketData = (data: any): SingleRocketData => {
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
