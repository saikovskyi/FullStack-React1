import React from 'react';
import "./header-main.css"

const Header = ({ CharacterName, CharacterAbility }) => {
    return (
        <>
            <div className={'head'}>
                <p>{CharacterName}</p>
                <img className={'CustomImage'} src={CharacterAbility} alt="" />
            </div>
        </>
    );
};
export default Header;