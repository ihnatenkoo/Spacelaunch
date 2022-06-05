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
  rocketLink: string;
  rocketWiki: string;
  eventCoordinates: { lat: number; lng: number };
  rocketId: string;
  date: string;
}

export interface HomeProps {
  staticLaunchesData: Array<LaunchesData>;
}
