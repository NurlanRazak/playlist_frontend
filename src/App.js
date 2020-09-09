import React from "react";
import Filter from "./components/filter";
import Playlist from "./components/playlist";

class App extends React.Component
{
    state = {
        param: ""
    }

    async componentDidMount() {
        filte = "";
    }
    async setParams(performer) {
        this.setState({
            param: performer
        });
        console.log('perf', performer);
    }


    render() {

        return (
            <div className="main">
                <Playlist filter={this.state.param} />
                <Filter setFilter={this.setParams}/>
            </div>
        );
    }
}

export default App;
