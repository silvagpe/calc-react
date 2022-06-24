import * as React from 'react';
import Button from '../components/Button';
import Display from '../components/Display';
import './Calculator.css'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

class Calculator extends React.Component {

    state = { ...initialState };
    /**
     *
     */
    constructor(props: any) {
        super(props);

        //this.clearMemory = this.clearMemory.bind(this);
    }

    clearMemory =() => {
        console.log("Limpar a memória")
        this.setState({ ...initialState });
    }

    setOperation = (operation: any) => {
        if (this.state.current === 0){
            this.setState({current:1, clearDisplay:true, operation})
        }else{
            const equals = operation === "="
            const currentOperation = this.state.operation;

            const values = [...this.state.values];

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (error) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue:values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                //clearDispla: !equals,
                clearDispla: true,
                values
            })

        }
    }

    addDigit = (n: any) => {

        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;

        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue

            this.setState({values})
        }

    }

    render() {
        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />

            </div>
        );
    }
}

export default Calculator;