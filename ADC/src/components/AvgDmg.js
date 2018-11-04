import React, { Component } from 'react';
import AvgDmgForm from './AvgDmgForm';

class AvgDmg extends React.Component {
    state = {
        attackRolls: {},
        attackModifier: {},
        armorClass: {},
        damageModifier: {},
        dice: {
            3: 2,
            20: 6,
        },
    };

    render() { return (

        <div className="row" style={{marginTop: 300}}>
            <div className="offset-lg-5 col-lg-2">
                <AvgDmgForm />

            </div>
        </div>

    )
    };
}

export default AvgDmg;