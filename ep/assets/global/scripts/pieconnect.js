/**
 * 用于两个连接饼图的实例,选中第一个饼图影响第二个饼图的显示
 *
 */

PieConnect = function () {
    var analyzeCache = new HashMap();

    /**
     *
     * @param option
     * @returns {*}
     */
    var initInput = function (option, input) {
        var name = '';
        for (var index in input) {
            var data = input[index];
            analyzeCache.set(data.name, data);
            option.legend.data.push(data.name);
            var seriesData = {value: data.value, name: data.name};
            option.series[0].data.push(seriesData);
            name = data.name;
        }
        minorPieOption = selectAction({name: name});
        return option;
    }

    /**
     *
     * @param name
     * @returns {*}
     */
    var disposeData = function (name) {
        var data = analyzeCache.get(name);
        return data;
    }

    var selectAction = function (params) {
        var option = default_option();
        var serise = default_serise();
        var showName = params.name + "分析";
        option.title.text = showName;
        serise.name = showName;
        var data = disposeData(params.name);
        serise.data = data.data;
        option.legend.data = data.dataNames;
        option.series.push(serise);
        return option;
    };


    var default_option = function () {
        var option = {
            title: {
                text: '',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: []
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            series: []
        };
        return option;
    };

    var default_serise = function () {
        var serise = {
            name: '',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true
                },
            },
            lableLine: {
                normal: {
                    show: true,
                    length: 1,
                },
            },
            data: []
        };
        return serise;
    }


    var exampleData = {
        name: '处罚金额分析',
        data: [
            {
                name: '化学污染处罚',
                value: 50,
                dataNames: ['100k - 150k', '100k or more'],
                data: [
                    {name: '100k - 150k', value: 54},
                    {name: '100k or more', value: 46}
                ]
            },
            {
                name: '水体污染处罚',
                value: 10,
                dataNames: ['0~25k', '26~50k', '51~75k', '75~100k', '100k - 150k', '100k or more'],
                data: [
                    {name: '0~25k', value: 13},
                    {name: '26~50k', value: 34},
                    {name: '51~75k', value: 30},
                    {name: '75~100k', value: 12},
                    {name: '100~150k', value: 7},
                    {name: '150k or more', value: 4},
                ]
            }, {
                name: '土壤污染处罚',
                value: 12,
                dataNames: ['0~25k', '26~50k', '51~75k', '75~100k'],
                data: [
                    {name: '0~25k', value: 5},
                    {name: '26~50k', value: 15},
                    {name: '51~75k', value: 45},
                    {name: '75~100k', value: 40},
                ]
            }
        ]
    }


    return {
        /**
         * 初始化一个pieConnect
         * @param mainDiv
         * @param minorDiv
         */
        init: function (mainDiv, minorDiv, input) {
            var mainPie = echarts.init(document.getElementById(mainDiv));
            var option = default_option();
            option.title.text = input.name;
            option.series.push(default_serise());
            option = initInput(option, input.data);
            mainPie.setOption(option);
            var minorPie = echarts.init(document.getElementById(minorDiv));
            minorPie.setOption(minorPieOption);
            mainPie.on("pieselectchanged", function (params) {
                minorPie.setOption(selectAction(params), true, false);
            })
            var ret = {
                mainPie : mainPie,
                minorPie: minorPie
            };
            return ret;
        }
    }
}()