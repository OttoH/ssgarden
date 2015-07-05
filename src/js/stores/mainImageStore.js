var Fluxxor = require('fluxxor'),
    Constants = require('../constants');

var mainImageStore = Fluxxor.createStore({
	initialize: function(opt) {
		this.news = [];

		this.bindActions(Constants.GET_NEWS_FROM_FLICKR, this.setCurrentNews);

	},
	
	setCurrentNews: function (payload) {
		if (payload) {
			this.news = payload.news;
			this.emit("change");
		}
	},

	getState: function() {
		return this.news;
	}

});

module.exports = mainImageStore;