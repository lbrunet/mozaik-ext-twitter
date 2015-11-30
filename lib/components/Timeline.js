"use strict";

var React = require("react");
var Reflux = require("reflux");
var ListTweet = require("./ListTweet");
var ApiConsumerMixin = require("mozaik/browser").Mixin.ApiConsumer;

var Timeline = React.createClass({
    displayName: "Timeline",
    mixins: [Reflux.ListenerMixin, ApiConsumerMixin],

    propTypes: {},

    getInitialState: function getInitialState() {
        return {
            tweets: []
        };
    },

    getApiRequest: function getApiRequest() {
        return {
            id: "twitter.userTimeline"
        };
    },

    onApiData: function onApiData(tweets) {
        this.setState({
            tweets: tweets
        });
    },

    render: function render() {
        var tweetNodes = this.state.tweets.map(function (tweet) {
            return React.createElement(ListTweet, { key: tweet.id, tweet: tweet });
        });

        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "widget__header" },
                "Twitter",
                React.createElement("i", { className: "fa fa-twitter" })
            ),
            React.createElement(
                "div",
                { className: "widget__body" },
                tweetNodes
            )
        );
    }
});

module.exports = Timeline;