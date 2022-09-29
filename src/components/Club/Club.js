import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Club.css'

const Club = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, [])
    return (
        <div className='club-container'>
            <div className="exercise-container">
                {
                    exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
                }
            </div>
            <div className="activity-info">
                <h4>Activity</h4>
            </div>
        </div>
    );
};

export default Club;