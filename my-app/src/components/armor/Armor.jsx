import React from 'react';

const Armor = ({ picture, name, stats }) => {
    return (
        <section className='item'>
            <img src={picture} alt={name} /> {name} + {stats} de CA
        </section>
    );
};

export default Armor;