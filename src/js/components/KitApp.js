var React = require('react');

var Fluxxor = require('Fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var ItemHeader = require('./ItemHeader');
var ProjectGrid = require('./ProjectGrid');
var Footer = require('./Footer');

var ItemApp = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin('subImageStore')],

	getStateFromFlux: function() {
	    var flux = this.getFlux();
	    var pContent = flux.store('subImageStore').getProjectContent('kits') || [];

	    if (pContent.length) {
	    	return {
		    	projects: pContent
		    };
	    } else {
	    	flux.actions.getSubFromFlickr('kits');
	    	return {projects: []};
	    }  
	},

	render: function() {
		var state = this.state;

		return (
			<div className="app-contain">
				<div className="head-wrap">
					<ItemHeader title="盆栽組合" />
					<ProjectGrid projects={this.state.projects} />
					<Footer />
				</div>
			</div>
		);
	}
});

module.exports = ItemApp;