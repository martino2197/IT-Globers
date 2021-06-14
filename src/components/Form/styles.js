import styled from 'styled-components';

import { colors, border } from '../../styles/Variables'

export const SectionForm = styled.section`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.headerColor};
    & h2 {
        margin: 1em;
        color: ${colors.mainBackgroundColor};
    }
`

export const FormUser = styled.form`
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.headerColor};
    border: ${border.border};
`