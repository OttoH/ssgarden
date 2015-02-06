var React = require('react');

var Footer = React.createClass({
	render: function() {
		return (
			<div className="footer">
				<span className="copyright">Copyright © 2015 <span className="company-name">禧樹園藝景觀設計</span></span>
				<div className="footer-items">
					<a href="#" className="footer-link"><span>About us</span></a>
					<a href="#" className="footer-link no-line"><span>Contact us</span></a>
				</div>
			</div>
		);
	}
});

module.exports = Footer;