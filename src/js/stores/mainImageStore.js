var Fluxxor = require('fluxxor'),
    Constants = require('../constants');

var mainImageStore = Fluxxor.createStore({
	initialize: function(opt) {
		this.imgs = opt.imgs;
		this.selectMainImg = this.imgs[Math.floor(Math.random() * this.imgs.length)];

		this.bindActions();

	},

	getState: function() {
		return {
			selectMainImg: this.selectMainImg
		};
	}

});

module.exports = mainImageStore;