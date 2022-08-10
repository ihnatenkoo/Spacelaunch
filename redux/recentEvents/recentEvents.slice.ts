import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { EventsData } from '../../Interfaces';

import { transformRecentEventsData } from '../../utils';

import { ActionTypes, RecentEventsState } from './types';

const initialState: RecentEventsState = {
	recentEventsData: [],
	isLoading: false,
	isError: false,
};

export const FETCH_RECENT_EVENTS = createAsyncThunk(
	'recentEvents/FETCH_DATA',
	async () => {
		const { data } = await axios.get(
			`https://spacelaunchnow.me/api/3.3.0/event/upcoming/?limit=12&offset=0`
		);
		const eventsData = transformRecentEventsData(data.results);
		return eventsData;
	}
);

const recentEventsSlice = createSlice({
	name: 'recentEvents',
	initialState,
	reducers: {
		[ActionTypes.SET_RECENT_EVENTS_DATA]: (
			state,
			action: PayloadAction<Array<EventsData>>
		) => {
			state.recentEventsData = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(FETCH_RECENT_EVENTS.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(FETCH_RECENT_EVENTS.fulfilled, (state, action) => {
			state.recentEventsData = action.payload;
			state.isLoading = false;
		});
		builder.addCase(FETCH_RECENT_EVENTS.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});
	},
});

const { reducer, actions } = recentEventsSlice;

export default reducer;
export const { SET_RECENT_EVENTS_DATA } = actions;
