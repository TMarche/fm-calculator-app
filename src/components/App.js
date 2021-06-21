import Button from "./Button"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import React from "react"

const BUTTONS = "7 8 9 del 4 5 6 + 1 2 3 - . 0 / x reset ="

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

class App extends React.Component {
    render() {
        return (
        <div>
            <div>Current Value: </div>
            <GridContainer>
                {BUTTONS.split(" ").map(x => <Button value={x}></Button>)}
            </GridContainer>
           <div className="attribution">
             Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
             Coded by <a href="#">Your Name Here</a>.
           </div>
        </div>)
    }
}

export default App;