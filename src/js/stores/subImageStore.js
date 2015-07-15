var Fluxxor = require('fluxxor'),
    Constants = require('../constants');

var subImageStore = Fluxxor.createStore({
	initialize: function(opt) {
		this.imgs = opt.imgs;
		this.subContent = {
			projects: {}
		};

		this.bindActions(Constants.GET_SUB_FROM_FLICKR, this.getSubFromFlickr);

	},

	getState: function() {
		return {
			subImgs: this.imgs
		};
	},

	getSubFromFlickr: function (payload) {
		this.subContent[Object.keys(payload)[0]] = payload[Object.keys(payload)[0]];
		//console.log(this.subContent);
		this.emit("change");
	},

	getProjectContent: function (link) {
		if (this.subContent[link]) {
			return this.subContent[link];
		}
	}

});

module.exports = subImageStore;