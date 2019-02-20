var   vehicleEmissionPollution=function(){
	var initMap=function(){
	    var map = new BMap.Map("heat_map");          // 创建地图实例
	    map.centerAndZoom(new BMap.Point(104.06667,30.66667), 12); 
	       var ctrl = new BMapLib.TrafficControl(); 
	       map.addControl(ctrl);
	       ctrl.show();
	       
	    /* var markPoint=new BMap.Point(104.072482,30.663251); 
	       var oldMarker = new BMap.Marker(markPoint);  // 创建标注
   		    map.addOverlay(oldMarker);
   		    oldMarker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
   		  initPanorama(markPoint);
	       map.addEventListener("click",function(e){
	    	    map.removeOverlay(oldMarker);
	    	    var p1=new BMap.Point(e.point.lng,e.point.lat);
	    		var marker = new BMap.Marker(p1);  // 创建标注
	    		map.addOverlay(marker);               // 将标注添加到地图中
	    		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	    		oldMarker=marker;
	    	     initPanorama(p1);
	       });*/
	       map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]}));
		   map.setMapType(BMAP_HYBRID_MAP);
		//判断浏览区是否支持canvas
	    function isSupportCanvas(){
	        var elem = document.createElement('canvas');
	        return !!(elem.getContext && elem.getContext('2d'));
	    }

	}
	var  initPanorama=function(p){
		var panorama = new BMap.Panorama('panorama');
		panorama.setPosition(p);
	}
	
	var  initTrafficPressure=function(){
		option = {
			    title: {
			        text: '交通压力指数',
			    },
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'shadow'
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis: {
			        type: 'value',
			        boundaryGap: [0, 0.01]
			    },
			    yAxis: {
			        type: 'category',
			        data: ['一环路','二环路','三环路']
			    },
			    series: [
			        {
			            name: '2011年',
			            type: 'bar',
			            data: [72, 89, 63]
			        },
			    ]
			};
		echarts.init(document.getElementById('traffic_pressure')).setOption(option);
	}
	var  initElectroPressure=function(){
		option = {
				title: {
					text: '城市用电压力指数',
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'value',
					boundaryGap: [0, 0.01]
				},
				yAxis: {
					type: 'category',
					data: ['区域一','区域二','区域三','区域四']
				},
				series: [
				         {
				        	 name: '城市用电压力指数',
				        	 type: 'bar',
				        	 data: [72, 89, 63,77]
				         },
				         ]
		};
		echarts.init(document.getElementById('electro_pressure')).setOption(option);
	}
	
	
	return {
		init:function(){
			initMap();
			initTrafficPressure();
			initElectroPressure();
		}
	}
}();