export interface LaunchesData {
  name: string;
  image: string;
  id: string;
  date: Date;
}
export interface HomeProps {
  staticLaunchesData: Array<LaunchesData>;
}
