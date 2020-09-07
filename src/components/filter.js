import React from "react";

class Filter extends React.Component
{
    state = {
        performers: [],
        genres: [],
        years: [],
    };

    async componentDidMount() {
        const performerUrl = "http://127.0.0.1:8000/api/performer";
        const genreUrl = "http://127.0.0.1:8000/api/genre";
        const yearUrl = "http://127.0.0.1:8000/api/year";

        const performerResponse = await fetch(performerUrl);
        const performerData = await performerResponse.json();

        const genreResponse = await fetch(genreUrl);
        const genreData = await genreResponse.json();

        const yearResponse = await fetch(yearUrl);
        const yearData = await yearResponse.json();

        this.setState({
            performers: performerData.data,
            genres: genreData.data,
            years: yearData.data
        })
    }

    render() {
        if (!this.state.performers || !this.state.genres || !this.state.years) {
            return <div> Filters not found</div>;
        }

        return (
            <div>
                <h3> Фильтр</h3>
                <div className="filter">
                    <label>Испольнитель:</label>
                    <select>
                        <option value="all">Все</option>
                        {this.state.performers.map(performer => (
                            <option value="performer.name" key={performer.id}>{performer.name}</option>
                        ))}
                    </select>

                    <label>Жанр:</label>
                    <select>
                        <option value="all">Все</option>
                        {this.state.genres.map(genre => (
                            <option value="genre.name" key={genre.id}>{genre.name}</option>
                        ))}
                    </select>

                    <label>Год:</label>
                    <select>
                        <option value="all">Все</option>
                        {this.state.years.map(year => (
                            <option value="year.year" key={year.id}>{year.year}</option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default Filter;
