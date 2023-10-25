import { useSelector,useDispatch } from "react-redux";
import {selectVideo} from "../youTubeSlice/Slice";
import Display from "./Display";
function VideoList(){
    const dispatch = useDispatch();
    const {videos,selectedVideo} = useSelector((appState)=>appState)
    // console.log("VIdeolist",videos,selectedVideo)
    return(
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "auto",
        }}>
            {videos.length > 0 ? (
                videos.map((Vid)=>(
                    <div 
                    key={Vid.etag}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 10,
                        border: "1px solid grey",
                        width: "30%",
                        marginTop: 10,
                        gap: 10,
                    }}>
                        <img onClick={(SV)=>{
                            // console.log(SV,"SV")
                            dispatch(selectVideo(Vid))
                        }} src={Vid.snippet.thumbnails.high.url} style={{objectFit:"cover",width:"auto"}}></img>
                        <span >{Vid.snippet.title}</span>
                    </div>
                    ))
            ) : (
                <span>Loading.....!</span>
            )}
            <Display></Display>
        </div>
    )
}
export default VideoList;