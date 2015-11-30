"use strict";

var React = require("react");
var moment = require("moment");

var Favorites = React.createClass({
    displayName: "Favorites",
    render: function render() {
        var cssClasses = "twitter__favorites";
        if (this.props.tweet.favorite_count === 0) {
            cssClasses += " twitter__favorites--none";
        }

        return React.createElement(
            "span",
            { className: cssClasses },
            React.createElement("i", { className: "fa fa-star" }),
            " ",
            this.props.tweet.favorite_count ? this.props.tweet.favorite_count : ""
        );
    }
});

module.exports = Favorites;