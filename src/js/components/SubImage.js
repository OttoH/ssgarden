var React = require('react');

var SubImage = React.createClass({
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
								<a href="#" className="sub-link"><span className="sub-image" style={style} key={'sub_' + I}></span></a>
							</div>
						</div>
					);
			});
		}

		return (
			<div className="sub-images pure-g">
				{content}
			</div>
		);
	}
});

module.exports = SubImage;