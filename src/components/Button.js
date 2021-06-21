import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    font-size: 32px;
    color: ${props => props.theme.fg};
    border: none;
    background: hsl(30, 25%, 89%);
    box-shadow: 0 3px 0 hsl(28, 16%, 65%);
    font-family: 'Spartan', sans-serif;

    &:hover {
        background: hsl(30, 25%, 80%)
    }

    &:active {
        transform: translateY(3px);
        box-shadow: none;
    }

    margin: .5em;
    padding: 0.25em 1em;
    border-radius: 3px;
    text-transform: uppercase;
`;

class Button extends React.Component {
    render() {
        return <StyledButton onClick={this.props.onClick}>{this.props.value}</StyledButton>
    }

    onClick = () => {
        console.log(`Clicked ${this.props.value}!`)
    }
}

export default Button;