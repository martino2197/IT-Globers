import styled from 'styled-components';

import { colors } from '../../styles/Variables'
import { media } from '../../styles/MediaQueries';

export const Section = styled.section`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${media.tablet} {
        margin: 100px auto;
        height: 600px;
        & h1 {
            margin-bottom: 50px;
        }
    }
`

export const MenuContainer = styled.div`
    width: 800px;
    position: relative;
    overflow-x: scroll;
    ${media.tablet} {
        width: 100%;
    }

    &::-webkit-scrollbar { /*De esta manera de oculta la barra del carousel*/
        display: none;
    }

    & ul {
        display: flex;
        justify-content: space-between;

        & li {
            margin: 30px 0px;
        }

        ${media.tablet} {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`