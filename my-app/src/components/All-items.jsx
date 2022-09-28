import React from 'react';
import Items from './Items';

const AllItems = ({ items }) => {
    return (
        <>
            {
                items.map((item, index) => (
                    <React.Fragment key={item.weapons[index].id}>
                        <p><strong>{item.typeWeapon}</strong></p>
                        {
                            item.weapons.map((weapon) => (
                                
                                <Items
                                key={weapon.id}
                                picture={weapon.picture}
                                name={weapon.name}
                                dammage={weapon.dammage}
                                dice={weapon.dice} 
                                />
                            ))
                        }
                    </React.Fragment>
                ))
            }
        </>
    );
};

export default AllItems;