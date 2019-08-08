import React from 'react';

export default class TitlesList extends React.Component {
    render() {
        const titles = this.props.titles.map(title =>
            <div
                key={title.id}
                onClick={() => this.props.showDetails(title.id)}
                className="list-group-item list-group-item-action list-group-item-light">{title.name}
            </div>
        );
        
        return (
            <div className='titles-list list-group'>
                {titles}
            </div>
        );
    }
}

