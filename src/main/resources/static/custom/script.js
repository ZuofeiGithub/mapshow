$(function () {
    var myChart = echarts.init(document.getElementById('main'));
    var geoJson = {}
    var pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 198,
        top: 50
    };

    var line = [
        [0, 0],
        [8, 11],
        [0, 22]
    ];
    // style
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#463523',
        lineColor: '#7f6a54'
    };

    $.ajax({
        url: 'json/gangzha.json',
        async: false,
        dataType: 'json',
        success: function (data) {
            echarts.registerMap('ls', data);
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
                    map: 'ls',
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
                graphic: {
                    elements: [
                        {
                            type: 'group',
                            left: pos.left,
                            top: pos.top - 4,
                            children: [{
                                type: 'line',
                                left: 0,
                                top: -20,
                                shape: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 60,
                                    y2: 0
                                },
                                style: {
                                    stroke: style.lineColor,
                                }
                            }, {
                                type: 'line',
                                left: 0,
                                top: 20,
                                shape: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 60,
                                    y2: 0
                                },
                                style: {
                                    stroke: style.lineColor,
                                }
                            }]
                        },
                        {
                            id: "gz",
                            type: 'group',
                            left: pos.left + 2,
                            top: pos.top,
                            children: [{
                                type: 'text',
                                left: 0,
                                top: 'middle',
                                style: {
                                    text: '港闸区',
                                    textAlign: 'center',
                                    fill: style.textColor,
                                    font: style.font
                                },
                                onclick: function () {
                                    console.log("我被点击了")
                                }
                            }]
                        }
                    ]
                },
                series: [
                    {
                        type: 'map',
                        map: 'ls',
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
            myChart.setOption(option);

            option.graphic.elements.push()
            myChart.on('click', function (params) {

            })
        }

    });


})