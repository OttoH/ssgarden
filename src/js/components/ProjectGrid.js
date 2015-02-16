var React = require('react');

var cns = require('../lib/className');
var flickr = require('../webData')('flickr');

var ProdGrid = React.createClass({
	getInitialState: function() {
	    return {
				whichImage: 'data/main/404.png',
				showOriginImage: false
			};
	},

	handleClickImage: function (e) {
		e.preventDefault();
		var link = e.currentTarget.getAttribute('href') || '#';
		
		if (link !== '#') {
			this.setState({
				whichImage: link,
				showOriginImage: true
			});
		}
	},

	handelCloseImage: function (e) {
		e.preventDefault();

		this.setState({
				whichImage: '',
				showOriginImage: false
			});
	},

	render: function() {
		//var ori = ['data/main/ssub1.jpg', 'data/main/ssub2.jpg', 'data/main/ssub3.jpg', 'data/main/ssub4.jpg'];
		var imgURL_z = 'data/main/404.png';

		var grid = this.props.projects.map(function (V, I) {
		//var grid = ori.map(function (V, I) {
			var imgURL = 'https://farm' + V.farm + '.staticflickr.com/' + V.server + '/' + V.id + '_' + V.secret + '_m.jpg';
			imgURL_z = 'https://farm' + V.farm + '.staticflickr.com/' + V.server + '/' + V.id + '_' + V.secret + '_z.jpg';
			// var pageURL = 'https://www.flickr.com/photos/' + flickr.userId + '/' + V.id;
			var style = {
				img: {
					background: 'url(' + imgURL + ')',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					width: '100%',
					height: 180,
					display: 'block'
				}
			};
			//console.log(imgURL);
			return (
				<div className="pure-u-1-2 pure-u-sm-1-4 pure-u-lg-1-8" key={'prdgrid' + I.toString()}>
					<a href={imgURL_z} className="grid" onClick={this.handleClickImage}><span style={style.img}><p className="desc">{V.title}</p></span></a>
				</div>
			);
		}.bind(this));
		
		return (
			<div className="product pure-g">
				<div className={cns('showOriginImage', this.state.showOriginImage && 'show')} style={{
					backgroundImage: 'url(' + this.state.whichImage + ')',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'contain',
				}}><a href="#" className="close" onClick={this.handelCloseImage}>close[x]</a></div>
				{grid}
			</div>
		);
	}
});

module.exports = ProdGrid;