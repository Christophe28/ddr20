import React from 'react';

const NavigationRightPanel = ({ children }) => {
    return (
        <>
            <section className="navigation-right-panel">
                <ul>
                    <li>Armes</li>
                    <li>Fiche perso</li>
                    <li>Armure</li>
                </ul>
            </section>
            {children}
        </>
    );
};

export default NavigationRightPanel;