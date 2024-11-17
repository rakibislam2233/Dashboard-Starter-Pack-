import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  email: string;
  role: string;
}
interface AuthState {
  accessToken: string | null;
  user: IUser | null;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedInUser: (
      state,
      action: PayloadAction<{ accessToken: string; user: IUser }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    loggedOutUser: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { loggedInUser, loggedOutUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
