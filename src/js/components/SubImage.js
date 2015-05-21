var React = require('react'),
	Router = require("react-router"),
	Navigation = Router.Navigation,
    Link = Router.Link;

var Fluxxor = require('fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React);

var $ = require('jquery');
//var Request = require('request');

var SubImage = React.createClass({

	mixins: [
		FluxMixin,
		Navigation
	],

	handleSubImage: function (e) {
		e.preventDefault();

		var link = e.currentTarget.getAttribute('href') || '#';

		console.log(link);

		if (link !== '#') {
			this.getFlux().actions.getSubFromFlickr(link);

			this.transitionTo(link, {});
		}
		

	},

	render: function() {
		
		var props = this.props;
		// var style = {};
		var content = [];

		if (Array.isArray(props.subImages)) {
			props.subImages.forEach(function (V, I) {
				style = {
					background: 'url(' + V.img + ')',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					display: 'block',
					height: 180
				};

				content.push(
						<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4" key={'subimg' + I}>
							<div className="sub-img-block">
								<div className="sub-img-title">{V.title}</div>
								<a href={V.link} onClick={this.handleSubImage}><div className="sub-link"><span className="sub-image" style={style} key={'sub_' + I}></span></div></a>
							</div>
						</div>
					);
			}.bind(this));
		}

		return (
			<div className="sub-images pure-g">
				{content}
			</div>
		);
	}
});

module.exports = SubImage;