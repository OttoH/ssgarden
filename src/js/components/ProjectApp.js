var React = require('react');

var Fluxxor = require('fluxxor'),
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
		    	projects: pContent,
		    	isOpen: 0
		    };
	    } else {
	    	flux.actions.getSubFromFlickrMulti('projects');
	    	return {
	    		projects: [],
	    		isOpen: 0
	    	};
	    }
	},
	
	toggleOpen: function (e) {
		e.preventDefault();

		this.setState({
			isOpen: e.currentTarget.getAttribute('href')
		});
	},

	render: function() {
		var state = this.state;

		var grids = state.projects.map(function (V, I) {
				return (
					<div key={"projects.grids" + I}>
						<a href={I} onClick={this.toggleOpen}><span className="grid-title">{V.title}</span></a>
						<ProjectGrid projects={V.photo} hidden={(Number(state.isOpen) !== I)}/>
					</div>
				);
			}.bind(this));

		return (
			<div className="app-contain scroll-container" ref="scrollContainer">
				<div className="head-sub-page">
					<ItemHeader title="設計工程" />
					{grids}
					<Footer />
				</div>
			</div>
		);
	}
});

module.exports = ProjectApp;