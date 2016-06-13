"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var PropTypes = _react.PropTypes;
var Reflux = _interopRequire(require("reflux"));

var ListTweet = _interopRequire(require("./ListTweet"));

var Mozaik = _interopRequire(require("mozaik/browser"));

var Timeline = React.createClass({
    displayName: "Timeline",
    mixins: [Reflux.ListenerMixin, Mozaik.Mixin.ApiConsumer],

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