import React from 'react';
import Items from '../components/Items';
import { items } from '../config/config';

const Game = () => {
    const arrayTest = [1, 2];
    const test = () => {
        for(let elem of arrayTest) {
            console.log(Math.floor(Math.random() * (items[0].dammage - 0 + 1) + 0));
        }
    }

    return (
        <div>
            <h1>C'est le menu du jeu avec toutes les fonctionnalités</h1>
            <section className="items">
                {
                    items.map((item) => (
                        item.weapons.map((weapon) => (
                            <Items
                            key={weapon.id}
                            name={weapon.name}
                            dammage={weapon.dammage}
                            dice={weapon.dice} 
                            />
                        ))
                    ))
                }
            </section>
        </div>
    );
};

export default Game;