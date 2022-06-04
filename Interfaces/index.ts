export interface LaunchesRequestData {
  name: string;
  id: string;
  net: string;
  rocket: { configuration: { image_url: string } };
}
export interface LaunchesData {
  name: string;
  image: string;
  id: string;
  date: Date;
}
export interface HomeProps {
  staticLaunchesData: Array<LaunchesData>;
}
