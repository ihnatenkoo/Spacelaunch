import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { InitialStateProps } from '../redux/launches/types/';

export const useAppSelector: TypedUseSelectorHook<InitialStateProps> = useSelector;
