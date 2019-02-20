var Page = function(){
	
	var initTotalTrend = function(){
		totalTrendChart = echarts.init(document.getElementById('totalTrendChart'));
		option = {
			    title: {
			        text: '舆情发展趋势与话题转化'
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['微博','新闻','微信','论坛','博客']
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
			            data : ['8.11','8.13','8.15','8.17','8.19','8.21','8.23']
			        }
			    ],
			    yAxis: [{
	                type: 'value',
	                scale: true,
	                name: '信息量',
	                min: 0
	            }],
			    series : [
			        {
			            name:'微博',
			            type:'line',
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
			            name:'新闻',
			            type:'line',
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
			            name:'微信',
			            type:'line',
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
			        },
			        {
			            name:'论坛',
			            type:'line',
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
			        },
			        {
			            name:'博客',
			            type:'line',
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
	
	return {
		init:function(){
			initTotalTrend();
		}
	}
}();