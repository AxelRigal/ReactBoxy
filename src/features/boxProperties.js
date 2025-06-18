import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    slice: "boxProperties",
    minMax: [0, 250],
  },
  {
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    slice: "boxProperties",
    minMax: [0, 500],
  },
  {
    inputNumber: 3,
    name: "Width",
    value: 250,
    type: "range",
    minMax: [0, 500],
    slice: "boxProperties",
  },
  {
    inputNumber: 4,
    name: "Color",
    value: "#fff",
    type: "color",
    slice: "boxProperties",
  },
];

export const boxSlice = createSlice({
  name: "boxProperties",
  initialState,
  reducers: {
    updateBoxValue: (state, action) => {},
  },
});

export const { updateBoxValue } = boxSlice.actions;
export default boxSlice.reducer;
