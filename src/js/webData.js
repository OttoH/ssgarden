var webData ={
		headerDesc: ['禧樹景觀設計旗艦店，為服務廣大的客戶，已於2007年7月，於台中市環中路一段，擴大營業。禧樹經營團隊堅持以”認真、用心、負責”的態度來完成每一件工程，承接的專案中，從整體規劃、設計到施工，皆由專業團隊執行。以獨有風格、藝術創作與不同元素的結合，呈現出有質地的自然之美。在禧樹巧思創作下，拉近了人們與藝術間的距離，景觀設計，不論其空間大小，皆可表現出精緻的園藝景觀，提升心靈饗宴。', '禧樹的營業項目有：庭院、空中花園、住家陽台、庭園造景，住家露台、餐廳、景觀設計施工，進口花器、大型組合盆栽、花草賣場、室內盆栽、開幕送禮室內盆栽、陽台景觀設計施工、景觀石材等等。'],
		headerContact: {
			_time: '08：00 - 21：30',
			phone: '04-2437-5260',
			fox: '04-2437-5267',
			email: 'shi.shu@msa.hinet.net',
			addr: '台中市東山路一段378-8號',
			gmap: 'http://goo.gl/maps/wZI6q'
		},
		mainImgs: ['data/main/main1.jpg', 'data/main/main2.jpg', 'data/main/main3.jpg'],
		subImgs: [
					{title: '景觀作品', img:'data/main/sub1.jpg'},
					{title: '工程實績', img: 'data/main/sub4.jpg'},
					{title: '園藝資材', img: 'data/main/sub2.jpg'}, 
					{title: '盆栽組合', img: 'data/main/sub3.jpg'} 
				]
	}

module.exports = function (key) {
	if (typeof webData[key] === 'undefined') {
		return;
	}
	return webData[key];

};