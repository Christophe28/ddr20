import React from 'react';

const Items = ({ picture, name, dice, dammage }) => {
    return (
        <section className="item" >
           <img src={picture} alt="Amazing" /> {name} {dice} dé {dammage} dommages
        </section>
    );
};

export default Items;