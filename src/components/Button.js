import React from 'react';
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
    font-size: 32px;
    color: ${props => props.theme.fg};
    border: none;
    background: hsl(30, 25%, 89%);
    box-shadow: 0 3px 0 hsl(28, 16%, 65%);
    font-family: 'Spartan', sans-serif;

    height: 54px;
    line-height: 60px;

    &:hover {
        background: hsl(30, 25%, 80%)
    }

    &:active {
        transform: translateY(3px);
        box-shadow: none;
    }

    margin: .5em;
    border-radius: 10px;
    text-transform: uppercase;

    ${props => (props.value === "=" || props.value === "reset" || props.value === "del") && css`
        font-size: 24px;
    `}

    // Conditional formatting
    ${props => (props.value === "=" || props.value === "reset") && css`
        grid-column: span 2;
    `}

    ${props => (props.value === "reset" || props.value === "del") && css`
        color: white;
        background-color: hsl(225, 21%, 49%);
        box-shadow: 0 3px 0 hsl(224, 28%, 35%);
        &:hover {
            background: hsl(225, 21%, 40%)
        }
    `}

    ${props => (props.value === "=") && css`
        color: white;
        background-color: hsl(6, 63%, 50%);
        box-shadow: 0 3px 0 hsl(6, 70%, 34%);
        &:hover {
            background: hsl(6, 63%, 40%)
        }
    `}

`;

class Button extends React.Component {
    render() {
        return <StyledButton value={this.props.value} onClick={this.props.onClick}>{this.props.value}</StyledButton>
    }

    onClick = () => {
        console.log(`Clicked ${this.props.value}!`)
    }
}

export default Button;