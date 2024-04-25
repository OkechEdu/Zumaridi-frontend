import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ImageService } from "services";
import { formatErrorResponse } from "utils";

export const upload = createAsyncThunk("image/upload", async (image: any, thunkAPI) => {
  try {
    const { MESSAGE, DATA } = await ImageService.uploadImage(image);
    toast.success(MESSAGE);
    return { imageId: DATA.imageId, preview: URL.createObjectURL(image) };
  } catch (error) {
    const message = formatErrorResponse(error);
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const update = createAsyncThunk(
  "image/update",
  async ({ id, image }: { id: string; image: any }, thunkAPI) => {
    try {
      const { MESSAGE, DATA } = await ImageService.updateImage(id, image);
      toast.success(MESSAGE);
      return { imageId: DATA.imageId };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteImage = createAsyncThunk("image/delete", async (id: string, thunkAPI) => {
  try {
    const { MESSAGE, DATA } = await ImageService.deleteImage(id);
    toast.success(MESSAGE);
    return { ...DATA };
  } catch (error) {
    const message = formatErrorResponse(error);
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const getImage = createAsyncThunk("image/get", async (id: string, thunkAPI) => {
  try {
    const { MESSAGE, DATA } = await ImageService.getImage(id);
    toast.success(MESSAGE);
    return { image: DATA };
  } catch (error) {
    const message = formatErrorResponse(error);
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  isLoading: false,
  preview: "",
  imageId: "",
  image: null
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // upload image actions
    builder.addCase(upload.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(upload.fulfilled, (state, action) => {
      state.isLoading = false;
      state.preview = action.payload.preview;
      state.imageId = action.payload.imageId;
    });
    builder.addCase(upload.rejected, (state) => {
      state.isLoading = false;
    });

    // update image actions
    builder.addCase(update.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(update.fulfilled, (state, action) => {
      state.isLoading = false;
      state.imageId = action.payload.imageId;
    });
    builder.addCase(update.rejected, (state) => {
      state.isLoading = false;
    });

    // delete image actions
    builder.addCase(deleteImage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteImage.fulfilled, (state) => {
      state.isLoading = false;
      state.imageId = "";
      state.preview = "";
      state.image = null;
    });
    builder.addCase(deleteImage.rejected, (state) => {
      state.isLoading = false;
    });

    // get image actions
    builder.addCase(getImage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.image = action.payload.image;
    });
    builder.addCase(getImage.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

const { reducer } = imageSlice;
export default reducer;
