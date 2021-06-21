import Button from "./Button"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import React from "react"

const BUTTONS = "7 8 9 del 4 5 6 + 1 2 3 - . 0 / x reset ="

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

const states = "PENDING_UPDATE VALID_ENTRY INVALID_ENTRY"

class App extends React.Component {
    state = {
        commandHistory: "",
        currentValue: "",
        lastClicked: "",
        shouldHandleUpdate: false,
    }

    componentDidUpdate() {
        if (!this.state.shouldHandleUpdate) return;

        if (this.state.lastClicked.toLowerCase() === "del") {
            this.handleClickedDelete();
        } else if (this.state.lastClicked.toLowerCase() === "reset") {
            this.handleClickedReset();
        } if (!isNaN(this.state.lastClicked)) {
            this.handleClickedNumber();
        }
    }
    
    handleClickedDelete = () => {
        this.setState( (state) => {
            return {
                currentValue: this.state.currentValue.slice(0, -4),
                shouldHandleUpdate: false,
            }
        })
    }

    handleClickedReset = () => {
        this.setState( (state) => {
            return {
                currentValue: "",
                shouldHandleUpdate: false,
            }
        })
    }

    handleClickedNumber = () => {
        this.setState({
            shouldHandleUpdate: false,
        })
    }

    render() {
        return (
        <div>
            <div>Command History: {this.state.commandHistory}</div>
            <div>Current Value: {this.state.currentValue}</div>
            <div>Last Clicked: {this.state.lastClicked}</div>
            <GridContainer>
                {BUTTONS.split(" ").map(x => <Button value={x} onClick={this.handleButtonClick(x)}></Button>)}
            </GridContainer>
           <div className="attribution">
             Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
             Coded by <a href="#">Your Name Here</a>.
           </div>
        </div>)
    }

    handleButtonClick = (value) => {
        return () => {
            this.setState( (state) => {
                return {
                    commandHistory: state.commandHistory + value,
                    currentValue: state.currentValue + value,
                    lastClicked: value,
                    shouldHandleUpdate: true,
                }
            })
        }
    }
}

export default App;