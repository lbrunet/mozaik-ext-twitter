import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import TweetMedia from './TweetMedia';

class ListTweet extends Component {
    render() {
        var cssClasses = 'list__item';
        var entities = this.props.tweet.entities;
        var tweetMedia;

        if (entities.hasOwnProperty('media') && entities.media.length > 0) {
            tweetMedia = entities.media.map(media => <TweetMedia key={media.id}
                                                                 media={media}/>);
        }

        return (
            <div className={cssClasses}>
                {this.props.tweet.text}
                <div>
                    <i className="fa fa-retweet"/> {this.props.tweet.retweet_count}&nbsp;
                    <i className="fa fa-heart"/> {this.props.tweet.favorite_count}
                </div>
                {tweetMedia}
            </div>
        );
    }
}

ListTweet.propTypes = {
    entities: PropTypes.object()
};

export default ListTweet;
