import React from 'react';

import { items } from '../config/config-weapons';
import { charactersSheet } from '../config/config-characer-sheet';

import Items from '../components/Items';
import CharactersSheet from '../components/Characters-sheets';

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
            <h1>C'est le menu du jeu avec toutes les fonctionnalités</h1>
            <section className="items">
                {
                    items.map((item, index) => (
                        <div key={item.weapons[index].id}>
                            <p><strong>{item.typeWeapon}</strong></p>
                            {
                                item.weapons.map((weapon) => (
                                    <Items
                                        key={weapon.id}
                                        name={weapon.name}
                                        dammage={weapon.dammage}
                                        dice={weapon.dice}
                                    />
                                ))
                            }
                        </div>
                    ))
                }
                <CharactersSheet />
            </section>
        </div>
    );
};

export default Game;