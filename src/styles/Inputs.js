// ------------------------------ import libraries
import styled from 'styled-components'

// ------------------------------ import variables
import { shadows, spacing, border, colors, fonts } from './Variables'

// ------------------------------------ COMPONENTS ------------------------------------//
export const InputText = styled.input`
  background: ${colors.primaryBackgroundColor};
  color: ${colors.textColor};
  width: 343px;
  height: 50px;
  margin: ${spacing.space1} 0;
  padding-left: ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusButton};
  /* box-shadow: ${shadows.innerShadow}; */
  outline: none;
  text-align: center;
  border: 1px solid ${colors.placeholderColor};
  font-size: 16px;

  &:focus {
    box-shadow: ${shadows.innerSoftShadow};
    font-size: 16px;
  }
  &::placeholder {
    color: ${colors.placeholderColor};
    opacity: 0.8;
    font-size: ${fonts.h3};
    font-weight: ${fonts.normal};
  }
`