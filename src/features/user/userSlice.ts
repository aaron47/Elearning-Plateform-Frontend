import { createSlice } from '@reduxjs/toolkit';

type UserState = {
	id: number;
	email: string;
	type: string;
};

const initialState: UserState = {
	id: 0,
	email: '',
	type: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentUser: (state, { payload }) => {
			state.id = payload.id;
			state.email = payload.email;
			state.type = payload.type;
		},
	},
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
