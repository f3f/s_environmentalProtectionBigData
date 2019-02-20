var Page = function() {
	
	var suzhouMap,behaveChart,publicChart;
	
	function randomData() {
        return Math.round(Math.random()*100);
    }
	
	var initSuzhouMap = function(){
		$.get('../assets/global/plugins/echarts/geoJson/320500.json', function (suzhouJson) {
		    echarts.registerMap('苏州', suzhouJson);
		    suzhouMap = echarts.init(document.getElementById('causeChart'));
		    suzhouMap.setOption({
		    	title: {
	                text: '苏州市综合指数(225)',
	                subtext: '全国排名(25)',
	                left: 'left'
	            },
	            tooltip: {
	                trigger: 'item'
	            },
	            legend: {
	                orient: 'vertical',
	                left: 'right',
	                data:['气候韧性指数','城市环境表现','城市公共参与']
	            },
	            visualMap: {
	                min: 0,
	                max: 300,
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
		        series: [{
		        	name: '气候韧性指数',
		            type: 'map',
		            map: '苏州',
		            data:[
                        {name: '姑苏区',value: randomData() },
                        {name: '相城区',value: randomData() },
                        {name: '吴中区',value: randomData() },
                        {name: '虎丘区',value: randomData() },
                        {name: '吴江区',value: randomData() },
                        {name: '常熟市',value: randomData() },
                        {name: '昆山市',value: randomData() },
                        {name: '张家港市',value: randomData() },
                        {name: '太仓市',value: randomData() }
                    ]
		        },{
		        	name: '城市环境表现',
		            type: 'map',
		            map: '苏州',
		            data:[
                        {name: '姑苏区',value: randomData() },
                        {name: '相城区',value: randomData() },
                        {name: '吴中区',value: randomData() },
                        {name: '虎丘区',value: randomData() },
                        {name: '吴江区',value: randomData() },
                        {name: '常熟市',value: randomData() },
                        {name: '昆山市',value: randomData() },
                        {name: '张家港市',value: randomData() },
                        {name: '太仓市',value: randomData() }
                    ]
		        },{
		        	name: '城市公共参与',
		            type: 'map',
		            map: '苏州',
		            data:[
                        {name: '姑苏区',value: randomData() },
                        {name: '相城区',value: randomData() },
                        {name: '吴中区',value: randomData() },
                        {name: '虎丘区',value: randomData() },
                        {name: '吴江区',value: randomData() },
                        {name: '常熟市',value: randomData() },
                        {name: '昆山市',value: randomData() },
                        {name: '张家港市',value: randomData() },
                        {name: '太仓市',value: randomData() }
                    ]
		        }]
		    });
		});
	}
	
	var initBehaveChart = function(){
		behaveChart = echarts.init(document.getElementById('behaveChart'));
		var option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data:['环境污染','资源构成和效率','环境便捷','环境健康','环境保护和管理']
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['姑苏区','相城区','吴中区','虎丘区','吴江区','常熟市','昆山市','张家港市','太仓市']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'环境污染',
		            type:'bar',
		            stack: '总分',
		            data:[320, 332, 301, 334, 390, 330, 320, 220, 242]
		        },
		        {
		            name:'资源构成和效率',
		            type:'bar',
		            stack: '总分',
		            data:[120, 132, 101, 134, 90, 230, 210, 220, 242]
		        },
		        {
		            name:'环境便捷',
		            type:'bar',
		            stack: '总分',
		            data:[220, 182, 191, 234, 290, 330, 310, 220, 242]
		        },
		        {
		            name:'环境健康',
		            type:'bar',
		            stack: '总分',
		            data:[150, 232, 201, 154, 190, 330, 410, 220, 242]
		        },
		        {
		            name:'环境保护和管理',
		            type:'bar',
		            stack: '总分',
		            data:[862, 1018, 964, 1026, 1679, 1600, 1570, 220, 242]
		        }
		    ]
		};
		behaveChart.setOption(option);
	}
	var initPublicChart = function(){
		publicChart = echarts.init(document.getElementById('publicChart'));
		option = {
		    title : {
		        text: '参与人数占比',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['姑苏区','相城区','吴中区','虎丘区','吴江区','常熟市','昆山市','张家港市','太仓市']
		    },
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:335, name:'姑苏区'},
		                {value:310, name:'相城区'},
		                {value:234, name:'吴中区'},
		                {value:135, name:'虎丘区'},
		                {value:548, name:'吴江区'},
		                {value:135, name:'常熟市'},
		                {value:135, name:'昆山市'},
		                {value:135, name:'张家港市'},
		                {value:135, name:'太仓市'},
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

		publicChart.setOption(option);
	}
	return {
		init:function(){
			initSuzhouMap();
			initBehaveChart();
			initPublicChart();
			
			window.onresize = function(){
				suzhouMap.resize();
				behaveChart.resize();
				publicChart.resize();
        	}
		}
	}
}();