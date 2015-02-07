var Constants = require("../constants");

module.exports = {
	open_about: function () {
		this.dispatch(Constants.OPEN_ABOUT);
	},

	open_contact: function () {
		this.dispatch(Constants.OPEN_CONTACT);
	},

	routes: {
	    transition: function(path, params) {
	    	this.dispatch(Constants.ROUTE.TRANSITION, {path: path, params: params});
	    }
  	}
  
};