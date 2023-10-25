import Home from "./containers/Home";
import axios from "axios";
import { useCallback,useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideos } from "./youTubeSlice/Slice";
import { selectVideo } from "./youTubeSlice/Slice";
function App(){
  const dispatch = useDispatch();
  const fetchData = useCallback(async(term)=>{
      const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCDWrmPioXtvwNksSZR8IOS1RCtpQ8nCm4&q=${term}&type=video&maxResults=30`);
      // console.log(data.items[0],"uu");
      dispatch(getVideos(data.items));
      dispatch(selectVideo(data.items[0]))
  },[dispatch]);
  useEffect(()=>{
    fetchData("your are there for me");
  },[fetchData])
  return(
    <div>
      <Home onSearch={(searchTerm)=>{
        fetchData(searchTerm)
      }}></Home>
    </div>
  )
}
export default App;