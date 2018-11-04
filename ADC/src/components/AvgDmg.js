import React, { Component } from 'react';
import AvgDmgForm from './AvgDmgForm';

class AvgDmg extends React.Component {
    state = {
        attackRolls: {},
        attackModifier: {},
        armorClass: {},
        damageModifier: {},
        dice: {
            4: 0,
            6: 0,
            8: 0,
            10: 0,
            12: 0,
        },
        avgDmg: {},
    };

    addDie = sides => {
        const dice = { ...this.state.dice };
        dice[sides]++;
        this.setState({ dice });

        this.state.dice[sides]++;
    };

    render() { return (

        <div className="row" style={{marginTop: 300}}>
            <div className="offset-lg-4 col-lg-4">
                <AvgDmgForm addDie={this.addDie} addedDice={this.state.dice}/>

            </div>
        </div>

    )
    };
}

export default AvgDmg;