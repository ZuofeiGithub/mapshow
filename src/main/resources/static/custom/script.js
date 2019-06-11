$(function () {
    $('#comeback').hide();

    var myChart = echarts.init(document.getElementById('main'));

    var e = window.screen.availWidth;
    var fontSize;
    var shadowBlur = 1;
    var emphasisshadowBlur = 20;

    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return true;
        } else {
            return false;
        }
    }

    var isPhone = browserRedirect();
    var mWidth, mHeight;
    if (isPhone) {
        mWidth = 90;
        mHeight = 83;
        fontSize = e / 1980 * 25
    } else {
        mWidth = 68;
        mHeight = 88;
        fontSize = e / 1980 * 16
    }

    function openToolTips(title, content) {
        layer.open({
            title: false,
            closeBtn: 0,
            area: [mWidth + '%', mHeight + '%'],
            shade: 0.8,
            shadeClose: 0.5,
            type: 2,
            content: 'tooltips',
            scrollbar: false
            , success: function (layero, i) {
                var body = layer.getChildFrame('body', i);
                //body.find('#title p').html(title);
                body.find('#detail').empty().append(content);
            }
        });

    }

    /**
     * 加载开发区地图
     */
    var kfqArray = ['国庆村', '五星村', '新白龙庙社区', '永兴佳园社区', '龙湖佳苑社区', '龙潭村', '爱国村', '通燧社区', '泽生社区', '新闸村',
        '八一村', '福利村', '隆兴佳园社区', '芦泾港村社区', '永兴村社区', '东港村社区', '曙光村社区', '越江社区', '节制闸村社区', '永兴花苑社区', '永和佳苑社区', '窑墩坝村社区'];

    function loadKFQMap() {
        $.ajax({
            url: 'json/redo_kaifaqu.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('kfq', data);

                //地图上插的小旗子
                var geoCoordMap = {
                    '国庆村': [120.7733917236328, 32.06279178347238],
                    '五星村': [120.78369140624999, 32.06890162700121],
                    '新白龙庙社区': [120.79124450683594, 32.05318977618135],
                    '永兴花苑社区': [120.81201553344725, 32.035874519734655],
                    '龙湖佳苑社区': [120.7826614379883, 32.050570872022476],
                    '龙潭村': [120.76446533203125, 32.0424226909009],
                    '爱国村': [120.77433586120605, 32.03660211743653],
                    '通燧社区': [120.75450897216797, 32.03227282596852],
                    '泽生社区': [120.74807167053223, 32.03521967685956],
                    '新闸村': [120.74953079223631, 32.043004727893994],
                    '八一村': [120.7594871520996, 32.05464469054932],
                    '福利村': [120.7594871520996, 32.0710836150551],
                    '隆兴佳园社区': [120.78669548034668, 32.043004727893994],
                    '芦泾港村社区': [120.79313278198244, 32.03369169193891],
                    '永兴村社区': [120.81064224243164, 32.03092670203405],
                    '东港村社区': [120.79553604125975, 32.021757980316536],
                    '曙光村社区': [120.80841064453125, 32.021321351629176],
                    '越江社区': [120.81562042236328, 32.025978617008874],
                    '节制闸村社区': [120.82471847534181, 32.035874519734655],
                    '永兴佳园社区': [120.8199119567871, 32.043441253210204],
                    '永和佳苑社区': [120.81424713134766, 32.040676557717454],
                    '窑墩坝村社区': [120.80326080322266, 32.04736988737824],
                }
                var data = [
                    {
                        name: '国庆村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '五星村',
                        value: 22,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '新白龙庙社区',
                        value: 14,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '永兴佳园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '龙湖佳苑社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '龙潭村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '爱国村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '通燧社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '泽生社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '新闸村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '八一村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '福利村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '隆兴佳园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '芦泾港村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '永兴村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '东港村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '曙光村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '越江社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '节制闸村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '永兴花苑社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '永和佳苑社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '窑墩坝村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
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
                            color: '#fff',
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#2a92fd',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                                shadowColor: '#A4FDFF',
                                // shadowBlur: shadowBlur,
                                // shadowOffsetY: 20,
                                // shadowOffsetX: 20
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
                                    areaColor: '2a92fd',
                                    borderColor: '#A4FDFF',
                                    borderWidth: 1
                                },
                                emphasis: {
                                    areaColor: '#005CD7',
                                    shadowColor: '#5AB2FE',
                                    shadowBlur: emphasisshadowBlur
                                }
                            },
                            data: data,
                        },
                        {
                            name: '社区',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [20, 20],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: fontSize,
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
                myChart.off('click');
                myChart.on('click', function (params) {
                    for (var i = 0; i < kfqArray.length; i++) {
                        if (params.name == kfqArray[i]) {
                            $.post("/api/community_info", {name: params.name}, function (resp) {
                                if (resp.code == 0) {
                                    openToolTips(params.name, resp.data);
                                } else {
                                    openToolTips(params.name, resp.msg);
                                }
                            })
                        }
                    }
                });

                $('#community').removeClass('layui-hide');
                $('#community_btn').text("港闸经济开发区")
                var introduction = "江苏省南通港闸经济开发区是1993年江苏省人民政府批准成立的省级开发区，经过几次区划调整，现有的开发区是由原来的永兴综合开发区、永兴乡、闸西乡、芦泾乡、天生港街道等五个乡镇街道合并而成，东至通吕运河，南至长江，西至九圩港，北至通扬运河，总面积40平方公里，户籍人口近10万人，下辖7个行政村、7个农村社区和8个城镇社区居委会。开发区党工委、管委会均为副处级建制，下设永兴、天生港镇街道，共有19个部门。其中正科级机构5个，副科级机构14个。";
                $('#introduction').empty().append(introduction);
            }

        });
    }

    /**
     * 加载幸福街道地图
     */
    var xfArray = ['转水社区', '花桥社区', '管园村', '施店社区', '幸福社区', '文俊村社区', '蒋坝村社区', '幸福家苑社区', '秦西社区', '祖望社区'];

    function loadXFMap() {
        $.ajax({
            url: 'json/redo_xinfu.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('xf', data);
                //地图上插的小旗子
                var geoCoordMap = {
                    '转水社区': [120.84566116333006,32.11522131957964],
                    '花桥社区': [ 120.84085464477539, 32.10417071620696],
                    '管园村': [  120.81888198852539, 32.08722870829662],
                    '施店社区': [120.85184097290039, 32.09413677329814],
                    '幸福社区': [120.83373069763182,32.0966817182168],
                    '文俊村社区': [120.83853721618654,32.0811928135097],
                    '蒋坝村社区': [120.80188751220703,32.08017467148539],
                    '幸福家苑社区': [120.8338165283203, 32.076392901821976],
                    '秦西社区': [ 120.85647583007812,32.08235639050786],
                    '祖望社区': [120.86128234863281,32.10715160278976],

                }
                var data = [
                    {
                        name: '转水社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '花桥社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '管园村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '施店社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '幸福社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '文俊村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '蒋坝村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '幸福家苑社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '秦西社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '祖望社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
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
                                areaColor: '#2a92fd',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                                // shadowColor: '#998262',
                                // shadowBlur: shadowBlur,
                                // shadowOffsetY: 20,
                                // shadowOffsetX: 20
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
                                    areaColor: '2a92fd',
                                    borderColor: '#A4FDFF',
                                    borderWidth: 1
                                },
                                emphasis: {
                                    areaColor: '#005CD7',
                                    // shadowColor: '#5AB2FE',
                                    // shadowBlur: emphasisshadowBlur
                                }
                            },
                            data: data,
                        },
                        {
                            name: '幸福街道',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [20, 20],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: fontSize,
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
                myChart.off('click');
                myChart.on('click', function (params) {
                    for (var i = 0; i < xfArray.length; i++) {
                        if (params.name == xfArray[i]) {
                            $.post("/api/community_info", {name: params.name}, function (resp) {
                                if (resp.code == 0) {
                                    openToolTips(params.name, resp.data);
                                } else {
                                    openToolTips(params.name, resp.msg);
                                }
                            })
                        }
                    }
                })
                $('#community').removeClass('layui-hide');
                $('#community_btn').text("幸福街道")
                var introduction = "幸福街道，南通市港闸区下辖街道，北翼新城重要组团。位于港闸区东北部，南邻唐闸镇街道，西临陈桥街道，东北方向分别与通州区兴仁镇、刘桥镇接壤。总面积27.5平方公里，辖区人口3.8万人，其中户籍人口2.5万人，下辖十个村社区。幸福街道交通便利，东距南通兴东国际机场15公里，西距沪陕高速陈桥出口2.5公里，南通市火车站、在建的地铁二号线起点站均坐落辖区。";
                $('#introduction').empty().append(introduction);
            }

        });
    }

    /**
     * 加载陈桥街道地图
     */
    var caArray = ['树北村', '天玺社区', '丽都社区', '天和社区', '五里树社区', '育爱村', '集成村', '仁和社区', '河口村', '丽康社区'];

    function loadCQMap() {
        $.ajax({
            url: 'json/redo_chenqiao.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('cq', data);

                //地图上插的小旗子
                var geoCoordMap = {
                    '树北村': [  120.8096981048584,32.13368447412475],
                    '天玺社区': [120.79742431640625,32.09566374875704],
                    '丽都社区': [120.82952499389648,32.11194989874138],
                    '天和社区': [ 120.80772399902344,32.112240696452005],
                    '丽康社区': [120.81802368164061,32.101625979942895],
                    '五里树社区': [ 120.82471847534181, 32.12183650123659],
                    '育爱村': [120.79313278198244,32.122854178935334],
                    '集成村': [120.77768325805664,32.098426782327294],
                    '仁和社区': [120.79931259155273, 32.1062791582523],
                    '河口村': [120.79999923706055,32.09028286460225]

                }
                var data = [
                    {
                        name: '树北村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '天玺社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '丽都社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '天和社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '丽康社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '五里树社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 0,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 0,
                            },

                        }
                    },
                    {
                        name: '育爱村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '集成村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '仁和社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '河口村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
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
                                areaColor: '#2a92fd',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                                // shadowColor: '#998262',
                                // shadowBlur: shadowBlur,
                                // shadowOffsetY: 20,
                                // shadowOffsetX: 20
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
                                    areaColor: '2a92fd',
                                    borderColor: '#A4FDFF',
                                    borderWidth: 1
                                },
                                emphasis: {
                                    areaColor: '#005CD7',
                                    // shadowColor: '#5AB2FE',
                                    // shadowBlur: emphasisshadowBlur
                                }
                            },
                            data: data,
                        },
                        {
                            name: '陈桥街道',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [20, 20],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: fontSize
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
                myChart.off('click');
                myChart.on('click', function (params) {
                    console.log(params.name);
                    for (var i = 0; i < caArray.length; i++) {
                        if (params.name == caArray[i]) {
                            $.post("/api/community_info", {name: params.name}, function (resp) {
                                console.log(resp);
                                if (resp.code == 0) {
                                    openToolTips(params.name, resp.data);
                                } else {
                                    openToolTips(params.name, resp.msg);
                                }
                            })
                        }
                    }
                })
                $('#community').removeClass('layui-hide');
                $('#community_btn').text("陈桥街道")
                var introduction = "陈桥街道，位于通城北翼，是南通市长安街道、南通市首家国家级生态街道。总面积29.1平方公里，常住人口34236人，其中户籍人口28949人。街道下辖天玺社区、天和社区、仁和社区、丽都社区、丽康社区、五里树社区6个社区，河口村、集成村、树北村、育爱村4个行政村和陈桥高科创业园、宝钢线材、润邦重机等规模以上工业企业20余家。";
                $('#introduction').empty().append(introduction);
            }

        });
    }

    /**
     * 加载唐闸街道
     */
    var tzArray = ['闸东社区', '西洋桥社区', '公园社区', '碧林湾社区', '新园社区', '永泰社区', '长岸社区', '尖沟头社区', '花墙社区', '高店社区', '横河社区', '怡园社区', '大南社区', '新华社区'];

    function loadTZMap() {
        $.ajax({
            url: 'json/redo_tangzha.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('tz', data);

                //地图上插的小旗子
                var geoCoordMap = {
                    '闸东社区': [120.82300186157227,32.06388285689499],
                    '西洋桥社区': [120.79381942749025, 32.06999262753635],
                    '公园社区': [120.81055641174316, 32.067737878750336],
                    '碧林湾社区':[120.82283020019531, 32.07392012168529],
                    '新园社区': [120.80360412597655, 32.07435649951045],
                    '永泰社区': [120.8338165283203, 32.05639055725355],
                    '长岸社区': [120.85312843322754, 32.06228261142121],
                    '尖沟头社区': [120.83621978759766, 32.06461023194615],
                    '花墙社区': [120.85741996765135, 32.04838839463659],
                    '高店社区': [120.83407402038574, 32.04860664471732],
                    '横河社区': [120.83999633789062, 32.04249544572742],
                    '怡园社区': [120.84377288818361, 32.055299394467355],
                    '大南社区': [120.80480575561522, 32.064246545143625],
                    '新华社区': [120.80145835876463, 32.05784542072537],

                }
                var data = [
                    {
                        name: '闸东社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },
                        }
                    },
                    {
                        name: '西洋桥社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '公园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '碧林湾社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '新园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '永泰社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '长岸社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '尖沟头社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '花墙社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '高店社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '横河社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '怡园社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '大南社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '新华社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
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
                                areaColor: '#2a92fd',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                                // shadowColor: '#998262',
                                // shadowBlur: shadowBlur,
                                // shadowOffsetY: 20,
                                // shadowOffsetX: 20
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
                                    areaColor: '2a92fd',
                                    borderColor: '#A4FDFF',
                                    borderWidth: 1
                                },
                                emphasis: {
                                    areaColor: '#005CD7',
                                    // shadowColor: '#5AB2FE',
                                    // shadowBlur: emphasisshadowBlur
                                }
                            },
                            data: data,
                        },
                        {
                            name: '唐闸街道',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [20, 20],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#FFF',
                                        fontSize: fontSize,
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
                myChart.off('click');
                myChart.on('click', function (params) {
                    for (var i = 0; i < tzArray.length; i++) {
                        if (params.name == tzArray[i]) {
                            $.post("/api/community_info", {name: params.name}, function (resp) {
                                if (resp.code == 0) {
                                    openToolTips(params.name, resp.data);
                                } else {
                                    openToolTips(params.name, resp.msg);
                                }
                            })
                        }
                    }
                })
                $('#community').removeClass('layui-hide');
                $('#community_btn').text("唐闸镇街道")
                var introduction = "唐闸镇街道于2005年8月由原闸东乡和唐闸镇合并而成。街道地处南通市北新城核心区，东起秦灶河，西到大生路，南临通吕运河，北至城北大道。辖区面积17.66平方公里，户籍人口4.8万余人，常住人口2.3万余人，共辖14个城市社区（分别为：永泰社区、怡园社区、新华社区、西洋桥社区、公园社区、大南社区、横河社区、新园社区、闸东社区、花墙社区、长岸社区、尖沟头社区、高店社区、碧林湾社区）。2018年，华润万象城、百安谊家进口馆等购物中心相继营业，景澜印象酒店入驻唐闸老镇，唐闸城市服务水平再上新台阶，已成为南通北翼发展的重要组团";
                $('#introduction').empty().append(introduction);
            }

        });
    }

    /**
     * 加载秦灶街道
     */
    var qzArray = ['袁桥村', '秦北村', '桥北社区', '西安桥村', '费桥村', '桥东村社区', '苏阳社区', '秦灶社区', '民安花苑社区', '八里庙村社区'];

    function loadQZMap() {
        $.ajax({
            url: 'json/qz.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('qz', data);

                //地图上插的小旗子
                var geoCoordMap = {
                    '袁桥村': [ 120.89140892028809,32.081701880269065],
                   // '秦北村': [120.87183952331542,32.071156347093535],
                    '秦北村': [120.87638854980469,32.076174718029634],
                    '桥北社区': [120.8672046661377,32.06548307437192],
                    '西安桥村': [120.90720176696777,32.07762926680948],
                   // '费桥村': [120.88316917419432,32.07341101159024],
                    '费桥村': [120.89776039123535,32.06628317261135],
                   // '桥东村社区': [120.88231086730957,32.06330095268924],
                    '桥东村社区': [ 120.88188171386717,32.06381011907174],
                     '苏阳社区': [ 120.87252616882323,32.057627192679476],
                    // '苏阳社区': [120.8726119995117, 32.05660878824919],
                    //'秦灶社区': [  120.86480140686034,32.05617232573739],
                    '秦灶社区': [120.89595794677734,32.06010041338489],
                    // '民安花苑社区': [120.87613105773926, 32.04918864238804],
                    '民安花苑社区': [120.87647438049315,32.050934613193256],
                    //'八里庙村社区': [120.89655876159668,32.05486292570917],
                    '八里庙村社区': [ 120.88960647583006,32.05064362037229],
                }
                var data = [
                    {
                        name: '袁桥村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '秦北村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '桥北社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '西安桥村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '费桥村',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '桥东村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '苏阳社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '秦灶社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '民安花苑社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '八里庙村社区',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
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
                                areaColor: '#2a92fd',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                                // shadowColor: '#998262',
                                // shadowBlur: shadowBlur,
                                // shadowOffsetY: 20,
                                // shadowOffsetX: 20
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
                                    areaColor: '2a92fd',
                                    borderColor: '#A4FDFF',
                                    borderWidth: 1
                                },
                                emphasis: {
                                    areaColor: '#C9E6FF',
                                    shadowColor: '#5AB2FE',
                                    shadowBlur: emphasisshadowBlur
                                }
                            },
                            data: data,
                        },
                        {
                            name: '秦灶街道',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [20, 20],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#FFF',
                                        fontSize: fontSize,
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
                myChart.off('click');
                myChart.on('click', function (params) {
                    for (var i = 0; i < qzArray.length; i++) {
                        if (params.name == qzArray[i]) {
                            $.post("/api/community_info", {name: params.name}, function (resp) {
                                if (resp.code == 0) {
                                    openToolTips(params.name, resp.data);
                                } else {
                                    openToolTips(params.name, resp.msg);
                                }
                            })
                        }
                    }
                })
                $('#community').removeClass('layui-hide');
                $('#community_btn').text("秦灶街道")

                var introduction = "秦灶街道，隶属江苏省南通市港闸区，地处南通市区北翼，港闸区东部，南临通吕运河，具有“一城汇三区，一轴分两翼，一水绕八里”的独特区位优势，素有南通“北大门”之称。辖区总面积19.56平方公里，辖区人口近6万人，其中户籍人口约2.8万人。下辖秦北村、袁桥村、费桥村、西安桥村等4个行政村，桥东村社区、八里庙村社区等2个村社区以及苏阳社区、民安花苑社区、桥北社区、秦灶社区等4个城市社区。";
                $('#introduction').empty().append(introduction);
            }

        });
    }


    var gzqArray = ['陈桥街道', '港闸经济开发区', '唐闸镇街道', '幸福街道', '秦灶街道'];

    /**
     * 根据下标加载对应的街道
     * @param index
     */
    function loadStreet(index) {
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
     * 加载港闸区总地图
     */
    function loadMainMap() {
        $.ajax({
            url: 'json/main.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('main', data);
                var geoCoordMap = {
                    '港闸区': [120.81836700439453, 32.07530197765318],
                }
                var data = [
                    {
                        name: '港闸区',
                        value: 5,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
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
                                return '<p style="font-size: 15px;color: red;font-weight: bold">街道数</p>' + e.name + ':' + e.value[2] + '所';
                            }

                        }
                    },
                    geo: {
                        map: 'main',
                        show: true,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#2a92fd',
                                borderColor: '#A4FDFF',
                                borderWidth: 1,
                                // shadowColor: '#998262',
                                // shadowBlur: shadowBlur,
                                // shadowOffsetY: 20,
                                // shadowOffsetX: 20
                            }
                        },
                        zoom: 1.0,
                    },
                    series: [
                        {
                            type: 'map',
                            map: 'main',
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
                                    areaColor: '2a92fd',
                                    borderColor: '#A4FDFF',
                                    borderWidth: 1
                                },
                                emphasis: {
                                    areaColor: '#005CD7',
                                    // shadowColor: '#5AB2FE',
                                    // shadowBlur: emphasisshadowBlur
                                }
                            },
                            data: data
                        },
                        {
                            name: '街道数',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [20, 20],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#FFF',
                                        fontSize: fontSize,
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
                myChart.off('click');
                myChart.on('click', function (params) {
                    loadGZQMap();
                    $('#street').removeClass('layui-hide');
                });
                var introduction = "港闸区，江苏省南通市的市辖区，飞速发展的城市副中心；位于长江入海口北岸，南通市区中部；西部以九圩港河为界，与通州区平潮镇隔河相望；" +
                    "北部与通州区刘桥镇、东部与通州区兴仁镇接壤；南部跨通吕运河可直达崇川区。下辖一个省级经济开发区、一个省级高新区和四个街道。总面积134.23平方公里，常住人口28.98万人，其中户籍人口19.77万人。" +
                    "港闸区作为南通重要城市组团，以高质量发展为核心目标,持续释放创新活力，着力打造枢纽型现代产业之城、生态型魅力花园之城、共享型和谐幸福之城。";
                $('#introduction').empty().append(introduction);
            }
        });
    }

    /**
     * 加载港闸区地图
     */
    function loadGZQMap() {
        $.ajax({
            url: 'json/redo_gangzha.json',
            async: false,
            dataType: 'json',
            success: function (data) {
                echarts.registerMap('gzq', data);
                var geoCoordMap = {
                    '陈桥街道': [120.80772399902344, 32.10700619594571],
                    '港闸经济开发区': [120.78128814697264, 32.04358676118635],
                    '唐闸镇街道': [120.82386016845702, 32.061627957476404],
                    '幸福街道': [120.85235595703126, 32.08751958472376],
                    '秦灶街道': [120.88874816894531, 32.06511939104014],
                }
                var data = [
                    {
                        name: '陈桥街道',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#b0fff',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '港闸经济开发区',
                        value: 22,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#b0fff',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '唐闸镇街道',
                        value: 14,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#b0fff',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '幸福街道',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#b0fff',
                                borderWidth: 1,
                            },

                        }
                    },
                    {
                        name: '秦灶街道',
                        value: 10,
                        itemStyle: {
                            areaColor: '#2a92fd',
                            borderWidth: 1,
                            borderColor: '#A4FDFF',
                            emphasis: {
                                areaColor: '#005CD7',
                                borderColor: '#b0fff',
                                borderWidth: 1,
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
                                return '<p style="font-size: 15px;color: red;font-weight: bold"></p>' + e.name + '下辖' + e.value[2] + '家(村)社';
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
                                // areaColor: '#2a92fd',
                                // borderColor: '#A4FDFF',
                                // borderWidth: 1,
                                // shadowColor: '#998262',
                                // shadowBlur: shadowBlur,
                                // shadowOffsetY: 20,
                                // shadowOffsetX: 20
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
                                    areaColor: '2a92fd',
                                    borderColor: '#A4FDFF',
                                    borderWidth: 1
                                },
                                emphasis: {
                                    areaColor: '#005CD7',
                                    // shadowColor: '#5AB2FE',
                                    // shadowBlur: emphasisshadowBlur
                                }
                            },
                            data: data,
                        },
                        {
                            name: '街道数',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://images/flag.png',
                            symbolSize: [20, 20],
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (value) {
                                        return value.data.name
                                    },
                                    position: 'bottom',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: fontSize,
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
                myChart.off('click');
                myChart.on('click', function (params) {
                    //加载对应的街道
                    for (var i = 0; i < gzqArray.length; i++) {
                        if (params.name === gzqArray[i]) {
                            loadStreet(i);
                        }
                    }
                });
                $('#comeback').hide();
                var introduction = "港闸区，江苏省南通市的市辖区，飞速发展的城市副中心；位于长江入海口北岸，南通市区中部；西部以九圩港河为界，与通州区平潮镇隔河相望；" +
                    "北部与通州区刘桥镇、东部与通州区兴仁镇接壤；南部跨通吕运河可直达崇川区。下辖一个省级经济开发区、一个省级高新区和四个街道。总面积134.23平方公里，常住人口28.98万人，其中户籍人口19.77万人。" +
                    "港闸区作为南通重要城市组团，以高质量发展为核心目标,持续释放创新活力，着力打造枢纽型现代产业之城、生态型魅力花园之城、共享型和谐幸福之城。";
                $('#introduction').empty().append(introduction);

            }
        });
    }


    loadMainMap();
    window.onresize = myChart.resize;
    $('#comeback').click(function () {
        loadGZQMap();
    })

    $('#main_btn').click(function (e) {
        $('#street').addClass('layui-hide');
        $('#community').addClass('layui-hide');
        loadMainMap();
    });
    $('#street_btn').click(function (e) {
        $('#community').addClass('layui-hide');
        loadGZQMap();
    })
})