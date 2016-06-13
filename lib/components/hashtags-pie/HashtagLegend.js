"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var PropTypes = _react.PropTypes;


var HashtagLegend = React.createClass({
    displayName: "HashtagLegend",
    propTypes: {
        hashtag: React.PropTypes.shape({
            text: React.PropTypes.string,
            color: React.PropTypes.string
        }).isRequired
    },

    render: function render() {
        var colorStyle = {
            backgroundColor: this.props.hashtag.color
        };

        return React.createElement(
            "li",
            { className: "twitter__hashtags-pie__legend" },
            React.createElement("span", { style: colorStyle, className: "twitter__hashtags-pie__legend__color" }),
            this.props.hashtag.text,
            " ",
            React.createElement(
                "span",
                { className: "count" },
                this.props.hashtag.count
            )
        );
    }
});

module.exports = HashtagLegend;