$(function () {
    var myChart = echarts.init(document.getElementById('main'));
    $('#comeback').hide();
    /**
     * 加载开发区地图
     */
    var kfqArray = ['国庆村', '五里村', '新白龙庙社区', '永兴佳园社区', '龙潭佳园社区', '龙潭村', '爱国村', '通遂社区', '泽生社区', '新闸村',
        '八一村', '福利村', '隆兴佳园社区', '芦泾港村社区', '永兴社区', '东港社区', '曙光村社区', '越江社区', '节制闸村社区', '永兴花苑社区', '永和佳园社区', '窑墩坝村社区'];

    function loadKFQMap() {
        $.ajax({
            url: 'json/kf.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('kfq', data);

                //地图上插的小旗子
                var geoCoordMap = {
                    '国庆村': [120.76498031616211, 32.06133699866369],
                    '五里村': [120.7697868347168, 32.07166546974275],
                    '新白龙庙社区': [120.78042984008788, 32.057990905800125],
                    '永兴佳园社区': [120.80686569213866, 32.04518733365799],
                    '龙潭佳园社区': [120.78351974487305, 32.04722438541606],
                    '龙潭村': [120.77356338500977, 32.04736988737824],
                    '爱国村': [120.76807022094725, 32.04111309413573],
                    '通遂社区': [120.76738357543944, 32.03238197028519],
                    '泽生社区': [120.75347900390624, 32.03645659835869],
                    '新闸村': [120.74953079223631, 32.043004727893994],
                    '八一村': [120.75176239013672, 32.050570872022476],
                    '福利村': [120.75468063354492, 32.060609597582975],
                    '隆兴佳园社区': [120.77802658081056, 32.03863936024243],
                    '芦泾港村社区': [120.78317642211913, 32.03063564560882],
                    '永兴社区': [120.79639434814452, 32.02728843023575],
                    '东港社区': [120.80566406250001, 32.018992630152795],
                    '曙光村社区': [120.80875396728514, 32.026124152736784],
                    '越江社区': [120.81785202026367, 32.028743756298226],
                    '节制闸村社区': [120.82471847534181, 32.035874519734655],
                    '永兴花苑社区': [120.81235885620117, 32.03529243741029],
                    '永和佳园社区': [120.80171585083009, 32.03791177872976],
                    '窑墩坝村社区': [120.79622268676756, 32.04998888314202],
                }
                var data = [
                    {
                        name: '国庆村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#ebf4ff',
                            borderWidth: 3,
                            borderColor: '#ebf4ff',
                            emphasis: {
                                areaColor: '#ebf4ff',
                                borderColor: '#ebf4ff',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '五里村',
                        value: 22,
                        itemStyle: {
                            areaColor: '#fff5ee',
                            borderWidth: 3,
                            borderColor: '#fff5ee',
                            emphasis: {
                                areaColor: '#fff5ee',
                                borderColor: '#fff5ee',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '新白龙庙社区',
                        value: 14,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 4,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 4,
                            },

                        }
                    },
                    {
                        name: '永兴佳园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f3ffe3',
                            borderWidth: 4,
                            borderColor: '#f3ffe3',
                            emphasis: {
                                areaColor: '#f3ffe3',
                                borderColor: '#f3ffe3',
                                borderWidth: 4,
                            },

                        }
                    },
                    {
                        name: '龙潭佳园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#fcfcc8',
                            borderWidth: 3,
                            borderColor: '#fcfcc8',
                            emphasis: {
                                areaColor: '#fcfcc8',
                                borderColor: '#fcfcc8',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '龙潭村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f8e6fc',
                            borderWidth: 3,
                            borderColor: '#f8e6fc',
                            emphasis: {
                                areaColor: '#f8e6fc',
                                borderColor: '#f8e6fc',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '爱国村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#ebf4ff',
                            borderWidth: 3,
                            borderColor: '#ebf4ff',
                            emphasis: {
                                areaColor: '#ebf4ff',
                                borderColor: '#ebf4ff',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '通遂社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#fff5ee',
                            borderWidth: 3,
                            borderColor: '#fff5ee',
                            emphasis: {
                                areaColor: '#fff5ee',
                                borderColor: '#fff5ee',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '泽生社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '新闸村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f3ffe3',
                            borderWidth: 3,
                            borderColor: '#f3ffe3',
                            emphasis: {
                                areaColor: '#f3ffe3',
                                borderColor: '#f3ffe3',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '八一村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f8e6fc',
                            borderWidth: 3,
                            borderColor: '#f8e6fc',
                            emphasis: {
                                areaColor: '#f8e6fc',
                                borderColor: '#f8e6fc',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '福利村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#fcfcc8',
                            borderWidth: 3,
                            borderColor: '#fcfcc8',
                            emphasis: {
                                areaColor: '#fcfcc8',
                                borderColor: '#fcfcc8',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '隆兴佳园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#ebf4ff',
                            borderWidth: 3,
                            borderColor: '#ebf4ff',
                            emphasis: {
                                areaColor: '#ebf4ff',
                                borderColor: '#ebf4ff',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '芦泾港村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#fff5ee',
                            borderWidth: 3,
                            borderColor: '#fff5ee',
                            emphasis: {
                                areaColor: '#fff5ee',
                                borderColor: '#fff5ee',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '永兴社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '东港社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f3ffe3',
                            borderWidth: 3,
                            borderColor: '#f3ffe3',
                            emphasis: {
                                areaColor: '#f3ffe3',
                                borderColor: '#f3ffe3',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '曙光村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f8e6fc',
                            borderWidth: 3,
                            borderColor: '#f8e6fc',
                            emphasis: {
                                areaColor: '#f8e6fc',
                                borderColor: '#f8e6fc',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '越江社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#fcfcc8',
                            borderWidth: 3,
                            borderColor: '#fcfcc8',
                            emphasis: {
                                areaColor: '#fcfcc8',
                                borderColor: '#fcfcc8',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '节制闸村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#ebf4ff',
                            borderWidth: 3,
                            borderColor: '#ebf4ff',
                            emphasis: {
                                areaColor: '#ebf4ff',
                                borderColor: '#ebf4ff',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '永兴花苑社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#fff5ee',
                            borderWidth: 3,
                            borderColor: '#fff5ee',
                            emphasis: {
                                areaColor: '#fff5ee',
                                borderColor: '#fff5ee',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '永和佳园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f3ffe3',
                            borderWidth: 3,
                            borderColor: '#f3ffe3',
                            emphasis: {
                                areaColor: '#f3ffe3',
                                borderColor: '#f3ffe3',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '窑墩坝村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '##def9f0',
                            borderWidth: 3,
                            borderColor: '##def9f0',
                            emphasis: {
                                areaColor: '##def9f0',
                                borderColor: '##def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                ];
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
                    tooltip: {
                        show: false,
                        formatter: function (e) {
                            if (typeof (e.value)[2] == "undefined") {
                                return e.name;
                            } else {
                                return '<p style="font-size: 15px;color: red;font-weight: bold">社区数</p>' + e.name + ':' + e.value[2] + '所';
                            }

                        }
                    },
                    geo: {
                        map: 'kfq',
                        show: true,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#C9E6FF',
                                borderColor: '#998262',
                                borderWidth: 2,
                                shadowColor: '#998262',
                                shadowBlur: 20,
                                shadowOffsetY: 20,
                                shadowOffsetX: 20
                            }
                        },
                        zoom: 1,
                    },
                    series: [
                        {
                            type: 'map',
                            map: 'kfq',
                            geoIndex: 1,
                            aspectScale: 0.75, //长宽比
                            zoom: 1,
                            label: {
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#05C3F9'
                                    }
                                }
                            },
                            roam: false,
                            itemStyle: {
                                normal: {
                                    areaColor: 'transparent',
                                    borderColor: '#fff',
                                    borderWidth: 2
                                },
                                emphasis: {
                                    areaColor: '#C9E6FF',
                                    shadowColor: '#5AB2FE',
                                    shadowBlur: 20
                                }
                            },
                            data: data,
                        },
                        {
                            name: '社区',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [30, 30],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 10,
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#1C3E64', //标志颜色
                                }
                            },
                            zlevel: 6,
                            data: convertData(data),
                        }
                    ]
                };
                myChart.clear();
                myChart.setOption(option, true);
                myChart.on('click', function (params) {

                });
                $('#comeback').show();
            }

        });
    }

    /**
     * 加载幸福街道地图
     */
    var xfArray = ['转水社区', '花桥社区', '管园村', '施店社区', '幸福社区', '文俊社区', '蒋坝村', '幸福佳苑社区', '秦西村', '祖望社区'];

    function loadXFMap() {
        $.ajax({
            url: 'json/xf.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('xf', data);
                console.log(data);
                //地图上插的小旗子
                var geoCoordMap = {
                    '转水社区': [120.86334228515624, 32.11456704479077],
                    '花桥社区': [120.85338592529297, 32.10831484920636],
                    '管园村': [120.84085464477539, 32.09799051942507],
                    '施店社区': [120.85561752319337, 32.098135940623976],
                    '幸福社区': [120.85647583007812, 32.09159175748344],
                    '文俊社区': [120.84720611572266, 32.0879558976284],
                    '蒋坝村': [120.83227157592773, 32.0824291135784],
                    '幸福佳苑社区': [120.85853576660156, 32.083447230490506],
                    '秦西村': [120.85218429565428, 32.07341101159024],
                    '祖望社区': [120.86814880371095, 32.10424342191546],

                }
                var data = [
                    {
                        name: '转水社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '花桥社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#ebf4ff',
                            borderWidth: 3,
                            borderColor: '#ebf4ff',
                            emphasis: {
                                areaColor: '#ebf4ff',
                                borderColor: '#ebf4ff',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '管园村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#fff5ee',
                            borderWidth: 3,
                            borderColor: '#fff5ee',
                            emphasis: {
                                areaColor: '#fff5ee',
                                borderColor: '#fff5ee',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '施店社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f3ffe3',
                            borderWidth: 3,
                            borderColor: '#f3ffe3',
                            emphasis: {
                                areaColor: '#f3ffe3',
                                borderColor: '#f3ffe3',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '幸福社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f8e6fc',
                            borderWidth: 3,
                            borderColor: '#f8e6fc',
                            emphasis: {
                                areaColor: '#f8e6fc',
                                borderColor: '#f8e6fc',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '文俊社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#fcfcc8',
                            borderWidth: 3,
                            borderColor: '#fcfcc8',
                            emphasis: {
                                areaColor: '#fcfcc8',
                                borderColor: '#fcfcc8',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '蒋坝村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#ebf4ff',
                            borderWidth: 3,
                            borderColor: '#ebf4ff',
                            emphasis: {
                                areaColor: '#ebf4ff',
                                borderColor: '#ebf4ff',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '幸福佳苑社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#fff5ee',
                            borderWidth: 3,
                            borderColor: '#fff5ee',
                            emphasis: {
                                areaColor: '#fff5ee',
                                borderColor: '#fff5ee',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '秦西村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '祖望社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f3ffe3',
                            borderWidth: 3,
                            borderColor: '#f3ffe3',
                            emphasis: {
                                areaColor: '#f3ffe3',
                                borderColor: '#f3ffe3',
                                borderWidth: 3,
                            },

                        }
                    }
                ];
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
                    tooltip: {
                        show: false,
                        formatter: function (e) {
                            if (typeof (e.value)[2] == "undefined") {
                                return e.name;
                            } else {
                                return '<p style="font-size: 15px;color: red;font-weight: bold">社区数</p>' + e.name + ':' + e.value[2] + '所';
                            }

                        }
                    },
                    geo: {
                        map: 'xf',
                        show: true,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#C9E6FF',
                                borderColor: '#998262',
                                borderWidth: 2,
                                shadowColor: '#998262',
                                shadowBlur: 20,
                                shadowOffsetY: 20,
                                shadowOffsetX: 20
                            }
                        },
                        zoom: 1,
                    },
                    series: [
                        {
                            type: 'map',
                            map: 'xf',
                            geoIndex: 1,
                            aspectScale: 0.75, //长宽比
                            zoom: 1,
                            label: {
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#05C3F9'
                                    }
                                }
                            },
                            roam: false,
                            itemStyle: {
                                normal: {
                                    areaColor: 'transparent',
                                    borderColor: '#fff',
                                    borderWidth: 2
                                },
                                emphasis: {
                                    areaColor: '#C9E6FF',
                                    shadowColor: '#5AB2FE',
                                    shadowBlur: 20
                                }
                            },
                            data: data,
                        },
                        {
                            name: '幸福街道',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [30, 30],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 10,
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#1C3E64', //标志颜色
                                }
                            },
                            zlevel: 6,
                            data: convertData(data),
                        }
                    ]
                };
                myChart.clear();
                myChart.setOption(option, true);
                myChart.on('click', function (params) {

                })
                $('#comeback').show();
            }

        });
    }

    /**
     * 加载陈桥街道地图
     */
    var caArray = ['树北村', '天玺社区', '丽都社区', '天和社区', '五里树社区', '育爱村', '集成村', '仁和社区', '河口村'];

    function loadCQMap() {
        $.ajax({
            url: 'json/cq.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('cq', data);

                //地图上插的小旗子
                var geoCoordMap = {
                    '树北村': [120.81579208374023, 32.12910537866883],
                    '天玺社区': [120.81888198852539, 32.116602550956046],
                    '丽都社区': [120.83707809448241, 32.10918727429358],
                    '天和社区': [120.81579208374023, 32.10758782193262],
                    '丽康社区': [120.82403182983397, 32.098717623104534],
                    '五里树社区': [120.80240249633789, 32.103807186796196],
                    '育爱村': [120.79072952270508, 32.11602098239759],
                    '集成村': [120.77545166015625, 32.09173718886837],
                    '仁和社区': [120.79879760742188, 32.090573731307344],
                    '河口村': [120.79622268676756, 32.08519254738235]

                }
                var data = [
                    {
                        name: '树北村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '天玺社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '丽都社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '天和社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '丽康社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '五里树社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '育爱村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '集成村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '仁和社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '河口村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    }
                ];
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
                    tooltip: {
                        show: false,
                        formatter: function (e) {
                            if (typeof (e.value)[2] == "undefined") {
                                return e.name;
                            } else {
                                return '<p style="font-size: 15px;color: red;font-weight: bold">社区数</p>' + e.name + ':' + e.value[2] + '所';
                            }

                        }
                    },
                    geo: {
                        map: 'cq',
                        show: true,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#C9E6FF',
                                borderColor: '#998262',
                                borderWidth: 2,
                                shadowColor: '#998262',
                                shadowBlur: 20,
                                shadowOffsetY: 20,
                                shadowOffsetX: 20
                            }
                        },
                        zoom: 1,
                    },
                    series: [
                        {
                            type: 'map',
                            map: 'cq',
                            geoIndex: 1,
                            aspectScale: 0.75, //长宽比
                            zoom: 1,
                            label: {
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#05C3F9'
                                    }
                                }
                            },
                            roam: false,
                            itemStyle: {
                                normal: {
                                    areaColor: 'transparent',
                                    borderColor: '#fff',
                                    borderWidth: 2
                                },
                                emphasis: {
                                    areaColor: '#C9E6FF',
                                    shadowColor: '#5AB2FE',
                                    shadowBlur: 20
                                }
                            },
                            data: data,
                        },
                        {
                            name: '陈桥街道',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [30, 30],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 10,
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#1C3E64', //标志颜色
                                }
                            },
                            zlevel: 6,
                            data: convertData(data),
                        }
                    ]
                };
                myChart.clear();
                myChart.setOption(option, true);
                myChart.on('click', function (params) {

                })
                $('#comeback').show();
            }

        });
    }

    /**
     * 加载唐闸街道
     */
    var tzArray = ['闸东社区', '西洋桥社区', '公园社区', '碧林湾社区', '新园社区', '永泰社区', '长安社区', '尖沟头社区', '花墙社区', '高店社区', '横河社区', '怡园社区', '大南社区', '新华社区'];

    function loadTZMap() {
        $.ajax({
            url: 'json/tz.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('tz', data);

                //地图上插的小旗子
                var geoCoordMap = {
                    '闸东社区': [120.8060073852539, 32.07981104658546],
                    '西洋桥社区': [120.79330444335938, 32.068028817201444],
                    '公园社区': [120.81012725830077, 32.070647221609576],
                    '碧林湾社区': [120.82574844360352, 32.072538244831925],
                    '新园社区': [120.82128524780272, 32.065846756257535],
                    '永泰社区': [120.83724975585939, 32.06468296913311],
                    '长安社区': [120.85939407348631, 32.05173483867968],
                    '尖沟头社区': [120.84617614746092, 32.05551762806566],
                    '花墙社区': [120.83003997802734, 32.05653604464182],
                    '高店社区': [120.81510543823242, 32.05348076090566],
                    '横河社区': [120.83415985107422, 32.04489632256306],
                    '怡园社区': [120.84909439086914, 32.04416879077791],
                    '大南社区': [120.80669403076172, 32.062937260680705],
                    '新华社区': [120.80034255981444, 32.057990905800125],


                }
                var data = [
                    {
                        name: '闸东社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '西洋桥社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '公园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '碧林湾社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '新园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '永泰社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '长安社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '尖沟头社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '花墙社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '高店社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '横河社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '怡园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '大南社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '新华社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                ];
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
                    tooltip: {
                        show: false,
                        formatter: function (e) {
                            if (typeof (e.value)[2] == "undefined") {
                                return e.name;
                            } else {
                                return '<p style="font-size: 15px;color: red;font-weight: bold">社区数</p>' + e.name + ':' + e.value[2] + '所';
                            }

                        }
                    },
                    geo: {
                        map: 'tz',
                        show: true,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#C9E6FF',
                                borderColor: '#998262',
                                borderWidth: 2,
                                shadowColor: '#998262',
                                shadowBlur: 20,
                                shadowOffsetY: 20,
                                shadowOffsetX: 20
                            }
                        },
                        zoom: 1,
                    },
                    series: [
                        {
                            type: 'map',
                            map: 'tz',
                            geoIndex: 1,
                            aspectScale: 0.75, //长宽比
                            zoom: 1,
                            label: {
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#05C3F9'
                                    }
                                }
                            },
                            roam: false,
                            itemStyle: {
                                normal: {
                                    areaColor: 'transparent',
                                    borderColor: '#fff',
                                    borderWidth: 2
                                },
                                emphasis: {
                                    areaColor: '#C9E6FF',
                                    shadowColor: '#5AB2FE',
                                    shadowBlur: 20
                                }
                            },
                            data: data,
                        },
                        {
                            name: '唐闸街道',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [30, 30],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 10,
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#1C3E64', //标志颜色
                                }
                            },
                            zlevel: 6,
                            data: convertData(data),
                        }
                    ]
                };
                myChart.clear();
                myChart.setOption(option, true);
                myChart.on('click', function (params) {

                })
                $('#comeback').show();
            }

        });
    }

    /**
     * 加载秦灶街道
     */
    var qzArray = ['袁桥村', '秦北村', '桥北村', '西安桥村', '费桥村', '桥东村', '苏阳社区', '秦灶社区', '民安花苑社区', '八里庙社区'];

    function loadQZMap() {
        $.ajax({
            url: 'json/qz.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('qz', data);

                //地图上插的小旗子
                var geoCoordMap = {
                    '袁桥村': [120.89003562927246, 32.07777472041461],
                    '秦北村': [120.875186920166, 32.0732655510424],
                    '桥北村': [120.8685779571533, 32.064319282619806],
                    '西安桥村': [120.90831756591797, 32.07501106234297],
                    '费桥村': [120.89492797851561, 32.0661377007248],
                    '桥东村': [120.88231086730957, 32.0618461759786],
                    '苏阳社区': [120.8726119995117, 32.05660878824919],
                    '秦灶社区': [120.89518547058105, 32.056754275290444],
                    '民安花苑社区': [120.87613105773926, 32.04918864238804],
                    '八里庙社区': [120.8920955657959, 32.048897644015334],
                }
                var data = [
                    {
                        name: '袁桥村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '秦北村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '桥北村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '西安桥村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '费桥村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '桥东村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '苏阳社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '秦灶社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '民安花苑社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '八里庙社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },

                ];
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
                    tooltip: {
                        show: false,
                        formatter: function (e) {
                            if (typeof (e.value)[2] == "undefined") {
                                return e.name;
                            } else {
                                return '<p style="font-size: 15px;color: red;font-weight: bold">社区数</p>' + e.name + ':' + e.value[2] + '所';
                            }

                        }
                    },
                    geo: {
                        map: 'qz',
                        show: true,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#C9E6FF',
                                borderColor: '#998262',
                                borderWidth: 2,
                                shadowColor: '#998262',
                                shadowBlur: 20,
                                shadowOffsetY: 20,
                                shadowOffsetX: 20
                            }
                        },
                        zoom: 1,
                    },
                    series: [
                        {
                            type: 'map',
                            map: 'qz',
                            geoIndex: 1,
                            aspectScale: 0.75, //长宽比
                            zoom: 1,
                            label: {
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#05C3F9'
                                    }
                                }
                            },
                            roam: false,
                            itemStyle: {
                                normal: {
                                    areaColor: 'transparent',
                                    borderColor: '#fff',
                                    borderWidth: 2
                                },
                                emphasis: {
                                    areaColor: '#C9E6FF',
                                    shadowColor: '#5AB2FE',
                                    shadowBlur: 20
                                }
                            },
                            data: data,
                        },
                        {
                            name: '秦灶街道',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [30, 30],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 10,
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#1C3E64', //标志颜色
                                }
                            },
                            zlevel: 6,
                            data: convertData(data),
                        }
                    ]
                };
                myChart.clear();
                myChart.setOption(option, true);
                myChart.on('click', function (params) {

                })
                $('#comeback').show();
            }

        });
    }


    var gzqArray = ['陈桥街道', '经济开发区', '唐闸镇街道', '幸福街道', '秦灶街道'];

    /**
     * 根据下标加载对应的街道
     * @param index
     */
    function loadStreet(index){
        switch (index) {
            case 0:
                loadCQMap();
                break;
            case 1:
                loadKFQMap();
                break;
            case 2:
                loadTZMap();
                break;
            case 3:
                loadXFMap();
                break;
            case 4:
                loadQZMap();
                break;
            default:
                break;
        }
    }
    /**
     * 加载港闸区地图
     */
    function loadGZQMap() {
        $.ajax({
            url: 'json/gangzha.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('gzq', data);
                var geoCoordMap = {
                    '陈桥街道': [120.80772399902344, 32.10700619594571],
                    '经济开发区': [120.78128814697264, 32.04358676118635],
                    '唐闸镇街道': [120.82386016845702, 32.061627957476404],
                    '幸福街道': [120.85235595703126, 32.08751958472376],
                    '秦灶街道': [120.88874816894531, 32.06511939104014],
                }
                var data = [
                    {
                        name: '陈桥街道',
                        value: 10,
                        itemStyle: {
                            areaColor: '#def9f0',
                            borderWidth: 3,
                            borderColor: '#def9f0',
                            emphasis: {
                                areaColor: '#def9f0',
                                borderColor: '#def9f0',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '经济开发区',
                        value: 22,
                        itemStyle: {
                            areaColor: '#ebf4ff',
                            borderWidth: 3,
                            borderColor: '#ebf4ff',
                            emphasis: {
                                areaColor: '#ebf4ff',
                                borderColor: '#ebf4ff',
                                borderWidth: 3,
                            },

                        }
                    },
                    {
                        name: '唐闸镇街道',
                        value: 14,
                        itemStyle: {
                            areaColor: '#f8e6fc',
                            borderWidth: 4,
                            borderColor: '#f8e6fc',
                            emphasis: {
                                areaColor: '#f8e6fc',
                                borderColor: '#f8e6fc',
                                borderWidth: 4,
                            },

                        }
                    },
                    {
                        name: '幸福街道',
                        value: 10,
                        itemStyle: {
                            areaColor: '#ffece6',
                            borderWidth: 4,
                            borderColor: '#ffece6',
                            emphasis: {
                                areaColor: '#ffece6',
                                borderColor: '#ffece6',
                                borderWidth: 4,
                            },

                        }
                    },
                    {
                        name: '秦灶街道',
                        value: 10,
                        itemStyle: {
                            areaColor: '#f3ffe3',
                            borderWidth: 3,
                            borderColor: '#f3ffe3',
                            emphasis: {
                                areaColor: '#f3ffe3',
                                borderColor: '#f3ffe3',
                                borderWidth: 3,
                            },

                        }
                    }
                ];
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
                    tooltip: {
                        formatter: function (e) {
                            if (typeof (e.value)[2] == "undefined") {
                                return e.name;
                            } else {
                                return '<p style="font-size: 15px;color: red;font-weight: bold">社区数</p>' + e.name + ':' + e.value[2] + '所';
                            }

                        }
                    },
                    geo: {
                        map: 'gzq',
                        show: true,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#C9E6FF',
                                borderColor: '#998262',
                                borderWidth: 2,
                                shadowColor: '#998262',
                                shadowBlur: 20,
                                shadowOffsetY: 20,
                                shadowOffsetX: 20
                            }
                        },
                        zoom: 1,
                    },
                    series: [
                        {
                            type: 'map',
                            map: 'gzq',
                            geoIndex: 1,
                            aspectScale: 0.75, //长宽比
                            zoom: 1,
                            label: {
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#05C3F9'
                                    }
                                }
                            },
                            roam: false,
                            itemStyle: {
                                normal: {
                                    areaColor: 'transparent',
                                    borderColor: '#fff',
                                    borderWidth: 2
                                },
                                emphasis: {
                                    areaColor: '#C9E6FF',
                                    shadowColor: '#5AB2FE',
                                    shadowBlur: 20
                                }
                            },
                            data: data,
                        },
                        {
                            name: '街道数',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [30, 30],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 18,
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#1C3E64', //标志颜色
                                }
                            },
                            zlevel: 6,
                            data: convertData(data),
                        }
                    ]
                };
                myChart.clear();
                myChart.setOption(option, true);
                myChart.on('click', function (params) {
                   //加载对应的街道
                    for(var i = 0; i < gzqArray.length;i++){
                        if(params.name === gzqArray[i]){
                            loadStreet(i);
                        }
                    }
                });
                $('#comeback').hide();
            }
        });
    }




    loadGZQMap();
    $('#comeback').click(function () {
        loadGZQMap();
    })
})