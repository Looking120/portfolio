// SkillsSection.jsx
import React from 'react';
import "./SkillsSection.css";
import Frontend from './Frontend';
import Backend from './Backend';

const SkillsSection = () => {
    return (
        <section className="section__skills section" id="skills">
           <div>
             <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Level</span>

            <div className="skills-container container grid ">
                <Frontend />
                <Backend />
        
            </div>
           </div>
        </section>
    );
}

export default SkillsSection;
