import styled from 'styled-components'
import { media } from '../../styles/MediaQueries'
import { colors, fonts, spacing, border, shadows } from '../../styles/Variables'

export const Container = styled.div`
    width: 240px;
    height: 180px;
    position: relative;
    margin: ${spacing.spaceCard};
    ${media.tablet} {
        margin: 0px;
    }
`

export const CardContainer = styled.div`
    width: 240px;
    height: 180px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.primaryBackgroundColor};
    border-radius: ${border.borderCard};
    position: relative;
    font-family: ${fonts.family}, ${fonts.familySecondary};
    box-shadow: ${shadows.cardShadow};
    color: ${colors.textColor};

    & div {
        display: flex;
        justify-content: space-between;
        margin: 0px ${spacing.spaceCardTitle};
    }
    & div span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${fonts.small};
    }
    & div h1{
        font-size: ${fonts.h2};
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        ${media.tablet} {
            margin: 0px;
        }
    }
    & p {
        font-size: ${fonts.small};
        font-weight: ${fonts.normal};
        text-align: justify;
        margin: 0px ${spacing.space2};
    }
`

export const Image = styled.img`
    width: 100%;
    height: 66%;
    object-fit: contain;
    border-radius: ${border.borderCard} ${border.borderCard} 0px 0px;
`
