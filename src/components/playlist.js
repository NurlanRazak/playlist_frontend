import React from "react";

class Playlist extends React.Component
{
    state = {
        performers: [],
        total: null,
        per_page: 4,
        current_page: null,
        page: 1,
        last_page: null,
        url: null
    };

    async componentDidMount() {
        this.getPerformersWithPage(this.state.page, this.state.per_page)
    }

    getPerformersWithPage = async (pageNumber, perPage) => {
        const url = `http://playlist.local.com/api/performer?page=${pageNumber}&per_page=${perPage}`;

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
        let renderTotalPageNumbers;

        var pageNumbers = [];
        var perPageNumbers = [4,25,50,100];
        var numPerPage = 4;
        if (!this.state.total != null) {
            for (let i=1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
                pageNumbers.push(i);
            }

            renderPageNumbers = pageNumbers.map(number => {
                let classes = this.state.current_page === number ? 'active' : undefined;

                if ((number >= this.state.current_page - 1 && number <= this.state.current_page + 2)) {
                    this.num = number ? number : 4;
                    console.log('pageNumbers', this.num, this.numPerPage);
                    return (
                      <span key={number} className={classes} onClick={() => this.getPerformersWithPage(this.num, this.numPerPage)}>{number}</span>
                    );
                  }
            });

            renderTotalPageNumbers = perPageNumbers.map(number => {
                console.log('index', number, this.state.per_page);
                let classes = this.state.per_page == number ? 'activePerPage' : 'perPage';
                this.numPerPage = this.state.per_page;
                return (
                    <span key={number} className={classes} onClick={() => this.getPerformersWithPage(this.state.num, number)}>{number}</span>
                );
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

                    <div class="pageNumber">
                        <span onClick={() => this.getPerformersWithPage(1)}>&lt;</span>
                            {renderPageNumbers}
                        <span onClick={() => this.getPerformersWithPage(1)}>&gt;</span>
                    </div>

                    <div className="totalPage">
                        {renderTotalPageNumbers}
                    </div>
                </div>
            </div>
        );
    }
}

export default Playlist;
