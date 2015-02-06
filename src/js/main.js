var React = require('react'),
	Fluxxor = require('fluxxor');

var cons = require('./webData');

var App = require('./components/App'),
	headerStore = require('./stores/headerStore'),
	mainImageStore = require('./stores/mainImageStore'),
	subImageStore = require('./stores/subImageStore'),
	actions = require('./actions/actions');

var stores = {
	headerStore: new headerStore({
						desc: cons('headerDesc'),
						contact: cons('headerContact')
						}),
  	mainImageStore: new mainImageStore({imgs: cons('mainImgs')}),
  	subImageStore: new subImageStore({imgs: cons('subImgs')})
};

var flux = new Fluxxor.Flux(stores, actions);
window.flux = flux;


flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

React.render(<App flux={flux} />, document.getElementById('main'));