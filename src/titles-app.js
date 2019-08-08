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
          selectedTitle: null,
          searchText: ''
        };
    }

    componentDidMount() {
        const that = this;
        axios.get('http://localhost:3001/allTitles')
        .then(function (response) {
            // console.log(response.data);
            that.setState({allTitles: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    showDetails(titleId) {
        this.setState({selectedTitle: titleId})
    }

    search(searchText) {
        this.setState({searchText: searchText});
    }

    render() {
        const filteredTitles = this.state.searchText === '' ? this.state.allTitles : this.state.allTitles.filter(titleObj => 
            titleObj.TitleName.toLowerCase().includes(this.state.searchText.toLowerCase())
        );

        const titlesList = filteredTitles.map(function(titleObj) {
            return {
                name: titleObj.TitleName,
                id: titleObj.TitleId
            }
        });

        const selectedTitleDetails = this.state.selectedTitle !== null ? this.state.allTitles.filter(titleObj => {
            return titleObj.TitleId === this.state.selectedTitle
        })[0] : {};

        return (
            <div className="titles-app">
                <TitlesSearchBar
                    search={searchText => this.search(searchText)}
                />
                <TitlesList
                    titles={titlesList}
                    showDetails={id => this.showDetails(id)}
                    />
                <TitleDetails
                    selectedTitleDetails={selectedTitleDetails}
                />
            </div>
        );
    }
}