import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name:"youtube",
    initialState:{
        videos:[],
        selectedVideo:[],
        term:"",
    },
    reducers:{
        getVideos:(state,param)=>{
            const {payload} = param;
            state.videos = [...payload]
        },
        selectVideo :(state,param)=>{
            // console.log(param,"newparam")
            const {payload} = param;
            // console.log(payload,"Selected Video")
            state.selectedVideo = [payload]
        },
        setTerm:(state,param)=>{
            // console.log(state,param);
            const {payload} = param;
            // console.log(payload,"payload")
            state.term = payload.term;
        }
    }
})
export default slice.reducer;
export const {getVideos,selectVideo,setTerm} = slice.actions;