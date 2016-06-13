"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var PropTypes = _react.PropTypes;
var moment = _interopRequire(require("moment"));

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