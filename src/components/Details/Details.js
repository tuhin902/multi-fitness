import React from 'react';
import { toast } from 'react-toastify';
import './Details.css'

const Details = (props) => {
    console.log(props);
    const notify = () => toast('Congraculation you have completed');
    return (
        <div>
            <h4>Exercise Details</h4>
            <div className='details'>
                <p><strong>Exercise time </strong></p>
                <p><small>{props.selectedTime}seconds</small></p>
            </div>
            <div className='details'>
                <p><strong>Break Time</strong></p>
                <p><small>12seconds</small></p>
            </div>
            <button onClick={notify} className='btn-complete'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Details;