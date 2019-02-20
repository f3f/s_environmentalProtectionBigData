var result = function () {
	
	
	var finalCasePercent = function(){
		var option = {
				title: {
			        text: '北京市',
			    },   
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        formatter: function (params){
			            return params[0].name + '<br/>'
			                   + params[0].seriesName + ' : ' + params[0].value + '<br/>'
			                   + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
			        }
			    },
			    
			    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            data : ['2010','2011','2012','2013','2014','2015']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            boundaryGap: [0, 0.1]
			        }
			    ],
			    series : [
			        {
			            name:'完毕案件',
			            type:'bar',
			            stack: 'sum',
			            barCategoryGap: '50%',
			            itemStyle: {
			                normal: {
			                    color: 'tomato',
			                    barBorderColor: 'tomato',
			                    barBorderWidth: 6,
			                    barBorderRadius:0,
			                    label : {
			                        show: true, position: 'insideTop'
			                    }
			                }
			            },
			            data:[260, 200, 220, 120, 100, 80]
			        },
			        {
			            name:'执法案例总量',
			            type:'bar',
			            stack: 'sum',
			            itemStyle: {
			                normal: {
			                    color: '#fff',
			                    barBorderColor: 'tomato',
			                    barBorderWidth: 6,
			                    barBorderRadius:0,
			                    label : {
			                        show: true, 
			                        position: 'top',
			                        formatter: function (params) {
			                            for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
			                                if (option.xAxis[0].data[i] == params.name) {
			                                    return option.series[0].data[i] + params.value;
			                                }
			                            }
			                        },
			                        textStyle: {
			                            color: 'tomato'
			                        }
			                    }
			                }
			            },
			            data:[40, 80, 50, 80,80, 70]
			        }
			    ]
			};
			                    
		return option;
	};


	
	
	var type = function(){
		var option = {
				title: {
			        text: '北京市',
			    },
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
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
			            data : ['2010','2011','2012','2013','2014','2015','2015']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'限制生产',
			            type:'bar',
			            data:[320, 332, 301, 334, 390, 330, 320]
			        },
			        {
			            name:'责令改正',
			            type:'bar',
			            stack: '广告',
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'停止生产',
			            type:'bar',
			            stack: '广告',
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'停产整治',
			            type:'bar',
			            stack: '广告',
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			        {
			            name:'行政处罚',
			            type:'bar',
			            data:[862, 1018, 964, 1026, 1679, 1600, 1570]
			        }
			    ]
			};

		return option;
	};

var range = function(){
	    function randomData() {
            return Math.round(Math.random()*1000);
        }

        var option = {
            tooltip: {
                trigger: 'item'
            },
            visualMap: {
                min: 0,
                max: 1000,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                inRange: {
                    color: ['#d7dc90', 'rgba(215,220,144,0.4)', '#a0dc5d'],
                    symbolSize: [30, 100]
                },
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
                    name: '好评数',
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
                }
            ]
        };

	    return option;
	};

	var distribution = function(){

	    var option = {

                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series : [
                    {
                        name:'评价分布',
                        type:'pie',
                        radius : '45%',
                        center: ['50%', '50%'],
                        data:[
                            {value: randomData(600) + 80, name:'非常满意'},
                            {value: randomData(600) + 80, name:'很满意'},
                            {value: randomData(600) + 80, name:'一般'},
                            {value: randomData(600) + 80, name:'不满意'},
                            {value: randomData(600) + 80, name:'非常不满意'}
                        ].sort(function (a, b) { return a.value - b.value}),
                        roseType: 'angle'
//                        ,
//                        itemStyle: {
//                            normal: {
//                                color: '#497924',
//                                shadowBlur: 200,
//                                shadowColor: 'rgba(0, 0, 0, 0.6)'
//                            }
//                        }
                    }
                ]
            };
	    return option;
	};
	
    return {
    	init:function(){
    		var finalCasePercent = initEchart('result.finalCasePercent');
    		var finalCasePercent = initEchart('result.type');
    		var range = initEchart('result.range');
    		var distribution = initEchart('result.distribution');

//    		echarts.init(document.getElementById('all-pollutant')).setOption(allPollutantOption);
    	},
    	finalCasePercent: function(){
    		return finalCasePercent();
    	},
    	type: function(){
    		return type();
    	},
    	range: function(){
    		return range();
    	},
    	distribution: function(){
    		return distribution();
    	}
    };
}();
