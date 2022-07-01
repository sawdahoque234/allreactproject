import React from 'react';
import LargeProjectsData from '../large/LargeProjectsData';
import Banner from './Banner';
import ProjectsData from './basic/ProjectsData';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProjectsData></ProjectsData>
            <LargeProjectsData/>
        </div>
    );
};

export default Home;