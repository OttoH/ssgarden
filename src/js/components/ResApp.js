var React = require('react');

var Fluxxor = require('fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var ItemHeader = require('./ItemHeader');
var ProjectGrid = require('./ProjectGrid');
var Footer = require('./Footer');

var ItemApp = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin('subImageStore')],

	getStateFromFlux: function() {
	    var flux = this.getFlux();
	    var pContent = flux.store('subImageStore').getProjectContent('resource') || [];

	    if (pContent.length) {
	    	return {
		    	projects: pContent
		    };
	    } else {
	    	flux.actions.getSubFromFlickr('resource');
	    	return {projects: []};
	    }  
	},

	render: function() {
		//console.log(this.state.projects); 
		var state = this.state;

		return (
			<div className="app-contain">
				<div className="head-wrap">
					<ItemHeader title="園藝資材" />
					<ProjectGrid projects={this.state.projects} />
					<Footer />
				</div>
			</div>
		);
	}
});

module.exports = ItemApp;