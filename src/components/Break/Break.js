import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <h4>Add a Break</h4>
            <div className='break-time'>
                <p><strong>10</strong>s</p>
                <p><strong>20</strong>s</p>
                <p><strong>30</strong>s</p>
                <p><strong>40</strong>s</p>
                <p><strong>50</strong>s</p>
            </div>
        </div>
    );
};

export default Break;