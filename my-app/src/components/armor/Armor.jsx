import React from 'react';

const Armor = ({ name, stats }) => {
    return (
        <section className='item'>
            {name} + {stats} de CA
        </section>
    );
};

export default Armor;