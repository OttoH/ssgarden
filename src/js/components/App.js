var React = require('react'),
	Router = require("react-router");

var Fluxxor = require('Fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Header = require('./Header');
var MainImage = require('./MainImage');
var SubImage = require('./SubImage');
var Footer = require('./Footer');

var App = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin('mainImageStore')],

	getStateFromFlux: function() {
	    var flux = this.getFlux();
	    return {
	      	mainImage: flux.store('mainImageStore').getState(),
	      	subImages: flux.store('subImageStore').getState()
	    };
	},

	render: function() {
		var state = this.state;
		
		return (
			<div className="app-contain" key={name}>
				<div className="head-wrap">
					<Header flux={flux} />
					<MainImage mainImg={state.mainImage.selectMainImg} />
				</div>
				<div className="sub-wrap">
					<SubImage flux={flux} subImages={state.subImages.subImgs} />
				</div>
				<div className="footer-wrap">
					<Footer />
				</div>
			</div>
		);
	}
});

module.exports = App;