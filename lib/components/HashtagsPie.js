"use strict";

var React = require("react");
var Reflux = require("reflux");
var moment = require("moment");
var _ = require("lodash");
var ApiConsumerMixin = require("mozaik/browser").Mixin.ApiConsumer;
var Pie = require("mozaik/browser").Component.Pie;
var HashtagsLegends = require("./hashtags-pie/HashtagsLegends");

var HashtagsPie = React.createClass({
    displayName: "HashtagsPie",
    mixins: [Reflux.ListenerMixin, ApiConsumerMixin],

    getDefaultProps: function getDefaultProps() {
        return {
            layout: "right"
        };
    },

    propTypes: {
        hashtags: React.PropTypes.arrayOf(React.PropTypes.shape({
            text: React.PropTypes.string,
            color: React.PropTypes.string
        })).isRequired,
        layout: React.PropTypes.oneOf(["top", "right", "bottom", "left"])
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
                count: hashtag.count,
                color: hashtag.color
            };
        });

        var containerClasses = "widget__body twitter__hashtags-pie__container ";
        containerClasses += "twitter__hashtags-pie__container--layout-" + this.props.layout;

        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "widget__header" },
                "Twitter hashtags donut",
                React.createElement("i", { className: "fa fa-twitter" })
            ),
            React.createElement(
                "div",
                { className: containerClasses },
                React.createElement(
                    "div",
                    { className: "twitter__hashtags-pie__chart" },
                    React.createElement(Pie, { innerRadius: 0.6, data: data })
                ),
                React.createElement(
                    "div",
                    { className: "twitter__hashtags-pie__legends" },
                    React.createElement(HashtagsLegends, { hashtags: this.state.hashtags })
                )
            )
        );
    }
});

module.exports = HashtagsPie;