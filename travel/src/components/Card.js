import React from "react"

export default function Card(props) {
    // console.log(props.image)
    return (
       <>
         <div className="card">
           <div id="image--box">
             <img src={require('../img/' + props.image)} />
           </div>

           <div id="deta--box">
                <span><i className="fas fa-map-marker-alt"></i> <span className="deta--box--location">{props.location}</span> <a className="deta--box--link" target='_blank' href={props.link}>View on Google Maps</a></span>

                <h2 className="deta--box--title">{props.title}</h2>
                <h4 className="deta--box--date">{props.date}</h4>
                <span className="deta--box--desc"> {props.desc}  </span>

           </div>
        </div>
       </>
    )
}