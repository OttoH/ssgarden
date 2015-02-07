var Fluxxor = require('fluxxor'),
    Constants = require('../constants');

var routeStore = Fluxxor.createStore({
  initialize: function(options) {
    this.router = options.router;

    this.bindActions(
      Constants.ROUTE.TRANSITION, this.handleRouteTransition
    );
  },

  handleRouteTransition: function(payload) {
    var path = payload.path,
        params = payload.params;

    this.router.transitionTo(path, params);
  }
});

module.exports = routeStore;