var React = require('react'),
	Router = require("react-router"),
	Fluxxor = require('fluxxor');

var cons = require('./webData');
var routes = require("./routes");

var App = require('./components/App'),
	headerStore = require('./stores/headerStore'),
	mainImageStore = require('./stores/mainImageStore'),
	subImageStore = require('./stores/subImageStore'),
	routeStore = require("./stores/routeStore"),
	actions = require('./actions/actions');

//router
var router = Router.create({routes: routes});

var stores = {
	route: new routeStore({router: router}),
	headerStore: new headerStore({
						desc: cons('headerDesc'),
						contact: cons('headerContact')
						}),
  	mainImageStore: new mainImageStore({imgs: cons('mainImgs')}),
  	subImageStore: new subImageStore({imgs: cons('subImgs')})
};

var flux = new Fluxxor.Flux(stores, actions);
window.flux = flux;

/*
flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});
*/

router.run(function(Handler, P) {
	React.render(<Handler flux={flux} />, document.getElementById('main'));
});