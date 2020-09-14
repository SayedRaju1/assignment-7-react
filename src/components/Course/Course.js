import React from 'react';
import './Course.css'

const Course = (props) => {
    const { title, image, price, instructor } = props.course;
    return (
        <div className="d-flex course">
            <div>
                <img className="course-img" src={image} alt="" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <h2>Course Titele: {title}</h2>
                <p>Instructor: {instructor}</p>
                <h5>Fee: ${price}</h5>
                <button className="btn btn-success"
                    onClick={() => props.handleEnrollNow(props.course)}
                >Enroll Now</button>

            </div>
        </div>
    );
};

export default Course;