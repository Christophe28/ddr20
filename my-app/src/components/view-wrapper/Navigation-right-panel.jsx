import React from 'react';

const NavigationRightPanel = ({ children, setState, array }) => {
    return (
        <>
            <section className="navigation-right-panel">
                <ul>
                    <li onClick={() => setState(array[0])}>Armes</li>
                    <li onClick={() => setState(array[1])}>Fiche perso</li>
                    <li onClick={() => setState(array[2])}>Armure</li>
                </ul>
            </section>
            {children}
        </>
    );
};

export default NavigationRightPanel;