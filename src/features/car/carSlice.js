import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Mountain", "Roadster", "Buildings", "Cat", "Joint", "Dog"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {},
})

export const selectCars = (state) => state.car.cars
export default carSlice.reducer