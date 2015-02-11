var React = require("react/addons");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
	mixins: [ Router.State ],

	render: function() {
		var name = this.getRoutes().reverse()[0].name || 'home';
		//console.log(this.props.flux);

		
		return (
				<CSSTransitionGroup component="div" transitionName="moveUp">
					<RouteHandler {...this.props} key={name} />
				</CSSTransitionGroup>
		);
		
		/*
		return (
				<RouteHandler {...this.props} />
		);
		*/
	}
});