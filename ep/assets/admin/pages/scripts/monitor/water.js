var Water = function () {
	
	function randomData() {
	    return Math.round(Math.random()*1000);
	}

	var allContryOption = {
	    title: {
	        text: 'iphone销量',
	        subtext: '纯属虚构',
	        left: 'center'
	    },
	    tooltip: {
	        trigger: 'item'
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data:['iphone3','iphone4','iphone5']
	    },
	    visualMap: {
	        min: 0,
	        max: 2500,
	        left: 'left',
	        top: 'bottom',
	        text: ['高','低'],           // 文本，默认为数值文本
	        calculable: true
	    },
	    toolbox: {
	        show: true,
	        orient: 'vertical',
	        left: 'right',
	        top: 'center',
	        feature: {
	            dataView: {readOnly: false},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    series: [
	        {
	            name: 'iphone3',
	            type: 'map',
	            mapType: 'china',
	            roam: false,
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            data:[
	                {name: '北京',value: randomData() },
	                {name: '天津',value: randomData() },
	                {name: '上海',value: randomData() },
	                {name: '重庆',value: randomData() },
	                {name: '河北',value: randomData() },
	                {name: '河南',value: randomData() },
	                {name: '云南',value: randomData() },
	                {name: '辽宁',value: randomData() },
	                {name: '黑龙江',value: randomData() },
	                {name: '湖南',value: randomData() },
	                {name: '安徽',value: randomData() },
	                {name: '山东',value: randomData() },
	                {name: '新疆',value: randomData() },
	                {name: '江苏',value: randomData() },
	                {name: '浙江',value: randomData() },
	                {name: '江西',value: randomData() },
	                {name: '湖北',value: randomData() },
	                {name: '广西',value: randomData() },
	                {name: '甘肃',value: randomData() },
	                {name: '山西',value: randomData() },
	                {name: '内蒙古',value: randomData() },
	                {name: '陕西',value: randomData() },
	                {name: '吉林',value: randomData() },
	                {name: '福建',value: randomData() },
	                {name: '贵州',value: randomData() },
	                {name: '广东',value: randomData() },
	                {name: '青海',value: randomData() },
	                {name: '西藏',value: randomData() },
	                {name: '四川',value: randomData() },
	                {name: '宁夏',value: randomData() },
	                {name: '海南',value: randomData() },
	                {name: '台湾',value: randomData() },
	                {name: '香港',value: randomData() },
	                {name: '澳门',value: randomData() }
	            ]
	        },
	        {
	            name: 'iphone4',
	            type: 'map',
	            mapType: 'china',
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            data:[
	                {name: '北京',value: randomData() },
	                {name: '天津',value: randomData() },
	                {name: '上海',value: randomData() },
	                {name: '重庆',value: randomData() },
	                {name: '河北',value: randomData() },
	                {name: '安徽',value: randomData() },
	                {name: '新疆',value: randomData() },
	                {name: '浙江',value: randomData() },
	                {name: '江西',value: randomData() },
	                {name: '山西',value: randomData() },
	                {name: '内蒙古',value: randomData() },
	                {name: '吉林',value: randomData() },
	                {name: '福建',value: randomData() },
	                {name: '广东',value: randomData() },
	                {name: '西藏',value: randomData() },
	                {name: '四川',value: randomData() },
	                {name: '宁夏',value: randomData() },
	                {name: '香港',value: randomData() },
	                {name: '澳门',value: randomData() }
	            ]
	        },
	        {
	            name: 'iphone5',
	            type: 'map',
	            mapType: 'china',
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            data:[
	                {name: '北京',value: randomData() },
	                {name: '天津',value: randomData() },
	                {name: '上海',value: randomData() },
	                {name: '广东',value: randomData() },
	                {name: '台湾',value: randomData() },
	                {name: '香港',value: randomData() },
	                {name: '澳门',value: randomData() }
	            ]
	        }
	    ]
	};


	var mapEast= function(){
		var list = [
				[119.768556,31.516017],
				[120.037042,30.758135],
				[120.057739,30.892104],
				[120.188819,30.868301],
				[120.342897,30.896071],
				[120.529169,30.828617],
				[120.648752,30.80182],
				[120.823526,30.948612],
				[120.837324,31.114966],
				[120.855721,31.229657],
				[120.809728,31.383676],
				[120.699344,31.482272],
				[120.570563,31.612259]
		];
		var option = {
			strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5
		};
		return {list: list,option: option};
	};

	var mapWest= function(){
		var list = [
				[119.768556,31.516017],
				[119.457527,31.498038],
				[119.356342,31.304724],
				[119.291951,31.111008],
				[119.673695,30.770051],
				[120.037042,30.758135],
		];
		var option = {
			strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5
		};
		return {list: list,option: option};
	};

	var labelWest =  {
		geo: [120.20659,31.166396],
		text: '东部平原水生态功能区',
		fontSize: 10
	};

	var labelEast =  {
		geo: [119.36554,31.229657],
		text: '西部丘陵水生态功能区',
		fontSize: 10
	};

	
    return {
    	init:function(){
			var mapShow = bMap.init("water.map",[120.142251,31.217428],9);
			var east = mapEast();
			mapShow.addOverlay(bMap.initPolygon(east.list,east.option));
			var west = mapWest();
			mapShow.addOverlay(bMap.initPolygon(west.list,west.option));
            mapShow.addOverlay(bMap.initLabel(labelWest));
            mapShow.addOverlay(bMap.initLabel(labelEast));
		},
        mapEast: function(){
            return mapEast();
        },
        mapWest: function(){
            return mapWest();
        }
    };
}();
