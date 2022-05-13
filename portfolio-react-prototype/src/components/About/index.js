import React from "react";
import profilePicture from "../../assets/images/mypicture.jpg"

function About() {

    return (
        <div>
            <h1>About Me</h1>
            <img src={profilePicture} alt="Drew Harris looking at the camera" />
            <p>
                Welcome to my portfolio! I love to have you here! You will find a few of my projects on this portfolio, my resume, a way to contact me, my GitHub and LinkedIn profiles are around here somewhere, too!
                Please, feel free to look around, and don't hesitate to reach out to me at any time! I will answer at the soonest possible time!
            </p>
        </div>
    )
}

export default About;