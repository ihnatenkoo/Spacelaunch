import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { LaunchesData } from '../../Interfaces';

import { transformLaunchesData } from '../../utils';

import { ActionTypes, LaunchesState } from './types';

export const FETCH_LAUNCHES_DATA = createAsyncThunk(
	'launches/FETCH_DATA',
	async (offset: number) => {
		const { data } = await axios.get(
			`https://spacelaunchnow.me/api/3.3.0/launch/upcoming?mode=detailed&limit=6&offset=${offset}`
		);
		return data;
	}
);

const initialState: LaunchesState = {
	launchesData: [],
	loadingTrigger: false,
	isLoading: false,
	isError: false,
	isEnd: false,
};

const launchesSlice = createSlice({
	name: 'launches',
	initialState,
	reducers: {
		[ActionTypes.SET_LAUNCHES_STATIC]: (
			state,
			action: PayloadAction<Array<LaunchesData>>
		) => {
			state.launchesData = action.payload;
		},
		[ActionTypes.SET_LOADING_TRIGGER]: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.loadingTrigger = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(FETCH_LAUNCHES_DATA.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
				state.loadingTrigger = false;
			})
			.addCase(FETCH_LAUNCHES_DATA.fulfilled, (state, action) => {
				const launchesData = transformLaunchesData(action.payload.results);
				if (launchesData.length < 6) {
					state.isEnd = true;
				}
				state.launchesData = [...state.launchesData, ...launchesData];
				state.isLoading = false;
			})
			.addCase(FETCH_LAUNCHES_DATA.rejected, (state) => {
				state.isError = true;
				state.isLoading = false;
			});
	},
});

const { actions, reducer } = launchesSlice;

export default reducer;
export const { SET_LAUNCHES_STATIC, SET_LOADING_TRIGGER } = actions;
