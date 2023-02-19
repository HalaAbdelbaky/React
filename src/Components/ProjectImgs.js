import React from "react";

function ProjectImgs({title ,description,imgUrl}) {
    return (
        <>
        <div className="img">
        <img src={imgUrl} alt="" />
            <div className="content">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
        </>
    )
}
export default ProjectImgs