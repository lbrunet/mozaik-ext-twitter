import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class Favorites extends Component {
    render() {
        let cssClasses = 'twitter__favorites';
        const { tweet: { favorite_count } } = this.props;

        if (favorite_count === 0) {
            cssClasses += ' twitter__favorites--none';
        }

        return (
          <span className={cssClasses}>
                <i className="fa fa-star" />&nbsp;{favorite_count ? favorite_count : ''}
            </span>
        );
    }
}

Favorites.propTypes = {
    tweet: PropTypes.shape({
        favorite_count: React.PropTypes.number
    })
};

export default Favorites;
