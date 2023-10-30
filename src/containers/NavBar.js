import Display from "./Display";
import VideoList from "./VideoList";
import "./cssfile.css"
import { useState } from "react";
function NavBar(props){
    const [state,setState] = useState({
        term:""
    })
    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="navBar">
            <img src="https://wallpapers.com/images/hd/youtube-logo-2272-x-1260-background-ybrih3rlwxycir54.jpg" width={100} height={40}></img>
            <div className="search">
            <input id="textId" onChange={(event)=>{
                setState({
                    term:event.target.value
                })
            }} className="serachBar" placeholder="Search" type="text"></input>
            <button onClick={(event)=>{
                event.preventDefault();
                props.onSearch(state.term)
                document.getElementById("textId").value = "";
            }} className="search-btn"><i className="fa fa-search" style={{fontSize:25}}></i></button>
            <button className="mike-btn"><i className="fa fa-microphone" style={{fontSize:24}}></i></button>
            </div>
            <div className="logo-btn">
            <button className="btn1"><i className="fa fa-video-camera"></i></button>
            <button className="btn1"><i className="fa fa-bell"></i></button>
            <button className="btn1"><i className="material-icons">&#xe439;</i></button>
            </div>
            </div>
            <Display></Display>
            <VideoList></VideoList>
        </div>
    )
}
export default NavBar;