import React from 'react';
import { toast } from 'react-toastify';
import './Details.css'

const Details = (props) => {
    // console.log(props.listTime.time);
    const notify = () => toast('Congraculation you have completed');

    // let newTime = 0;
    // // for (const time of props) {
    // //     newTime = newTime + time;

    // // }
    return (
        <div>
            <h4>Exercise Details</h4>
            <div className='details'>
                <p><strong>Exercise time </strong></p>
                <p><small>{props.listTime.time}seconds</small></p>
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