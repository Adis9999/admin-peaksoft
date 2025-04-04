import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../axios";

export const fetchBanners = createAsyncThunk("banners/fetch", async () => {
  const res = await api.get("/banners");
  return res.data;
});

export const createBanner = createAsyncThunk("banners/create", async (data) => {
  const res = await api.post("/banners", data);
  return res.data;
});

export const updateBanner = createAsyncThunk(
  "banners/update",
  async ({ id, data }) => {
    const res = await api.put(`/banners/${id}`, data);
    return res.data;
  }
);

export const deleteBanner = createAsyncThunk("banners/delete", async (id) => {
  await api.delete(`/banners/${id}`);
  return id;
});

const bannersSlice = createSlice({
  name: "banners",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createBanner.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateBanner.fulfilled, (state, action) => {
        const idx = state.items.findIndex((i) => i.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      })
      .addCase(deleteBanner.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },
});

export default bannersSlice.reducer;
