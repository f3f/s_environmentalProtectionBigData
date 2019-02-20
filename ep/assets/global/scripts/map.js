/**
 * 使用百度地图
 */
var bMap = function() {
    /**
     * 创建地图
     * @param divID       地图放置的DIV
     * @param centerGeoLo 地图中心点经度
     * @param centerGeoLa 地图中心点纬度
     * @param level       地图级别（级别越高,比例尺越小,地图越清晰）
     */
    var createMap = function(divID,centerGeo,level) {
        var map = new BMap.Map(divID);
        map.centerAndZoom(new BMap.Point(centerGeo[0],centerGeo[1]), level);
        return map;
    };

    /**
     * 多边形定点坐标集合实例
     * @type {*[]}
     */
    var exampleGeoList = [
        [119.768556,31.516017],
        [119.457527,31.498038],
        [119.356342,31.304724],
        [119.291951,31.111008],
        [119.673695,30.770051],
        [120.037042,30.758135]
    ];



    var examplePolygon = function(){
            var list = [
                [119.768556,31.516017],
                [119.457527,31.498038],
                [119.356342,31.304724],
                [119.291951,31.111008],
                [119.673695,30.770051],
                [120.037042,30.758135],
            ];
            var option = {
                strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5
            };
            return {list: list,option: option,text: text};
    };

    var exampleLabel = {
            geo: [120.38659,31.166396],
            text: '东部平原水生态功能区',
            fontSize: 30
    };

    /**
     * 默认多边形配置
     * @type {{strokeColor: string, strokeWeight: number, strokeOpacity: number}}
     */
    var defaultPolygonOption = {
        strokeColor:"blue",
        strokeWeight:2,
        strokeOpacity:0.5
    };

    /**
     * 默认文本标签偏移量
     * @type {*[]}
     */
    var defaultTextOffset = [0,0];

    /**
     * 默认文本标签样式
     * @type {{color: string, fontSize: string, height: string, lineHeight: string, fontFamily: string}}
     */
    var defaultTextStyle = {
        color : "black",
        fontSize : "10px",
        fontFamily:"微软雅黑"
    };

    /**
     * 创建多边形
     * @param geoList 多边形定点坐标集合
     * @param option  多边形配置
     */
    var initPolygon = function(geoList,option)
    {
        var pointList = [];
        for(var index in geoList)
        {
            var point = new BMap.Point(geoList[index][0],geoList[index][1]);
            pointList.push(point);
        }
        var polygon = new BMap.Polygon(pointList,option);
        return polygon;
    }

    /**
     * 创建文本标签
     * @param geo   标签位置坐标
     * @param size  标签偏移量
     * @param text  标签内容
     * @param style 标签样式
     * @returns {*}
     */
    var initLabel = function(geo,offset,text,style){
        var point = new BMap.Point(geo[0],geo[1]);
        var opts = {
            position : point,    // 指定文本标注所在的地理位置
            offset   : new BMap.Size(offset[0],offset[1])    //设置文本偏移量
        };
        var label = new BMap.Label(text, opts);  // 创建文本标注对象
        label.setStyle(style);
        return label;
    }

    return{
        init: function(divID,centerGeo,level){
            return createMap(divID,centerGeo,level);
        },
        initPolygon: function(geoList,option){
            return initPolygon(geoList,option);
        },
        initLabel: function(geo, offset, text, style){
            return initLabel(geo,offset,text,style);
        },
        initLabel: function(geo, text, fontSize)
        {
            var style = defaultTextStyle;
            style.fontSize = fontSize;
            return initLabel(geo,defaultTextOffset,text,style);
        },
        initLabel: function(label)
        {
            var style = defaultTextStyle;
            style.fontSize = label.fontSize;
            return initLabel(label.geo,defaultTextOffset,label.text,style);
        }
    }
}();