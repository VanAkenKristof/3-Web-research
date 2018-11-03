import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        console.log(this);
    };

    render() {
        return (
            <React.Fragment>
                <form action="" className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please enter a store</h2>
                    <input type="text"
                           ref={this.myInput}
                           required
                           placeholder="Store Name"
                           defaultValue={getFunName()}
                    />
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;