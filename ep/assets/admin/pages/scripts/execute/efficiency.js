var efficiency = function () {
	
	var radar = function(){
		var aDataValues = [];
		for (var i=0; i<12; i++) {
		    aDataValues.push(randomData(100));
		}
		var option = {
		    title: {
		        text: '基础雷达图'
		    },
		    tooltip: {},
		    radar: {
		        // shape: 'circle',
		        indicator: [
		           { name: '现场处理完毕', max: 100},
		           { name: '长期未处理', max: 100},
		           { name: '1年', max: 100},
		           { name: '10月', max: 100},
		           { name: '半年', max: 100},
		           { name: '1季度', max: 100},
		           { name: '2个月', max: 100},
		           { name: '1个月', max: 100},
		           { name: '15-20个工作日', max: 100},
		           { name: '10-15个工作日', max: 100},
		           { name: '5-10个工作日', max: 100},
		           { name: '1-3个工作日', max: 100}
		        ]
		    },
		    series: [{
		        name: '执法案件数量',
		        type: 'radar',
		        data : [
		            {
		                value : aDataValues,
		                name : '执法案件数量'
		            }
		        ]
		    }]
		};                   
		return option;
	};
	
	
	var guage = function(){
		option = {
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    toolbox: {
			        feature: {
			            restore: {},
			            saveAsImage: {}
			        }
			    },
			    series: [
			        {
			            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
			                show: true,
			                formatter: function (value) {
			                    switch(value) {
			                        case 10: return '弱';
			                        case 30: return '低';
			                        case 60: return '中';
			                        case 90: return '高';
			                        default: return "";
			                    }
			                }
			            },
			            title: {
			            	offsetCenter: ['-80%', -10],
			                textStyle: {
			                    fontSize: 14
			                }
			            },
			            name: '执法效率指数',
			            radius: '80%',
			            startAngle: 150,
			            endAngle: -150,
			            type: 'gauge',
			            detail: {
			                offsetCenter: ['-80%', 25],
			                formatter:'{value}%'
			            },
			            data: [{value: 50, name: '执法效率指数'}]
			        }
			    ]
			};


		return option;
	};

	
    return {
    	init:function(){
    		var finalCasePercent = initEchart('efficiency.radar');
    		var finalCasePercent = initEchart('efficiency.guage');
    		
//    		echarts.init(document.getElementById('all-pollutant')).setOption(allPollutantOption);
    	},
    	radar: function(){
    		return radar();
    	},
    	guage: function(){
    		return guage();
    	}
    };
}();
