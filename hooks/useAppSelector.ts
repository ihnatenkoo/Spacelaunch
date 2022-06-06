import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { SingleLaunchData } from '../Interfaces';
import { LaunchesState } from '../redux/launches/types/';
export interface InitialStateProps {
  launches: LaunchesState;
  singleLaunch: SingleLaunchData;
}

export const useAppSelector: TypedUseSelectorHook<InitialStateProps> = useSelector;
