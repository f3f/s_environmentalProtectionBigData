var company = function () {
    var chinaMap = function () {
        var option = {
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    selectedMode: 'single',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        {name: '广东', selected: true}
                    ]
                }
            ]
        };
        return option;
    };

    var provices = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东',
        '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海',
        '西藏', '四川', '宁夏', '海南', '台湾', '香港', '澳门'];

    var proviceCache = new HashMap();

    /**
     * 随机重点行业数据
     */
    var randomIndustryAnalyseOption = function (provices) {
        var title = provices + "省重点污染行业监控";
        var legend = ['空气污染', '水体污染', '噪声污染', '危险废物污染', '固体废物污染'];
        var showType = 1;
        var dataNames = ['钢铁', '化工', '煤炭', '水泥制品', '有色金属冶炼', '锂电池'];
        var series = createBarSeries(legend, dataNames.length, 100, 400);
        var option = createBarOption(title, legend, showType, dataNames, series);
        return option;
    };


    /**
     * 随机严重污染企业监控
     */
    var randomTopCompanyOption = function (provices) {
        var title = provices + "省严重污染企业监控";
        var legend = ['空气污染', '水体污染', '噪声污染', '危险废物污染', '固体废物污染'];
        var showType = 1;
        var dataNames = ['企业A', '企业B', '企业C', '企业D', '企业E', '企业F'];
        var series = createBarSeries(legend, dataNames.length, 200, 400);
        var option = createBarOption(title, legend, showType, dataNames, series);
        return option;
    }

    /**
     * 随机空气严重污染源监控
     */
    var randomAirPolluteOption = function (provices) {
        var title = provices + "省空气主要污染源监控";
        var legend = ['AQI', 'NO', 'NO2', 'SO2', 'PM2.5', 'PM10'];
        var showType = 1;
        var dataNames = ['汽车尾气', '发电厂', '化工企业', '钢铁企业', '有色金属冶炼'];
        var series = createBarSeries(legend, dataNames.length, 50, 100);
        var option = createBarOption(title, legend, showType, dataNames, series);
        return option;
    }

    /**
     * 随机噪音污染源占比
     */
    var randomNoisePolluteOption = function (provices) {
        var title = provices + "省噪音污染源占比";
        var legend = ['工业噪声', '交通噪声', '建筑施工', '社会生活'];
        var series = createPieSeries(legend);
        var option = createPieOption(title, legend, series);
        return option;
    };

    /**
     * 随机土壤污染主要构成
     */
    var randomSoilPolluteOption = function (provices) {
        var title = provices + "省土壤污染主要构成";
        var legend = ['废渣', '废气', '废水'];
        var series = createPieSeries(legend);
        var option = createPieOption(title, legend, series);
        return option;
    };

    /**
     * 随机水污染源占比
     */
    var randomWaterPolluteOption = function (provices) {
        var title = provices + "省水污染源占比";
        var legend = ['工业', '农业', '生活', '交通'];
        var series = createPieSeries(legend);
        var option = createPieOption(title, legend, series);
        return option;
    };


    var createBarSeries = function (legend, dataSize, dataMin, dataMax) {
        var ret = [];
        var defaultSeries = {
            name: '',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: []
        };
        for (var index in legend) {
            var name = legend[index];
            var data = randomList(dataSize, dataMin, dataMax);
            var series = {};
            series.type = defaultSeries.type;
            series.stack = defaultSeries.stack;
            series.label = defaultSeries.label;
            series.name = name;
            series.data = data;
            ret.push(series);
        }
        return ret;
    };

    var createPieSeries = function (legend) {
        var defaultSeries = {
            type: 'pie',
            radius: [0, '50%'],
            center: ['50%', '50%'],
            data: [],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        };

        var data = [];
        var series = {};
        for (var index in legend) {
            var name = legend[index];
            var nameValue = {name: name, value: 0};
            nameValue = randomValue(nameValue, 10, 100);
            data.push(nameValue);
        }
        series.type = defaultSeries.type;
        series.radius = defaultSeries.radius;
        series.center = defaultSeries.center;
        series.itemStyle = defaultSeries.itemStyle;
        series.data = data;
        return series;
    }

    /**
     * 创建柱状图配置
     * @param titleText 标题
     * @param legend    数组,标签显示
     * @param showType  x轴显示值(0),y轴显示值(1)
     * @param dataNames 数据名集合
     * @param series      数据
     */
    var createBarOption = function (titleText, legend, showType, dataNames, series) {
        var option = {
            title: {
                text: titleText,
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: legend,
                x: 'center',
                y: 'bottom'
            },
            grid: {
                containLabel: true
            },
            xAxis: {},
            yAxis: {},
            series: []
        };
        option = barShowTypeL(showType, dataNames, option);
        option.series = series;
        return option;
    };


    /**
     * 创建饼图
     * @param titleText 标题
     * @param legend    标签显示
     * @param series    数据
     * @returns {{title: {text: *, x: string}, tooltip: {trigger: string, formatter: string}, legend: {orient: string, left: string, data: *}, series: Array}}
     */
    var createPieOption = function (titleText, legend, series) {
        var option = {
            title: {
                text: titleText,
                x: 'center',
                y: '3%'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: legend
            },
            series: []
        };
        option.series = series;
        return option;
    }


    /**
     * 柱状显示类型处理
     * @param showType   显示类型
     * @param dataNames  数据名集合
     * @param option     配置
     * @returns {*}
     */
    var barShowTypeL = function (showType, dataNames, option) {
        var category = {
            type: 'category',
            data: dataNames
        };
        var value = {
            type: 'value'
        }
        if (showType == 0) {
            option.xAxis = category;
            option.yAxis = value;
        }
        else {
            option.yAxis = category;
            option.xAxis = value;
        }
        return option;
    };


    /**
     * 生成随机数数组
     * @param size   数组大小
     */
    var randomList = function (size, min, max) {
        var ret = [];
        for (var i = 0; i < size; i++) {
            ret.push(randomNum(min, max));
        }
        return ret;
    };

    /**
     * 生成随机数
     * @param min  最小值
     * @param max  最大值
     * @returns {*}
     */
    var randomNum = function (min, max) {
        var mid = max - min;
        var num = Math.round(Math.random() * mid) + min;
        return num;
    };

    var randomValue = function (data, min, max) {
        var num = randomNum(min, max);
        data.value = num;
        return data;
    }

    var getProvince = function (name, type) {
        var data = proviceCache.get(name);
        var ret = eval('data.' + type);
        return ret;
    };

    var randomProvice = function () {
        for (var index in provices) {
            var name = provices[index];
            var province = {
                name: name,
                industryAnalyse: randomIndustryAnalyseOption(name),
                topCompany: randomTopCompanyOption(name),
                airPollute: randomAirPolluteOption(name),

                soilPollute: randomSoilPolluteOption(name),
                waterPollute: randomWaterPolluteOption(name),
                noisePollute: randomNoisePolluteOption(name),
            };
            proviceCache.set(province.name, province);
        }
    }

    var defaultProvince = '广东';

    return {
        init: function () {
            randomProvice();
            var chinaMap = initEchart('company.chinaMap');
            var industryAnalyse = initEchart('company.industryAnalyse');
            var topCompany = initEchart('company.topCompany');
            var airPollute = initEchart('company.airPollute');
            var soilPollute = initEchart('company.soilPollute');
            var waterPollute = initEchart('company.waterPollute');
            var noisePollute = initEchart('company.noisePollute');
            //绑定地图选择事件
            chinaMap.on('mapselectchanged', function (params) {
                industryAnalyse.setOption(getProvince(params.name, 'industryAnalyse'));
                topCompany.setOption(getProvince(params.name, 'topCompany'));
                airPollute.setOption(getProvince(params.name, 'airPollute'));
                soilPollute.setOption(getProvince(params.name, 'soilPollute'));
                waterPollute.setOption(getProvince(params.name, 'waterPollute'));
                noisePollute.setOption(getProvince(params.name, 'noisePollute'));
            });
        },

        industryAnalyse: function () {
            return getProvince(defaultProvince, 'industryAnalyse');
        },

        topCompany: function () {
            return getProvince(defaultProvince, 'topCompany');
        },
        airPollute: function () {
            return getProvince(defaultProvince, 'airPollute');
        },
        soilPollute: function () {
            return getProvince(defaultProvince, 'soilPollute');
        },
        waterPollute: function () {
            return getProvince(defaultProvince, 'waterPollute');
        },
        noisePollute: function () {
            return getProvince(defaultProvince, 'noisePollute');
        },

        chinaMap: function () {
            return chinaMap();
        }
    };
}();
