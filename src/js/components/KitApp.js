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
	    var pContent = flux.store('subImageStore').getProjectContent('kits') || [];

	    if (pContent.length) {
	    	return {
		    	projects: pContent
		    };
	    } else {
	    	flux.actions.getSubFromFlickrMulti('kits');
	    	return {projects: []};
	    }  
	},

	render: function() {
		var state = this.state;
		
		var grids = state.projects.map(function (V, I) {
				return (<ProjectGrid projects={V.photo} key={"kits.grids." + I} isShort={true}/>);
			});

		console.log(this.state.projects);
		return (
			<div className="app-contain scroll-container" ref="scrollContainer">
				<div className="head-sub-page short">
					<ItemHeader title="花市" />
					{grids}
					<Footer />
				</div>
			</div>
		);
	}
});

module.exports = ItemApp;