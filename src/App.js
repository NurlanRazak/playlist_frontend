import React from "react";
import Filter from "./components/filter";
import Playlist from "./components/playlist";

class App extends React.Component
{
    constructor (props) {
        super(props)
        this.setParams = this.setParams.bind(this)
    }

    state = {
        key: "",
        filter: ""
    }

    setParams(key, value) {
        console.log('keyval', key, value);
        this.setState({
            key: key,
            filter: value
        })
    }


    render() {

        return (
            <div className="main">
                <Playlist keyFilter={this.state.key} filter={this.state.filter} />
                <Filter setFilter={this.setParams}/>
            </div>
        );
    }
}

export default App;
