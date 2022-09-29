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

        </div>
    );
};

export default Questions;