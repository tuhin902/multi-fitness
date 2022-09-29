import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    console.log(props);
    const { name, age, picture, time } = props.exercise;
    return (
        <div className='exercise'>
            <img src={picture} alt="" />
            <div className='exercise-info'>
                <h4 className='exercise-name'>{name}</h4>
                <p>Age: <strong>{age}</strong></p>
                <p>Time required : <strong>{time}s</strong></p>
                <button className='btn-list'>
                    <p>Add to list</p>
                </button>

            </div>
        </div>
    );
};

export default Exercise;