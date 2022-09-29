import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import './Club.css'
import logo from '../../image/favIcon.jpeg'

const Club = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, [])

    const addTime = (selectedTime) => {
        // console.log(selectedTime);
        let setTime = {};
        const storedTime = localStorage.getItem('setTime');
        if (storedTime) {
            setTime = JSON.parse(storedTime);
        }

        const Time = setTime[selectedTime.time];
        // console.log(Time);

        // if (Time) {
        //     const newTime = Time + storedTime;
        //     setTime[selectedTime.time] = newTime;
        // }
        localStorage.setItem('setTime', JSON.stringify(selectedTime));

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
                <Activity></Activity>
            </div>
        </div>
    );
};

export default Club;