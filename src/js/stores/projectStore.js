var Fluxxor = require('fluxxor'),
    Constants = require('../constants');

var projectStore = Fluxxor.createStore({
	initialize: function(opt) {
		this.projects = opt.projects;

		this.bindActions(Constants.SET_PROJECTS, this.setProjects);

	},

	setProjects: function (payload) {
		if (payload) {
			this.projects = payload;
			this.emit("change");
		}
	}
});

module.exports = projectStore;