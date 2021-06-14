import React from 'react';

import { Container, CardContainer, Image } from './styles'

export const Card = ({ airline, setSelected, currentList }) => {
    return (
        <Container onClick={() => { setSelected(airline) }}>
        <CardContainer className={currentList ? (currentList.id == airline.id ? "active" : "") : ("")}>
          <Image src={airline.image} alt='' />
          <div>
            <h1>{airline.name}</h1>
          </div>
          <p>{airline.country}</p>
        </CardContainer>
      </Container>
    )
}