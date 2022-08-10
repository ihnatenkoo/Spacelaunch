import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SingleEventData } from '../../Interfaces';

interface IState {
	eventInfo: SingleEventData;
}

const initialState: IState = {
	eventInfo: {
		id: '',
		name: '',
		feature_image: '',
		mainDescr: '',
		date: '',
		video_url: '',
		news_url: '',
		rocketName: '',
		mission_type: '',
		location: '',
		eventImg: '',
		orbit: '',
	},
};

const singleEventSlice = createSlice({
	name: 'singleEvent',
	initialState,
	reducers: {
		SET_SINGLE_EVENT: (state, action: PayloadAction<SingleEventData>) => {
			state.eventInfo = action.payload;
		},
	},
});

const { reducer, actions } = singleEventSlice;
export default reducer;
export const { SET_SINGLE_EVENT } = actions;
