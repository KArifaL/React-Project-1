import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    // THIS IS THE ONLY TIME we do direct assignment to this.state
    // for every other update to state object, we call setState()
    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition (
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ errorMessage: err.message })
        );
    }

    renderContnent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner message="Please accept location request." />;
    }

    render() {
        return (
            <div className="border red">{this.renderContnent()}</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);