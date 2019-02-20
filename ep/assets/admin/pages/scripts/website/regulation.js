var regulation = function () {
	
	var percent = function (){
		var dataArr = ['畸形政绩观亟待改变', '应保障环保部门的执法权', '环保执法应更严格', '需理顺环保和发展的关系', '期待机制建设', '加强公民环保意识', '工业化进程中固有现象'];
		var data = [];
		for (var index in dataArr){
			data.push({name: dataArr[index], value: Math.round(Math.random() * 300 )});
		}
		
		var option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{b}: {d}%"
		    },
//		    legend: {
////		        orient: 'vertical',
//		        x: 'left',
//		        y: 'bottom',
//		        data: dataArr
//		    },
		    series: [
		        {
		            name:'占比',
		            type:'pie',
		            label: {
		            	normal: {
		            		show: true,
		            		formatter: "{b} \n {d}%"
		            	}
		            	
		            },
		            selectedMode: 'single',
		            center: ['50%', '35%'],
		            radius: [0, '55%'],
		            data: data
		        }
		    ]
		};
		return option;
	};
	
	
    return {
    	init:function(){
    		var percent = initEchart('regulation.percent');
    		
//    		echarts.init(document.getElementById('all-pollutant')).setOption(allPollutantOption);
    	},
    	percent: function (){
    		return percent();
    	}
    };
}();
