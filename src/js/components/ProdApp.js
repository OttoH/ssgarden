var React = require('react'),
	Router = require("react-router"),
	State = Router.State;
var Fluxxor = require('Fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React);

var ItemHeader = require('./ItemHeader');
var ProdGrid = require('./ProdGrid');
var Footer = require('./Footer');

var ItemApp = React.createClass({
	mixins: [FluxMixin, State],

	getStateFromFlux: function() {
	    var flux = this.getFlux();
	},

	render: function() {
		var state = this.state;

		return (
			<div className="app-contain">
				<div className="head-wrap">
					<ItemHeader title="景觀作品" />
					<ProdGrid />
					<Footer />
				</div>
			</div>
		);
	}
});

module.exports = ItemApp;