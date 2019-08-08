import React from 'react';

export default class TitlesList extends React.Component {
    render() {
        const titles = this.props.titles.map(title =>
            <div
                key={title.TitleId}
                onClick={() => this.props.showDetails(title.TitleId)}
                className="list-group-item list-group-item-action list-group-item-light">{title.TitleName}
            </div>
        );
        
        return (
            <div className='titles-list list-group'>
                {titles}
            </div>
        );
    }
}