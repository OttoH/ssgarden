var React = require('react');
var Fluxxor = require('Fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;
var cns = require('../lib/className');

var Header = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin('headerStore')],

	getStateFromFlux: function() {
	    var flux = this.getFlux();
	    return {
	    	headerContent: flux.store('headerStore').getState()
	    };
	},

	componentWillReceiveProps: function(nextProps) {
	    this.setState(this.getStateFromFlux());
	  },

	handleAboutClick: function (e) {
		e.preventDefault();
		this.getFlux().actions.open_about();
	},

	handleContactClick: function (e) {
		e.preventDefault();
		this.getFlux().actions.open_contact();
	},

	render: function() {

		return (
			<div className="header">
				<div className="menu shadow pure-g">
					<div className="pure-u-1 pure-u-md-1-6"><a href="#" className="logo"><span className="title"></span></a></div>
					<div className="pure-u-1 pure-u-md-5-6">
						<a href="#" className={cns('nav-item', (this.state.headerContent.openAbout) && 'selected')} onClick={this.handleAboutClick}><span>{'關於禧樹 about'}</span></a>
						<a href="#" className={cns('nav-item', (this.state.headerContent.openContact) && 'selected')} onClick={this.handleContactClick}><span>{'聯絡我們 contact'}</span></a>
					</div>
				</div>
				<div className={cns('about-block', (!this.state.headerContent.openAbout) && 'hidden')}>
					<div className="about-content">
						<div className="desc-up">{this.state.headerContent.descUp}</div>
						<div className="desc-down">{this.state.headerContent.descDown}</div>
					</div>
				</div>
				<div className={cns('contact-block', (!this.state.headerContent.openContact) && 'hidden')}>
					<div className="contact-content">
						<div className="contact-item"><span>營業時間 / </span>{this.state.headerContent.contact._time}</div>
						<div className="contact-item"><span>洽詢專線 / </span>{this.state.headerContent.contact.phone}</div>
						<div className="contact-item"><span>傳真號碼 / </span>{this.state.headerContent.contact.fox}</div>
						<div className="contact-item"><span>電子信箱 / </span><span><a href={'mailto:' + this.state.headerContent.contact.email}>{this.state.headerContent.contact.email}</a></span></div>
						<div className="contact-item"><span>營業地址 / </span><a href={this.state.headerContent.contact.gmap} target="_blank">{this.state.headerContent.contact.addr}</a></div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Header;