import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import './Activity.css'
import logo from '../../image/logo.jpg'
import Break from '../Break/Break';

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
                    <p><strong>80</strong><small>kg</small></p>
                    <p>Weight</p>
                </div>
                <div>
                    <p><strong>6.5</strong></p>
                    <p>Height</p>
                </div>
                <div>
                    <p><strong>22</strong><small>years</small></p>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <Break></Break>
            </div>
        </div>
    );
};

export default Activity;