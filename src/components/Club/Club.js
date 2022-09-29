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
                        exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
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