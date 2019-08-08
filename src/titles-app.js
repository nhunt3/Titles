import './index.css';
import React from 'react';
import TitlesList from './titles-list';
import TitleDetails from './title-details';
import TitlesSearchBar from './titles-search-bar';
const axios = require('axios');

export default class TitlesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          allTitles: [],
          selectedTitleDetails: {}
        };
    }

    getCall(route, params) {
        return axios.get('http://localhost:3001/' + route, {params});
    }

    async componentDidMount() {
        const titlesResponse = await this.getCall('allTitles', {});
        this.setState({allTitles: titlesResponse.data});
    }

    async showDetails(id) {
        const titleDetailResponse = await this.getCall('oneTitle', {id});
        this.setState({selectedTitleDetails: titleDetailResponse.data})
    }

    async search(searchText) {
        const titlesResponse = await this.getCall('allTitles', {searchText}); 
        this.setState({allTitles: titlesResponse.data});
    }

    render() {
        return (
            <div className="titles-app">
                <TitlesSearchBar
                    search={searchText => this.search(searchText)}
                />
                <TitlesList
                    titles={this.state.allTitles}
                    showDetails={id => this.showDetails(id)}
                    />
                <TitleDetails
                    selectedTitleDetails={this.state.selectedTitleDetails}
                />
            </div>
        );
    }
}