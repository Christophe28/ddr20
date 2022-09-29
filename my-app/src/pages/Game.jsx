import React from 'react';
import { useState } from 'react';

import { items } from '../config/config-weapons';

import ViewWrapper from '../components/view-wrapper/View-wrapper';
import NavigationRightPanel from '../components/view-wrapper/Navigation-right-panel';
import AllItems from '../components/items/All-items';
import CharactersSheet from '../components/characters/Characters-sheets';

const Game = () => {
    const [currentNavElement, setCurrentNavElement] = useState(<AllItems items={items} />);
    const navElement = [
        <AllItems 
        items={items} 
        />,
        <CharactersSheet />
    ]
    return (
        <div>
            <ViewWrapper>
                <div className="container-game">
                    <section className="plateau">
                        <h1>C'est le plateau</h1>
                    </section>
                    <section className="container-items">
                        <NavigationRightPanel
                        setState={setCurrentNavElement}
                        array={navElement}
                        >
                            <section className="panel-right">
                                {currentNavElement}
                           </section>
                        </NavigationRightPanel>
                    </section>
                </div>
            </ViewWrapper>
        </div>
    );
};

export default Game;