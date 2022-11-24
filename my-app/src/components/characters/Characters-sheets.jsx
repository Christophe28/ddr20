import React from 'react';

import { charactersSheet } from '../../config/config-characer-sheet';
import CardsBaseStat from './components-characters/Cards-baseStat';

const CharactersSheet = () => {
    
    return (
        <div className="container-character-sheet">
            {
                charactersSheet.map((elems, index) => (
                    <React.Fragment key={index}>
                        <section className="container-base-stat">
                            {
                            elems.baseStat.map((elem, index) => (
                                <CardsBaseStat 
                                key={index}
                                className="base-stat"
                                stats={elem}
                                testStat={10}
                                />
                                ))
                            }
                        </section>
                        <section>
                            {
                            elems.fightBase.map((elem, index) => (
                                <CardsBaseStat
                                key={index}
                                className="container-fight-base"
                                stats={elem} 
                                testStat={11}
                                />
                            ))
                            }
                        </section>
                    </React.Fragment>  
                ))
            }
        </div>
    );
    
};

export default CharactersSheet;