import React from 'react';

const Project = ({ title, image, liveLink, repoLink }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={`${title} screenshot`} />
            <a href={liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
    );
};

export default Project;