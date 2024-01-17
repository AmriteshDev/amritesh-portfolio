import React from 'react';
import data from "../assets/data.json";
const Experience = () => {
    return (
        <div id="experience">
            <div className='experienceBox'>
                {
                    data.experience.map((i) => (
                        <CompanyTimeLine heading={i.title} date={i.date} key={i.title} index={i.index} />

                    ))
                }
            </div>
        </div >
    )
}

const CompanyTimeLine = ({ heading, date, index }) => (
    <div className={`companytimeline ${index % 2 === 0 ? "leftTimeline" : "righTimeline"}`}>
        <div>
            <h2>{heading}</h2>
            <p>
                {date}
            </p>
        </div>
    </div>
);

export default Experience;