import Button from "./Button"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import React from "react"

const BUTTONS = "7 8 9 del 4 5 6 + 1 2 3 - . 0 / x reset ="


const CalculatorContainer = styled.div`
    background-color: hsl(222, 26%, 31%);
    height: 100vh;
`

const Calculator = styled.div`
    margin: 0 auto;
    max-width: 600px;
`

const Screen = styled.div`
    background-color: hsl(224, 36%, 15%);
    height: 120px;
    border-radius: 10px;
    margin-bottom: 20px;
    line-height: 100px;
    padding: 10px;
    text-align: right;
    color: white;
    font-size: 48px;
    font-family: 'Spartan', sans-serif;
    text-overflow: ellipsis;
`

const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 600px;
    margin: 0 auto;
    background-color: hsl(223, 31%, 20%);
    border-radius: 10px;
    padding: 1em;
`

const Attribution = styled.div`
    margin: 1.5em;
    text-align: center;
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

        // Handle different cases -- could replace with state transitions
        if (this.state.lastClicked.toLowerCase() === "del") {
            this.handleClickedDelete();
        } else if (this.state.lastClicked.toLowerCase() === "reset") {
            this.handleClickedReset();
        } else if (this.state.lastClicked.toLowerCase() === '=') {
            this.handleClickedEquals();
        } else if (!isNaN(this.state.lastClicked)) {
            this.handleClickedNumber();
        }
    }


    /* Button-click handlers */
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
    
    handleClickedEquals = () => {
        try {
            let newValue = math.evaluate(this.state.currentValue.slice(0, -1))
            if (!newValue) {newValue = ""}
            this.setState( (state) => {
                return {
                    currentValue: newValue.toString(),
                    shouldHandleUpdate: false,
                }
            })
        } catch (error) {
            this.setState( (state) => {
                return {
                    currentValue: "err",
                    shouldHandleUpdate: false,
                }
            })            
        }
    }

    handleClickedNumber = () => {
        this.setState({
            shouldHandleUpdate: false,
        })
    }

    render() {

        return (
            <CalculatorContainer>
                <Calculator>
                    <div>Command History: {this.state.commandHistory}</div>
                    <div>Current Value: {this.state.currentValue}</div>
                    <div>Last Clicked: {this.state.lastClicked}</div>
                    <Screen>
                        {this.numberWithCommas(this.state.currentValue)}
                    </Screen>
                    <ButtonGrid>
                        {BUTTONS.split(" ").map(x => <Button value={x} onClick={this.handleButtonClick(x)}></Button>)}
                    </ButtonGrid>
                </Calculator>
                <Attribution>
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="#">Your Name Here</a>.
                </Attribution>
            </CalculatorContainer>
        )
    }

    numberWithCommas = (x) => {
        const splitStr = x.split(".")
        const replaced = splitStr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (splitStr.length === 1) {
            return replaced
        }
        splitStr.shift()
        return [replaced, ...splitStr].join(".");
    }
    

    handleButtonClick = (value) => {
        // Enable value conversion if necessary
        let updatedValue = value;
        if (value === "x") {updatedValue = "*"}
        return () => {
            this.setState( (state) => {
                return {
                    commandHistory: state.commandHistory + updatedValue,
                    currentValue: state.currentValue + updatedValue,
                    lastClicked: updatedValue,
                    shouldHandleUpdate: true,
                }
            })
        }
    }
}

export default App;