var React = require('react'),
	Router = require("react-router");

var cns = require('../lib/className');

var WorkList = React.createClass({

	handleClick: function (year) {
		this.props.handleCurrent(year)
	},
	
	render: function() {
		var selectYears = this.props.selectYears.reverse().map(function (V, I) {
			var year = (V === 'planning') ? '規劃中' : (V + '年');
			
			return <li key={'selectYears' + I}><div onClick={this.handleClick.bind(this, V)}>{year}</div></li>;
		}.bind(this)); 
		 
		var list = this.props.workList.map(function (V, I) {
			return (
				<div className="pure-u-1" key={'worklist' + I.toString()}>
					<div className="workterm">
						<span className="term">{V}</span>
					</div>
				</div>
			);
		});
		
		return (
			<div className="worklist">
				<div className="selector">
					<ul>
						{selectYears}
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