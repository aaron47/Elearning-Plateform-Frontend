import { createSlice } from '@reduxjs/toolkit';

type UserState = {
	email: string;
};

const initialState: UserState = {
	email: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			state.email = action.payload;
		},
	},
});

export const {setCurrentUser} = userSlice.actions;
export default userSlice.reducer;  