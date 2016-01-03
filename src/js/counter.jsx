var React = require('react');
var Counter = React.createClass({
    handler: function() {
      console.log('pressed');
    },
    render: function() {
      return (
        <input type="button" value="push" onClick={this.handler} />
      );
    }
});

module.exports = Counter;
