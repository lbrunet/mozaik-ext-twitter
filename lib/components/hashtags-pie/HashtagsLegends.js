"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var PropTypes = _react.PropTypes;
var HashtagLegend = _interopRequire(require("./HashtagLegend"));

var HashtagsLegends = React.createClass({
    displayName: "HashtagsLegends",
    propTypes: {
        hashtags: React.PropTypes.arrayOf(React.PropTypes.shape({
            text: React.PropTypes.string,
            color: React.PropTypes.string
        })).isRequired
    },

    render: function render() {
        return React.createElement(
            "ul",
            { className: "twitter__hashtags-pie__legends__list" },
            this.props.hashtags.map(function (hashtag) {
                return React.createElement(HashtagLegend, { key: hashtag.normText, hashtag: hashtag });
            })
        );
    }
});

module.exports = HashtagsLegends;