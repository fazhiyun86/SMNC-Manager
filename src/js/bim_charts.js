(function () {
	var FZY = {};
	var deviceECharts = echarts.init(document.getElementById("EDevice"));
	var LineECharts = echarts.init(document.getElementById("ELine"));
	var BarECharts = echarts.init(document.getElementById("EBar"));
	var deviceSmalECharts = echarts.init(document.getElementById("EDeviceSmal"));
	var PipECharts = echarts.init(document.getElementById("EPip"));
	var Line02ECharts = echarts.init(document.getElementById("ELine02"));

	FZY.init = function () {
		this.echartsDev();
		this.echartsLine();
		this.echartsBar();
		this.echartsDevSmal();
		this.echartsPip();
		this.echartsLine02();
	};

	FZY.echartsDev = function () {
		option = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    series: [
		        {
		            type: 'gauge',
		            radius: '100%',
		            axisTick: {
		            	show: true
		            },
		            data: [
		            	{value: 10, name: '完成率'},
		            ]
		        }
		    ]
		};

		deviceECharts.setOption(option, true);
	}
	FZY.echartsLine = function () {
		option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '0%',
		        top: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            axisLine: {
		            	lineStyle: {
		            		color: "#ccc"
		            	}
		            },
		            data : [{
		            	value: '1',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '2',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '3',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '4',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '5',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '6',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '7',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },]
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine: {
		            	lineStyle: {
		            		color: '#ccc'
		            	}
		            }
		        }
		    ],
		    series : [
		        {
		            name:'邮件营销',
		            type:'line',
		            smooth: true,
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[120, 150, 100, 110, 140, 170, 166]
		        }
		    ]
		};

		LineECharts.setOption(option);
	}
	FZY.echartsBar = function () {

		option = {
		    color: ['#eb6100'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {
		            type : 'shadow'        
		        }
		    },
		    grid: {
		        left: '0%',
		        right: '3%',
		        bottom: '0%',
		        top: '2%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		            axisTick: {
		                alignWithLabel: true
		            },
		            axisLine: {
		            	lineStyle: {
		            		color: '#ccc'
		            	}
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine: {
		            	lineStyle: {
		            		color: "#ccc"
		            	}
		            },
		            splitLine: {
		                show: false
		            }
		        }
		    ],
		    series : [
		        {
		            name:'直接访问',
		            type:'bar',
		            barWidth: '60%',
		            data:[10, 52, 200, 334, 390, 330, 220]
		        }
		    ]
		};
		BarECharts.setOption(option);
	}
	FZY.echartsDevSmal = function () {
		option = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    series: [
		        {
		            type: 'gauge',
		            radius: '100%',
		            axisTick: {
		            	show: true
		            },
		            data: [
		            	{value: 10, name: '完成率'},
		            ]
		        }
		    ]
		};

		deviceSmalECharts.setOption(option, true);
	}
	FZY.echartsPip = function () {
		option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    series: [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:335, name:'直接访问'},
		                {value:310, name:'邮件营销'},
		                {value:234, name:'联盟广告'},
		                {value:135, name:'视频广告'},
		                {value:1548, name:'搜索引擎'}
		            ]
		        }
		    ]
		};
		PipECharts.setOption(option);
	}
	FZY.echartsLine02 = function () {
		option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '0%',
		        top: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            axisLine: {
		            	lineStyle: {
		            		color: "#ccc"
		            	}
		            },
		            data : [{
		            	value: '1',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '2',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '3',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '4',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '5',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '6',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },{
		            	value: '7',
		            	textStyle: {
					        color: '#ccc'
					    }
		            },]
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine: {
		            	lineStyle: {
		            		color: '#ccc'
		            	}
		            }
		        }
		    ],
		    series : [
		        {
		            name:'邮件营销',
		            type:'line',
		            smooth: true,
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[120, 150, 100, 110, 140, 170, 166]
		        }
		    ]
		};

		Line02ECharts.setOption(option);
	}

	FZY.init();

	window.onresize = function(){
		deviceECharts.resize();
		LineECharts.resize();
		BarECharts.resize();
		deviceSmalECharts.resize();
		PipECharts.resize();
		Line02ECharts.resize();
	}
})()