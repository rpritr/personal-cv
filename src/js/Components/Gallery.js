import React from "react";
import "../../scss/_gallery.scss";
const Gallery = (props) => {
    return (
        <div className="gallery">
            {props.items.map(item => (
                <img key={item.url} src={item.url} alt={item.alt}/>
            ))}
        </div>
    )
}

export default Gallery;