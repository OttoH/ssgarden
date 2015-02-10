var React = require('react'),
	Router = require("react-router"),
	State = Router.State;

var Fluxxor = require('Fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var ItemHeader = require('./ItemHeader');
var WorkList = require('./WorkList');
var Footer = require('./Footer');

var ItemApp = React.createClass({
	mixins: [FluxMixin, State, StoreWatchMixin('workListStore')],

	getStateFromFlux: function() {
	    var flux = this.getFlux();

	    return {
	    	selectYears: flux.store('workListStore').getSelectYears(),
	    	currentList: flux.store('workListStore').getCurrentWork()
	    };
	},

	handleCurrent: function (year) {
		this.getFlux().actions.setCurrentWork(year);
	},

	render: function() {
		var state = this.state;

		return (
			<div className="app-contain">
				<div className="head-wrap">
					<ItemHeader title="工程實績" />
					<WorkList 
						handleCurrent={this.handleCurrent} 
						selectYears={this.state.selectYears} 
						workList={this.state.currentList} />
					<Footer />
				</div>
			</div>
		);
	}
});

module.exports = ItemApp;