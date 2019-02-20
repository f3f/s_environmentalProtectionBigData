var Page = function(){
	
	var sexChart,ageChart,eduChart,regionChart;
	
	var initSexChart = function(){
		 // 基于准备好的dom，初始化echarts实例
		sexChart = echarts.init(document.getElementById('sex'));
		option = {
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:85, name:'男'},
			                {value:15, name:'女'},
			            ],
			            label: {
			                normal: {
			                    position: 'inner',
			                    formatter:'{b}: {c}%'
			                }
			            },
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
		sexChart.setOption(option);
	}
	
	var initAgeChart = function(){
		ageChart = echarts.init(document.getElementById('age'));
		option = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        formatter: function (params) {
			            var tar = params[0];
			            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis: {
			        type : 'category',
			        splitLine: {show:false},
			        data : ['18以下','18-24','25-34','35-44','45-54','55-64','65以上']
			    },
			    yAxis: {
			        type : 'value'
			    },
			    series: [
			        {
			            name: '生活费',
			            type: 'bar',
			            label: {
			                normal: {
			                    show: true,
			                    position: 'inside'
			                }
			            },
			            data:[34, 1200, 300, 200, 900, 300, 380]
			        }
			    ]
			};
		ageChart.setOption(option);
	}

	var initEduChart = function(){
		eduChart = echarts.init(document.getElementById('edu'));
		option = {
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:55, name:'本科及以上'},
			                {value:15, name:'本科'},
			                {value:15, name:'大专'},
			                {value:15, name:'高中及以下'}
			            ],
			            label: {
			                normal: {
			                    position: 'inner',
			                    formatter:'{b}: {c}%'
			                }
			            },
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
		eduChart.setOption(option);
	}

	var initRegionChart = function(){
		regionChart = echarts.init(document.getElementById('region'));
		function randomData() {
		    return Math.round(Math.random()*1000);
		}

		option = {
		    title: {
		        text: '环保事件关注度',
		        left: 'center'
		    },
		    tooltip: {
		        trigger: 'item'
		    },
		    visualMap: {
		        min: 0,
		        max: 1000,
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
		            name: '搜索量',
		            type: 'map',
		            mapType: 'china',
		            roam: false,
		            label: {
		                normal: {
		                    show: false
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
		        }
		    ]
		};
		regionChart.setOption(option);
	}
	
	return {
		init:function(){
			initSexChart();
			initAgeChart();
			initEduChart();
			initRegionChart();
		}
	}
}();