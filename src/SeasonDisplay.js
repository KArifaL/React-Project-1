import './SeasonDisplay.css';
import React from 'react';

/**
 * Get correct season based on the months indicated
 */

// Season config
const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr... it\'s chilly!',
        iconName: 'snowflake'
    }
};


const getSeason = (lat, month) => {
    // Date().getMonth() returns months like Jan 0, feb 1, Mar 2 etc...
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'; 
    } 
    else {
        return lat > 0 ? "winter" : "summer";
    }    
};

const SeasonDisplay = (props) => {   
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];//

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;