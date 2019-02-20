var voice = function () {
	
	var china = function (){
		var dataBJ = [
          [1,55,9,56,0.46,18,6,"良"],
          [2,25,11,21,0.65,34,9,"优"],
          [3,56,7,63,0.3,14,5,"良"],
          [4,33,7,29,0.33,16,6,"优"],
          [5,42,24,44,0.76,40,16,"优"],
          [6,82,58,90,1.77,68,33,"良"],
          [7,74,49,77,1.46,48,27,"良"],
          [8,78,55,80,1.29,59,29,"良"],
          [9,267,216,280,4.8,108,64,"重度污染"],
          [10,185,127,216,2.52,61,27,"中度污染"],
          [11,39,19,38,0.57,31,15,"优"],
          [12,41,11,40,0.43,21,7,"优"],
          [13,64,38,74,1.04,46,22,"良"],
          [14,108,79,120,1.7,75,41,"轻度污染"],
          [15,108,63,116,1.48,44,26,"轻度污染"],
          [16,33,6,29,0.34,13,5,"优"],
          [17,94,66,110,1.54,62,31,"良"],
          [18,186,142,192,3.88,93,79,"中度污染"],
          [19,57,31,54,0.96,32,14,"良"],
          [20,22,8,17,0.48,23,10,"优"],
          [21,39,15,36,0.61,29,13,"优"],
          [22,94,69,114,2.08,73,39,"良"],
          [23,99,73,110,2.43,76,48,"良"],
          [24,31,12,30,0.5,32,16,"优"],
          [25,42,27,43,1,53,22,"优"],
          [26,154,117,157,3.05,92,58,"中度污染"],
          [27,234,185,230,4.09,123,69,"重度污染"],
          [28,160,120,186,2.77,91,50,"中度污染"],
          [29,134,96,165,2.76,83,41,"轻度污染"],
          [30,52,24,60,1.03,50,21,"良"],
          [31,46,5,49,0.28,10,6,"优"]
      ];

      var dataGZ = [
          [1,26,37,27,1.163,27,13,"优"],
          [2,85,62,71,1.195,60,8,"良"],
          [3,78,38,74,1.363,37,7,"良"],
          [4,21,21,36,0.634,40,9,"优"],
          [5,41,42,46,0.915,81,13,"优"],
          [6,56,52,69,1.067,92,16,"良"],
          [7,64,30,28,0.924,51,2,"良"],
          [8,55,48,74,1.236,75,26,"良"],
          [9,76,85,113,1.237,114,27,"良"],
          [10,91,81,104,1.041,56,40,"良"],
          [11,84,39,60,0.964,25,11,"良"],
          [12,64,51,101,0.862,58,23,"良"],
          [13,70,69,120,1.198,65,36,"良"],
          [14,77,105,178,2.549,64,16,"良"],
          [15,109,68,87,0.996,74,29,"轻度污染"],
          [16,73,68,97,0.905,51,34,"良"],
          [17,54,27,47,0.592,53,12,"良"],
          [18,51,61,97,0.811,65,19,"良"],
          [19,91,71,121,1.374,43,18,"良"],
          [20,73,102,182,2.787,44,19,"良"],
          [21,73,50,76,0.717,31,20,"良"],
          [22,84,94,140,2.238,68,18,"良"],
          [23,93,77,104,1.165,53,7,"良"],
          [24,99,130,227,3.97,55,15,"良"],
          [25,146,84,139,1.094,40,17,"轻度污染"],
          [26,113,108,137,1.481,48,15,"轻度污染"],
          [27,81,48,62,1.619,26,3,"良"],
          [28,56,48,68,1.336,37,9,"良"],
          [29,82,92,174,3.29,0,13,"良"],
          [30,106,116,188,3.628,101,16,"轻度污染"],
          [31,118,50,0,1.383,76,11,"轻度污染"]
      ];

      var dataSH = [
          [1,91,45,125,0.82,34,23,"良"],
          [2,65,27,78,0.86,45,29,"良"],
          [3,83,60,84,1.09,73,27,"良"],
          [4,109,81,121,1.28,68,51,"轻度污染"],
          [5,106,77,114,1.07,55,51,"轻度污染"],
          [6,109,81,121,1.28,68,51,"轻度污染"],
          [7,106,77,114,1.07,55,51,"轻度污染"],
          [8,89,65,78,0.86,51,26,"良"],
          [9,53,33,47,0.64,50,17,"良"],
          [10,80,55,80,1.01,75,24,"良"],
          [11,117,81,124,1.03,45,24,"轻度污染"],
          [12,99,71,142,1.1,62,42,"良"],
          [13,95,69,130,1.28,74,50,"良"],
          [14,116,87,131,1.47,84,40,"轻度污染"],
          [15,108,80,121,1.3,85,37,"轻度污染"],
          [16,134,83,167,1.16,57,43,"轻度污染"],
          [17,79,43,107,1.05,59,37,"良"],
          [18,71,46,89,0.86,64,25,"良"],
          [19,97,71,113,1.17,88,31,"良"],
          [20,84,57,91,0.85,55,31,"良"],
          [21,87,63,101,0.9,56,41,"良"],
          [22,104,77,119,1.09,73,48,"轻度污染"],
          [23,87,62,100,1,72,28,"良"],
          [24,168,128,172,1.49,97,56,"中度污染"],
          [25,65,45,51,0.74,39,17,"良"],
          [26,39,24,38,0.61,47,17,"优"],
          [27,39,24,39,0.59,50,19,"优"],
          [28,93,68,96,1.05,79,29,"良"],
          [29,188,143,197,1.66,99,51,"中度污染"],
          [30,174,131,174,1.55,108,50,"中度污染"],
          [31,187,143,201,1.39,89,53,"中度污染"]
      ];

      var schema = [
          {name: 'date', index: 0, text: '日'},
          {name: 'AQIindex', index: 1, text: 'AQI指数'},
          {name: 'PM25', index: 2, text: 'PM2.5'},
          {name: 'PM10', index: 3, text: 'PM10'},
          {name: 'CO', index: 4, text: '一氧化碳（CO）'},
          {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
          {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
      ];


      var itemStyle = {
          normal: {
              opacity: 0.8,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
      };

      var option = {
          backgroundColor: '#333',
          color: [
              '#dd4444', '#fec42c', '#80F1BE'
          ],
          legend: {
              y: 'top',
              data: ['北京', '上海', '广州'],
              textStyle: {
                  color: '#fff',
                  fontSize: 16
              }
          },
          grid: {
              x: '10%',
              x2: 150,
              y: '18%',
              y2: '10%'
          },
          tooltip: {
              padding: 10,
              backgroundColor: '#222',
              borderColor: '#777',
              borderWidth: 1,
              formatter: function (obj) {
                  var value = obj.value;
                  return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                      + obj.seriesName + ' ' + value[0] + '日：'
                      + value[7]
                      + '</div>'
                      + schema[1].text + '：' + value[1] + '<br>'
                      + schema[2].text + '：' + value[2] + '<br>'
                      + schema[3].text + '：' + value[3] + '<br>'
                      + schema[4].text + '：' + value[4] + '<br>'
                      + schema[5].text + '：' + value[5] + '<br>'
                      + schema[6].text + '：' + value[6] + '<br>';
              }
          },
          xAxis: {
              type: 'value',
              name: '日期',
              nameGap: 16,
              nameTextStyle: {
                  color: '#fff',
                  fontSize: 14
              },
              max: 31,
              splitLine: {
                  show: false
              },
              axisLine: {
                  lineStyle: {
                      color: '#777'
                  }
              },
              axisTick: {
                  lineStyle: {
                      color: '#777'
                  }
              },
              axisLabel: {
                  formatter: '{value}',
                  textStyle: {
                      color: '#fff'
                  }
              }
          },
          yAxis: {
              type: 'value',
              name: 'AQI指数',
              nameLocation: 'end',
              nameGap: 20,
              nameTextStyle: {
                  color: '#fff',
                  fontSize: 16
              },
              axisLine: {
                  lineStyle: {
                      color: '#777'
                  }
              },
              axisTick: {
                  lineStyle: {
                      color: '#777'
                  }
              },
              splitLine: {
                  show: false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  }
              }
          },
          visualMap: [
              {
                  left: 'right',
                  top: '10%',
                  dimension: 2,
                  min: 0,
                  max: 250,
                  itemWidth: 30,
                  itemHeight: 120,
                  calculable: true,
                  precision: 0.1,
                  text: ['圆形大小：PM2.5'],
                  textGap: 30,
                  textStyle: {
                      color: '#fff'
                  },
                  inRange: {
                      symbolSize: [10, 70]
                  },
                  outOfRange: {
                      symbolSize: [10, 70],
                      color: ['rgba(255,255,255,.2)']
                  },
                  controller: {
                      inRange: {
                          color: ['#c23531']
                      },
                      outOfRange: {
                          color: ['#444']
                      }
                  }
              },
              {
                  left: 'right',
                  bottom: '5%',
                  dimension: 6,
                  min: 0,
                  max: 50,
                  itemHeight: 120,
                  calculable: true,
                  precision: 0.1,
                  text: ['明暗：二氧化硫'],
                  textGap: 30,
                  textStyle: {
                      color: '#fff'
                  },
                  inRange: {
                      colorLightness: [1, 0.5]
                  },
                  outOfRange: {
                      color: ['rgba(255,255,255,.2)']
                  },
                  controller: {
                      inRange: {
                          color: ['#c23531']
                      },
                      outOfRange: {
                          color: ['#444']
                      }
                  }
              }
          ],
          series: [
              {
                  name: '北京',
                  type: 'scatter',
                  itemStyle: itemStyle,
                  data: dataBJ
              },
              {
                  name: '上海',
                  type: 'scatter',
                  itemStyle: itemStyle,
                  data: dataSH
              },
              {
                  name: '广州',
                  type: 'scatter',
                  itemStyle: itemStyle,
                  data: dataGZ
              }
          ]
      };
      
      return option;
	};
	
	var cr = function (){
		function randomData() {
		    now = new Date(+now + oneDay);
		    value = value + Math.random() * 21 - 10;
		    return {
		        name: now.toString(),
		        value: [
		            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
		            Math.round(value)
		        ]
		    }
		}

		var data = [];
		var now = +new Date(1997, 9, 3);
		var oneDay = 24 * 3600 * 1000;
		var value = Math.random() * 1000;
		for (var i = 0; i < 1000; i++) {
		    data.push(randomData());
		}

		var option = {
		    title: {
		        text: '动态数据 + 时间坐标轴'
		    },
		    tooltip: {
		        trigger: 'axis',
		        formatter: function (params) {
		            params = params[0];
		            var date = new Date(params.name);
		            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
		        },
		        axisPointer: {
		            animation: false
		        }
		    },
		    xAxis: {
		        type: 'time',
		        splitLine: {
		            show: false
		        }
		    },
		    yAxis: {
		        type: 'value',
		        boundaryGap: [0, '100%'],
		        splitLine: {
		            show: false
		        }
		    },
		    series: [{
		        name: '模拟数据',
		        type: 'line',
		        showSymbol: false,
		        hoverAnimation: false,
		        data: data
		    }]
		};

		
		return option;
	}
	
	
	var am = function (id){
		AmCharts.ready(function () {
			generateChartData();
			createStockChart(id);
		});

		var chartData = [];

		function generateChartData() {
			var firstDate = new Date(2012, 0, 1);
			firstDate.setDate(firstDate.getDate() - 1000);
			firstDate.setHours(0, 0, 0, 0);

			for (var i = 0; i < 1000; i++) {
				var newDate = new Date(firstDate);
				newDate.setHours(0, i, 0, 0);

				var a = Math.round(Math.random() * (40 + i)) + 100 + i;
				var b = Math.round(Math.random() * 100000000);

				chartData.push({
					date: newDate,
					value: a,
					volume: b
				});
			}
		}

		var chart;

		function createStockChart(id) {
			chart = new AmCharts.AmStockChart();

			// As we have minutely data, we should set minPeriod to "mm"
			var categoryAxesSettings = new AmCharts.CategoryAxesSettings();
			categoryAxesSettings.minPeriod = "mm";
			chart.categoryAxesSettings = categoryAxesSettings;

			// DATASETS //////////////////////////////////////////
			var dataSet = new AmCharts.DataSet();
			dataSet.color = "#b0de09";
			dataSet.fieldMappings = [{
				fromField: "value",
				toField: "value"
			}, {
				fromField: "volume",
				toField: "volume"
			}];
			dataSet.dataProvider = chartData;
			dataSet.categoryField = "date";

			// set data sets to the chart
			chart.dataSets = [dataSet];

			// PANELS ///////////////////////////////////////////
			// first stock panel
			var stockPanel1 = new AmCharts.StockPanel();
			stockPanel1.showCategoryAxis = false;
			stockPanel1.title = "次";
			stockPanel1.percentHeight = 70;

			// graph of first stock panel
			var graph1 = new AmCharts.StockGraph();
			graph1.valueField = "value";
			graph1.type = "smoothedLine";
			graph1.lineThickness = 2;
			graph1.bullet = "round";
			graph1.bulletBorderColor = "#FFFFFF";
			graph1.bulletBorderAlpha = 1;
			graph1.bulletBorderThickness = 3;
			stockPanel1.addStockGraph(graph1);

			// create stock legend
			var stockLegend1 = new AmCharts.StockLegend();
			stockLegend1.valueTextRegular = " ";
			stockLegend1.markerType = "none";
			stockPanel1.stockLegend = stockLegend1;


			// second stock panel
			var stockPanel2 = new AmCharts.StockPanel();
			stockPanel2.title = "次";
			stockPanel2.percentHeight = 30;
			var graph2 = new AmCharts.StockGraph();
			graph2.valueField = "volume";
			graph2.type = "column";
			graph2.cornerRadiusTop = 2;
			graph2.fillAlphas = 1;
			stockPanel2.addStockGraph(graph2);

			// create stock legend
			var stockLegend2 = new AmCharts.StockLegend();
			stockLegend2.valueTextRegular = " ";
			stockLegend2.markerType = "none";
			stockPanel2.stockLegend = stockLegend2;

			// set panels to the chart
			chart.panels = [stockPanel1, stockPanel2];


			// OTHER SETTINGS ////////////////////////////////////
			var scrollbarSettings = new AmCharts.ChartScrollbarSettings();
			scrollbarSettings.graph = graph1;
			scrollbarSettings.usePeriod = "10mm"; // this will improve performance
			scrollbarSettings.updateOnReleaseOnly = false;
			scrollbarSettings.position = "top";
			chart.chartScrollbarSettings = scrollbarSettings;

			var cursorSettings = new AmCharts.ChartCursorSettings();
			cursorSettings.valueBalloonsEnabled = true;
			chart.chartCursorSettings = cursorSettings;


			// PERIOD SELECTOR ///////////////////////////////////
//			var periodSelector = new AmCharts.PeriodSelector();
//			periodSelector.position = "top";
//			periodSelector.dateFormat = "YYYY-MM-DD JJ:NN";
//			periodSelector.inputFieldWidth = 150;
//			periodSelector.periods = [{
//				period: "hh",
//				count: 1,
//				label: "1 hour"
//			}, {
//				period: "hh",
//				count: 2,
//				label: "2 hours"
//			}, {
//				period: "hh",
//				count: 5,
//				label: "5 hour"
//			}, {
//				period: "hh",
//				count: 12,
//				label: "12 hours"
//			}, {
//				period: "MAX",
//				label: "MAX"
//			}];
//			chart.periodSelector = periodSelector;

			var panelsSettings = new AmCharts.PanelsSettings();
			panelsSettings.mouseWheelZoomEnabled = true;
			panelsSettings.usePrefixes = true;
			chart.panelsSettings = panelsSettings;


			chart.write(id);
		}
	}
	
	var cityVoicePercent = function (){
		var option;
		
		option = {
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			    	x : 'center',
			        y : 'bottom',
			        data:['交通噪声', '建筑施工', '社会生活','工业噪声', '80-90（分贝）','91-95（分贝）','96（分贝）以上']
			    },
			    series: [
			        {
			            name:'城市噪声占比',
			            type:'pie',
			            selectedMode: 'single',
			            radius: [0, '35%'],

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
							{value:335, name:'交通噪声'},
							{value:235, name:'建筑施工'},
							{value:110, name:'社会生活'},
							{value:234, name:'工业噪声'}
			            ]
			        },
			        {
			            name:'噪声分贝占比',
			            type:'pie',
			            radius: ['50%', '65%'],

			            data:[
							{value: 555, name:'80-90（分贝）'},
							{value: 133, name:'91-95（分贝）'},
							{value: 32, name:'96（分贝）以上'}
			                
			            ]
			        }
			    ]
			};
		return option;
	}
	
	var transferVoiceFrom = function(id){

	    var map = new BMap.Map(id);          // 创建地图实例

	    var point = new BMap.Point(104.06667,30.66667);
	    map.centerAndZoom(point, 11);             // 初始化地图，设置中心点坐标和地图级别
	    map.enableScrollWheelZoom(); // 允许滚轮缩放
	  
//	    var north = [30.8592300000,104.13628300];
//	    var west = [30.6834830000,103.8580240000];
//	    var south = [30.483700,104.076492];
//	    var east = [30.653352,104.240343];
	    
	    var rangeLat = [30483700, 30859230]; 
	    var rangeLng = [103858024, 104240343];
	    
	    var points =[
//	    {"lng":116.418261,"lat":39.921984,"count":50},
	   	];
	    
	    for (var i = 0; i < 200; i++){
	    	var lat = Math.round(rangeLat[0] + Math.random() * (rangeLat[1] - rangeLat[0])) / 1000000;
	    	var lng = Math.round(rangeLng[0] + Math.random() * (rangeLng[1] - rangeLng[0])) / 1000000;
	    	var count = Math.round(Math.random() * 200);
	    	points.push({'lng': lng, 'lat': lat, 'count': count});
	    }
	   
	    if(!isSupportCanvas()){
	    	alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
	    }
		//详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
		//参数说明如下:
		/* visible 热力图是否显示,默认为true
	     * opacity 热力的透明度,1-100
	     * radius 势力图的每个点的半径大小   
	     * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
	     *	{
				.2:'rgb(0, 255, 255)',
				.5:'rgb(0, 110, 255)',
				.8:'rgb(100, 0, 255)'
			}
			其中 key 表示插值的位置, 0~1. 
			    value 为颜色值. 
	     */
		heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
		map.addOverlay(heatmapOverlay);
		heatmapOverlay.setDataSet({data:points,max:100});

//		//显示热力图
//		heatmapOverlay.show();
	    
		function closeHeatmap(){
	        heatmapOverlay.hide();
	    }
		
	    function setGradient(){
	     	/*格式如下所示:
			{
		  		0:'rgb(102, 255, 0)',
		 	 	.5:'rgb(255, 170, 0)',
			  	1:'rgb(255, 0, 0)'
			}*/
	     	var gradient = {};
	     	var colors = document.querySelectorAll("input[type='color']");
	     	colors = [].slice.call(colors,0);
	     	colors.forEach(function(ele){
				gradient[ele.getAttribute("data-key")] = ele.value; 
	     	});
	        heatmapOverlay.setOptions({"gradient":gradient});
	    }
		//判断浏览区是否支持canvas
	    function isSupportCanvas(){
	        var elem = document.createElement('canvas');
	        return !!(elem.getContext && elem.getContext('2d'));
	    }

	};
	
//	１.交通噪声: 交通噪声主要指的是机动车辆、飞机、火车和轮船等交通工具在运行时发出的噪声．这些噪声的噪声源是流动的, 干扰范围大．在这类噪声中, 飞机噪声最强, 影响也比较严重．汽车是城市交通中较大的噪声源, 机动车的发动机运转、部件摩擦、车身震动、刹车、排气、鸣喇叭等, 都会产生噪声．一般公共汽车的噪声约为８０ 分贝．车速提高一倍噪声增长６～ １０ 分贝．最严重的是鸣喇叭, 电车喇叭大约９０～９５ 分贝, 汽车喇叭大约有 １０５～１１０ 分贝． 
//
//	　　２.工业噪声: 主要指工业生产劳动中产生的噪声．主要来自机器和高速设备, 如: 电气设备的噪声来自变压器和电动机；加热通风设备的噪声来自喷出口、旋涡、风扇及其他运动部件．一般电子工业和轻工业的噪声在９０ 分贝以下, 纺织厂噪声在９０～１１０ 分贝之间；机械工业噪声在８０～１００ 分贝；凿岩机、大型球磨机达１２０ 分贝；风铲、风铆、大型鼓风机在１２０ 分贝以上． ３.建筑施工噪声: 主要指建筑施工现场产生的噪声．在施工中要大量使用各种动力机械, 要进行挖掘、打夯、搅拌, 要频繁地运输材料和构件, 从而产生大量噪声． 
//
//	　　建筑施工噪声, 对发展中城市的影响极大．虽然每项施工都具有暂时性, 但城建施工的总和加起来很大, 而其中相当一部分的工期在两年以上．建筑施工机械噪声最严重的是打桩机, 距声源１０ 米时, 平均１０５ 分贝；距声源 ３０ 米时, 平均９１ 分贝． 
//
//	　　４.生活噪声: 主要指人们在商业交易、体育比赛、游行集会、娱乐场所等各种社会活动中产生的喧闹声, 以及收录机、电视机、洗衣机等各种家电的嘈杂声, 这类噪声一般在８０ 分贝以下．如洗衣机、缝纫机噪声为５０～８０ 分贝, 电风扇的噪声为３０～６５ 分贝, 空调机、电视机为７０ 分贝． 
//
//	在我国城市噪声中, 交通噪声占３１％, 生活噪声占４１％, 工业和其他噪声占２８％．在测定过程中, 噪声达８０ 分贝的占５５.５％, ９０ 分贝的占１３.３ ％, ９５ 分贝的占３.２％．
	
	
    return {
    	init:function(){
    		//var crChart = initEchart('voice.cr');
    		
    		am('voice.cr');
    		var cityVoicePercent = initEchart('voice.cityVoicePercent');
    		transferVoiceFrom('voice.transferVoiceFrom');
    		
    	},
    	cr: function(){
    		return cr();
    	},
    	cityVoicePercent: function(){
    		return cityVoicePercent();
    	}
    };
}();
