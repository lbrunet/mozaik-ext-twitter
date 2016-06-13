"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var PropTypes = _react.PropTypes;


var TweetMedia = React.createClass({
    displayName: "TweetMedia",
    render: function render() {
        var cssClasses = "media";

        return React.createElement("img", { src: this.props.media.media_url, className: cssClasses, alt: "" });
    }
});

module.exports = TweetMedia;