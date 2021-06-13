import React from 'react';

//components
import { Card } from '../Card'

//styles
import { Section, MenuContainer } from './styles'


export const Menu = ({ data }) => {
    return(
        <Section>
         <h1>Selecciona tu Aerolinea</h1>
            <MenuContainer>
                <ul>
                    {data ? data.map((airline) => <li key={airline.id}><Card airline={airline} /></li>) : (<p>Lo sentimos, no har aerolineas disponibles</p>)}
                </ul>
            </MenuContainer>
        </Section>

    )
}