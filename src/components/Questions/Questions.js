import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div className='question'>
                <h3>How does React work?</h3>
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.

                    It's important to note that ReactJS is not a JavaScript framework. That's because it's only responsible for rendering the components of an application's view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.

                </p>
            </div>
            <div className='question'>
                <h3>What are the differences between props and state ?</h3>
                <p><strong>Props:</strong> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
                </p>
                <p><strong>State:</strong> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
            </div>
            <div className='question'>
                <h3>useEffect use cases except fetch API?</h3>
                <p>useEffect use cases
                    Running on state change: validating input field
                    Running on state change: live filtering
                    Running on state change: trigger animation on new array value
                    Running on props change: update paragraph list on fetched API data update
                    Running on props change: updating fetched API data to get BTC updated price</p>
            </div>
        </div>
    );
};

export default Questions;