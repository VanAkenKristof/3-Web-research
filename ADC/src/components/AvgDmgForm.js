import React, { Component } from 'react';
import Die from './Die';

class AvgDmgForm extends React.Component {
    render() { return (


        <div className="row">
            <div className="col-sm-12">
                <div className="row">
                    <div className="offset-sm-1 col-sm-2">
                        <Die sides={4} addDie={this.props.addDie} addedDice={this.props.addedDice[4]} />
                    </div>
                    <div className="col-sm-2">
                        <Die sides={6} addDie={this.props.addDie} addedDice={this.props.addedDice[6]} />
                    </div>
                    <div className="col-sm-2">
                        <Die sides={8} addDie={this.props.addDie} addedDice={this.props.addedDice[8]} />
                    </div>
                    <div className="col-sm-2">
                        <Die sides={10} addDie={this.props.addDie} addedDice={this.props.addedDice[10]} />
                    </div>
                    <div className="col-sm-2">
                        <Die sides={12} addDie={this.props.addDie} addedDice={this.props.addedDice[12]} />
                    </div>
                </div>

                <form onSubmit={this.createFish}>

                    <div className="row">
                        <div className="col-sm-12">
                            <input name="name" type="text" placeholder={"Name"} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <input name="attackModifier" type={"text"} placeholder={"Attack mod"} />
                        </div>
                        <div className="col-sm-6">
                            <input name="damageModifier" type={"text"} placeholder={"Damage mod"} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <input name="attackRolls" type="text" placeholder={"# attack rolls"} />
                        </div>
                        <div className="col-sm-6">
                            <input name="armorClass" type={"text"} placeholder={"Armor Class"} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button type={"submit"} className={'btn btn-primary'}>Calculate Average Damage</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>



    )
    };
}

export default AvgDmgForm;