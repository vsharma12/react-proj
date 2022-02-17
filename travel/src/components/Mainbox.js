import React from "react"
import data from './data';
import Card from '../components/Card';


export default function App() {
    const cards = data.map(items => {
        return (
                <Card 
                key = {items.id}
                title = {items.title} 
                desc = {items.description}
                date = {items.Date}
                location = {items.location}
                image = {items.img}
                link = {items.link}
                 />
        )
    })        
    
    return (
       <div className="data--box">
        {cards}
       </div>
    )
}