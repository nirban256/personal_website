import React, { useState } from 'react';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import Title from '../components/Title';
import projects from '../components/AllProjects';

const ProjectsPage = () => {
    const [categories, setCategories] = useState(null);
    const [menu, setMenu] = useState(projects);

    return (
        <div className='ProjectsPage'>
            <div className="title">
                <Title title={'Projects'} span={'projects'} />
            </div>
            <div className="projects-data">
                <Categories />
                <MenuItems menu={menu} />
            </div>
        </div>
    );
};

export default ProjectsPage;
