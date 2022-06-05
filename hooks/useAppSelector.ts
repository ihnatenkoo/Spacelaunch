import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { InitialStateProps } from '../redux/types/';

export const useAppSelector: TypedUseSelectorHook<InitialStateProps> = useSelector;
