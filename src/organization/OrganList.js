import React, { Component } from 'react';
import OrganData from '../data/Organ.json'

class OrganList extends Component {
  render () {
    return (
      <div >
     <h1>Hello There</h1>
     {OrganData.map((OrganDetail, index) => {
         return <div>
         <h1>{OrganDetail.name}</h1>
         <p>{OrganDetail.staff}</p>
         </div> 
     })}
      </div>
    )
  }
}

export default OrganList;
