import React from 'react';
import Armor from './Armor';

const AllArmor = ({ data }) => {

    return (
        <>
         {
            data.map((elems, index) => (
                <React.Fragment key={index}>
                    <p><strong>{elems.typeArmor}</strong></p>
                    {
                        elems.armor.map((elem) => (
                            <Armor 
                            key={elem.id}
                            picture={elem.picture}
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