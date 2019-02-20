var emergency = function () {
	
	
var line = function(){
		
		var nowHour = new Date().getHours()
		, hours = []
		, news = []
		, bbs = []
		, tieba = []
		, blog = []
		, zf = []
		, media = []
		, weibo = []
		, other = []
		;
		
		for (var i = nowHour; i< 24; i++){
			hours.push(i);
			news.push(randomData(50) + 100);
			bbs.push(randomData(50) + 50);
			tieba.push(randomData(25) + 25);
			blog.push(randomData(25) + 20);
			zf.push(randomData(25) + 15);
			media.push(randomData(20) + 10);
			weibo.push(randomData(20) + 5);
			other.push(randomData(20) + 1);
		}
		
		for(var i=0; i < nowHour; i++){
			hours.push(i);
			news.push(randomData(100) + 200);
			bbs.push(randomData(100) + 150);
			tieba.push(randomData(100) + 100);
			blog.push(randomData(100) + 50);
			zf.push(randomData(50) + 20);
			media.push(randomData(50) + 10);
			weibo.push(randomData(20) + 5);
			other.push(randomData(20) + 1);
		}
		
		
		var option = {
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			    	x: 'left',
			        data:['新闻','论坛','贴吧','博客','政府','媒体','微博','其它']
			    },
			    toolbox: {
			        show: true,
			        feature: {
			            dataZoom: {},
			            dataView: {readOnly: false},
			            magicType: {type: ['line', 'bar']},
			            restore: {},
			            saveAsImage: {}
			        }
			    },
			    xAxis:  {
			        type: 'category',
			        boundaryGap: false,
			        data: hours,
			        axisLabel: {
			            formatter: '{value} 点'
			        }
			    },
			    yAxis: {
			        type: 'value',
			        axisLabel: {
			            formatter: '{value} 次'
			        }
			    },
			    series: [
			        {
			            name:'新闻',
			            type:'line',
			            data: news,
			            markPoint: {
			                data: [
			                    {type: 'max', name: '最大值'},
			                    {type: 'min', name: '最小值'}
			                ]
			            }
//			        ,
//			            markLine: {
//			                data: [
//			                    {type: 'average', name: '平均值'}
//			                ]
//			            }
			        }
			        ,
			        {
			            name:'论坛',
			            type:'line',
			            data: bbs,
			            markPoint: {
			                data: [
			                    {name: '最低', value: 20, xAxis: 1, yAxis: -1.5}
			                ]
			            }
			        }
			        ,
			        {
			        	name:'贴吧',
			        	type:'line',
			        	data: tieba,
			        	markPoint: {
			        		data: [
			        		       {name: '最低', value: 20, xAxis: 1, yAxis: -1.5}
			        		       ]
			        	}
			        }
			        ,
			        {
			        	name:'博客',
			        	type:'line',
			        	data: blog,
			        	markPoint: {
			        		data: [
			        		       {name: '最低', value: 20, xAxis: 1, yAxis: -1.5}
			        		       ]
			        	}
			        }
			        ,
			        {
			        	name:'政府',
			        	type:'line',
			        	data: zf,
			        	markPoint: {
			        		data: [
			        		       {name: '最低', value: 20, xAxis: 1, yAxis: -1.5}
			        		       ]
			        	}
			        }
			        ,
			        {
			        	name:'媒体',
			        	type:'line',
			        	data: media,
			        	markPoint: {
			        		data: [
			        		       {name: '最低', value: 20, xAxis: 1, yAxis: -1.5}
			        		       ]
			        	}
			        }
			        ,
			        {
			        	name:'微博',
			        	type:'line',
			        	data: weibo,
			        	markPoint: {
			        		data: [
			        		       {name: '最低', value: 20, xAxis: 1, yAxis: -1.5}
			        		       ]
			        	}
			        }
			        ,
			        {
			        	name:'其它',
			        	type:'line',
			        	data: other,
			        	markPoint: {
			        		data: [
			        		       {name: '最低', value: 20, xAxis: 1, yAxis: -1.5}
			        		       ]
			        	}
			        }
			    ]
			};

		
		return option;
	};
	
	var mediaType = function (){
		var dataArr = ['新闻', '论坛', '博客', '微博', '贴吧', '视频', '媒体', '政府', '其它'];
		var data = [];
		for (var index in dataArr){
			data.push({name: dataArr[index], value: Math.round(Math.random() * 300 )});
		}
		
		var option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
//		        orient: 'vertical',
		        x: 'left',
		        y: 'bottom',
		        data: dataArr
		    },
		    series: [
		        {
		            name:'次数',
		            type:'pie',
		            selectedMode: 'single',
		            center: ['50%', '35%'],
		            radius: [0, '55%'],
		            data: data
		        }
		    ]
		};
		return option;
	};
	
	var fromWhere = function(){
		var dataArr = ['新浪微博','其它媒体','土豆视频','中关村在线','天涯论坛'];
		var data = [];
		for (var index in dataArr){
			data.push({name: dataArr[index], value: Math.round(Math.random() * 300 )});
		}
		
		var option = {
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
//		    	orient: 'horizontal',
		    	x: 'left',
		        data:['次数']
		    },
		    toolbox: {
		    	x: 'right',
//		    	orient: 'vertical',
		        show : true,
		        feature : {
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : {
	        	splitNumber: dataArr.length,
	            type : 'category',
	            data : dataArr
		    },
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'次数',
		            type:'bar',
		            data: data,
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        }
		    ]
		};

		return option;
	};

	
    return {
    	init:function(){
    		var care = initEchart('emergency.line');
    		var mediaType = initEchart('emergency.mediaType');
    		var fromWhere = initEchart('emergency.fromWhere');
    		
//    		echarts.init(document.getElementById('all-pollutant')).setOption(allPollutantOption);
    	},
    	line: function(){
    		return line();
    	},
    	mediaType: function (){
    		return mediaType();
    	},
    	fromWhere: function(){
    		return fromWhere();
    	}
    };
}();
