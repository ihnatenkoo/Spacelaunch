import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { SingleLaunchData, SingleRocketData } from '../Interfaces';
import { LaunchesState } from '../redux/launches/types/';
export interface InitialStateProps {
  launches: LaunchesState;
  singleLaunch: SingleLaunchData;
  singleRocket: SingleRocketData;
}

export const useAppSelector: TypedUseSelectorHook<InitialStateProps> = useSelector;
