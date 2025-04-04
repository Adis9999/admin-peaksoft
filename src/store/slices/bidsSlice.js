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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBids.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteBid.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },
});

export default bidsSlice.reducer;
