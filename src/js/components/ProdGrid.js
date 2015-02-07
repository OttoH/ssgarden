var React = require('react'),
	Router = require("react-router"),
	State = Router.State,
    Link = Router.Link;

var cns = require('../lib/className');

var ProdGrid = React.createClass({
	mixins: [
	    State
	],

	render: function() {
		var ori = ['data/main/_sub1.jpg', 'data/main/_sub2.jpg', 'data/main/_sub3.jpg', 'data/main/_sub4.jpg'];
		var grid = ori.map(function (V, I) {
		var style = {
			img: {
				background: 'url(' + (V || '') + ')',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				width: '100%',
				height: 180,
				display: 'block'
			}
		};

			return (
				<div className="pure-u-1-2 pure-u-sm-1-4 pure-u-lg-1-8" key={'prdgrid' + I.toString()}>
					<span style={style.img}></span>
				</div>
			);
		});
		
		return (
			<div className="product">
				<div className="selector">
					<ul>
						<li><a href="#">熱情南洋</a></li>
						<li><a href="#">典雅南歐</a></li>
						<li><a href="#">禪意日式</a></li>
						<li><a href="#">地中海風情</a></li>
						<li><a href="#">中庭自建地</a></li>
					</ul>
				</div>
				<div className="photo-grid pure-g">
					{grid}
				</div>
			</div>
		);
	}
});

module.exports = ProdGrid;