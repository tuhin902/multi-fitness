import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import './Activity.css'
import logo from '../../image/logo.jpg'

const Activity = () => {
    return (
        <div className='activity'>
            <div className='user-info'>
                <img src={logo} alt="" />
                <div>
                    <h4 className='user-name'>Sarwar Tuhin</h4>
                    <p ><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon><small className='user-loc'>Chittagong,Bangladesh</small></p>
                </div>
            </div>
            <div className='user-health-info'>
                <div>
                    <p><h4>80</h4>kg</p>
                    <p>Weight</p>
                </div>
                <div>
                    <p><h4>6.g</h4></p>
                    <p>Height</p>
                </div>
                <div>
                    <p><h4>25</h4>years</p>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Activity;