var Constants = require("../constants");

module.exports = {
	open_about: function () {
		this.dispatch(Constants.OPEN_ABOUT);
	},

	open_contact: function () {
		this.dispatch(Constants.OPEN_CONTACT);
	}
  
};