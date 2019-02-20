var bluesky=function(){
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
	var  myDate = new Date();
	var date=myDate.getDate();
	
	var initBlueSky=function(){
		var blueSky = echarts.init(document.getElementById('blueSky'));
		var option = {
				baseOption: {
			        timeline: {
			            axisType: 'category',
			            autoPlay: true,
			            playInterval: 1000,
			            data: [
			                '2016-05-10','2016-05-11','2016-05-12','2016-05-13','2016-05-14','2016-05-15'
			            ]/*,
			            label: {
			                formatter : function(s) {
			                    return (new Date(s)).getFullYear();
			                }
			            }*/
			        },
			        tooltip: {
			        	formatter: '{b}:{c}'
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
			                data: ['空气污染指数', '噪音指数', '气候指数','天气指数','绿化指数','交通指数','居住环境指数','健康指数','环境指数'],
			                splitLine: {show: false}
			            }
			        ],
			        yAxis: [
			            {
			                type: 'value',
			                name: 'GDP（亿元）',
			                max: 100
			            }
			        ],
			        series: [
			            {name: '各项指数', type: 'bar',
			            	   itemStyle: {
			                       normal: {
			                           color: function(params) {
			                               // build a color map as your need.
			                               var colorList = [
			                                 '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
			                                  '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
			                                  '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
			                               ];
			                               return colorList[params.dataIndex]
			                           },
			                           label: {
			                               show: true,
			                               position: 'top',
			                               formatter: '{b}\n{c}'
			                           }
			                       }
			                   },
			            },
			            {
			                name: '宜人指数',
			                type: 'gauge',
			                center: ['65%', '25%'],
			                radius: '50%'
			            }
			        ]
			    },
			    options: [
				{
				    title: {text: '2016-5-10各项指数'},
				    series: [
				        {data: [43.15,21.50,72.76,60.18,23.24,40.94,58.22,48.54,37.2]},
				        {data: [
				            {name: '宜人指数', value: 63}
				        ]}
				    ]
				},
				{
				    title: {text: '2016-5-11各项指数'},
				    series: [
				          {data: [33.15,71.50,32.76,60.18,53.24,66.94,48.22,78.54,67.2]},
				        {data: [
				            {name: '宜人指数', value: 70}
				        ]}
				    ]
				},
				{
				    title: {text: '2016-5-12各项指数'},
				    series: [
				         {data: [53.15,61.50,72.76,68.18,33.24,86.94,78.22,48.54,97.2]},
				        {data: [
				            {name: '宜人指数', value: 80}
				        ]}
				    ]
				},
				{
				    title: {text: '2016-5-13各项指数'},
				    series: [
				         {data: [64.15,46.50,87.76,52.18,63.24,66.44,58.22,68.54,47.2]},
				        {data: [
				            {name: '宜人指数', value: 73}
				        ]}
				    ]
				},
				{
				    title: {text: '2016-5-14各项指数'},
				    series: [
				         {data: [54.15,46.59,87.66,58.18,67.24,73.44,68.22,58.54,44.2]},
				        {data: [
				            {name: '宜人指数', value: 78}
				        ]}
				    ]
				},
				{
				    title: {text: '2016-5-14各项指数'},
				    series: [
				        {data: [94.15,66.59,57.66,62.18,73.24,69.44,54.22,68.54,82.2]},
				        {data: [
				            {name: '宜人指数', value: 69}
				        ]}
				    ]
				},
				{
				    title: {text: '2015全国宏观经济指标'},
				    series: [
				        {data: [53.15,61.50,72.76,68.18,33.24,86.94,78.22,48.54,97.2]},
				        {data: [
				            {name: '绿色GDP', value: 74}
				        ]}
				    ]
				}
			   ]
        };
		blueSky.setOption(option);
	
	
	}
	return {
		init:function(){
			initBlueSky();
		}
	}
}();