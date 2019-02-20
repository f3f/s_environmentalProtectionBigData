var Page = function() {
	var companyKpiChart,allCompanyChart;
	
	function randomData(range) {
        return Math.round(Math.random()*range);
    }
	
	//判断浏览区是否支持canvas
    function isSupportCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }
	
	function randomDataArray(arraySize,range) {
		var result = [];
		for(var i =0;i<arraySize;i++){
			result.push(randomData(range));
		}
        return result;
    }
	
	var initAllCompanyChart = function(){
		allCompanyChart = echarts.init(document.getElementById('allCompanyChart'));
		option = {
		    title : {
		        text: 'TOP10企业-环评指数'
		    },
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data:['环评指数']
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            data : ['金龙','\n伊格特','奥莱鑫','\n仁益翔化','青田','\n振德隆','瑞特良','\n松远','宏都','\n森本']
		        }
		    ],
		    yAxis: [
            {
                type: 'value',
                scale: true,
                name: '环评指数',
                max:1000,
                min: 0
            }],
		    series : [
		        {
		            name:'环评指数',
		            type:'bar',
		            data:randomDataArray(10,1000),
		            markPoint : {
		                data : [
		                    {name : '年最高', value : 182.2, xAxis: 0, yAxis: 718}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name : '平均值'}
		                ]
		            }
		        }
		    ]
		};
		allCompanyChart.setOption(option);
	}
	
	var initCompanyKpiChart = function(){
		companyKpiChart = echarts.init(document.getElementById('companyKpiChart'));
		option = {
				title: {
	                text: '苏州金龙环评指数(A)',
	                subtext: '评估时间：2016.03.06',
	                left: 'left'
	            },
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c}"
			    },
			    toolbox: {
			        feature: {
			            restore: {},
			            saveAsImage: {}
			        }
			    },
			    series: [
			        {
			            name: '环境指数',
			            max:1000,
			            type: 'gauge',
			            detail: {formatter:'{value}'},
			            data: [{value: 718, name: '环评分数'}]
			        }
			    ]
			};

		companyKpiChart.setOption(option);
	}
	
	var initBaiduMap = function(){
		var styleJson = [
             {
                 "featureType": "road",
                 "elementType": "labels",
                 "stylers": {
                           "visibility": "off"
                 }
             },
             {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": {
                          "visibility": "off"
                }
              }
		 ];
		var map = new BMap.Map("companyMapChart");          // 创建地图实例
	    var point = new BMap.Point(104.072222,30.662863);
	    map.centerAndZoom(point, 11);             // 初始化地图，设置中心点坐标和地图级别
	    map.setMapStyle({styleJson:styleJson});
	    var points =[
	    {"lng":104.057274,"lat":30.525336,"count":89},
	    {"lng":104.062736,"lat":30.532304,"count":50},
	    {"lng":104.075384,"lat":30.533051,"count":50},
	    {"lng":104.075384,"lat":30.533051,"count":50},
	    {"lng":103.972331,"lat":30.579917,"count":80},
	    {"lng":104.024935,"lat":30.585948,"count":30},
	    {"lng":104.03435,"lat":30.580041,"count":30},
	    {"lng":104.046207,"lat":30.577243,"count":30},
	    {"lng":104.060149,"lat":30.573387,"count":30},
	    {"lng":104.068126,"lat":30.571584,"count":30},
	    {"lng":104.016096,"lat":30.58259,"count":30},
    	{"lng":104.009269,"lat":30.581533,"count":30},
    	{"lng":103.9908,"lat":30.577927,"count":30},
		{"lng":103.976571,"lat":30.575812,"count":30},
		{"lng":103.972474,"lat":30.579419,"count":30},
	    {"lng":104.076965,"lat":30.55221,"count":50},
	    {"lng":104.07524,"lat":30.560296,"count":50},
	    {"lng":104.076247,"lat":30.542398,"count":50},
	    {"lng":104.074666,"lat":30.572734,"count":50},
	    {"lng":104.075743,"lat":30.581191,"count":50},
	    {"lng":104.0756,"lat":30.594124  ,"count":50},
	    {"lng":104.074881,"lat":30.602206,"count":50},
	    {"lng":104.090548,"lat":30.602331,"count":50},
	    {"lng":104.107939,"lat":30.600093,"count":50},
	    {"lng":104.127342,"lat":30.602455,"count":50},
	    {"lng":104.143727,"lat":30.611531,"count":50},
	    {"lng":104.148614,"lat":30.616628,"count":50},
	    {"lng":104.152495,"lat":30.62533 ,"count":50},
	    {"lng":104.1558,"lat":30.634279  ,"count":50},
	    {"lng":104.16155,"lat":30.630551 ,"count":98}
	   ];
	   
	    if(!isSupportCanvas()){
	    	alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
	    }
		heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
		map.addOverlay(heatmapOverlay);
		
		heatmapOverlay.setDataSet({data:points,max:100});
		
	}
	
	return {
		init:function(){
			initCompanyKpiChart();
			initAllCompanyChart();
			initBaiduMap();
			window.onresize = function(){
				companyKpiChart.resize();
				allCompanyChart.resize();
			}
		}
	}
}();