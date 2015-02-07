var React = require('react'),
	Router = require("react-router"),
	State = Router.State,
    Link = Router.Link;

var cns = require('../lib/className');

var ItemHeader = React.createClass({
	mixins: [
	    State
	],

	render: function() {
		
		return (
			<div className="header item">
				<div className="menu shadow pure-g">
					<div className="back-button pure-u-1-6 pure-u-sm-4-24"><Link to="home"><span className="back_link"></span></Link></div>
					<div className="title pure-u-5-6 pure-u-sm-20-24"><span className="main-title">禧樹園藝設計</span><span className="sub-title">{this.props.title}</span></div>
				</div>
			</div>
		);
	}
});

module.exports = ItemHeader;