import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../axios";

export const fetchBids = createAsyncThunk("bids/fetch", async () => {
  const res = await api.get("/bids");
  return res.data;
});

export const deleteBid = createAsyncThunk("bids/delete", async (id) => {
  await api.delete(`/bids/${id}`);
  return id;
});

const bidsSlice = createSlice({
  name: "bids",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBids.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBids.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBids.rejected, (state) => {
        state.loading = false;
        state.error = "Ошибка загрузки заявок";
      })
      .addCase(deleteBid.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },
});

export default bidsSlice.reducer;
