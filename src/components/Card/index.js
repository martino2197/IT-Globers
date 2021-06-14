import React from 'react';

import { Container, CardContainer, Image } from './styles'

export const Card = ({ airline, setSelected }) => {
    return (
        <Container onClick={() => setSelected(airline.name)}>
        <CardContainer>
          <Image src={airline.image} alt='' />
          <div>
            <h1>{airline.name}</h1>
          </div>
          <p>{airline.country}</p>
        </CardContainer>
      </Container>
    )
}