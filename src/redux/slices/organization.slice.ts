import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { OrganizationService } from "services";
import { Organization } from "types";
import { formatErrorResponse } from "utils";

export const register = createAsyncThunk(
  "organization/register",
  async ({ name, address, ownerId, website, industry, phoneNumber }: Organization, thunkAPI) => {
    try {
      const { MESSAGE, DATA } = await OrganizationService.register(ownerId, {
        name,
        phoneNumber,
        industry,
        website,
        address
      });
      toast.success(MESSAGE);
      return { organization: DATA };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const update = createAsyncThunk(
  "organization/update",
  async (
    {
      id,
      logo,
      name,
      size,
      address,
      ownerId,
      website,
      industry,
      phoneNumber
    }: {
      id: string;
    } & Organization,
    thunkAPI
  ) => {
    try {
      const { MESSAGE, DATA } = await OrganizationService.update(id, ownerId, {
        logo,
        name,
        size,
        phoneNumber,
        industry,
        website,
        address
      });
      toast.success(MESSAGE);
      return { organization: DATA };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const inviteTeam = createAsyncThunk(
  "organization/invite-team",
  async (
    {
      id,
      ownerId,
      emails
    }: {
      id: string;
      ownerId: string;
      emails: string[];
    },
    thunkAPI
  ) => {
    try {
      const { MESSAGE, DATA } = await OrganizationService.inviteTeam(id, ownerId, emails);
      toast.success(MESSAGE);
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  isLoading: false,
  organization: {}
};
const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register actions
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.organization = action.payload.organization;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
    });

    // update actions
    builder.addCase(update.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(update.fulfilled, (state, action) => {
      state.isLoading = false;
      state.organization = action.payload.organization;
    });
    builder.addCase(update.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

const { reducer } = organizationSlice;
export default reducer;
