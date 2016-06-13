"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var PropTypes = _react.PropTypes;
var moment = _interopRequire(require("moment"));

var TweetMedia = _interopRequire(require("./TweetMedia"));

var ListTweet = (function (Component) {
    function ListTweet() {
        _classCallCheck(this, ListTweet);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(ListTweet, Component);

    _prototypeProperties(ListTweet, null, {
        render: {
            value: function render() {
                var cssClasses = "list__item";
                var entities = this.props.tweet.entities;
                var tweetMedia;

                if (entities.hasOwnProperty("media") && entities.media.length > 0) {
                    tweetMedia = entities.media.map(function (media) {
                        return React.createElement(TweetMedia, { key: media.id,
                            media: media });
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
                    tweetMedia
                );
            },
            writable: true,
            configurable: true
        }
    });

    return ListTweet;
})(Component);

ListTweet.propTypes = {
    entities: PropTypes.object()
};

module.exports = ListTweet;