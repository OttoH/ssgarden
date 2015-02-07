var React = require("react"),
    Router = require("react-router"),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

var App = require('./components/App');
var ProdApp = require('./components/ProdApp');
var WorkApp = require('./components/WorkApp');
var ResApp = require('./components/ResApp');
var KitApp = require('./components/KitApp');
var EmptyView = require("./components/EmptyView");


var routes = (
	<Route handler={EmptyView} name="home" path="/">
		<Route handler={ProdApp} name="projects" path="/projects" />
		<Route handler={WorkApp} name="works" path="/works" />
		<Route handler={ResApp} name="resource" path="/resource" />
		<Route handler={KitApp} name="kits" path="/kits" />

    	<DefaultRoute handler={App} />
  	</Route>
);

module.exports = routes;