import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name:"youtube",
    initialState:{
        videos:[],
        selectedVideo:[],
    },
    reducers:{
        getVideos:(state,param)=>{
            const {payload} = param;
            state.videos = [...payload]
        },
        selectVideo :(state,param)=>{
            const {payload} = param;
            state.selectedVideo = [payload]
        },
    }
})
export default slice.reducer;
export const {getVideos,selectVideo,setTerm} = slice.actions;