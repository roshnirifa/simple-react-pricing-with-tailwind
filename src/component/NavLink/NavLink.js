import React from 'react';

const NavLink = (props) => {
    const { name, link } = props.route
    return (
        <li className="mr-16">
            <a href={link}>{name}</a>

        </li>
    );
};

export default NavLink;