import React from 'react';

const MenuItems = ({ menu }) => {
    return (
        <div className='projects'>
            {
                menu.map((item) => {
                    return <div className="project" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} target="_blank">{item.icon1}</a>
                                    <a href={item.link2} target="_blank">{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>
                            {item.description}
                        </p>
                    </div>
                })
            }
        </div>
    );
};

export default MenuItems;
