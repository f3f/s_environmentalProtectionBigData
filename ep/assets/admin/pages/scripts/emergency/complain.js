var complain = function () {

    var care = function () {
        var geoCoordMap = {
            "海门": [121.15, 31.89],
            "鄂尔多斯": [109.781327, 39.608266],
            "招远": [120.38, 37.35],
            "舟山": [122.207216, 29.985295],
            "齐齐哈尔": [123.97, 47.33],
            "盐城": [120.13, 33.38],
            "赤峰": [118.87, 42.28],
            "青岛": [120.33, 36.07],
            "乳山": [121.52, 36.89],
            "金昌": [102.188043, 38.520089],
            "泉州": [118.58, 24.93],
            "莱西": [120.53, 36.86],
            "日照": [119.46, 35.42],
            "胶南": [119.97, 35.88],
            "南通": [121.05, 32.08],
            "拉萨": [91.11, 29.97],
            "云浮": [112.02, 22.93],
            "梅州": [116.1, 24.55],
            "文登": [122.05, 37.2],
            "上海": [121.48, 31.22],
            "攀枝花": [101.718637, 26.582347],
            "威海": [122.1, 37.5],
            "承德": [117.93, 40.97],
            "厦门": [118.1, 24.46],
            "汕尾": [115.375279, 22.786211],
            "潮州": [116.63, 23.68],
            "丹东": [124.37, 40.13],
            "太仓": [121.1, 31.45],
            "曲靖": [103.79, 25.51],
            "烟台": [121.39, 37.52],
            "福州": [119.3, 26.08],
            "瓦房店": [121.979603, 39.627114],
            "即墨": [120.45, 36.38],
            "抚顺": [123.97, 41.97],
            "玉溪": [102.52, 24.35],
            "张家口": [114.87, 40.82],
            "阳泉": [113.57, 37.85],
            "莱州": [119.942327, 37.177017],
            "湖州": [120.1, 30.86],
            "汕头": [116.69, 23.39],
            "昆山": [120.95, 31.39],
            "宁波": [121.56, 29.86],
            "湛江": [110.359377, 21.270708],
            "揭阳": [116.35, 23.55],
            "荣成": [122.41, 37.16],
            "连云港": [119.16, 34.59],
            "葫芦岛": [120.836932, 40.711052],
            "常熟": [120.74, 31.64],
            "东莞": [113.75, 23.04],
            "河源": [114.68, 23.73],
            "淮安": [119.15, 33.5],
            "泰州": [119.9, 32.49],
            "南宁": [108.33, 22.84],
            "营口": [122.18, 40.65],
            "惠州": [114.4, 23.09],
            "江阴": [120.26, 31.91],
            "蓬莱": [120.75, 37.8],
            "韶关": [113.62, 24.84],
            "嘉峪关": [98.289152, 39.77313],
            "广州": [113.23, 23.16],
            "延安": [109.47, 36.6],
            "太原": [112.53, 37.87],
            "清远": [113.01, 23.7],
            "中山": [113.38, 22.52],
            "昆明": [102.73, 25.04],
            "寿光": [118.73, 36.86],
            "盘锦": [122.070714, 41.119997],
            "长治": [113.08, 36.18],
            "深圳": [114.07, 22.62],
            "珠海": [113.52, 22.3],
            "宿迁": [118.3, 33.96],
            "咸阳": [108.72, 34.36],
            "铜川": [109.11, 35.09],
            "平度": [119.97, 36.77],
            "佛山": [113.11, 23.05],
            "海口": [110.35, 20.02],
            "江门": [113.06, 22.61],
            "章丘": [117.53, 36.72],
            "肇庆": [112.44, 23.05],
            "大连": [121.62, 38.92],
            "临汾": [111.5, 36.08],
            "吴江": [120.63, 31.16],
            "石嘴山": [106.39, 39.04],
            "沈阳": [123.38, 41.8],
            "苏州": [120.62, 31.32],
            "茂名": [110.88, 21.68],
            "嘉兴": [120.76, 30.77],
            "长春": [125.35, 43.88],
            "胶州": [120.03336, 36.264622],
            "银川": [106.27, 38.47],
            "张家港": [120.555821, 31.875428],
            "三门峡": [111.19, 34.76],
            "锦州": [121.15, 41.13],
            "南昌": [115.89, 28.68],
            "柳州": [109.4, 24.33],
            "三亚": [109.511909, 18.252847],
            "自贡": [104.778442, 29.33903],
            "吉林": [126.57, 43.87],
            "阳江": [111.95, 21.85],
            "泸州": [105.39, 28.91],
            "西宁": [101.74, 36.56],
            "宜宾": [104.56, 29.77],
            "呼和浩特": [111.65, 40.82],
            "成都": [104.06, 30.67],
            "大同": [113.3, 40.12],
            "镇江": [119.44, 32.2],
            "桂林": [110.28, 25.29],
            "张家界": [110.479191, 29.117096],
            "宜兴": [119.82, 31.36],
            "北海": [109.12, 21.49],
            "西安": [108.95, 34.27],
            "金坛": [119.56, 31.74],
            "东营": [118.49, 37.46],
            "牡丹江": [129.58, 44.6],
            "遵义": [106.9, 27.7],
            "绍兴": [120.58, 30.01],
            "扬州": [119.42, 32.39],
            "常州": [119.95, 31.79],
            "潍坊": [119.1, 36.62],
            "重庆": [106.54, 29.59],
            "台州": [121.420757, 28.656386],
            "南京": [118.78, 32.04],
            "滨州": [118.03, 37.36],
            "贵阳": [106.71, 26.57],
            "无锡": [120.29, 31.59],
            "本溪": [123.73, 41.3],
            "克拉玛依": [84.77, 45.59],
            "渭南": [109.5, 34.52],
            "马鞍山": [118.48, 31.56],
            "宝鸡": [107.15, 34.38],
            "焦作": [113.21, 35.24],
            "句容": [119.16, 31.95],
            "北京": [116.46, 39.92],
            "徐州": [117.2, 34.26],
            "衡水": [115.72, 37.72],
            "包头": [110, 40.58],
            "绵阳": [104.73, 31.48],
            "乌鲁木齐": [87.68, 43.77],
            "枣庄": [117.57, 34.86],
            "杭州": [120.19, 30.26],
            "淄博": [118.05, 36.78],
            "鞍山": [122.85, 41.12],
            "溧阳": [119.48, 31.43],
            "库尔勒": [86.06, 41.68],
            "安阳": [114.35, 36.1],
            "开封": [114.35, 34.79],
            "济南": [117, 36.65],
            "德阳": [104.37, 31.13],
            "温州": [120.65, 28.01],
            "九江": [115.97, 29.71],
            "邯郸": [114.47, 36.6],
            "临安": [119.72, 30.23],
            "兰州": [103.73, 36.03],
            "沧州": [116.83, 38.33],
            "临沂": [118.35, 35.05],
            "南充": [106.110698, 30.837793],
            "天津": [117.2, 39.13],
            "富阳": [119.95, 30.07],
            "泰安": [117.13, 36.18],
            "诸暨": [120.23, 29.71],
            "郑州": [113.65, 34.76],
            "哈尔滨": [126.63, 45.75],
            "聊城": [115.97, 36.45],
            "芜湖": [118.38, 31.33],
            "唐山": [118.02, 39.63],
            "平顶山": [113.29, 33.75],
            "邢台": [114.48, 37.05],
            "德州": [116.29, 37.45],
            "济宁": [116.59, 35.38],
            "荆州": [112.239741, 30.335165],
            "宜昌": [111.3, 30.7],
            "义乌": [120.06, 29.32],
            "丽水": [119.92, 28.45],
            "洛阳": [112.44, 34.7],
            "秦皇岛": [119.57, 39.95],
            "株洲": [113.16, 27.83],
            "石家庄": [114.48, 38.03],
            "莱芜": [117.67, 36.19],
            "常德": [111.69, 29.05],
            "保定": [115.48, 38.85],
            "湘潭": [112.91, 27.87],
            "金华": [119.64, 29.12],
            "岳阳": [113.09, 29.37],
            "长沙": [113, 28.21],
            "衢州": [118.88, 28.97],
            "廊坊": [116.7, 39.53],
            "菏泽": [115.480656, 35.23375],
            "合肥": [117.27, 31.86],
            "武汉": [114.31, 30.52],
            "大庆": [125.03, 46.58]
        };

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        var option = {
            backgroundColor: '#404a59',
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ' : ' + params.value[2];
                }
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            dataRange: {
                min: 0,
                max: 400,
                text: ['多', '无'],
                calculable: true,
                color: ['#d94e5d', '#eac736', '#50a3ba'],
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        complainColor: '#323c48',
                        areaColor: '#404a59',
                        borderColor: '#111'
                    },
                    emphasis: {
                        complainColor: '#2a333d'
                    }
                }
            },
            series: [
                {
                    name: 'AQI',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData([
                        {name: "海门", value: 9},
                        {name: "鄂尔多斯", value: 12},
                        {name: "招远", value: 12},
                        {name: "舟山", value: 12},
                        {name: "齐齐哈尔", value: 14},
                        {name: "盐城", value: 15},
                        {name: "赤峰", value: 16},
                        {name: "青岛", value: 18},
                        {name: "乳山", value: 18},
                        {name: "金昌", value: 19},
                        {name: "泉州", value: 21},
                        {name: "莱西", value: 21},
                        {name: "日照", value: 21},
                        {name: "胶南", value: 22},
                        {name: "南通", value: 23},
                        {name: "拉萨", value: 24},
                        {name: "云浮", value: 24},
                        {name: "梅州", value: 25},
                        {name: "文登", value: 25},
                        {name: "上海", value: 25},
                        {name: "攀枝花", value: 25},
                        {name: "威海", value: 25},
                        {name: "承德", value: 25},
                        {name: "厦门", value: 26},
                        {name: "汕尾", value: 26},
                        {name: "潮州", value: 26},
                        {name: "丹东", value: 27},
                        {name: "太仓", value: 27},
                        {name: "曲靖", value: 27},
                        {name: "烟台", value: 28},
                        {name: "福州", value: 29},
                        {name: "瓦房店", value: 30},
                        {name: "即墨", value: 30},
                        {name: "抚顺", value: 31},
                        {name: "玉溪", value: 31},
                        {name: "张家口", value: 31},
                        {name: "阳泉", value: 31},
                        {name: "莱州", value: 32},
                        {name: "湖州", value: 32},
                        {name: "汕头", value: 32},
                        {name: "昆山", value: 33},
                        {name: "宁波", value: 33},
                        {name: "湛江", value: 33},
                        {name: "揭阳", value: 34},
                        {name: "荣成", value: 34},
                        {name: "连云港", value: 35},
                        {name: "葫芦岛", value: 35},
                        {name: "常熟", value: 36},
                        {name: "东莞", value: 36},
                        {name: "河源", value: 36},
                        {name: "淮安", value: 36},
                        {name: "泰州", value: 36},
                        {name: "南宁", value: 37},
                        {name: "营口", value: 37},
                        {name: "惠州", value: 37},
                        {name: "江阴", value: 37},
                        {name: "蓬莱", value: 37},
                        {name: "韶关", value: 38},
                        {name: "嘉峪关", value: 38},
                        {name: "广州", value: 38},
                        {name: "延安", value: 38},
                        {name: "太原", value: 39},
                        {name: "清远", value: 39},
                        {name: "中山", value: 39},
                        {name: "昆明", value: 39},
                        {name: "寿光", value: 40},
                        {name: "盘锦", value: 40},
                        {name: "长治", value: 41},
                        {name: "深圳", value: 41},
                        {name: "珠海", value: 42},
                        {name: "宿迁", value: 43},
                        {name: "咸阳", value: 43},
                        {name: "铜川", value: 44},
                        {name: "平度", value: 44},
                        {name: "佛山", value: 44},
                        {name: "海口", value: 44},
                        {name: "江门", value: 45},
                        {name: "章丘", value: 45},
                        {name: "肇庆", value: 46},
                        {name: "大连", value: 47},
                        {name: "临汾", value: 47},
                        {name: "吴江", value: 47},
                        {name: "石嘴山", value: 49},
                        {name: "沈阳", value: 50},
                        {name: "苏州", value: 50},
                        {name: "茂名", value: 50},
                        {name: "嘉兴", value: 51},
                        {name: "长春", value: 51},
                        {name: "胶州", value: 52},
                        {name: "银川", value: 52},
                        {name: "张家港", value: 52},
                        {name: "三门峡", value: 53},
                        {name: "锦州", value: 54},
                        {name: "南昌", value: 54},
                        {name: "柳州", value: 54},
                        {name: "三亚", value: 54},
                        {name: "自贡", value: 56},
                        {name: "吉林", value: 56},
                        {name: "阳江", value: 57},
                        {name: "泸州", value: 57},
                        {name: "西宁", value: 57},
                        {name: "宜宾", value: 58},
                        {name: "呼和浩特", value: 58},
                        {name: "成都", value: 58},
                        {name: "大同", value: 58},
                        {name: "镇江", value: 59},
                        {name: "桂林", value: 59},
                        {name: "张家界", value: 59},
                        {name: "宜兴", value: 59},
                        {name: "北海", value: 60},
                        {name: "西安", value: 61},
                        {name: "金坛", value: 62},
                        {name: "东营", value: 62},
                        {name: "牡丹江", value: 63},
                        {name: "遵义", value: 63},
                        {name: "绍兴", value: 63},
                        {name: "扬州", value: 64},
                        {name: "常州", value: 64},
                        {name: "潍坊", value: 65},
                        {name: "重庆", value: 66},
                        {name: "台州", value: 67},
                        {name: "南京", value: 67},
                        {name: "滨州", value: 70},
                        {name: "贵阳", value: 71},
                        {name: "无锡", value: 71},
                        {name: "本溪", value: 71},
                        {name: "克拉玛依", value: 72},
                        {name: "渭南", value: 72},
                        {name: "马鞍山", value: 72},
                        {name: "宝鸡", value: 72},
                        {name: "焦作", value: 75},
                        {name: "句容", value: 75},
                        {name: "北京", value: 79},
                        {name: "徐州", value: 79},
                        {name: "衡水", value: 80},
                        {name: "包头", value: 80},
                        {name: "绵阳", value: 80},
                        {name: "乌鲁木齐", value: 84},
                        {name: "枣庄", value: 84},
                        {name: "杭州", value: 84},
                        {name: "淄博", value: 85},
                        {name: "鞍山", value: 86},
                        {name: "溧阳", value: 86},
                        {name: "库尔勒", value: 86},
                        {name: "安阳", value: 90},
                        {name: "开封", value: 90},
                        {name: "济南", value: 92},
                        {name: "德阳", value: 93},
                        {name: "温州", value: 95},
                        {name: "九江", value: 96},
                        {name: "邯郸", value: 98},
                        {name: "临安", value: 99},
                        {name: "兰州", value: 99},
                        {name: "沧州", value: 100},
                        {name: "临沂", value: 103},
                        {name: "南充", value: 104},
                        {name: "天津", value: 105},
                        {name: "富阳", value: 106},
                        {name: "泰安", value: 112},
                        {name: "诸暨", value: 112},
                        {name: "郑州", value: 113},
                        {name: "哈尔滨", value: 114},
                        {name: "聊城", value: 116},
                        {name: "芜湖", value: 117},
                        {name: "唐山", value: 119},
                        {name: "平顶山", value: 119},
                        {name: "邢台", value: 119},
                        {name: "德州", value: 120},
                        {name: "济宁", value: 120},
                        {name: "荆州", value: 127},
                        {name: "宜昌", value: 130},
                        {name: "义乌", value: 132},
                        {name: "丽水", value: 133},
                        {name: "洛阳", value: 134},
                        {name: "秦皇岛", value: 136},
                        {name: "株洲", value: 143},
                        {name: "石家庄", value: 147},
                        {name: "莱芜", value: 148},
                        {name: "常德", value: 152},
                        {name: "保定", value: 153},
                        {name: "湘潭", value: 154},
                        {name: "金华", value: 157},
                        {name: "岳阳", value: 169},
                        {name: "长沙", value: 175},
                        {name: "衢州", value: 177},
                        {name: "廊坊", value: 193},
                        {name: "菏泽", value: 194},
                        {name: "合肥", value: 229},
                        {name: "武汉", value: 273},
                        {name: "大庆", value: 279}
                    ]),
                    symbolSize: 12,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#1b1b1b'
                        },
                        emphasis: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    }
                }
            ]
        };

        return option;
    };

    var topicMap = function () {

        var air = [], water = [], voice = [];

        for (var i = 1; i <= 31; i++) {
            air.push([i, randomData(500)]);
            water.push([i, randomData(400)]);
            voice.push([i, randomData(300)]);
        }

        var schema = [
            {name: 'day', index: 0, text: '日'},
            {name: 'count', index: 1, text: '举报次数'}
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
                data: ['雾霾', '水污染', '噪音'],
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            },
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + obj.seriesName + ' ' + value[0] + '日'
                        + '</div>'
                        + schema[1].text + '：' + value[1] + '<br>'
                        ;
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
                name: '举报次数',
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
            series: [
                {
                    name: '雾霾',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: air
                },
//	              {
//	                  name: '水质',
//	                  type: 'scatter',
//	                  itemStyle: itemStyle,
//	                  data: water
//	              },
                {
                    name: '噪音',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: voice
                }
            ]
        };
        return option;
    };


    var carePercent = function () {
        var dataArr = ['移动公众号', '环保部网站', '微博', '私信举报', '转发举报', '主动联系', '邮箱', '举报电话', '直访', '其它'];
        var dataIn = [];
        var dataOut = [];
        for (var index in dataArr) {
            if (index <= 2) {
                dataIn.push({name: dataArr[index], value: Math.round(Math.random() * 300)});
            } else {
                dataOut.push({name: dataArr[index], value: Math.round(Math.random() * 300)});
            }
        }

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
//		        orient: 'vertical',
                x: 'left',
                y: 'bottom',
                data: dataArr
            },
            series: [
                {
                    name: '次数',
                    type: 'pie',
                    selectedMode: 'single',
                    center: ['50%', '35%'],
                    radius: [0, '30%'],

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
		            data: dataIn
		        },
		        {
		            name:'次数',
		            type:'pie',
		            selectedMode: 'single',
		            center: ['50%', '35%'],
		            radius: ['40%', '55%'],

                    data: dataOut
                }
            ]
        };
        return option;
    };

    var hotTime = function () {
        var days = []
            , totalData = [0]
            , incrData = []
            , decrData = []
//			,isLastIncr = true
            ;

        for (var i = 1; i < 11; i++) {
            days.push([i]);
            var randomNum = randomData(1000) + 300;
            if (i === 1) {
                totalData.push(randomNum);
                incrData.push(randomNum);
                decrData.push('-');
                continue;
            }

            var lastIndex = totalData.length - 1;

            if (randomData(10) > 5) {
                totalData.push(totalData[lastIndex] + randomNum);
                incrData.push(randomNum);
                decrData.push('-');
                isLastIncr = true;
            } else {
//				if(isLastIncr){
//					totalData.pop();
//				}else{
//					lastIndex++;
//				}
//				

                totalData.push(totalData[totalData.length - 1] - randomNum);
                lastIndex++;

                if (totalData[lastIndex] < 0) {
                    totalData[lastIndex] = randomData(1000) + 100;
                    var diff = totalData[lastIndex] - totalData[lastIndex - 1];
                    if (diff < 0) {
                        decrData.push(Math.abs(diff));
                        incrData.push('-');
                    } else {
                        incrData.push(diff);
                        decrData.push('-');
                    }
                } else {
                    decrData.push(randomNum);
                    incrData.push('-');
                }

                isLastIncr = false;

            }

        }

//		totalData.unshift(0);
//		totalData.shift();

        console.log(totalData);
        console.log(incrData);
        console.log(decrData);

        var option = {
//		    title: {
//		        text: '阶梯瀑布图'
//		    },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar;
//		            if (params[1].value != '-') {
//		                tar = params[1];
//		            }
//		            else {
                    tar = params[0];
//		            }
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            legend: {
                data: ['增加', '减少']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                splitLine: {show: false},
                data: days
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '辅助',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: totalData
                },
                {
                    name: '增加',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data: incrData
                },
                {
                    name: '减少',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'bottom'
                        }
                    },
                    data: decrData
                }
            ]
        };

        return option;
    };

    var preNotify = function () {

        var nowHour = new Date().getHours()
            , hours = []
            , airs = []
            , voices = []
            ;
        for (var i = nowHour; i < 24; i++) {
            hours.push(i);
            airs.push(randomData(500) + 100);
            voices.push(randomData(100) + 20);
        }

        for (var i = 0; i < nowHour; i++) {
            hours.push(i);
            airs.push(randomData(500) + 100);
            voices.push(randomData(100) + 20);
        }


        var option = {
//			    title: {
//			        text: '未来一周气温变化',
//			        subtext: '纯属虚构'
//			    },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'left',
                data: ['雾霾举报', '噪音举报']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {},
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: hours,
                axisLabel: {
                    formatter: '{value} 点'
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 次'
                }
            },
            series: [
                {
                    name: '雾霾举报',
                    type: 'line',
                    data: airs,
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '噪音举报',
                    type: 'line',
                    data: voices,
                    markPoint: {
                        data: [
                            {name: '周最低', value: 20, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        };


        return option;
    };

    var compayMap = function () {
        var placeList = [
            {name: '海门', geoCoord: [121.15, 31.89]},
            {name: '鄂尔多斯', geoCoord: [109.781327, 39.608266]},
            {name: '招远', geoCoord: [120.38, 37.35]},
            {name: '舟山', geoCoord: [122.207216, 29.985295]},
            {name: '齐齐哈尔', geoCoord: [123.97, 47.33]},
            {name: '盐城', geoCoord: [120.13, 33.38]},
            {name: '赤峰', geoCoord: [118.87, 42.28]},
            {name: '青岛', geoCoord: [120.33, 36.07]},
            {name: '乳山', geoCoord: [121.52, 36.89]},
            {name: '金昌', geoCoord: [102.188043, 38.520089]},
            {name: '泉州', geoCoord: [118.58, 24.93]},
            {name: '莱西', geoCoord: [120.53, 36.86]},
            {name: '日照', geoCoord: [119.46, 35.42]},
            {name: '胶南', geoCoord: [119.97, 35.88]},
            {name: '南通', geoCoord: [121.05, 32.08]},
            {name: '拉萨', geoCoord: [91.11, 29.97]},
            {name: '云浮', geoCoord: [112.02, 22.93]},
            {name: '梅州', geoCoord: [116.1, 24.55]},
            {name: '文登', geoCoord: [122.05, 37.2]},
            {name: '上海', geoCoord: [121.48, 31.22]},
            {name: '攀枝花', geoCoord: [101.718637, 26.582347]},
            {name: '威海', geoCoord: [122.1, 37.5]},
            {name: '承德', geoCoord: [117.93, 40.97]},
            {name: '厦门', geoCoord: [118.1, 24.46]},
            {name: '汕尾', geoCoord: [115.375279, 22.786211]},
            {name: '潮州', geoCoord: [116.63, 23.68]},
            {name: '丹东', geoCoord: [124.37, 40.13]},
            {name: '太仓', geoCoord: [121.1, 31.45]},
            {name: '曲靖', geoCoord: [103.79, 25.51]},
            {name: '烟台', geoCoord: [121.39, 37.52]},
            {name: '福州', geoCoord: [119.3, 26.08]},
            {name: '瓦房店', geoCoord: [121.979603, 39.627114]},
            {name: '即墨', geoCoord: [120.45, 36.38]},
            {name: '抚顺', geoCoord: [123.97, 41.97]},
            {name: '玉溪', geoCoord: [102.52, 24.35]},
            {name: '张家口', geoCoord: [114.87, 40.82]},
            {name: '阳泉', geoCoord: [113.57, 37.85]},
            {name: '莱州', geoCoord: [119.942327, 37.177017]},
            {name: '湖州', geoCoord: [120.1, 30.86]},
            {name: '汕头', geoCoord: [116.69, 23.39]},
            {name: '昆山', geoCoord: [120.95, 31.39]},
            {name: '宁波', geoCoord: [121.56, 29.86]},
            {name: '湛江', geoCoord: [110.359377, 21.270708]},
            {name: '揭阳', geoCoord: [116.35, 23.55]},
            {name: '荣成', geoCoord: [122.41, 37.16]},
            {name: '连云港', geoCoord: [119.16, 34.59]},
            {name: '葫芦岛', geoCoord: [120.836932, 40.711052]},
            {name: '常熟', geoCoord: [120.74, 31.64]},
            {name: '东莞', geoCoord: [113.75, 23.04]},
            {name: '河源', geoCoord: [114.68, 23.73]},
            {name: '淮安', geoCoord: [119.15, 33.5]},
            {name: '泰州', geoCoord: [119.9, 32.49]},
            {name: '南宁', geoCoord: [108.33, 22.84]},
            {name: '营口', geoCoord: [122.18, 40.65]},
            {name: '惠州', geoCoord: [114.4, 23.09]},
            {name: '江阴', geoCoord: [120.26, 31.91]},
            {name: '蓬莱', geoCoord: [120.75, 37.8]},
            {name: '韶关', geoCoord: [113.62, 24.84]},
            {name: '嘉峪关', geoCoord: [98.289152, 39.77313]},
            {name: '广州', geoCoord: [113.23, 23.16]},
            {name: '延安', geoCoord: [109.47, 36.6]},
            {name: '太原', geoCoord: [112.53, 37.87]},
            {name: '清远', geoCoord: [113.01, 23.7]},
            {name: '中山', geoCoord: [113.38, 22.52]},
            {name: '昆明', geoCoord: [102.73, 25.04]},
            {name: '寿光', geoCoord: [118.73, 36.86]},
            {name: '盘锦', geoCoord: [122.070714, 41.119997]},
            {name: '长治', geoCoord: [113.08, 36.18]},
            {name: '深圳', geoCoord: [114.07, 22.62]},
            {name: '珠海', geoCoord: [113.52, 22.3]},
            {name: '宿迁', geoCoord: [118.3, 33.96]},
            {name: '咸阳', geoCoord: [108.72, 34.36]},
            {name: '铜川', geoCoord: [109.11, 35.09]},
            {name: '平度', geoCoord: [119.97, 36.77]},
            {name: '佛山', geoCoord: [113.11, 23.05]},
            {name: '海口', geoCoord: [110.35, 20.02]},
            {name: '江门', geoCoord: [113.06, 22.61]},
            {name: '章丘', geoCoord: [117.53, 36.72]},
            {name: '肇庆', geoCoord: [112.44, 23.05]},
            {name: '大连', geoCoord: [121.62, 38.92]},
            {name: '临汾', geoCoord: [111.5, 36.08]},
            {name: '吴江', geoCoord: [120.63, 31.16]},
            {name: '石嘴山', geoCoord: [106.39, 39.04]},
            {name: '沈阳', geoCoord: [123.38, 41.8]},
            {name: '苏州', geoCoord: [120.62, 31.32]},
            {name: '茂名', geoCoord: [110.88, 21.68]},
            {name: '嘉兴', geoCoord: [120.76, 30.77]},
            {name: '长春', geoCoord: [125.35, 43.88]},
            {name: '胶州', geoCoord: [120.03336, 36.264622]},
            {name: '银川', geoCoord: [106.27, 38.47]},
            {name: '张家港', geoCoord: [120.555821, 31.875428]},
            {name: '三门峡', geoCoord: [111.19, 34.76]},
            {name: '锦州', geoCoord: [121.15, 41.13]},
            {name: '南昌', geoCoord: [115.89, 28.68]},
            {name: '柳州', geoCoord: [109.4, 24.33]},
            {name: '三亚', geoCoord: [109.511909, 18.252847]},
            {name: '自贡', geoCoord: [104.778442, 29.33903]},
            {name: '吉林', geoCoord: [126.57, 43.87]},
            {name: '阳江', geoCoord: [111.95, 21.85]},
            {name: '泸州', geoCoord: [105.39, 28.91]},
            {name: '西宁', geoCoord: [101.74, 36.56]},
            {name: '宜宾', geoCoord: [104.56, 29.77]},
            {name: '呼和浩特', geoCoord: [111.65, 40.82]},
            {name: '成都', geoCoord: [104.06, 30.67]},
            {name: '大同', geoCoord: [113.3, 40.12]},
            {name: '镇江', geoCoord: [119.44, 32.2]},
            {name: '桂林', geoCoord: [110.28, 25.29]},
            {name: '张家界', geoCoord: [110.479191, 29.117096]},
            {name: '宜兴', geoCoord: [119.82, 31.36]},
            {name: '北海', geoCoord: [109.12, 21.49]},
            {name: '西安', geoCoord: [108.95, 34.27]},
            {name: '金坛', geoCoord: [119.56, 31.74]},
            {name: '东营', geoCoord: [118.49, 37.46]},
            {name: '牡丹江', geoCoord: [129.58, 44.6]},
            {name: '遵义', geoCoord: [106.9, 27.7]},
            {name: '绍兴', geoCoord: [120.58, 30.01]},
            {name: '扬州', geoCoord: [119.42, 32.39]},
            {name: '常州', geoCoord: [119.95, 31.79]},
            {name: '潍坊', geoCoord: [119.1, 36.62]},
            {name: '重庆', geoCoord: [106.54, 29.59]},
            {name: '台州', geoCoord: [121.420757, 28.656386]},
            {name: '南京', geoCoord: [118.78, 32.04]},
            {name: '滨州', geoCoord: [118.03, 37.36]},
            {name: '贵阳', geoCoord: [106.71, 26.57]},
            {name: '无锡', geoCoord: [120.29, 31.59]},
            {name: '本溪', geoCoord: [123.73, 41.3]},
            {name: '克拉玛依', geoCoord: [84.77, 45.59]},
            {name: '渭南', geoCoord: [109.5, 34.52]},
            {name: '马鞍山', geoCoord: [118.48, 31.56]},
            {name: '宝鸡', geoCoord: [107.15, 34.38]},
            {name: '焦作', geoCoord: [113.21, 35.24]},
            {name: '句容', geoCoord: [119.16, 31.95]},
            {name: '北京', geoCoord: [116.46, 39.92]},
            {name: '徐州', geoCoord: [117.2, 34.26]},
            {name: '衡水', geoCoord: [115.72, 37.72]},
            {name: '包头', geoCoord: [110, 40.58]},
            {name: '绵阳', geoCoord: [104.73, 31.48]},
            {name: '乌鲁木齐', geoCoord: [87.68, 43.77]},
            {name: '枣庄', geoCoord: [117.57, 34.86]},
            {name: '杭州', geoCoord: [120.19, 30.26]},
            {name: '淄博', geoCoord: [118.05, 36.78]},
            {name: '鞍山', geoCoord: [122.85, 41.12]},
            {name: '溧阳', geoCoord: [119.48, 31.43]},
            {name: '库尔勒', geoCoord: [86.06, 41.68]},
            {name: '安阳', geoCoord: [114.35, 36.1]},
            {name: '开封', geoCoord: [114.35, 34.79]},
            {name: '济南', geoCoord: [117, 36.65]},
            {name: '德阳', geoCoord: [104.37, 31.13]},
            {name: '温州', geoCoord: [120.65, 28.01]},
            {name: '九江', geoCoord: [115.97, 29.71]},
            {name: '邯郸', geoCoord: [114.47, 36.6]},
            {name: '临安', geoCoord: [119.72, 30.23]},
            {name: '兰州', geoCoord: [103.73, 36.03]},
            {name: '沧州', geoCoord: [116.83, 38.33]},
            {name: '临沂', geoCoord: [118.35, 35.05]},
            {name: '南充', geoCoord: [106.110698, 30.837793]},
            {name: '天津', geoCoord: [117.2, 39.13]},
            {name: '富阳', geoCoord: [119.95, 30.07]},
            {name: '泰安', geoCoord: [117.13, 36.18]},
            {name: '诸暨', geoCoord: [120.23, 29.71]},
            {name: '郑州', geoCoord: [113.65, 34.76]},
            {name: '哈尔滨', geoCoord: [126.63, 45.75]},
            {name: '聊城', geoCoord: [115.97, 36.45]},
            {name: '芜湖', geoCoord: [118.38, 31.33]},
            {name: '唐山', geoCoord: [118.02, 39.63]},
            {name: '平顶山', geoCoord: [113.29, 33.75]},
            {name: '邢台', geoCoord: [114.48, 37.05]},
            {name: '德州', geoCoord: [116.29, 37.45]},
            {name: '济宁', geoCoord: [116.59, 35.38]},
            {name: '荆州', geoCoord: [112.239741, 30.335165]},
            {name: '宜昌', geoCoord: [111.3, 30.7]},
            {name: '义乌', geoCoord: [120.06, 29.32]},
            {name: '丽水', geoCoord: [119.92, 28.45]},
            {name: '洛阳', geoCoord: [112.44, 34.7]},
            {name: '秦皇岛', geoCoord: [119.57, 39.95]},
            {name: '株洲', geoCoord: [113.16, 27.83]},
            {name: '石家庄', geoCoord: [114.48, 38.03]},
            {name: '莱芜', geoCoord: [117.67, 36.19]},
            {name: '常德', geoCoord: [111.69, 29.05]},
            {name: '保定', geoCoord: [115.48, 38.85]},
            {name: '湘潭', geoCoord: [112.91, 27.87]},
            {name: '金华', geoCoord: [119.64, 29.12]},
            {name: '岳阳', geoCoord: [113.09, 29.37]},
            {name: '长沙', geoCoord: [113, 28.21]},
            {name: '衢州', geoCoord: [118.88, 28.97]},
            {name: '廊坊', geoCoord: [116.7, 39.53]},
            {name: '菏泽', geoCoord: [115.480656, 35.23375]},
            {name: '合肥', geoCoord: [117.27, 31.86]},
            {name: '武汉', geoCoord: [114.31, 30.52]},
            {name: '大庆', geoCoord: [125.03, 46.58]}
        ]
        var option = {
            backgroundColor: '#1b1b1b',
            color: [
                'rgba(255, 255, 255, 0.8)',
                'rgba(14, 241, 242, 0.8)',
                'rgba(37, 140, 249, 0.8)'
            ],
//             title : {
//                 text: '大规模MarkPoint特效',
//                 subtext: '纯属虚构',
//                 x:'center',
//                 textStyle : {
//                     color: '#fff'
//                 }
//             },
            legend: {
                y: 'top',
                data: ['强', '中', '弱'],
                textStyle: {
                    color: '#fff'
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: '弱',
                    type: 'map',
                    mapType: 'china',
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(100,149,237,1)',
                            borderWidth: 1.5,
                            areaColor: '#1b1b1b'
                        }
                    },
                    data: [],
                    markPoint: {
                        symbolSize: 2,
                        large: true,
                        effect: {
                            show: true
                        },
                        data: (function () {
                            var data = [];
                            var len = 3000;
                            var geoCoord
                            while (len--) {
                                geoCoord = placeList[len % placeList.length].geoCoord;
                                data.push({
                                    name: placeList[len % placeList.length].name + len,
                                    value: 10,
                                    geoCoord: [
                                        geoCoord[0] + Math.random() * 5 - 2.5,
                                        geoCoord[1] + Math.random() * 3 - 1.5
                                    ]
                                })
                            }
                            return data;
                        })()
                    }
                },
                {
                    name: '中',
                    type: 'map',
                    mapType: 'china',
                    data: [],
                    markPoint: {
                        symbolSize: 3,
                        large: true,
                        effect: {
                            show: true
                        },
                        data: (function () {
                            var data = [];
                            var len = 1000;
                            var geoCoord
                            while (len--) {
                                geoCoord = placeList[len % placeList.length].geoCoord;
                                data.push({
                                    name: placeList[len % placeList.length].name + len,
                                    value: 50,
                                    geoCoord: [
                                        geoCoord[0] + Math.random() * 5 - 2.5,
                                        geoCoord[1] + Math.random() * 3 - 1.5
                                    ]
                                })
                            }
                            return data;
                        })()
                    }
                },
                {
                    name: '强',
                    type: 'map',
                    mapType: 'china',
                    hoverable: false,
                    roam: true,
                    data: [],
                    markPoint: {
                        symbol: 'diamond',
                        symbolSize: 6,
                        large: true,
                        effect: {
                            show: true
                        },

                        data: (function () {
                            var data = [];
                            var len = placeList.length;
                            while (len--) {
                                data.push({
                                    name: placeList[len].name,
                                    value: 90,
                                    geoCoord: placeList[len].geoCoord
                                })
                            }
                            return data;
                        })()
                    }
                }
            ]
        };
        return option;
    };

    var industryList = function () {
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['2011', '2012']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : ['锂电池','有色金属冶炼','石油冶炼','水泥制品','钢铁','煤炭']
                }
            ],
            series : [
                {
                    name:'2011',
                    type:'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data:[200, 170, 240, 244, 200, 220]
                },
                {
                    name:'2012',
                    type:'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data:[320, 302, 341, 374, 390, 450]
                }
            ]
        };
        return option;
    };


    return {
        init: function () {
            var care = initEchart('complain.care');
            var topicMap = initEchart('complain.topicMap');

            var carePercent = initEchart('complain.carePercent');
            var hotTime = initEchart('complain.hotTime');

            var preNotify = initEchart('complain.preNotify');
            var compayMap = initEchart('complain.compayMap');

            var industryList = initEchart('complain.industryList');

//    		echarts.init(document.getElementById('all-pollutant')).setOption(allPollutantOption);
        },
        care: function () {
            return care();
        },
        topicMap: function () {
            return topicMap();
        },
        carePercent: function () {
            return carePercent();
        },
        hotTime: function () {
            return hotTime();
        },
        preNotify: function () {
            return preNotify();
        },
        compayMap: function () {
            return compayMap();
        },
        industryList: function () {
            return industryList();
        }
    };
}();
