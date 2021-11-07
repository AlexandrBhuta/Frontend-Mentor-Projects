import React from "react";
import { ReactComponent as Logo } from './images/logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      billInput: '',
      customInput: '',
      peopleInput: '',
      totalPerson: '0.00',
      tipPerson: '0.00',
      keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'Backspace']
    }
  }

  handleBillInput = (e) => {
      this.personTotal();
      this.personTip();
      for (let i = 0; i < this.state.keys.length; i++) {
        if (e.key === this.state.keys[i] && this.state.billInput.length < 10) {
          this.setState({
            billInput: this.state.billInput + e.key
          })
        }
        if (e.key === '.' && this.state.billInput.includes('.')) {
           this.setState({
            billInput: this.state.billInput + ''
          })
        }
        if (e.key === 'Backspace') {
          this.setState({
            billInput: this.state.billInput.slice(0, -1)
          })
        }
        if (e.key === '0' && this.state.billInput.length === 0) {
          this.setState({
            billInput: ''
          })
        }
      }
    }
    
    handleCustomInput = (e) => {
      this.personTip();
      this.personTotal();
      for (let i = 0; i < this.state.keys.length; i++) {
        if (e.key === this.state.keys[i] && this.state.customInput.length < 2) {
          this.setState({
           customInput: this.state.customInput + e.key
         })
        }
        if (e.key === '.') {
          this.setState({
            customInput: this.state.customInput + ''
          })
        }
        if (e.key === 'Backspace') {
          this.setState({
            customInput: this.state.customInput.slice(0, -1)
          })
        }
        if (e.key === '0' && this.state.customInput.length === 0) {
           this.setState({
            customInput: ''
          })
        }
      }
    }

   handleTipInput = (e) => {
    if (this.state.peopleInput !== '' && this.state.billInput !== '') {
      this.setState({
        tipPerson: ((this.state.billInput * e.target.value / 100) / this.state.peopleInput).toFixed(2),
        totalPerson: ((this.state.billInput / this.state.peopleInput) + ((this.state.billInput * e.target.value / 100) / this.state.peopleInput)).toFixed(2),
      })
    }
    this.setState({
        customInput: e.target.value
    })
    /*const activeTip = document.querySelectorAll('.tip')
    for (let i = 0; i < activeTip.length; i++) {
      activeTip[i].addEventListener('click', () => {
        activeTip[i].classList.add('active')
      })
    }*/
    }

    personTotal = () => {
      if (this.state.peopleInput !== '' && this.state.customInput !== '' && this.state.billInput !== '') {
        this.setState({
          totalPerson: ((this.state.billInput / this.state.peopleInput) + ((this.state.billInput * this.state.customInput / 100) / this.state.peopleInput)).toFixed(2)
        })
      }
    }
    
    personTip = () => {
      if (this.state.customInput !== '' && this.state.peopleInput !== '') {
        this.setState({
          tipPerson: ((this.state.billInput * this.state.customInput / 100) / this.state.peopleInput).toFixed(2)
        })
      }
    }
    
    peopleInput = (e) => {
      this.personTotal();
      this.personTip();
      for (let i = 0; i < this.state.keys.length; i++) {
        if (e.key === this.state.keys[i]  && this.state.peopleInput.length < 3) {
          this.setState({
           peopleInput: this.state.peopleInput + e.key
          })
        }
        if (e.key === '.') {
          this.setState({
            peopleInput: this.state.peopleInput + ''
        })
        }
        if (e.key === 'Backspace') {
          this.setState({
            peopleInput: this.state.peopleInput.slice(0, -1)
          })
        }
        if (e.key === '0' && this.state.peopleInput.length === 0) {
           this.setState({
            peopleInput: ''
           })
        }
      }
    }

    reset = () => {
      this.setState({
        billInput: '',
        customInput: '',
        peopleInput: '',
        totalPerson: '0.00',
        tipPerson: '0.00'
      })
    }

  render() {

    return (
      <div>
      <header>
        <Logo />
      </header>
      <main>
        <div className='input-section'>
            <div className='bill-section'>
                <h1>Bill</h1>
                <input value={this.state.billInput} onChange={this.handleBillInput} onKeyDown={this.handleBillInput} className='bill-input' type='number' placeholder='0' />
            </div>
            <div className='select-tip'>
                <h1>select tip %</h1>
                <div className='percentages'>
                    <button type='button' onClick={this.handleTipInput} value='5' className='tip'>5%</button>
                    <button type='button' onClick={this.handleTipInput} value='10' className='tip'>10%</button>
                    <button type='button' onClick={this.handleTipInput} value='15' className='tip'>15%</button>
                    <button type='button' onClick={this.handleTipInput} value='25' className='tip'>25%</button>
                    <button type='button' onClick={this.handleTipInput} value='50' className='tip'>50%</button>
                    <input value={this.state.customInput} onChange={this.handleCustomInput} onKeyDown={this.handleCustomInput}  className='custom' type='number' placeholder='Custom' />
                </div>
            </div>
            <div className='people'>
              <h1>Number of People</h1>
                <input value={this.state.peopleInput} onChange={this.peopleInput} onKeyDown={this.peopleInput} className='people-input' type='number' placeholder='0' />
            </div>
        </div>
        <div className='output-section'>
            <div>
                <div className='heading'>
                    <h1>tip amount</h1>
                    <p>/ person</p>
                </div>
            <div className='price tip'>${this.state.tipPerson}</div>
            </div>
            <div>
                <div className='heading'>
                    <h1>total</h1>
                    <p>/ person</p>
                </div>
            <div className='price total'>${this.state.totalPerson}</div>
            </div>
            <button onClick={this.reset}>Reset</button>
        </div>
        </main>
        </div>
    )
  }
}

export default App;