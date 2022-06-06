export interface LaunchesData {
  name: string;
  image: string;
  id: string;
  date: Date;
}
export interface SingleLaunchData {
  name: string;
  image: string;
  type: string;
  orbit: string;
  location: string;
  launchComplex: string;
  rocketName: string;
  missionDescr: string;
  rocketFamily: string;
  rocketVariant: string;
  rocketDescr: string;
  eventCoordinates: { lat: number; lng: number };
  rocketId: string;
  date: string;
}

export interface SingleRocketData {
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

export interface HomePageProps {
  staticLaunchesData: Array<LaunchesData>;
}
export interface RocketPageProps {
  singleRocketData: SingleRocketData;
}
export interface LaunchPageProps {
  singleLaunchData: SingleLaunchData;
}
