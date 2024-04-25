import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { AuthService } from "services";
import { formatErrorResponse } from "utils";
import { ZUMARIDI_USER_DATA } from "services/CONSTANTS";

const user = JSON.parse(localStorage.getItem(ZUMARIDI_USER_DATA) as string);

export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      firstName,
      lastName,
      email,
      password,
      refId
    }: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      refId: string | undefined;
    },
    thunkAPI
  ) => {
    try {
      const { MESSAGE, DATA } = await AuthService.register({
        firstName,
        lastName,
        email,
        password,
        refId
      });
      toast.success(MESSAGE);
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerBusiness = createAsyncThunk(
  "auth/registerBusiness",
  async (
    {
      firstName,
      lastName,
      email,
      password
    }: { firstName: string; lastName: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const { MESSAGE, DATA } = await AuthService.registerBusiness({
        firstName,
        lastName,
        email,
        password
      });
      toast.success(MESSAGE);
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const { DATA } = await AuthService.signin({ email, password });
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginSuccess = createAsyncThunk("auth/loginSuccess", async (_, thunkAPI) => {
  try {
    const { DATA } = await AuthService.loginSuccess();
    return { user: DATA };
  } catch (error) {
    const message = formatErrorResponse(error);
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const confirmAccount = createAsyncThunk(
  "auth/confirmAccount",
  async (code: string, thunkAPI) => {
    try {
      const { MESSAGE, DATA } = await AuthService.confirmAccount(code);
      toast.success(MESSAGE);
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (details: { email: string }, thunkAPI) => {
    try {
      const { DATA, MESSAGE } = await AuthService.forgotPassword(details);
      toast.success(MESSAGE);
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (details: { token?: string; password: string }, thunkAPI) => {
    try {
      const { DATA, MESSAGE } = await AuthService.resetPassword(details);
      toast.success(MESSAGE);
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Change Password slice
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (details: { token?: string; oldPassword: string; newPassword: string }, thunkAPI) => {
    try {
      const { DATA, MESSAGE } = await AuthService.changePassword(details);
      toast.success(MESSAGE);
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await AuthService.logout();
  } catch (error) {
    const message = formatErrorResponse(error);
    toast.error(message);
  }
});

const initialState = user
  ? { isLoggedIn: true, user, isLoading: false, passwordReset: false }
  : { isLoggedIn: false, user: null, isLoading: false, passwordReset: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register actions
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    // register business actions
    builder.addCase(registerBusiness.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerBusiness.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(registerBusiness.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    // login actions
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    });

    // login success actions
    builder.addCase(loginSuccess.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginSuccess.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.isLoading = false;
    });
    builder.addCase(loginSuccess.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    });

    // forgot password actions
    builder.addCase(forgotPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.passwordReset = true;
      state.user = action.payload;
    });
    builder.addCase(forgotPassword.rejected, (state) => {
      state.isLoading = false;
    });

    // forgot password actions
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(resetPassword.rejected, (state) => {
      state.isLoading = false;
    });

    // logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

const { reducer } = authSlice;

export default reducer;
