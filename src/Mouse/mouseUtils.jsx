import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "mouse",
    initialState: { cursorVariant: "default" },
    reducers: {
        setCursorVariant: (state, action) => {
            state.cursorVariant = action.payload;
        }
    }
});

export const { setCursorVariant } = slice.actions;

export default slice.reducer;