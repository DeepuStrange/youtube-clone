import { useSelector,useDispatch } from "react-redux";
import VideoList from "./VideoList";
import { useState } from "react";
import Display from "./Display";
function Home(props){
    const {videos} = useSelector((appState)=>appState);
    const [state,setState] = useState({
        term:"",
    });
    return(
       <div>
         <div 
        style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyItems:"center",
            flexWrap:"wrap",
            justifyContent:"space-evenly",
            margin:0
        }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/youtube-logo.2e16d0ba.fill-1440x810_eLLipij.jpg" width={100} height={100} ></img>
           <div style={{
            display:"flex",
            flexDirection:"row",
            justifyItems:"center",
            justifyContent:"flex-start",
           }}>
           <input 
           onChange={(event)=>{
            setState({
                term:event.target.value,
            })
           }}
           id="textId"
           type="text" placeholder="Search" size="50" style={{
                borderRadius:"50px",
                outline:"none",
                height:25,
                paddingLeft:10,
                borderBottomRightRadius:1,
                borderTopRightRadius:1,
                outlineStyle:"none"
            }}></input>
            <button style={{
                borderTopRightRadius:15,
                borderBottomRightRadius:15,
                outline:"none"
            }}><i 
            onClick={(event)=>{
                event.preventDefault();
                // dispatch(setTerm(state));
                // console.log(state.term);
                props.onSearch(state.term);
                // console.log(typeof(state.term))
                document.getElementById("textId").value = ""
            }}
            className="fa fa-search" style={{fontSize:24}}></i></button>
            {' '}
            <button 
            style={{
                borderRadius:20,
                outline:0
            }}><i className="fa fa-microphone" style={{fontSize:24}}></i></button>
           </div>
           <div
           style={{
            display:"flex",
            justifyContent:"space-around",
            flexWrap:"wrap",
            flexDirection:"row",
           }}>
            <button style={{
                borderRadius:10
            }}><i className="fa fa-video-camera"></i></button>
            <button 
            style={{
                borderRadius:10
            }}><i className="fa fa-bell"></i></button>
            <button
            style={{
                borderRadius:10
            }}><i className="material-icons">&#xe439;</i></button>
           </div>
        </div>
        <Display></Display>
        <VideoList></VideoList>
       </div>
    )
}
export default Home;