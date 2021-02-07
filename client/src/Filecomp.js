import React from "react";

function Filecomp(props){
    const link = "https://gateway.ipfs.io/ipfs/"+props.hash
    return <div className="file-comp">
        <p className="name">{props.id}. {props.filename}</p>
        <button className="down-btn" target="_blank"><a href={link}>{props.hash}</a></button>
    </div>
}

export default Filecomp;
