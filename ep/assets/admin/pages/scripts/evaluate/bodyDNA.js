var Page = function(){
	
	var initBodyChart = function(){
		require.config({
            paths: {
                echarts: '../assets/global/plugins/echarts2'
            }
        });
		
		require(
            [
                'echarts',
                'echarts/chart/map'
            ],
            function (ec) {
            	// 自定义扩展图表类型：mapType = body
                require('echarts/util/mapData/params').params.bodyMale = {
                    getGeoJson: function (callback) {
                        $.ajax({
                            url: "../assets/svg/body-male.svg",
                            dataType: 'xml',
                            success: function(xml) {
                                callback(xml)
                            }
                        });
                    }
                }
                require('echarts/util/mapData/params').params.bodyFemale = {
                    getGeoJson: function (callback) {
                        $.ajax({
                            url: "../assets/svg/body-female.svg",
                            dataType: 'xml',
                            success: function(xml) {
                                callback(xml)
                            }
                        });
                    }
                }
                
                var myChart = ec.init(document.getElementById('main'));
                option = {
                        title : {
                            text : '人体健康环评',
                            x:'left'
                        },
                        tooltip : {
                            trigger: 'item'
                        },
                        toolbox: {
                            show : true,
                            orient : 'vertical',
                            x: 'right',
                            y: 'center',
                            feature : {
                                mark : {show: true},
                                dataView : {show: true, readOnly: false},
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        dataRange: {
                            min: 0,
                            max: 100,
                            x: 'left',
                            y: 'center',
                            tdext:['High','Low'],
                            calculable : true,
                            itemHeight:30,
                            color: ['orangered','yellow','lightskyblue']
                        },
                        series : [
                            {
                                name: '人体密码-男',
                                type: 'map',
                                mapType: 'bodyMale', // 自定义扩展图表类型
                                mapLocation: {
                                    x:'center'
                                },
                                roam:true,
                                itemStyle:{
                                    normal:{label:{show:true}},
                                    emphasis:{label:{show:true}}
                                },
                                data:[
                                    {name: '头部', value: 90},
                                    {name: '颈部', value: 80},
                                    {name: '胸部', value: 60},
                                    {name: '腹部', value: 60},
                                    {name: '生殖', value: 50},
                                    {name: '上肢', value: 40},
                                    {name: '下肢', value: 30}
                                ],
                                textFixed : {
                                    '上肢' : [-60, 0]
                                },
                                markPoint : {
                                    symbol:'emptyCircle',
                                    symbolSize : 10,
                                    effect : {
                                        show: true
                                    },
                                    data : [
                                        {name: '心脏', value: 100, geoCoord:[138, 126]}
                                    ]
                                },
                                markLine : {
                                    smooth:true,
                                    effect : {
                                        show: true,
                                        scaleSize: 1,
                                        period: 30,
                                        color: '#fff',
                                        shadowBlur: 5
                                    },
                                    itemStyle : {
                                        normal: {
                                            borderWidth:1,
                                            lineStyle: {
                                                type: 'solid'
                                            }
                                        }
                                    },
                                    data : [
                                        [
                                            {name:'男',geoCoord:[138, 126]}, 
                                            {name:'女',value:90,geoCoord:[268, 56]}
                                        ]
                                    ]
                                }
                            }
                        ]
                    };
                                        
            	    // 为echarts对象加载数据 
            	    myChart.setOption(option); 
            }
        );
	}
	
	var initDiseaseChart = function(){
		require.config({
            paths: {
                echarts: '../assets/global/plugins/echarts2'
            }
        });
		
		require(
            [
                'echarts',
                'echarts/chart/force'
            ],
            function (ec) {
            	
                var myChart = ec.init(document.getElementById('causeChart'));
                option = {
            	    title : {
            	        text: '导致的疾病',
            	        x:'right',
            	        y:'bottom'
            	    },
            	    tooltip : {
            	        trigger: 'item',
            	        formatter: '{a} : {b}'
            	    },
            	    toolbox: {
            	        show : true,
            	        feature : {
            	            restore : {show: true},
            	            magicType: {show: true, type: ['force', 'chord']},
            	            saveAsImage : {show: true}
            	        }
            	    },
            	    legend: {
            	        x: 'left',
            	        data:['肺部疾病','气管和支气管疾病']
            	    },
            	    series : [
            	        {
            	            type:'force',
            	            name : "肺部疾病",
            	            ribbonType: false,
            	            categories : [
            	                {
            	                    name: '人物'
            	                },
            	                {
            	                    name: '家人'
            	                },
            	                {
            	                    name:'朋友'
            	                }
            	            ],
            	            itemStyle: {
            	                normal: {
            	                    label: {
            	                        show: true,
            	                        textStyle: {
            	                            color: '#333'
            	                        }
            	                    },
            	                    nodeStyle : {
            	                        brushType : 'both',
            	                        borderColor : 'rgba(255,215,0,0.4)',
            	                        borderWidth : 1
            	                    },
            	                    linkStyle: {
            	                        type: 'curve'
            	                    }
            	                },
            	                emphasis: {
            	                    label: {
            	                        show: false
            	                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
            	                    },
            	                    nodeStyle : {
            	                        //r: 30
            	                    },
            	                    linkStyle : {}
            	                }
            	            },
            	            useWorker: false,
            	            minRadius : 15,
            	            maxRadius : 25,
            	            gravity: 1.1,
            	            scaling: 1.1,
            	            roam: 'move',
            	            nodes:[
            	                {category:0, name: '胸部', value : 10},
            	                {category:1, name: '肺癌',value : 2},
            	                {category:1, name: '肺部良性肿块',value : 3},
            	                {category:1, name: '气管囊肿',value : 3},
            	                {category:1, name: '胸膜炎',value : 7},
            	                {category:2, name: '食管癌',value : 5},
            	                {category:2, name: '胸腺瘤',value : 8},
            	                {category:2, name: '肋骨肿瘤',value : 9},
            	                {category:2, name: '血胸',value : 4},
            	                {category:2, name: '膈疝',value : 4},
            	                {category:2, name: '食管息肉',value : 1},
            	            ],
            	            links : [
            	                {source : '肺癌', target : '胸部', weight : 1, name: '女儿'},
            	                {source : '肺部良性肿块', target : '胸部', weight : 2, name: '父亲'},
            	                {source : '气管囊肿', target : '胸部', weight : 1, name: '母亲'},
            	                {source : '胸膜炎', target : '胸部', weight : 2},
            	                {source : '食管癌', target : '胸部', weight : 3, name: '合伙人'},
            	                {source : '胸腺瘤', target : '胸部', weight : 1},
            	                {source : '肋骨肿瘤', target : '胸部', weight : 6, name: '竞争对手'},
            	                {source : '血胸', target : '胸部', weight : 1, name: '爱将'},
            	                {source : '膈疝', target : '胸部', weight : 1},
            	                {source : '食管息肉', target : '胸部', weight : 1},
            	                {source : '气管囊肿', target : '肺部良性肿块', weight : 1},
            	                {source : '胸腺瘤', target : '肺部良性肿块', weight : 1},
            	                {source : '胸腺瘤', target : '气管囊肿', weight : 1},
            	                {source : '胸腺瘤', target : '胸膜炎', weight : 1},
            	                {source : '胸腺瘤', target : '食管癌', weight : 1},
            	                {source : '肋骨肿瘤', target : '胸腺瘤', weight : 6},
            	                {source : '肋骨肿瘤', target : '气管囊肿', weight : 1},
            	                {source : '膈疝', target : '胸腺瘤', weight : 1}
            	            ]
            	        }
            	    ]
            	};
            	var ecConfig = require('echarts/config');
            	function focus(param) {
            	    var data = param.data;
            	    var links = option.series[0].links;
            	    var nodes = option.series[0].nodes;
            	    if (
            	        data.source !== undefined
            	        && data.target !== undefined
            	    ) { //点击的是边
            	        var sourceNode = nodes.filter(function (n) {return n.name == data.source})[0];
            	        var targetNode = nodes.filter(function (n) {return n.name == data.target})[0];
            	        console.log("选中了边 " + sourceNode.name + ' -> ' + targetNode.name + ' (' + data.weight + ')');
            	    } else { // 点击的是点
            	        console.log("选中了" + data.name + '(' + data.value + ')');
            	    }
            	}
            	myChart.on(ecConfig.EVENT.CLICK, focus)

            	myChart.on(ecConfig.EVENT.FORCE_LAYOUT_END, function () {
            	    console.log(myChart.chart.force.getPosition());
            	});


        	    // 为echarts对象加载数据 
        	    myChart.setOption(option); 
            }
        );
		
	}
	
	
	return {
		init:function(){
			initBodyChart();
			initDiseaseChart();
		}
	}
}();