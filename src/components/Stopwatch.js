import React, {Component} from 'react';

class Stopwatch extends Component{

    state = {
        isRunning: false,
        time: 0,
        prevTime: 0
    };

    componentDidMount() {   //Always remmember to unmount when using this lifecycle method, remember to ALWAY unmount to avoid memory leaks
        this.intervalID = setInterval(() => this.tick(), 100);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () =>{
        if(this.state.isRunning){
            const now = Date.now();
            this.setState( prevState =>({
                prevTime: now,
                time: this.state.time + (now-prevState.prevTime)
            }));
        }
    }

    handleStopwatch = () =>{
        this.setState(prevState =>({
            isRunning : !prevState.isRunning
        }));
        if (this.state.isRunning == false){
            console.log('starting...');
            this.setState({
                prevTime: Date.now()
            });
        }
    }

    handleReset = () =>{
        this.setState({
            time: 0,
            isRunning: false,
            prevTime: 0
        });
    }

    render() {
        const seconds = Math.floor(this.state.time/1000);

        return(
            <div className='stopwatch'>
                <h2>Stopwatch</h2>
                <span className='stopwatch-time'>{ seconds }</span>
                <button onClick={this.handleStopwatch}>
                    { this.state.isRunning ? 'Stop' : 'Start' }
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;