import React from 'react';

import { Container, CardContainer, Image } from './styles'

export const Card = ({ airline }) => {
    return (
        <Container>
        <CardContainer>
          <Image src={airline.image} alt='' />
          <div>
            <h1>{airline.name}</h1>
          </div>
          <p>Esta es la card de prueba para esto jsjsjsjs</p>
        </CardContainer>
      </Container>
    )
}