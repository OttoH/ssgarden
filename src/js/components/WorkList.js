var React = require('react'),
	Router = require("react-router"),
	State = Router.State,
    Link = Router.Link;

var cns = require('../lib/className');

var WorkList = React.createClass({
	mixins: [
	    State
	],

	render: function() {
		var ori = [
			{mon: 'July', work: '日船企業赤鬼牛排工業區五路新廠景觀規劃施工案、昌平四街 林公館&廖公館景觀工程設計案、鄉林帝堡 游公館住宅景觀設計施工案、詮佳臻寶A9+A10住宅景觀設計施工案(天坊設計)、帝闊 張公館 景觀修改工程、德之院 陳小姐 住宅景觀設計施工案'},
			{mon: 'Aug', work: '中港皇家建設 皇家皇品樣品屋景觀施工案、鄉林帝堡 游公館住宅景觀設計施工案、詮佳臻寶A9+A10住宅景觀設計施工案(天坊設計)、日船企業赤鬼牛排工業區五路新廠景觀規劃施工案'},
			{mon: 'Sep', work:'鄉林帝堡 游公館住宅景觀設計施工案、詮佳臻寶A9+A10住宅景觀設計施工案(天坊設計)、苗栗 鯉魚潭休閒會館景觀規畫施工案、永春東三路劉公館景觀修改工程(含奕設計)、河北西街呂小姐景觀設計施工案、昌平四街林公館景觀規劃施工案、宜欣三街張小姐景觀規劃施工案'}
		 ];
		var list = ori.map(function (V, I) {

			return (
				<div className="pure-u-1" key={'worklist' + I.toString()}>
					<div className="workterm">
						<span className="date">{V.mon + ':'}</span><span className="term">{V.work}</span>
					</div>
				</div>
			);
		});
		
		return (
			<div className="worklist">
				<div className="selector">
					<ul>
						<li><a href="#">規劃中</a></li>
						<li><a href="#">2012</a></li>
						<li><a href="#">2011</a></li>
						<li><a href="#">2010</a></li>
						<li><a href="#">2009</a></li>
					</ul>
				</div>
				<div className="list pure-g">
					{list}
				</div>
			</div>
		);
	}
});

module.exports = WorkList;