import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import './Club.css'
import logo from '../../image/favIcon.jpeg'

const Club = () => {
    const [exercises, setExercises] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, [])

    const addTime = (selectedTime) => {
        // console.log(selectedTime);
        setTime(selectedTime);


    }
    return (
        <div className='club-container'>
            <div>
                <div className='club-details'>
                    <div className='favimg'>
                        <img src={logo} alt="" />
                        <h2>MULTI-FITNESS-CLUB</h2>
                    </div>
                    <p>Select today's exercise</p>
                </div>
                <div className="exercise-container">
                    {
                        exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}
                            addTime={addTime}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div className="activity-container">
                <Activity time={time}></Activity>
            </div>
        </div>
    );
};

export default Club;