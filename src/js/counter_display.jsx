var React = require('react');

var counterDisplay = React.createClass({
    now: function() {
      return new Date().toString();
    },
    render: function() {
      return (
        <h3>{this.now()}</h3>
      );
    }
});

module.exports = counterDisplay;
