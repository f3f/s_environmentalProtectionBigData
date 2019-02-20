var Page = function() {
	
	var cityGreenKpi,totalTrendChart,colorChart,industryChart;
	
	function randomData(range) {
        return Math.round(Math.random()*range);
    }
	function randomDataArray(arraySize) {
		var result = [];
		for(var i =0;i<arraySize;i++){
			result.push(randomData(10));
		}
        return result;
    }
	
	var initCityGreenKpi = function(){
		cityGreenKpi = echarts.init(document.getElementById('cityGreenKpi'));
		var option = {
				baseOption: {
			        timeline: {
			            axisType: 'category',
			            autoPlay: true,
			            playInterval: 1000,
			            data: [
			                '2009-01-01','2010-01-01','2011-01-01','2012-01-01','2013-01-01','2014-01-01'
			            ],
			            label: {
			                formatter : function(s) {
			                    return (new Date(s)).getFullYear();
			                }
			            }
			        },
			        title: {
			            subtext: '数据来自国家统计局'
			        },
			        tooltip: {},
			        legend: {
			            x: 'right',
			            data: ['GDP', '绿色GDP', '绿色经济指数']
			        },
			        calculable : true,
			        grid: {
			            top: 80,
			            bottom: 100
			        },
			        xAxis: [
			            {
			                'type':'category',
			                'axisLabel':{'interval':0},
			                'data':['姑苏区','\n相城区','吴中区','\n虎丘区','吴江区','\n常熟市','昆山市','\n张家港市','太仓市'],
			                splitLine: {show: false}
			            }
			        ],
			        yAxis: [
			            {
			                type: 'value',
			                name: 'GDP（亿元）',
			                max: 20000
			            },
			            {
			                type: 'value',
			                scale: true,
			                name: '绿色经济指数',
			                max:20,
			                min: 0
			            }
			        ],
			        series: [
			            {name: 'GDP', type: 'bar'},
			            {name: '绿色GDP', type: 'bar'},
			            {name: '绿色经济指数', type: 'bar'},
			            {
			                name: '绿色GDP占比',
			                type: 'pie',
			                center: ['65%', '25%'],
			                radius: '28%'
			            }
			        ]
			    },
			    options: [
				{
				    title: {text: '2009全国宏观经济指标'},
				    series: [
				        {data: [4315,2150.76,6018.28,2324.8,1940.94,5458.22,2348.54,3637.2,5741.03]},
				        {data: [1249.99,1069.08,2911.69,1134.31,754.78,2609.85,943.49,1843.6,2622.45]},
				        {yAxisIndex: 1,data: randomDataArray(9)},
				        {data: [
				            {name: 'GDP', value: 87},
				            {name: '绿色GDP', value: 13}
				        ]}
				    ]
				},
				{
				    title: {text: '2010全国宏观经济指标'},
				    series: [
				        {data: [5007.21,2578.03,6921.29,2855.23,2388.38,6002.54,2662.08,4057.4,3923.11]},
				        {data: [1487.15,1337.31,3417.56,1463.38,967.49,2898.89,1098.37,2084.7,3209.02]},
				        {yAxisIndex: 1,data: randomDataArray(9)},
				        {data: [
				            {name: 'GDP', value: 82},
				            {name: '绿色GDP', value: 18}
				        ]}
				    ]
				},
				{
				    title: {text: '2011全国宏观经济指标'},
				    series: [
				        {data: [5007.21,2578.03,6921.29,2855.23,2388.38,6002.54,2662.08,4057.4,3923.11]},
				        {data: [1487.15,1337.31,3417.56,1463.38,967.49,2898.89,1098.37,2084.7,3209.02]},
				        {yAxisIndex: 1,data: randomDataArray(9)},
				        {data: [
				            {name: 'GDP', value: 78},
				            {name: '绿色GDP', value: 22}
				        ]}
				    ]
				},
				{
				    title: {text: '2012全国宏观经济指标'},
				    series: [
				        {data: [5007.21,2578.03,6921.29,2855.23,2388.38,6002.54,2662.08,4057.4,3923.11]},
				        {data: [1487.15,1337.31,3417.56,1463.38,967.49,2898.89,1098.37,2084.7,3209.02]},
				        {yAxisIndex: 1,data: randomDataArray(9)},
				        {data: [
				            {name: 'GDP', value: 75},
				            {name: '绿色GDP', value: 25}
				        ]}
				    ]
				},
				{
				    title: {text: '2013全国宏观经济指标'},
				    series: [
				        {data: [5007.21,2578.03,6921.29,2855.23,2388.38,6002.54,2662.08,4057.4,3923.11]},
				        {data: [1487.15,1337.31,3417.56,1463.38,967.49,2898.89,1098.37,2084.7,3209.02]},
				        {yAxisIndex: 1,data: randomDataArray(9)},
				        {data: [
				            {name: 'GDP', value: 70},
				            {name: '绿色GDP', value: 30}
				        ]}
				    ]
				},
				{
				    title: {text: '2014全国宏观经济指标'},
				    series: [
				        {data: [5007.21,2578.03,6921.29,2855.23,2388.38,6002.54,2662.08,4057.4,3923.11]},
				        {data: [1487.15,1337.31,3417.56,1463.38,967.49,2898.89,1098.37,2084.7,3209.02]},
				        {yAxisIndex: 1,data: randomDataArray(9)},
				        {data: [
				            {name: 'GDP', value: 60},
				            {name: '绿色GDP', value: 40}
				        ]}
				    ]
				},
				{
				    title: {text: '2015全国宏观经济指标'},
				    series: [
				        {data: [5007.21,2578.03,6921.29,2855.23,2388.38,6002.54,2662.08,4057.4,3923.11]},
				        {data: [1487.15,1337.31,3417.56,1463.38,967.49,2898.89,1098.37,2084.7,3209.02]},
				        {yAxisIndex: 1,data: randomDataArray(9)},
				        {data: [
				            {name: 'GDP', value: 58},
				            {name: '绿色GDP', value: 42}
				        ]}
				    ]
				}
			   ]
        };
		cityGreenKpi.setOption(option);
	}
	
	var initTotalTrend = function(){
		totalTrendChart = echarts.init(document.getElementById('totalTrendChart'));
		option = {
			    title: {
			        text: '总体趋势图'
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['GDP','绿色GDP','绿色经济指数']
			    },
			    toolbox: {
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['2009','2010','2011','2012','2013','2014','2015']
			        }
			    ],
			    yAxis: [{
	                type: 'value',
	                scale: true,
	                name: 'GDP(亿元)',
	                min: 0
	            },
	            {
	                type: 'value',
	                scale: true,
	                name: '绿色经济指数',
	                max:100,
	                min: 0
	            }],
			    series : [
			        {
			            name:'GDP',
			            type:'line',
			            yAxisIndex: 0,
			            stack: '总量',
			            smooth:true,
			            label: {
			                normal: {
			                    show: true,
			                    position: 'top'
			                }
			            },
			            areaStyle: {normal: {}},
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'绿色GDP',
			            type:'line',
			            yAxisIndex: 0,
			            stack: '总量',
			            smooth:true,
			            label: {
			                normal: {
			                    show: true,
			                    position: 'top'
			                }
			            },
			            areaStyle: {normal: {}},
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'绿色经济指数',
			            type:'line',
			            yAxisIndex: 0,
			            smooth:true,
			            stack: '总量',
			            label: {
			                normal: {
			                    show: true,
			                    position: 'top'
			                }
			            },
			            areaStyle: {normal: {}},
			            data:[150, 232, 201, 154, 190, 330, 410]
			        }
			    ]
			};
		totalTrendChart.setOption(option);
	}
	
	function initColorChart(){
		colorChart = echarts.init(document.getElementById('colorChart'));
		option = {
		    title : {
		        text: '苏州市绿色经济颜色比重',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['红色','橙色','黄色','浅绿色','绿色','深绿色','黑色']
		    },
		    color:['#e7505a','#e87e04','#f3c200','#36d7b7','#1bbc9b','green','#2c3e50'],
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:335, name:'红色'},
		                {value:310, name:'橙色'},
		                {value:234, name:'黄色'},
		                {value:135, name:'浅绿色'},
		                {value:548, name:'绿色'},
		                {value:135, name:'深绿色'},
		                {value:135, name:'黑色'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};

		colorChart.setOption(option);
	}
	
	var initIndustryChart = function(){
		industryChart = echarts.init(document.getElementById('industryChart'));
		option = {
		    title : {
		        text: '产业-绿色经济指数'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['GDP','绿色生态指数']
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
		            data : ['农牧','\n能源','化工','\n医疗','建筑','\n钢铁','交通','\n电子','制造']
		        }
		    ],
		    yAxis: [{
                type: 'value',
                scale: true,
                name: 'GDP(亿元)',
                min: 0
            },
            {
                type: 'value',
                scale: true,
                name: '绿色经济指数',
                max:10,
                min: 0
            }],
		    series : [
		        {
		            name:'GDP',
		            type:'bar',
		            data:[5007.21,2578.03,6921.29,2855.23,2388.38,6002.54,2662.08,4057.4,3923.11],
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
		        },
		        {
		            name:'绿色生态指数',
		            type:'bar',
		            yAxisIndex: 1,
		            data:[2.6, 5.9, 9.0, 6.4, 8.7, 7.7, 7.6, 8.2, 8.7],
		            markPoint : {
		                data : [
		                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
		                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
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
		industryChart.setOption(option);
	}
	
	return {
		init:function(){
			initCityGreenKpi();
			initTotalTrend();
			initColorChart();
			initIndustryChart();
			window.onresize = function(){
				cityGreenKpi.resize();
				colorChart.resize();
				industryChart.resize();
			}
		}
	}
}();