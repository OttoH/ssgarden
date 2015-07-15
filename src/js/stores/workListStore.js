var Fluxxor = require('fluxxor'),
    Constants = require('../constants');

var workListStore = Fluxxor.createStore({
	initialize: function(opt) {
		this.currentWork = opt.currentWork;
		this.workList = opt.workList;

		this.bindActions(Constants.SET_CURRENT_WORK, this.setCurrentWork);

	},

	setCurrentWork: function (payload) {
		if (payload) {
			this.currentWork = payload.year;
			this.emit("change");
		}
	},

	getSelectYears: function () {
		var years = [];

		for (K in this.workList) {
			years.push(K);
		}

		return years;
	},

	getCurrentWork: function () {
		return this.workList[this.currentWork] || [];
	}
});

module.exports = workListStore;