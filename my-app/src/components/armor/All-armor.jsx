import React from 'react';
import Armor from './Armor';

const AllArmor = ({ data }) => {
    data.map(elem => console.log(elem.armor))
    return (
        <>
         {
            data.map((elems, index) => (
                <React.Fragment key={index}>
                    <p><strong>{elems.typeArmor}</strong></p>
                    {
                        elems.armor.map((elem, index) => (
                            <Armor 
                            name={elem.name}
                            stats={elem.ca}
                            />
                        ))
                    }
                </React.Fragment>
            ))
         }   
        </>
    );
};

export default AllArmor;