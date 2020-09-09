import React from "react";

class Filter extends React.Component
{

    constructor(props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
        // this.handleGenre = this.handleGenre.bind(this);
        // this.handleYear = this.handleYear.bind(this);
    }

    state = {
        performers: [],
        genres: [],
        years: [],
    };

    async componentDidMount() {
        const performerUrl = "http://35.176.223.82/api/performer?per_page=-1";
        const genreUrl = "http://35.176.223.82/api/genre?all=1";
        const yearUrl = "http://35.176.223.82/api/year?all=1";

        const performerResponse = await fetch(performerUrl);
        const performerData = await performerResponse.json();

        const genreResponse = await fetch(genreUrl);
        const genreData = await genreResponse.json();

        const yearResponse = await fetch(yearUrl);
        const yearData = await yearResponse.json();

        this.setState({
            performers: performerData.data,
            genres: genreData,
            years: yearData
        })
    }

    handleEvent(event) {
        event.persist()
        this.props.setFilter(event._targetInst.key, event.target.value);
    }

    // handleGenre(event) {
    //     event.persist();
    //     console.log('genre', event.target.value);
    // }
    //
    // handleYear(event) {
    //     event.persist();
    //     console.log('year', event.target.value);
    // }

    render() {
        if (!this.state.performers || !this.state.genres || !this.state.years) {
            return <div> Filters not found</div>;
        }

        return (
            <div className="parentFilter">
                <h3>Фильтр</h3>
                <div className="filter">
                    <div className="item">
                        <label>Испольнитель</label>
                        <select key="selectPerformer" onChange={this.handleEvent}>
                            <option value="all">Все</option>
                            {this.state.performers.map(performer => (
                                <option value={performer.name} key={performer.id}>{performer.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="item">
                        <label>Жанр</label>
                        <select key="selectGenre" onChange={this.handleEvent}>
                            <option value="all">Все</option>
                            {this.state.genres.map(genre => (
                                <option value={genre.name} key={genre.id}>{genre.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="item">
                        <label>Год</label>
                        <select key="selectYear" onChange={this.handleEvent}>
                            <option value="all">Все</option>
                            {this.state.years.map(year => (
                                <option value={year.year} key={year.id}>{year.year}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;
