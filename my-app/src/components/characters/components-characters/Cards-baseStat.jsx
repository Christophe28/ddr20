import React from 'react';

const CardsBaseStat = ({ className, stats, testStat }) => {
    return (
        <div className={className}>
            <p>{stats}</p>
            <input type="text" defaultValue={testStat} />
        </div>
    );
};

export default CardsBaseStat;