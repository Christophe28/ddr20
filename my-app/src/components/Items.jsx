import React from 'react';

const Items = ({ picture, name, dammage, dice }) => {
    return (
        <section className="item">
           <img src={picture} alt="Amazing" /> {name} // {dice} dé {dammage} dommages // 
        </section>
    );
};

export default Items;