import styled from 'styled-components';

import { colors } from '../../styles/Variables'

export const Section = styled.section`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MenuContainer = styled.div`
    width: 800px;
    position: relative;
    overflow-x: scroll;

    &::-webkit-scrollbar { /*De esta manera de oculta la barra del carousel*/
        display: none;
    }

    & ul {
        display: flex;
        justify-content: space-between;

        & li {
            margin: 30px 0px;
        }
    }
`