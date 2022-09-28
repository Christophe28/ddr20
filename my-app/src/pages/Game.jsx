import React from 'react';

import { items } from '../config/config-weapons';
// import { charactersSheet } from '../config/config-characer-sheet';

// import CharactersSheet from '../components/Characters-sheets';
import ViewWrapper from '../components/view-wrapper/View-wrapper';
import NavigationRightPanel from '../components/view-wrapper/Navigation-right-panel';
import AllItems from '../components/All-items';

const Game = () => {
    // const arrayTest = [1, 2];
    // const test = () => {
    //     for(let elem of arrayTest) {
    //         console.log(Math.floor(Math.random() * (items[0].dammage - 0 + 1) + 0));
    //     }
    // }

    return (
        <div>
            <ViewWrapper>
                <div className="container-game">
                    <section className="plateau">
                        <h1>C'est le plateau</h1>
                    </section>
                    <section className="container-items">
                        <div className="panel-right">
                            <NavigationRightPanel>
                                <AllItems
                                items={items} 
                                />
                            </NavigationRightPanel>
                        </div>
                    </section>
                </div>
                {/* <CharactersSheet /> */}
            </ViewWrapper>
        </div>
    );
};

export default Game;