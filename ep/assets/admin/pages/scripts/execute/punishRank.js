var punishRank = function () {

    var rank = function () {
        var base = +new Date(2015, 1, 1);
        var oneDay = 24 * 3600 * 1000;
        var date = [];

        var data = [Math.random() * 300];

        for (var i = 1; i < 365; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }

        var option = {
            tooltip: {
                trigger: 'axis'
            },
            title: {
                left: 'center',
                text: '处罚历史走势图',
            },
            legend: {
                top: 'bottom',
                data: ['意向']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10
            }],
            series: [
                {
                    name: '北京',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    data: data
                }
            ]
        };
        return option;
    };

    return {
        init: function () {
            var rank = initEchart('punishRank.rank');
        },

        rank: function () {
            return rank();
        },

    }
}();