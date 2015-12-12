"use strict";

var React = require("react");
var TweetMedia = require("./TweetMedia");
var moment = require("moment");

var ListTweet = React.createClass({
  displayName: "ListTweet",
  render: function render() {
    var cssClasses = "list__item";
    var entities = this.props.tweet.entities;
    var tweetMedia;

    if (entities.hasOwnProperty("media") && entities.media.length > 0) {
      tweetMedia = entities.media.map(function (media) {
        return React.createElement(TweetMedia, { key: media.id, media: media });
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
  }
});

module.exports = ListTweet;