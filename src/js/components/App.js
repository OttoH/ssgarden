var React = require('react'),
	Router = require("react-router"),
	Navigation = Router.Navigation,
    Link = Router.Link;

var Fluxxor = require('fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Header = require('./Header');
var WD = require('../webData.js');
//var MainImage = require('./MainImage');
//var SubImage = require('./SubImage');
//var Footer = require('./Footer');

var TweenLite = require('gsap');
var SmoothScrollMixin = require('../lib/smoothScroll.js');
var cns = require('../lib/className');
var mGoWhere = false;
var mChange = -2;

var App = React.createClass({
	mixins: [FluxMixin, Navigation, StoreWatchMixin('mainImageStore'), SmoothScrollMixin],

	getStateFromFlux: function() {
	    var flux = this.getFlux();

	    return {
	      	mainImage: flux.store('mainImageStore').getState(),
	      	subImages: flux.store('subImageStore').getState(),
	      	showCover: false,
	      	where: '',
	      	lastWhere: '',
	      	isOpenHambgr: false
	    };
	},
	
	handleScrollTo: function(e) {
			e.preventDefault();
			var $container = this.refs.scrollContainer.getDOMNode();
			
			this.setState({
		    	where: e.currentTarget.getAttribute('data-where'),
		    	lastWhere: e.currentTarget.getAttribute('data-where')
		    });
		    
		    mGoWhere = true;
			
			//cancelAnimationFrame(this.animFrame);
			
			this.setState({
		      nextPosition: e.currentTarget.getAttribute('data-y')
		    });
		    
		    window.scroll(0, e.currentTarget.getAttribute('data-y'));
		    
		    //this.animFrame = requestAnimationFrame(this.animationLoop);
		    
	},
	
	handelNothing: function (e){
		e.preventDefault();
	},
	
	handleSubImage: function (e) {
		e.preventDefault();

		var link = e.currentTarget.getAttribute('href') || '#';

		if (link !== '#') {
			this.getFlux().actions.getSubFromFlickrMulti(link);
			
			this.transitionTo(link, {});
			
		}
		

	},
	
	handleHambgrClick: function (e) {
		e.preventDefault();
		this.setState({isOpenHambgr: !this.state.isOpenHambgr});
	},

	render: function() {
		var state = this.state;
		var mWhere;
		
		var aboutParagraph = WD('headerDesc').map(function (V, I) {
				return <p key={'headdesc' + I}>{V}</p>;
			});
			
		var airParagraph = WD('airDesc').map(function (V, I) {
			return <p key={'airdesc' + I}>{V}</p>;
		});

		if (!mGoWhere) {
			if (state.scrollPercent < 5) {
				mWhere = 'cover';
			} else if (state.scrollPercent >= 7 && state.scrollPercent < 15) {
				mWhere = 'about';
			} else if (state.scrollPercent >= 15 && state.scrollPercent < 23) {
				mWhere = 'meat';
			} else if (state.scrollPercent >= 23 && state.scrollPercent < 30) {
				mWhere = 'air';
			} else if (state.scrollPercent >= 30 && state.scrollPercent < 38) {
				mWhere = 'flover';
			} else if (state.scrollPercent >= 38 && state.scrollPercent < 46) {
				mWhere = 'suit';
			} else if (state.scrollPercent >= 46 && state.scrollPercent < 53) {
				mWhere = 'life';
			} else if (state.scrollPercent >= 53 && state.scrollPercent < 61) {
				mWhere = 'season';
			} else if (state.scrollPercent >= 61 && state.scrollPercent < 69) {
				mWhere = 'water';
			} else if (state.scrollPercent >= 69 && state.scrollPercent < 76) {
				mWhere = 'float';
			} else if (state.scrollPercent >= 76 && state.scrollPercent < 83) {
				mWhere = 'garden-view';
			} else if (state.scrollPercent >= 83 && state.scrollPercent < 92) {
				mWhere = 'balcony';
			} else if (state.scrollPercent >= 92 && state.scrollPercent <= 99) {
				mWhere = 'contact';
			}
		} else {
			mWhere = state.lastWhere;
			mChange++;
		}
		
		if (mChange === 0) {
			mGoWhere = false;
			mChange = -2;
		}
		
		if (mWhere === 'cover') {
			this.canMoveHeroImage = true;
		} else {
			this.canMoveHeroImage = false;
		}
		
		return (
			<div className="app-contain">
				<div className={cns('header-mobile', (state.where === 'cover' || mWhere == 'cover') && 'cover')}>
					<div className="hambgr">
						<a href="#" className={cns('hambgr-link', this.state.isOpenHambgr && 'active')} onClick={this.handleHambgrClick}><span className="hamgbr-icon"></span></a>
					</div>
				</div>
				<div className={cns('head-wrap', (state.where === 'cover' || mWhere == 'cover') && 'cover', this.state.isOpenHambgr && 'open')}>
				<div className="header">
				<div className="menu shadow">
					<div className="side-section">
						<a href="#" data-y="770" data-where="about" className={cns('nav-item', (mWhere === 'about' || state.where === 'about') && 'located')} onClick={this.handleScrollTo}><span data-y="770">{'About'}</span></a>
						<a href="#" data-where="meat" className={cns('nav-item', (mWhere === 'meat' || state.where === 'meat') && 'located')} data-y="1538" onClick={this.handleScrollTo}><span data-y="1538">{'多肉精靈'}</span></a>
						<a href="#" data-where="air" className={cns('nav-item', (mWhere === 'air' || state.where === 'air') && 'located')} data-y="2311" onClick={this.handleScrollTo}><span data-y="2300">{'氣根生'}</span></a>
						<a href="#" data-where="flover" className={cns('nav-item', (mWhere === 'flover' || state.where === 'flover') && 'located')} data-y="3074" onClick={this.handleScrollTo}><span data-y="3074">{'芳香生活'}</span></a>
						<a href="#" data-where="suit" className={cns('nav-item', (mWhere === 'suit' || state.where === 'suit') && 'located')} data-y="3840" onClick={this.handleScrollTo}><span data-y="3840">{'精緻組盆'}</span></a>
						<a href="#" data-where="life" className={cns('nav-item', (mWhere === 'life' || state.where === 'life') && 'located')} data-y="4607" onClick={this.handleScrollTo}><span data-y="4607">{'品味生活'}</span></a>
						<a href="#" data-where="season" className={cns('nav-item', (mWhere === 'season' || state.where === 'season') && 'located')} data-y="5377" onClick={this.handleScrollTo}><span data-y="5377">{'季節草花'}</span></a>
						<a href="projects" className={cns('nav-item')} onClick={this.handleSubImage}><span>{'工程'}</span></a>
						<a href="#" data-where="water" className={cns('nav-item', 'indent', (mWhere === 'water' || state.where === 'water') && 'located')} data-y="6143" onClick={this.handleScrollTo}><span data-y="6143">{'水景'}</span></a>
						<a href="#" data-where="float" className={cns('nav-item', 'indent', (mWhere === 'float' || state.where === 'float') && 'located')} data-y="6920" onClick={this.handleScrollTo}><span data-y="6920">{'空中花園'}</span></a>
						<a href="#" data-where="garden-view" className={cns('nav-item', 'indent', (mWhere === 'garden-view' || state.where === 'garden-view') && 'located')} data-y="7680" onClick={this.handleScrollTo}><span data-y="7680">{'庭園景觀'}</span></a>
						<a href="#" data-where="balcony" className={cns('nav-item', 'indent', (mWhere === 'balcony' || state.where === 'balcony') && 'located')} data-y="8450" onClick={this.handleScrollTo}><span data-y="8450">{'露台景觀'}</span></a>
						<a href="kits" data-where="market" className={cns('nav-item', (mWhere === 'market' || state.where === 'market') && 'located')} data-y="9216" onClick={this.handleSubImage}><span data-y="9216">{'花市'}</span></a>
						<a href="#" data-where="contact" className={cns('nav-item', (mWhere === 'contact' || state.where === 'contact') && 'located')} data-y="9984" onClick={this.handleScrollTo}><span data-y="9984">{'聯絡我們'}</span></a>
					</div>
					<div><a href="https://www.facebook.com/shishumarket?fref=ts" target="_blank" className="fb"></a></div>
					<div><a href="#" className="logo"></a></div>
				</div>
			</div>
				</div>
				<div className="scroll-container" ref="scrollContainer">
				<div className="main-image cover">
					<div className="coverBakc" ref="coverEffect" />
					<span className="title"></span>
					<span className="copy-right">本網站刊出之內容、圖片之著作權，屬於禧樹景觀所有，未經本公司同意或授權，任何人不得隨意轉載、散佈、引用。</span>					
				</div>
				<div className="main-image about" id='#about'>
					<div className={cns('sub-image', 'page-text')}>
						<div className="sub-title"><span>{'ABOUT'}</span></div>
						<div className="sub-content">{aboutParagraph}</div>
						<div className="sub-select">
							<a href="projects" onClick={this.handleSubImage} className="circle-btn"><span>工程</span></a>
							<a href="kits" onClick={this.handleSubImage} className="circle-btn"><span>花市</span></a>
						</div>
					</div>
				</div>
				<div className="main-image meat">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p>{'多肉精靈'}</p>
							<p>{'SUCCULENT'}</p>
						</div>
						<div className="sub-content">
							<div className="window-area">
								{WD('meatDesc')}
							</div>
						</div>
					</div>
				</div>
				<div className="main-image air">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p><span>{'氣根生'}</span><span className="small-font">空氣鳳梨&蘭花</span></p>
							<p>{'AERIAL ROOT'}</p>
						</div>
						<div className="sub-content show-overflow-y">
							<div className="window-area">
								{airParagraph}
							</div>
						</div>
					</div>
				</div>
				<div className="main-image flover">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p>{'芳香生活'}</p>
							<p>{'HERB'}</p>
						</div>
						<div className="sub-content">
							<div className="window-area">
								{WD('flavorDesc')}
							</div>
						</div>
					</div>
				</div>
				<div className="main-image suit">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p>{'精緻組盆'}</p>
							<p>{'POTTING'}</p>
						</div>
						<div className="sub-content">
							<div className="window-area">
								{WD('suitDesc')}
							</div>
						</div>
					</div>
				</div>
				<div className="main-image life">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p>{'品味生活'}</p>
							<p>{'LIFESTYLE'}</p>
						</div>
						<div className="sub-content">
							<div className="window-area">
								{WD('lifeDesc')}
							</div>
						</div>
					</div>
				</div>
				<div className="main-image season">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p>{'季節花草'}</p>
							<p>{'SEASON'}</p>
						</div>
						<div className="sub-content">
							<div className="window-area">
								{WD('seasonDesc')}
							</div>
						</div>
					</div>
				</div>
				<div className="main-image water">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p>{'水景'}</p>
							<p>{'WATER'}</p>
						</div>
						<div className="sub-content">
							<div className="window-area">
								{WD('waterDesc')}
							</div>
						</div>
					</div>
				</div>
				<div className="main-image float">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p>{'空中花園'}</p>
							<p>{'PARADISE'}</p>
						</div>
						<div className="sub-content">
							<div className="window-area">
								{WD('floatDesc')}
							</div>
						</div>
					</div>
				</div>
				<div className="main-image garden-view">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p>{'庭園景觀'}</p>
							<p>{'GARDENVIEW'}</p>
						</div>
						<div className="sub-content">
							<div className="window-area">
								{WD('gardenDesc')}
							</div>
						</div>
					</div>
				</div>
				<div className="main-image balcony">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p>{'露台景觀'}</p>
							<p>{'BALCONY'}</p>
						</div>
						<div className="sub-content">
							<div className="window-area">
								{WD('balconyDesc')}
							</div>
						</div>
					</div>
				</div>
				<div className="main-image contact">
					<div className="sub-image page-text">
						<div className="sub-title">
							<p>{'聯絡我們'}</p>
							<p>{'CONTACT'}</p>
						</div>
						<div className="sub-content">
							<p className="list"><a href="https://www.google.com.tw/maps/place/Section+1,+Songzhu+Rd,+Beitun+District,+Taichung+City,+406/@24.1822959,120.7149144,17z/data=!3m1!4b1!4m2!3m1!1s0x3469182101bb80db:0xabcc34d69ad86a35" target="_blank">台中市北屯區松竹路一段 37 號</a></p>
							<p className="list">禧樹花市 04- 2437-0585</p>
							<p className="list">禧樹景觀 04- 2437-5260</p>
							<p className="list">Fax : 2437-5267</p>
							<p className="list"><a href="mailto:shi.shu@msa.hinet.net">shi.shu@msa.hinet.net</a></p>
							<p className="list tit">交通資訊</p>
							<p className="list">松竹路東山路交叉口(鄰近大坑)</p>
							<p className="list tit">鄰近公車站</p>
							<p className="list">圓山新村、正覺寺</p>
							<p className="list">1、15、16、20、21、31、66、68、85、270、271、276、277</p>
							<p className="list tit">停車資訊</p>
							<p className="list">沿路路邊停車格</p>
						</div>
					</div>
				</div>
				</div>
			</div>
		);
	}
});

module.exports = App;