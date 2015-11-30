"use strict";

var React = require("react");
var moment = require("moment");

var Retweets = React.createClass({
    displayName: "Retweets",
    render: function render() {
        var cssClasses = "twitter__retweets";
        if (this.props.tweet.retweet_count === 0) {
            cssClasses += " twitter__retweets--none";
        }

        return React.createElement(
            "span",
            { className: cssClasses },
            React.createElement("i", { className: "fa fa-retweet" }),
            " ",
            this.props.tweet.retweet_count ? this.props.tweet.retweet_count : ""
        );
    }
});

module.exports = Retweets;