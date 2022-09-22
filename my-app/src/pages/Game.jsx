import React from 'react';

import { items } from '../config/config-weapons';
import { charactersSheet } from '../config/config-characer-sheet';

import Items from '../components/Items';
import CharactersSheet from '../components/Characters-sheets';
import ViewWrapper from '../components/view-wrapper/View-wrapper';

const Game = () => {
    const arrayTest = [1, 2];
    const test = () => {
        for(let elem of arrayTest) {
            console.log(Math.floor(Math.random() * (items[0].dammage - 0 + 1) + 0));
        }
    }

    console.log(charactersSheet[0].baseStat);
    return (
        <div>
            <ViewWrapper>
                <div className="container-game">
                    <section className="plateau">
                        <h1>C'est le plateau</h1>
                    </section>
                    <section className="items">
                        {
                            items.map((item, index) => (
                                <div key={item.weapons[index].id} className="panel-right">
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
                                </div>
                            ))
                        }
                    </section>
                </div>
                {/* <CharactersSheet /> */}
            </ViewWrapper>
        </div>
    );
};

export default Game;