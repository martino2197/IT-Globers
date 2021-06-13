import styled from 'styled-components';

import { colors } from '../../styles/Variables'

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    background-color: ${colors.headerColor};
    color: ${colors.mainBackgroundColor};
`
export const Image = styled.img`
    width: 95.75px;
    height: auto;
    object-fit: cover;
`

export const Name = styled.div`
    height: 45.5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

//responsive
// display: flex;
// flex-direction: column;
// justify-content: center;