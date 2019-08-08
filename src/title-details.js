import React from 'react';
import isEmpty from 'lodash/isEmpty';

export default class TitleDetails extends React.Component {
    render() {
        if (isEmpty(this.props.selectedTitleDetails)) return <div></div>;
        
        const genres = this.props.selectedTitleDetails.Genres.map(genre =>
            <li key={genre} className="list">
                {genre}
            </li>
        );

        return (
            <div className='title-details list-group-item list-group-item-action list-group-item-light'>
                <div><span className="label">Title Name: </span>{this.props.selectedTitleDetails.TitleName}</div>
                <div><span className="label">Release Date: </span>{this.props.selectedTitleDetails.ReleaseYear}</div>
                <div><span className="label">Description: </span>{this.props.selectedTitleDetails.Storylines[0].Description}</div>
                <div>
                    <div><span className="label">Genres: </span></div>
                    {genres}
                </div>
            </div>
        );
    }
}