"use strict";

var React = require("react");

var Media = React.createClass({
    displayName: "Media",
    render: function render() {
        var cssClasses = "media";

        return React.createElement("img", { src: this.props.media.media_url, className: cssClasses, alt: "" });
    }
});

module.exports = Media;