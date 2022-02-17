import React from 'react';

export default function Img(props) {
    return (
        <>
           
                <a href={props.link} target='_blank'>  <i className={`fab fa-${props.name} icons`}> </i> </a>
            
        </>
    );
}
