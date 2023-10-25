import { useSelector } from "react-redux";
function Display(){
    const {selectedVideo} = useSelector((appState)=>appState);
    // console.log(selectedVideo,"SVV")
    if(selectedVideo.length > 0){
        const URL = `https://www.youtube.com/embed/${selectedVideo[0].id.videoId}`;
    return(
        <div>
            <iframe width="560" height="315" src={URL} ></iframe>
        </div>
    )
    }else{
        return(
            <div>
                <h1>Loading..........!</h1>
            </div>
        )
    }
    
}
export default Display;