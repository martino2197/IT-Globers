// ------------------------------ import libraries
import styled, { css } from 'styled-components'

// ------------------------------ import variables
import { colors, spacing, shadows, border, fonts } from './Variables'

// ------------------------------------ COMPONENTS ------------------------------------//
export const Button = styled.button`
  /* padding: ${spacing.space1} ${spacing.space3}; */
  /* margin-left: ${spacing.space2}; */
  border: ${border.border};
  border-radius: ${border.borderRadiusButton};
  /* text-transform: uppercase; */
  font-weight: ${fonts.bold};
  color: ${colors.titleColor};
  /* box-shadow: ${shadows.outsideShadow}; */
  cursor: pointer;
  outline: none;
  background: ${colors.primaryColor};
  transition: 0.3s;
  width: 343px;
  height: 54px;
  margin: ${spacing.space2} 0;

  &:hover {
    box-shadow: none;
  }

  &:active {
    box-shadow: ${shadows.innerShadow};
  }
  /* this validate the color of background */
  /* if has the prop main display background orange */

  ${(props) =>
    props.large &&
    css`
      ${colors.mainBackgroundColor};
      max-width: 278px;
      height: 50px;
    `};

  ${(props) =>
    props.medium &&
    css`
      ${colors.mainBackgroundColor};
      max-width: 219px;
      height: 50px;
    `};

    ${(props) =>
    props.small &&
    css`
      ${colors.mainBackgroundColor};
      max-width: 126px;
      height: 40px;
    `};

    ${(props) =>
    props.micro &&
    css`
      ${colors.mainBackgroundColor};
      max-width: 95.25px;
      height: 25.59px;
    `};

    ${(props) =>
    props.deleteButton &&
    css`
      ${colors.mainBackgroundColor};
      width: 19px;
      height: 19px;
      border: none;
      border-radius: 50%;
      text-align: center;
      padding: 0px;
      margin: 0px;
      margin-left: 210px;
      margin-top: 5px;
      transform: translateY(10%);
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 5;
    `};
`