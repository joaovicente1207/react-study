import React,{ Component } from 'react';
import './TemperatureControl.css';

class TemperatureControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempetureValue: 10,
      tempetureColor: "cold"
    }
  }

  hotTemperature = 20

  increment = () => {
    let temperature = {...this.state}
    temperature.tempetureValue += 1
    if (temperature.tempetureValue === this.hotTemperature) {
        temperature.tempetureColor = "hot"
    }
    this.setState(temperature)
  }

  decrement = () => {
    let temperature = {...this.state}
    temperature.tempetureValue -= 1
    if (temperature.tempetureValue === this.hotTemperature - 1) {
        temperature.tempetureColor = "cold"
    }
    this.setState(temperature)
  }

  render() {
    return(
        <div className='app-container'>
            <div className="temperature-display-container">
                <div className={`temperature-display ${this.state.tempetureColor}`}>{this.state.tempetureValue}°C</div>
            </div>
            <div className='button-container'>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        </div>
    )
  }
}

export default TemperatureControl;
