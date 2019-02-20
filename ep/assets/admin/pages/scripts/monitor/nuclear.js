var nuclear = function () {
	
	// 2运行 1建设中 0筹建
	var nuclearEles = {
		    1: {lng: 30.996585, lat: 106.304793 , title: '三坝核电站',    status: 0, desc: '', type: '压水堆CP300', kw: '300', time: '-'}
	       ,2: {lng: 29.715194, lat: 107.391383, title: '培林核电站',   status: 0, desc: '', type: '压水堆CP600', kw: '600', time: '-'}
	       ,3: {lng: 32.827519, lat:  111.66712, title: '南阳核电站',   status: 0, desc: '', type: '重水堆CANDU', kw: '700', time: '-'}
	       ,4: {lng: 46.892526, lat: 130.549088, title: '佳木斯核电站', status: 0, desc: '', type: '压水堆', kw: '800', time: '-'}
	       ,5: {lng: 42.394791, lat: 126.819787, title: '靖宇核电站',   status: 0, desc: '', type: '压水堆', kw: '900', time: '-'}
	       ,6: {lng: 39.767220, lat: 121.574237, title: '红沿河核电站', status: 1, desc: '', type: '压水堆CP600', kw: '600', time: '-'}
	       ,7: {lng: 36.782244, lat: 121.165026, title: '海阳核电站',   status: 1, desc: '', type: '压水堆WWER1000', kw: '1000', time: '-'}
	       ,8: {lng: 36.915615, lat: 122.443550, title: '石岛湾核电站', status: 1, desc: '', type: '压水堆WWER1000', kw: '1000', time: '-'}
	       ,9: {lng: 33.891046, lat: 120.123175, title: '田湾核电站',   status: 2, desc: '', type: '重水堆CANDU', kw: '700', time: '1991-12'}
	      ,10: {lng: 31.423000, lat: 118.852181, title: '芜湖核电站',   status: 0, desc: '', type: '压水堆', kw: '900', time: '-'}
	      ,11: {lng: 23.234258, lat: 114.563886, title: '大亚湾核电站', status: 2, desc: '', type: '压水堆', kw: '900', time: '1993-08'}
       }
	
	var initDetail = function(ele) {
		$('#sp-name').html(ele.title);
		$('#sp-power').html(ele.kw);
		$('#sp-time').html(ele.time);
		if (ele.status === 0 ){
			$('#sp-status').html('筹建中');
		}else if (ele.status === 1){
			$('#sp-status').html('建设中');
		}else {
			$('#sp-status').html('运行中');
		}
		
		$('#sp-type').html(ele.type);
	};
	
	var allNuclear = function(id){

	     var map = new BMap.Map(id);          // 创建地图实例
	       map.disableScrollWheelZoom();
	       map.disableAutoResize();
	       map.disableDragging();
	       map.disableDoubleClickZoom();
	       var point = new BMap.Point(106.671589, 35.702613);
	       map.centerAndZoom(point, 5);

	       for (var key in nuclearEles) {
	    	   var e = nuclearEles[key];
	    	   map.addOverlay(getNuclearMarker(key, e.lng, e.lat));
	       }

	        
	        /**
	         * 得到核电站的marker数组。
	         * @param  {lat} 经度
	         * @param  {lng} 纬度
	         * @return {marker} 标记
	         */
	        function getNuclearMarker(id, lng, lat){
	        	var overlay = new BMapLib.TextIconOverlay( new BMap.Point(lat, lng), 1);
	        	overlay.customId = id;
	        	console.log(overlay);
	        	overlay.addEventListener("click", function (e) {
	        		initDetail(nuclearEles[e.target.customId]);
	        		console.log(nuclearEles[e.target.customId]);
		        });
	        	overlay.addEventListener("mouseover", function (e) {
	        		initDetail(nuclearEles[e.target.customId]);
	        		console.log(nuclearEles[e.target.customId]);
		        });
	        	overlay.addEventListener("mouseout", function (e) {
//		             console.log(e);
		        });
	            return overlay;               
	        }


	};
	
	
    return {
    	init:function(){
    		//var crChart = initEchart('voice.cr');
    		
    		allNuclear('nuclear.allNuclear');
    		
    	},
    	nuclearEles: function(){
    		return nuclearEles;
    	},
    	initDetail: function(ele){
    		initDetail(ele);
    	}
    	
    };
}();
