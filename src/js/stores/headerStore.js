var Fluxxor = require('fluxxor'),
    Constants = require('../constants');

var headerStore = Fluxxor.createStore({
	initialize: function(opt) {
		this.desc = opt.desc;
		this.contact = opt.contact;
		this.openAbout = false;
		this.openContact = false;

		this.bindActions(
			Constants.OPEN_ABOUT, this.handleOpenAbout,
			Constants.OPEN_CONTACT, this.handleOpenContact
			);

	},

	getState: function() {
		return {
			descUp: this.desc[0],
			descDown: this.desc[1],
			contact: this.contact,
			openAbout: this.openAbout,
			openContact: this.openContact
		};
	},

	getMenuState: function () {
		return {
			openAbout: this.openAbout,
			openContact: this.openContact
		};
	},

	handleOpenAbout: function () {
		if (this.openContact) {
			this.openContact = false;
		}

		this.openAbout = !this.openAbout;
		this.emit("change");

	},

	handleOpenContact: function () {
		if (this.openAbout) {
			this.openAbout = false;
		}

		this.openContact = !this.openContact;
		this.emit("change");
	}

});

module.exports = headerStore;