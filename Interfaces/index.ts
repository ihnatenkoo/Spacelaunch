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
  date: string;
}
export interface HomeProps {
  launchesData: Array<LaunchesData>;
}
