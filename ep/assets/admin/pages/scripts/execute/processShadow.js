var processShadow = function () {
	
	
	var pie = function(){
		var labelTop = {
			    normal : {
			        label : {
			            show : true,
			            position : 'center',
			            formatter : '{b}',
			            textStyle: {
			                baseline : 'bottom'
			            }
			        },
			        labelLine : {
			            show : false
			        }
			    }
			};
			var labelFromatter = {
			    normal : {
			        label : {
			            formatter : function (params){
			                return 100 - params.value + '%'
			            },
			            textStyle: {
			                baseline : 'top'
			            }
			        }
			    },
			}
			var labelBottom = {
			    normal : {
			        color: '#ccc',
			        label : {
			            show : true,
			            position : 'center'
			        },
			        labelLine : {
			            show : false
			        }
			    },
			    emphasis: {
			        color: 'rgba(0,0,0,0)'
			    }
			};
			var radius = [40, 55];
			var option = {
				title : {
			        text: 'XX市执法过程透视',
			        x: 'center'
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            dataView : {show: true, readOnly: false},
			            magicType : {
			                show: true, 
			                type: ['pie', 'funnel'],
			                option: {
			                    funnel: {
			                        width: '20%',
			                        height: '30%',
			                        itemStyle : {
			                            normal : {
			                                label : {
			                                    formatter : function (params){
			                                        return 'other\n' + params.value + '%\n'
			                                    },
			                                    textStyle: {
			                                        baseline : 'middle'
			                                    }
			                                }
			                            },
			                        } 
			                    }
			                }
			            },
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    series : [
			       {
			            type : 'pie',
			            center : ['15%', '30%'],
			            radius : radius,
			            x:'40%', // for funnel
			            itemStyle : labelFromatter,
			            data : [
			                {name:'other', value:80, itemStyle : labelBottom},
			                {name:'未处理', value:20,itemStyle : labelTop}
			            ]
			        },
			        {
			            type : 'pie',
			            center : ['50%', '30%'],
			            radius : radius,
			            x:'60%', // for funnel
			            itemStyle : labelFromatter,
			            data : [
			                {name:'other', value:75, itemStyle : labelBottom},
			                {name:'现场检查', value:25,itemStyle : labelTop}
			            ]
			        },
			        {
			            type : 'pie',
			            center : ['85%', '30%'],
			            radius : radius,
			            x:'80%', // for funnel
			            itemStyle : labelFromatter,
			            data : [
			                {name:'other', value:70, itemStyle : labelBottom},
			                {name:'已作处罚决定', value:30,itemStyle : labelTop}
			            ]
			        },
			        {
			            type : 'pie',
			            center : ['15%', '70%'],
			            radius : radius,
			            y: '55%',   // for funnel
			            x:'40%', // for funnel
			            itemStyle : labelFromatter,
			            data : [
			                {name:'other', value:80, itemStyle : labelBottom},
			                {name:'处理完毕', value:20,itemStyle : labelTop}
			            ]
			        },
			        {
			            type : 'pie',
			            center : ['50%', '70%'],
			            radius : radius,
			            y: '55%',   // for funnel
			            x:'60%', // for funnel
			            itemStyle : labelFromatter,
			            data : [
			                {name:'other', value:80, itemStyle : labelBottom},
			                {name:'后督察', value:20,itemStyle : labelTop}
			            ]
			        },
			        {
			            type : 'pie',
			            center : ['85%', '70%'],
			            radius : radius,
			            y: '55%',   // for funnel
			            x:'80%', // for funnel
			            itemStyle : labelFromatter,
			            data : [
			                {name:'other', value:90, itemStyle : labelBottom},
			                {name:'稽查考核', value:10,itemStyle : labelTop}
			            ]
			        }
			    ]
			};
		return option;
	};
	
	
	var event = function(){
		var option = {
			    title : {
			        text: 'Event River',
			        subtext: '纯属虚构'
			    },
			    tooltip : {
			        trigger: 'item',
			        enterable: true
			    },
			    legend: {
			        data:['财经事件', '政治事件']
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    xAxis : [
			        {
			            type : 'time',
			            boundaryGap: [0.05,0.1]
			        }
			    ],
			    series : [
			        {
			            "name": "财经事件", 
			            "type": "eventRiver", 
			            "weight": 123, 
			            "data": [
			                {
			                    "name": "阿里巴巴上市", 
			                    "weight": 123, 
			                    "evolution": [
			                        {
			                            "time": "2014-05-01", 
			                            "value": 14, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-02", 
			                            "value": 34, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-03", 
			                            "value": 60, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-04", 
			                            "value": 40, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-05", 
			                            "value": 10, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }
			                    ]
			                }, 
			                {
			                    "name": "阿里巴巴上市2", 
			                    "weight": 123, 
			                    "evolution": [
			                        {
			                            "time": "2014-05-02", 
			                            "value": 10, 
			                            "detail": {
			                                "link": "www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-03", 
			                            "value": 34, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-04", 
			                            "value": 40, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-05", 
			                            "value": 10, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }
			                    ]
			                }, 
			                {
			                    "name": "三星业绩暴跌", 
			                    "weight": 123, 
			                    "evolution": [
			                        {
			                            "time": "2014-05-03", 
			                            "value": 24, 
			                            "detail": {
			                                "link": "www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-04", 
			                            "value": 34, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-05", 
			                            "value": 50, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-06", 
			                            "value": 30, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-07", 
			                            "value": 20, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }
			                    ]
			                }
			            ]
			        }, 
			        {
			            "name": "政治事件", 
			            "type": "eventRiver", 
			            "weight": 123, 
			            "data": [
			                {
			                    "name": "Apec峰会", 
			                    "weight": 123, 
			                    "evolution": [
			                        {
			                            "time": "2014-05-06", 
			                            "value": 14, 
			                            "detail": {
			                                "link": "www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-07", 
			                            "value": 34, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-08", 
			                            "value": 60, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-09", 
			                            "value": 40, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-10", 
			                            "value": 20, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }
			                    ]
			                }, 
			                {
			                    "name": "运城官帮透视", 
			                    "weight": 123, 
			                    "evolution": [
			                        {
			                            "time": "2014-05-08", 
			                            "value": 4, 
			                            "detail": {
			                                "link": "www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-09", 
			                            "value": 14, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-10", 
			                            "value": 30, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-11", 
			                            "value": 20, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-12", 
			                            "value": 10, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }
			                    ]
			                }, 
			                {
			                    "name": "底层公务员收入超过副部长", 
			                    "weight": 123, 
			                    "evolution": [
			                        {
			                            "time": "2014-05-11", 
			                            "value": 4, 
			                            "detail": {
			                                "link": "www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-12", 
			                            "value": 24, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-13", 
			                            "value": 40, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-14", 
			                            "value": 20, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-15", 
			                            "value": 15, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }, 
			                        {
			                            "time": "2014-05-16", 
			                            "value": 10, 
			                            "detail": {
			                                "link": "http://www.baidu.com", 
			                                "text": "百度指数", 
			                                "img": '../asset/ico/favicon.png'
			                            }
			                        }
			                    ]
			                }
			            ]
			        }
			    ]
			};
		return option;
	};

	
    return {
    	init:function(){
    		var care = initEchart('processShadow.pie');
//    		var fromWhere = initEchart('processShadow.event');
    		
//    		echarts.init(document.getElementById('all-pollutant')).setOption(allPollutantOption);
    	},
    	pie: function(){
    		return pie();
    	},
    	event: function(){
    		return event();
    	}
    };
}();
