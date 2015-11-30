"use strict";

var React = require("react");
var Media = require("./Media");
var moment = require("moment");

var ListTweet = React.createClass({
    displayName: "ListTweet",
    render: function render() {
        var cssClasses = "list__item";
        var entities = this.props.tweet.entities;

        if (entities.hasOwnProperty("media")) {
            var tweetMedia = entities.media.map(function (media) {
                return React.createElement(Media, { key: media.id, media: media });
            });
        }

        return React.createElement(
            "div",
            { className: cssClasses },
            this.props.tweet.text,
            React.createElement(
                "div",
                null,
                React.createElement("i", { className: "fa fa-retweet" }),
                " ",
                this.props.tweet.retweet_count,
                " ",
                React.createElement("i", { className: "fa fa-heart" }),
                " ",
                this.props.tweet.favorite_count
            ),
            React.createElement(
                "div",
                null,
                tweetMedia
            )
        );
    }
});

module.exports = ListTweet;