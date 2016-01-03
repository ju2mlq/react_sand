var Counter = require('./counter');
var CounterDisplay = require('./counter_display');
var React = require('react');

var counterRoot = React.createClass({
    render: function() {
      return (
        <div id="root">
          <Counter />
          <CounterDisplay />
        </div>
      );
    }
});

module.exports = counterRoot;
