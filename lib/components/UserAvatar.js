"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var PropTypes = _react.PropTypes;
var moment = _interopRequire(require("moment"));

var UserAvatar = React.createClass({
    displayName: "UserAvatar",
    render: function render() {
        var user = this.props.tweet.user;
        if (this.props.tweet.retweeted === true) {
            user = this.props.tweet.retweeted_status.user;
        }

        //console.log(user);

        var avatarUrl = user.profile_image_url.replace("_normal", "_mini");

        return React.createElement(
            "span",
            { className: "twitter__avatar" },
            React.createElement("img", { src: avatarUrl, alt: user.name })
        );
    }
});

module.exports = UserAvatar;