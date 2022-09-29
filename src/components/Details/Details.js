import React from 'react';
import './Details.css'

const Details = () => {
    return (
        <div>
            <h4>Exercise Details</h4>
            <div className='details'>
                <p><strong>Exercise time </strong></p>
                <p><small>200sec</small></p>
            </div>
            <div className='details'>
                <p><strong>Break Time</strong></p>
                <p><small>12sec</small></p>
            </div>
            <button className='btn-complete'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Details;