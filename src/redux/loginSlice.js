import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: []
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action?.payload || [];
        }
    }
});

export const { setUserInfo } = loginSlice.actions;

export default loginSlice.reducer;