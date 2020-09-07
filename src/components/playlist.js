import React from "react";

class Playlist extends React.Component
{
    state = {
        performers: [],
        total: null,
        per_page: null,
        current_page: null,
        page: null
    };

    async componentDidMount() {
        this.getPerformersWithPage(1)
    }

    getPerformersWithPage = async pageNumber => {
        const url = `http://playlist.local.com/api/performer?page=${pageNumber}`;

        // const url = "http://127.0.0.1:8000/api/performer";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            performers: data.data,
            total: data.total,
            per_page: data.per_page,
            current_page: data.current_page
        });
    }

    render() {
        if (!this.state.performers) {
            return <div> Performers not found</div>;
        }

        let renderPageNumbers;

        var pageNumbers = [];
        if (!this.state.total != null) {
            for (let i=1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
                pageNumbers.push(i);
            }
            console.log(pageNumbers);
            renderPageNumbers = pageNumbers.map(number => {
                let classes = this.state.current_page === number ? 'active' : undefined;

                if ((number >= this.state.current_page - 2 && number <= this.state.current_page + 2)) {
                    return (
                      <span key={number} className={classes} onClick={() => this.getPerformersWithPage(number)}>{number}</span>
                    );
                  }
            });
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

                <div className="pagination">
                    <span onClick={() => this.getPerformersWithPage(1)}>&lt;</span>
                        {renderPageNumbers}
                    <span onClick={() => this.getPerformersWithPage(1)}>&gt;</span>
                </div>
            </div>
        );
    }
}

export default Playlist;
