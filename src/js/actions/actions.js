var Constants = require("../constants");

module.exports = {
	open_about: function () {
		this.dispatch(Constants.OPEN_ABOUT);
	},

	open_contact: function () {
		this.dispatch(Constants.OPEN_CONTACT);
	},

	setCurrentWork: function (year) {
		this.dispatch(Constants.SET_CURRENT_WORK, {year: year});
	},

	routes: {
	    transition: function(path, params) {
	    	this.dispatch(Constants.ROUTE.TRANSITION, {path: path, params: params});
	    }
  	}
  
};