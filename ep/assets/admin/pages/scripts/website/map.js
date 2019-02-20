var Page = function(){
	
	var initBaiduMap = function(){
		var styleJson = [
		                 {
		                     "featureType": "road",
		                     "elementType": "labels",
		                     "stylers": {
		                               "visibility": "off"
		                     }
		                 },
		                 {
		                    "featureType": "poi",
		                    "elementType": "labels",
		                    "stylers": {
		                              "visibility": "off"
		                    }
		                  }
		    		 ];
		var map = new BMap.Map("map");          // 创建地图实例
	    var point = new BMap.Point(114.1603009,30.5683366);
	    map.centerAndZoom(point, 6);             // 初始化地图，设置中心点坐标和地图级别
	    map.setMapStyle({styleJson:styleJson});
	    map.enableScrollWheelZoom(true);
	    
	    // 编写自定义函数,创建标注
		function addMarker(point){
		  var marker = new BMap.Marker(point);
		  map.addOverlay(marker);
		}
		// 随机向地图添加25个标注
		var bounds = map.getBounds();
		var sw = bounds.getSouthWest();
		var ne = bounds.getNorthEast();
		var lngSpan = Math.abs(sw.lng - ne.lng);
		var latSpan = Math.abs(ne.lat - sw.lat);
		for (var i = 0; i < 25; i ++) {
			var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
			addMarker(point);
		}
	}
	
	return {
		init:function(){
			initBaiduMap();
		}
	}
}();