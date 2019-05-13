$(function () {
    var myChart = echarts.init(document.getElementById('main'));
    myChart.showLoading();
    var option = {
        title: {
            text: '港闸区街道',
            show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (p / km2)'
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            min: 800,
            max: 50000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#fceeff', '#ffe6e6', '#f5ffe3', '#cdfcf6', '#ffeae9', '#fffed4'],
            },
            show: false
        },
        series: [
            {
                name: '港闸区街道地图',
                type: 'map',
                map: 'GZ',
                selectedMode: 'single',
                data: [
                    {
                        name: '天生港镇街道',
                        tooltip: {show: false},
                        selected:true,
                        itemStyle: {
                            areaColor: '#fceeff',
                            borderWidth: 0,
                            borderColor: '#fceeff',
                            emphasis: {
                                areaColor: '#fceeff',
                                borderColor: '#fceeff',
                                borderWidth: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowOffsetY: 20,
                                opacity:1
                            },
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 20,
                        },
                        label: {show: true, color: '#f00', fontSize: 18},
                    },
                    {
                        name: '永兴街道',
                        tooltip: {show: false},
                        selected:true,
                        itemStyle: {
                            areaColor: '#ffe6e6',
                            borderWidth: 2,
                            borderColor: '#ffe6e6',
                            emphasis: {areaColor: '#ffe6e6', borderColor: '#ffe6e6', borderWidth: 0},
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetX: 5,
                            shadowOffsetY: 20,
                        },
                        label: {show: true, color: '#f00', fontSize: 18}
                    },
                    {
                        name: '唐闸街道',
                        tooltip: {show: false},
                        itemStyle: {
                            areaColor: '#f5ffe3',
                            borderWidth: 5,
                            borderColor: '#f5ffe3',
                            emphasis: {areaColor: '#f5ffe3', borderColor: '#f5ffe3', borderWidth: 2}
                        },
                        label: {show: true, color: '#f00', fontSize: 18}
                    },
                    {
                        name: '陈桥街道',
                        symbol: 'circle',
                        tooltip: {show: false},
                        itemStyle: {
                            areaColor: '#cdfcf6',
                            borderWidth: 5,
                            borderColor: '#cdfcf6',
                            emphasis: {areaColor: '#cdfcf6', borderColor: '#cdfcf6', borderWidth: 2}
                        },
                        label: {show: true, color: '#f00', fontSize: 18}
                    },
                    {
                        name: '幸福街道',
                        tooltip: {show: false},
                        itemStyle: {
                            areaColor: '#ffeae9',
                            borderWidth: 5,
                            borderColor: '#ffeae9',
                            emphasis: {areaColor: '#ffeae9', borderColor: '#ffeae9', borderWidth: 2}
                        },
                        label: {show: true, color: '#f00', fontSize: 18}
                    },
                    {
                        name: '秦灶街道',
                        tooltip: {show: false},
                        itemStyle: {
                            areaColor: '#fffed4',
                            borderWidth: 5,
                            borderColor: '#fffed4',
                            emphasis: {areaColor: '#fffed4', borderColor: '#fffed4', borderWidth: 2}
                        },
                        label: {show: true, color: '#f00', fontSize: 18}
                    }
                ],
                // 自定义名称映射
                nameMap: {
                    'TSG': '天生港镇街道',
                    'YX': '永兴街道',
                    'TZ': '唐闸街道',
                    'CQ': '陈桥街道',
                    'XF': '幸福街道',
                    'QZ': '秦灶街道',
                }
            }
        ]
    };

    var option11 = {
        series: [
            {
                name: '天生港镇街道',
                type: 'map',
                mapType: 'TSG', // 自定义扩展图表类型
                itemStyle: {
                    normal: {label: {show: true}},
                    emphasis: {label: {show: true}}
                },
                tooltip: {show: false},
                data: [
                    {name: 'Street1', value: 20057.34},

                ],
                // 自定义名称映射
                nameMap: {
                    'Street1': '街道1',

                },
            }
        ]
    }

    function loadMap(json, option, mapkey) {
        $.get(json, function (geoJson) {
            myChart.hideLoading();
            echarts.registerMap(mapkey, geoJson);//注册可用地图
            myChart.clear();
            myChart.setOption(option, true);
        });
    }

    loadMap('json/gangzha_district_streets.json', option, 'GZ');
    myChart.on('click', function (params) {
        var top = params.event.event.offsetY;
        var left = params.event.event.screenX;
        if (params.data.name == "天生港镇街道") {
            layer.ready(function () {
                // loadMap('json/test.json',street1_option,'GZ');
                layer.open({
                    type: 2,
                    //title: ['陈桥街道办事处', 'font-size:18px;background-color:#000;color:#fff'],
                    title: false,
                    maxmin: false,
                    closeBtn: 0,
                    offset: [top - 250, left - 300],
                    shadeClose: true,
                    anim: 3,
                    area: ['600px', '500px'],
                    content: 'http://layer.layui.com/test/welcome.html',
                });
            });
        } else if (params.data.name == "永兴街道") {

        } else if (params.data.name == "唐闸街道") {

        } else if (params.data.name == "陈桥街道") {

        } else if (params.data.name == "幸福街道") {

        } else if (params.data.name == "秦灶街道") {

        }
    });

})