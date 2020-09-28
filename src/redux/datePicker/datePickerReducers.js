import { createSlice } from "@reduxjs/toolkit";

const state = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  selectedDay: null,
};

export const dateSlice = createSlice({
  name: "date",
  initialState: state,
  reducers: {
    changeMonth: (state, { payload }) => ({
      ...state,
      year: payload.currentYear,
      month: payload.currentMonth,
    }),
    addDay: (state, { payload }) => ({
      ...state,
      selectedDay: payload.easyDay,
    }),
  },
});
