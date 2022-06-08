import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { SingleLaunchData, SingleRocketData } from '../Interfaces';
import { LaunchesState } from '../redux/launches/types/';
import { RecentEventsState } from '../redux/recentEvents/types';
export interface InitialStateProps {
  launches: LaunchesState;
  singleLaunch: SingleLaunchData;
  singleRocket: SingleRocketData;
  recentEvents: RecentEventsState;
}

export const useAppSelector: TypedUseSelectorHook<InitialStateProps> = useSelector;
