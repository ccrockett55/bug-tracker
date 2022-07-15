import React from 'react';
import './bugCard.css';

function BugCard(props) {
    const {name,priority,version} = props.bug;

    function Clicked(){
        props.clicked(props.name);
    }
  return (
    <div className='bug-card' onClick={Clicked}>
        <h2 className='name'>{name}</h2>
        <h4 className='name'>{priority}</h4>
        <h5 className='name'>{version}</h5>
    </div>
  )
}

export default BugCard