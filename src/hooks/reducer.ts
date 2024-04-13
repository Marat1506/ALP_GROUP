import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Kapibara {
    activeButton: string,
    scrollGalery: boolean,


}

const initialState: Kapibara = {
    activeButton: "Лаборатория",
    scrollGalery: false,


}
export const filmSlice = createSlice({
    name: 'kapibara',
    initialState,
    reducers: {

        changeActiveButton: (state, action) => {
            state.activeButton = action.payload.active
        },
        changeScrollGalery: (state) => {

            state.scrollGalery = !state.scrollGalery;


        }


    }
})

export const { changeActiveButton, changeScrollGalery } = filmSlice.actions
export default filmSlice.reducer