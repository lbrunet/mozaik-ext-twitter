import React, { Component, PropTypes } from 'react';
import Reflux from 'reflux';
import ListTweet from './ListTweet';
import Mozaik from 'mozaik/browser';

var Timeline = React.createClass({
    mixins: [
        Reflux.ListenerMixin,
        Mozaik.Mixin.ApiConsumer
    ],

    propTypes: {
    },

    getInitialState() {
        return {
            tweets: []
        };
    },

    getApiRequest() {
        return {
            id: 'twitter.userTimeline'
        };
    },

    onApiData(tweets) {
        this.setState({
            tweets: tweets
        });
    },

    render() {
        var tweetNodes = this.state.tweets.map(tweet => {
            return <ListTweet key={tweet.id} tweet={tweet} />
        });

        return (
            <div>
                <div className="widget__header">
                    Twitter
                    <i className="fa fa-twitter" />
                </div>
                <div className="widget__body">
                    {tweetNodes}
                </div>
            </div>
        );
    }
});

module.exports = Timeline;