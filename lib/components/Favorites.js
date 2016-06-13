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

var Favorites = (function (Component) {
    function Favorites() {
        _classCallCheck(this, Favorites);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Favorites, Component);

    _prototypeProperties(Favorites, null, {
        render: {
            value: function render() {
                var cssClasses = "twitter__favorites";
                var favorite_count = this.props.tweet.favorite_count;


                if (favorite_count === 0) {
                    cssClasses += " twitter__favorites--none";
                }

                return React.createElement(
                    "span",
                    { className: cssClasses },
                    React.createElement("i", { className: "fa fa-star" }),
                    " ",
                    favorite_count ? favorite_count : ""
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Favorites;
})(Component);

Favorites.propTypes = {
    tweet: PropTypes.shape({
        favorite_count: React.PropTypes.number
    })
};

module.exports = Favorites;