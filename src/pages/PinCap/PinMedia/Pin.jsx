import React from "react"
import "./index.less"

const PinMedia = (props) => {
    return (
        // <div className={`pin ${props.size}`}>
        //     ee
        // </div>
        <div className={`box`}>
            <img src={props.srcUrl} alt="" />
        </div>
    )
}
export default PinMedia
