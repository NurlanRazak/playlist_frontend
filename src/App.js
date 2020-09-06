import React from "react";
import Filter from "./components/filter";
import Playlist from "./components/playlist";

class App extends React.Component
{
    render() {
        return (
            <div>
                <Playlist />
                <Filter />
            </div>
        );
    }
}

export default App;