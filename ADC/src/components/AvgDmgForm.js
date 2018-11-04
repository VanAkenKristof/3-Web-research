import React, { Component } from 'react';

class AvgDmgForm extends React.Component {
    render() { return (


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



    )
    };
}

export default AvgDmgForm;