var React = require('react'),
	Router = require("react-router"),
	State = Router.State;
var Fluxxor = require('Fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React);

var ItemHeader = require('./ItemHeader');
var ProjectGrid = require('./ProjectGrid');
var Footer = require('./Footer');

var ProjectApp = React.createClass({
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
					<ProjectGrid />
					<Footer />
				</div>
			</div>
		);
	}
});

module.exports = ProjectApp;