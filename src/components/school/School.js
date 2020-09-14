import React, { useState } from 'react';
import data from '../../data/data.json';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './School.css';

const School = () => {
    const [cart, setCart] = useState([]);


    const handleEnrollNow = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="school-container">
            <div className="course-container">
                <h1>List of Courses</h1><br />
                {
                    data.map(course => <Course
                        course={course}
                        handleEnrollNow={handleEnrollNow}
                        key={course.id}
                    ></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default School;