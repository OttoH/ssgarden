var React = require('react');

var MainImage = React.createClass({
	render: function() {
		var props = this.props;
		var style = {
			img: {
				background: 'url(' + (this.props.mainImg || '') + ')',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				width: '100%',
				height: 600,
				display: 'block'
			}
		};
		var content = [];
		
		if (props.slogan) {
			content.push(
				<div className="image pure-u-1" style={style.img} key="main-image">
					<div className="slogan">{props.slogan}</div>
				</div>
				);
		} else {
			content.push(
				<div className="image pure-u-1" style={style.img} key="main-image">
					<div className="sub-image">
						<p className="title">最新消息。news</p>
						<p className="content">網站完工中...!</p>
					</div>
				</div>
				);
		}

		return (
			<div className="main-image pure-g">
				{content}
			</div>
		);
	}
});

module.exports = MainImage;