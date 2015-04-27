var React = require('react');

var Fluxxor = require('Fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var ItemHeader = require('./ItemHeader');
var ProjectGrid = require('./ProjectGrid');
var Footer = require('./Footer');

var ItemApp = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin('subImageStore')],

	getStateFromFlux: function() {
	    var flux = this.getFlux();
	    var pContent = flux.store('subImageStore').getProjectContent('works') || [];

	    if (pContent.length) {
	    	return {
		    	projects: pContent
		    };
	    } else {
	    	flux.actions.getSubFromFlickr('works');
	    	return {projects: []};
	    }  
	},

	handleFilter: function (year) {
		
	},

	render: function() {
		var state = this.state;

		return (
			<div className="app-contain">
				<div className="head-wrap">
					<ItemHeader title="工程實績" />
					<div className="selector">
						<ul>
							<li>2012</li>
							<li>2011</li>
							<li>2010</li>
						</ul>
					</div>
					<ProjectGrid projects={this.state.projects} />
					<Footer />
				</div>
			</div>
		);
	}
});

module.exports = ItemApp;