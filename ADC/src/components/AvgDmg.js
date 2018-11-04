import React, { Component } from 'react';
import AvgDmgForm from './AvgDmgForm';
import calculateAvarageDamage from '../calculator';

class AvgDmg extends React.Component {
    state = {
        dice: {
            4: 0,
            6: 0,
            8: 0,
            10: 0,
            12: 0,
        },
    };

    addDie = sides => {
        const dice = { ...this.state.dice };
        dice[sides]++;
        this.setState({ dice });
    };

    changeState = (key, value) => {
      this.setState({ [key] : value });
    };

    calculateAvgDmg = (event) => {
        event.preventDefault();

        this.setState({ avgDmg : calculateAvarageDamage(this.state)});
    };

    render() { return (

        <div className="row">
            <div className="col-lg-12">
                <p style={{textAlign: "center", fontSize: 50, fontWeight: "strong"}}>
                    {this.state.avgDmg || ""}
                </p>

            </div>
            <div className="col-lg-12">
                <AvgDmgForm addDie={this.addDie} addedDice={this.state.dice} changeState={this.changeState} calculateAvgDmg={this.calculateAvgDmg}/>
            </div>
        </div>

    )
    };
}

export default AvgDmg;