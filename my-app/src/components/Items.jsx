import React from 'react';

const Items = ({ name, dammage, dice }) => {
    return (
        <section className="item">
            {name} // {dice} dé {dammage} dommages // 
        </section>
    );
};

export default Items;