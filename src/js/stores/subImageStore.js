var Fluxxor = require('fluxxor'),
    Constants = require('../constants');

var subImageStore = Fluxxor.createStore({
	initialize: function(opt) {
		this.imgs = opt.imgs;

		this.bindActions();

	},

	getState: function() {
		return {
			subImgs: this.imgs
		};
	}

});

module.exports = subImageStore;