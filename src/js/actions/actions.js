var Constants = require("../constants");
//var Request = require('request');

var $ = require('jquery');
var flickr = require('../webData')('flickr');

module.exports = {
	open_about: function () {
		this.dispatch(Constants.OPEN_ABOUT);
	},

	open_contact: function () {
		this.dispatch(Constants.OPEN_CONTACT);
	},

	getSubFromFlickr: function (link) {
		var url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&'
					+ 'api_key=' + flickr.apiKey + '&'
					+ 'photoset_id=' + flickr.sets[link] + '&'
					+ 'format=json&nojsoncallback=1';

		$.ajax({
	      url: url,
	      dataType: 'json',
	      cache: true,
	      success: function(data) {
	      	var payload = {};

	      	payload[link] = data.photoset.photo;
	      	//console.log(data);
	      	this.dispatch(Constants.GET_SUB_FROM_FLICKR, payload);
	        
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error('flickr', status, err.toString());
	      }.bind(this)
	    });
	},
	
	getSubFromFlickrMulti: function (link) {
		var urls = flickr.sets[link].split(",");
		var promiseArr = [];
		var payload = {};
					
		urls.forEach(function (V, I) {
			promiseArr.push(new Promise (function (resolve, reject) {
				var url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&'
					+ 'api_key=' + flickr.apiKey + '&'
					+ 'photoset_id=' + V + '&'
					+ 'format=json&nojsoncallback=1';
					
				$.ajax({
			      url: url,
			      dataType: 'json',
			      cache: true,
			      success: function(data) {
			      	resolve({
			      		'title': data.photoset.title,
			      		'photo': data.photoset.photo
			      	});
			        
			      },

			      error: function(xhr, status, err) {
			        console.error('flickr', status, err.toString());
			        reject(err);
			      }
			    });
			}));
		});
		Promise.all(promiseArr)
				.then(function (D) {
					payload[link] = D;
					this.dispatch(Constants.GET_SUB_FROM_FLICKR, payload);
				}.bind(this));
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