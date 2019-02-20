var Page = function() {
	
	var causeChart,chinaMap,cityMap,topCompany;
	
	function randomData() {
        return Math.round(Math.random()*100);
    }
	
	var initChinaMap = function(){
        chinaMap = echarts.init(document.getElementById('chinaMap'));

        option = {
            title: {
                text: '各省环评通过率',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['环评通过率','社会满意度']
            },
            visualMap: {
                min: 0,
                max: 200,
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
                    name: '环评通过率',
                    type: 'map',
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
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
                },
                {
                    name: '社会满意度',
                    type: 'map',
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
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

        // 使用刚指定的配置项和数据显示图表。
        chinaMap.setOption(option);
	}
	
	var initCityMap = function(){
		cityMap = echarts.init(document.getElementById('cityMap'));

        option = {
            title: {
                text: '江苏环评通过率',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['环评通过率','社会满意度']
            },
            visualMap: {
                min: 0,
                max: 200,
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
                    name: '环评通过率',
                    type: 'map',
                    map: '江苏',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    data:[
                        {name: '南通市',value: randomData() },
                        {name: '南京市',value: randomData() },
                        {name: '无锡市',value: randomData() },
                        {name: '镇江市',value: randomData() },
                        {name: '苏州市',value: randomData() },
                        {name: '扬州市',value: randomData() },
                        {name: '盐城市',value: randomData() },
                        {name: '徐州市',value: randomData() },
                        {name: '淮安市',value: randomData() },
                        {name: '连云港市',value: randomData() },
                        {name: '常州市',value: randomData() },
                        {name: '泰州市',value: randomData() },
                        {name: '宿迁市',value: randomData() }
                    ]
                },
                {
                    name: '社会满意度',
                    type: 'map',
                    map: '江苏',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    data:[
                        {name: '南通市',value: randomData() },
                        {name: '南京市',value: randomData() },
                        {name: '无锡市',value: randomData() },
                        {name: '镇江市',value: randomData() },
                        {name: '苏州市',value: randomData() },
                        {name: '扬州市',value: randomData() },
                        {name: '盐城市',value: randomData() },
                        {name: '徐州市',value: randomData() },
                        {name: '淮安市',value: randomData() },
                        {name: '连云港市',value: randomData() },
                        {name: '常州市',value: randomData() },
                        {name: '泰州市',value: randomData() },
                        {name: '宿迁市',value: randomData() }
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        cityMap.setOption(option);
	}
	
	var initTopCompanyChart = function(){
		topCompany = echarts.init(document.getElementById('topCompany'));
		var option = {
            title: {
                text: '低通过率Top10企业'
            },
            tooltip: {},
            legend: {
            	left:200,
                data:['环评通过率','环评项目数']
            },
            xAxis: {
                data: ["中石化","比亚迪","金风科技","GE能源集团","红鹰能源","风霸机电","上海晟达","上海敏泰","南京冠亚","胜业电器"]
            },
            yAxis: [{
                type: 'value',
                scale: true,
                name: '环评通过率',
                min: 0,
                max:120
            },
            {
                type: 'value',
                scale: true,
                name: '环评项目数',
                min: 0
            }],
            series: [{
                name: '环评通过率',
                type: 'bar',
                yAxisIndex: 0,
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: [78, 60, 76, 80, 60, 70, 56 ,43,53,73]
            },{
                name: '环评项目数',
                type: 'bar',
                yAxisIndex: 1,
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: [5, 20, 36, 10, 10, 20, 56 ,23,43,23]
            }]
        };
		
		topCompany.setOption(option);
	}
	
	var initCauseChart = function(){
		causeChart = echarts.init(document.getElementById('causeChart'));
		option = {
			title: {
	            text: '未通过原因占比'
	        },
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        x : 'center',
		        y : 'bottom',
		        data:['开发布局','总体规划','建设过程','正常运行中','防护距离','邻近区域危害','工业排水','社会影响','废水排放','固体废弃物排放','废气排放','有害材料处置']
		    },
		    series: [
		        {
		            name:'未通过原因',
		            type:'pie',
		            selectedMode: 'single',
		            radius: [0, '50%'],

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
		            data:[
		                {value:335, name:'开发布局', selected:true},
		                {value:679, name:'总体规划'},
		                {value:1116, name:'建设过程'},
		                {value:432, name:'正常运行中'}
		            ]
		        },
		        {
		            name:'访问来源',
		            type:'pie',
		            radius: ['60%', '75%'],

		            data:[
		                {value:335, name:'防护距离'},
		                {value:310, name:'邻近区域危害'},
		                {value:234, name:'工业排水'},
		                {value:135, name:'社会影响'},
		                {value:818, name:'废水排放'},
		                {value:251, name:'固体废弃物排放'},
		                {value:147, name:'废气排放'},
		                {value:102, name:'有害材料处置'}
		            ]
		        }
		    ]
		};
		causeChart.setOption(option);
	}
	
	return {
        init: function() {
        	initChinaMap();
        	initCityMap();
        	initTopCompanyChart();
        	initCauseChart();
        	
        	window.onresize = function(){
        		causeChart.resize();
        		chinaMap.resize();
        		cityMap.resize();
        		topCompany.resize();
        	}
        }
    };
}();