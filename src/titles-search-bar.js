import React from 'react';

export default class TitlesSearchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    setSearchText(e) {
        this.setState({searchText: e.target.value});
    }

    search(e) {
        if (e.keyCode === 13) this.props.search(this.state.searchText)
    }

    render() {        
        return (
            <div className="input-group mb-3">
                <input
                    type='text'
                    onChange={e => this.setSearchText(e)}
                    onKeyDown={e => this.search(e)}
                    className="form-control"
                    placeholder="search for a title"
                />

                <div className="input-group-append">
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => this.props.search(this.state.searchText)}
                        >search
                    </button>
                </div>
            </div>           
        );
    }
}