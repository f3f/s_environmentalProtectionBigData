var land = function () {
	
	var map = function (){
		var option;
		
		function randomData() {
		    return Math.round(Math.random() * 10000);
		}

		option = {
		    tooltip: {
		        trigger: 'item'
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data:['土壤质量']
		    },
		    visualMap: {
		        min: 0,
		        max: 10000,
		        left: 'left',
		        top: 'bottom',
		        text: ['高','低'], // 文本，默认为数值文本
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
		            name: '土壤质量',
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
		                {name: '澳门',value: randomData() }
		            ]
		        }
		    ]
		};
     
		return option;
	};
	
	var percent = function(){
		var option;
		
		option = {
			    title: {
//			        text: '基础雷达图'
			    },
			    tooltip: {},
			    legend: {
			        data: ['土壤污染超标率']
			    },
			    radar: {
//			         shape: 'circle',
			        indicator: [
			           { name: '全国土壤总超标率', max: 50},
			           { name: '土壤镉超标率', max: 50},
			           { name: '固体废物集中处理场地土壤超标点位', max: 50},
			           { name: '耕地点位超标率', max: 50},
			           { name: '重污染企业以周边土壤超标点位', max: 50}
			        ]
			    },
			    series: [{
			        name: '土壤污染超标率',
			        type: 'radar',
			        areaStyle: {normal: {}},
			        data : [
			            {
			                value : [16.1, 7.0, 21.3, 19.4, 36.3],
			                name : '超标率'
			            }
			        ]
			    }]
			};
		
		return option;
	};
	
	var mainFrom = function(){
		var option = {
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        x: 'center',//无机污染物（如重金属、酸、盐等）、有机农药（如化肥、杀虫剂、除莠剂等）、有机废弃物（如生物可降解或难降解的有机废物等）、污泥、矿渣和粉煤灰、放射性物质、寄生虫、病原菌
			        y: 'bottom',
			        data:['废气','废水','废渣','无机污染物','有机农药','有机废弃物','污泥','矿渣','粉煤灰','寄生虫', '病原菌']
			    },
			    series: [
			        {
			            name:'污染源',
			            type:'pie',
			            selectedMode: 'single',
			            radius: [0, '30%'],

			            label: {
			                normal: {
			                    position: 'inner'
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[//废气、废水、废渣
			                {value:335, name:'废气', selected:true},
			                {value:679, name:'废水'},
			                {value:1548, name:'废渣'}
			            ]
			        },
			        {
			            name:'土壤污染源',
			            type:'pie',
			            radius: ['40%', '55%'],

			            data:[
			                {value:335, name:'无机污染物'},
			                {value:310, name:'有机农药'},
			                {value:234, name:'有机废弃物'},
			                {value:135, name:'污泥'},
			                {value:1048, name:'矿渣'},
			                {value:251, name:'粉煤灰'},
			                {value:147, name:'寄生虫'},
			                {value:102, name:'病原菌'}
			            ]
			        }
			    ]
			};
		
		return option;
	};
	
    return {
    	init:function(){
    		//var crChart = initEchart('voice.cr');
    		var map = initEchart('land.map');
    		var percent = initEchart('land.percent');
    		
    		var mainFrom = initEchart('land.mainFrom');
    		
    	},
    	map: function(){
    		return map();
    	},
    	percent: function (){
    		return percent();
    	},
    	mainFrom: function(){
    		return mainFrom();
    	}
    };
}();
