import * as React from 'react';
import Button from '../components/Button';
import Display from '../components/Display';
import './Calculator.css'


class Calculator extends React.Component {

    /**
     *
     */
    constructor(props:any) {
        super(props);
        
        //this.clearMemory = this.clearMemory.bind(this);
    }

    clearMemory(){
        console.log("Limpar a memória")
    }

    setOperation(operation:any){
        console.log(operation);
    }

    addDigit(n:any){
        console.log(n);
    }

    render() {
        return (
            <div className='calculator'>
                <Display value={100}/>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
                
            </div>
        );
    }
}

export default Calculator;