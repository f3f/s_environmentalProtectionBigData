var report = function () {
	
	
	var finalCase = function(){
		var months = [];
		var category = ['举报', '投诉', '控告', '主动执法'];
		var data = {
		    '举报': []
		    ,'投诉': []
		    ,'控告': []
		    ,'主动执法': []
		};

		for (var i = 1; i <= 12; i++) {
		    months.push(i + '月');
		    for (var key in data) {
		        data[key].push(randomData(1000) + 50);
		    }
		}

		var option = {
		    tooltip : {
		        show: true,
		        trigger: 'item'
		    },
		    legend: {
		        data: category
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            data : months
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name: category[0],
		            type:'bar',
		            itemStyle: {        // 系列级个性化样式，纵向渐变填充
		                normal: {
		                    barBorderColor:'red',
		                    barBorderWidth: 5
		                },
		                emphasis: {
		                    barBorderWidth: 5,
		                    barBorderColor:'green',
		                    label : {
		                        show : true,
		                        position : 'top',
		                        formatter : "{a} {b} {c}",
		                        textStyle : {
		                            color: 'blue'
		                        }
		                    }
		                }
		            },
		            data: data[category[0]]
		        },
		        {
		            name: category[1],
		            type:'bar',
		            stack: '总量',
		            data: data[category[1]]
		        },
		        {
		            name: category[2],
		            type:'bar',
		            stack: '总量',
		            itemStyle: {                // 系列级个性化
		                normal: {
		                    barBorderWidth: 6,
		                    barBorderColor:'tomato',
		                    color: 'red'
		                },
		                emphasis: {
		                    barBorderColor:'red',
		                    color: 'blue'
		                }
		            },
		            data: data[category[2]]
		        },
		        {
		            name: category[3],
		            type:'bar',
		            barWidth: 30,                   // 系列级个性化，柱形宽度
		            itemStyle: {
		                normal: {                   // 系列级个性化，横向渐变填充
		                    borderRadius: 5,
		                    label : {
		                        show : true,
		                        textStyle : {
		                            fontSize : '20',
		                            fontFamily : '微软雅黑',
		                            fontWeight : 'bold'
		                        }
		                    }
		                }
		            },
		            data: data[category[3]],
		            markLine : {
		                data : [
		                    {type : 'average', name : '平均值'},
		                    {type : 'max'},
		                    {type : 'min'}
		                ]
		            }
		        }
		    ]
		};           
		return option;
	};
	
	
    return {
    	init:function(){
    		var finalCase = initEchart('report.finalCase');
    		
//    		echarts.init(document.getElementById('all-pollutant')).setOption(allPollutantOption);
    	},
    	finalCase: function(){
    		return finalCase();
    	}
    };
}();
