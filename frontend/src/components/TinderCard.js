import React from 'react'
import { useState,useEffect } from 'react'
const TinderCard = () => {
    const [people,setPeople] = useState([
        {
            name:'ELON MUSK',
            url:{}
        },
        {
            name:"elon musk",
            url:{}
        },
        {
            name:"elonmusk",
            url:{}
        }
    ])
  return (
    <div>
        {people.map((person, index) => (
          <TinderCard>
            
          </TinderCard>
        ))}
    </div>

     
  )
}

export default TinderCard


