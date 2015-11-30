"use strict";

var React = require("react");
var Reflux = require("reflux");
var moment = require("moment");
var _ = require("lodash");
var ApiConsumerMixin = require("mozaik/browser").Mixin.ApiConsumer;
var Treemap = require("mozaik/browser").Component.Treemap;


var HashtagsPie = React.createClass({
    displayName: "HashtagsPie",
    mixins: [Reflux.ListenerMixin, ApiConsumerMixin],

    propTypes: {
        hashtags: React.PropTypes.arrayOf(React.PropTypes.shape({
            text: React.PropTypes.string,
            color: React.PropTypes.string
        })).isRequired
    },

    getInitialState: function getInitialState() {
        return {
            hashtags: [],
            dateRange: null
        };
    },

    getApiRequest: function getApiRequest() {
        return {
            id: "twitter.searchByHashtags." + _.pluck(this.props.hashtags, "text").join("."),
            params: {
                hashtags: this.props.hashtags
            }
        };
    },

    onApiData: function onApiData(data) {
        this.setState({
            hashtags: data.hashtags,
            dateRange: {
                start: moment(data.dateRange.start),
                end: moment(data.dateRange.end)
            }
        });
    },

    render: function render() {
        var data = _.map(this.state.hashtags, function (hashtag) {
            return {
                id: hashtag.normText,
                label: "#" + hashtag.text,
                count: hashtag.count,
                color: hashtag.color
            };
        });

        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "widget__header" },
                "Twitter hashtags treemap",
                React.createElement("i", { className: "fa fa-twitter" })
            ),
            React.createElement(
                "div",
                { className: "widget__body" },
                React.createElement(Treemap, { data: { children: data }, showCount: true })
            )
        );
    }
});

module.exports = HashtagsPie;