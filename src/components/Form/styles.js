import styled from 'styled-components';

import { colors, border } from '../../styles/Variables'

export const SectionForm = styled.section`
    width: 100%;
    height: 600px;
    margin: 3em 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & h2 {
        margin: 1em;
        text-align: center;
        color: ${colors.mainBackgroundColor};
    }
`

export const FormUser = styled.form`
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.headerColor};
    border-radius: ${border.borderRadiusForm};
`