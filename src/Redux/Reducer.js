import { createSlice } from "@reduxjs/toolkit";

export const CitySlice = createSlice({
    name: "city",
    initialState: { City: "Delhi, India" },

    reducers: {
        addCity: (state, action) => {
            state.City = action.payload
        }
    }
})

export const { addCity } = CitySlice.actions

export default CitySlice.reducer