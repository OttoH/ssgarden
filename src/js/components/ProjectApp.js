var React = require('react');

var Fluxxor = require('Fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var ItemHeader = require('./ItemHeader');
var ProjectGrid = require('./ProjectGrid');
var Footer = require('./Footer');

var ProjectApp = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin('subImageStore')],

	getStateFromFlux: function() {
	    var flux = this.getFlux();
	    var pContent = flux.store('subImageStore').getProjectContent('projects') || [];

	    if (pContent.length) {
	    	return {
		    	projects: pContent
		    };
	    } else {
	    	flux.actions.getSubFromFlickr('projects');
	    	return {projects: []};
	    }
	},

	render: function() {
		var state = this.state;

		return (
			<div className="app-contain">
				<div className="head-wrap">
					<ItemHeader title="景觀作品" />
					<ProjectGrid projects={this.state.projects} />
					<Footer />
				</div>
			</div>
		);
	}
});

module.exports = ProjectApp;