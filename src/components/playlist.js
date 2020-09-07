import React from "react";

class Playlist extends React.Component
{
    state = {
        performers: []
    };

    async componentDidMount() {
        const url = "http://playlist.local.com/api/performer";

        // const url = "http://127.0.0.1:8000/api/performer";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ performers: data.data })
    }
    render() {
        if (!this.state.performers) {
            return <div> Performers not found</div>;
        }

        return (
            <div className="playlist">
                <h3> Плейлист </h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Испольнитель </th>
                            <th>Песня</th>
                            <th>Жанр</th>
                            <th>Год</th>
                        </tr>
                        {this.state.performers.map(performer => (
                            <tr key={performer.id}>
                                <td>{performer.name}</td>
                                <td>{performer.song}</td>
                                <td>{performer.genre}</td>
                                <td>{performer.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Playlist;
