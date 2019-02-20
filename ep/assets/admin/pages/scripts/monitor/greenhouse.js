var greenHouse = function () {
	var initHeatMap = function(){
	    var map = new BMap.Map("heat_map");          // 创建地图实例
	    var point = new BMap.Point(104.06667,30.66667);
	    map.centerAndZoom(point,13);             // 初始化地图，设置中心点坐标和地图级别
//	    map.enableScrollWheelZoom(); // 允许滚轮缩放
	    map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]}));
	    map.setMapType(BMAP_HYBRID_MAP);
	    var rangeLat = [30483700, 30859230]; 
	    var rangeLng = [103858024, 104240343];
	    var points =[
	   	];
	    for (var i = 0; i < 300; i++){
	    	var lat = Math.round(rangeLat[0] + Math.random() * (rangeLat[1] - rangeLat[0])) / 1000000;
	    	var lng = Math.round(rangeLng[0] + Math.random() * (rangeLng[1] - rangeLng[0])) / 1000000;
	    	var count = Math.round(Math.random() * 200);
	    	points.push({'lng': lng, 'lat': lat, 'count': count});
	    }
	    if(!isSupportCanvas()){
	    	alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
	    }
		heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":50});
		map.addOverlay(heatmapOverlay);
		heatmapOverlay.setDataSet({data:points,max:200});
		function closeHeatmap(){
	        heatmapOverlay.hide();
	    }
		
	    function setGradient(){
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
    return {
    	init:function(){
    		initHeatMap();
    	}
    };
}();
