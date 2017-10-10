(function () {
	var FZY = {};

	FZY.init = function () {
		this.clickHeaderLi();
		this.modals();
		this.selectObjectModal();
		this.handleFireSystem();

		this.clickSafeCheck();
	}

	FZY.clickHeaderLi = function () {
		$(".header-li").on("click", function (e) {
			var $this = $(this);
			var liValue = $this.attr("data-li");

			setAsideShow(liValue);
		})

		$(".aside-fold-icon").on('click', function () {
			var $this = $(this);
			var foldValue = $this.attr("data-fold");

			setAsideShow(foldValue);
		})

		function setAsideShow(value) {
			var strEl;
			if (value === "1") {
				strEl = "#asideSystemLoading";
			} else if (value === "2") {
				strEl = "#asideDevice";
			} else if (value === "3") {
				strEl = "#asideSafe";
			}

			common.setSliderToggle(strEl, {
				position: 'left',
				initValue: '-320px',
				startOpt: { left: '-320px'},
				endOpt: { left: '20px'}
			})
		}
	}

	FZY.modals = function () {
		var _this = this;

		$("#selectWrap").find("li").on("click", function (e) {
			e.stopPropagation()
			var $this = $(this)
	
			var num = $this.attr("data-target");
			_this.modalsHandle(num)
		})
	}
	// 处理不同的点击事件
	FZY.modalsHandle = function (target) {
		switch(target)
		{
			case '1':
				selectObject();
			break;
			case '2':
				fireSystem();
			break;
			case '3':
				safeCheck();
			break;
			case '4':
				device();
			break;
			case '5':
				dataStatic();
			break;
			case '6':
				searchDevice();
			break;
		}

		// 对象选择
		function selectObject() {
			$("#modalSelectObject").toggleClass("modal-show");
		}
		// 消防系统的显示和隐藏
		function fireSystem() {
			common.setSliderToggle('#modalFireSystem', {
				position: 'bottom',
				initValue: '-200px',
				startOpt: { bottom: '-200px'},
				endOpt: { bottom: '50px'}
			})
		}
		// 安全检查
		function safeCheck() {

			common.setSliderClose('#modalDevieceCheck', {
				position: 'right',
				closeOpt: { right: '-280px'}
			})

			common.setSliderToggle('#modalSafeCheck', {
				position: 'right',
				initValue: '-280px',
				startOpt: { right: '-280px'},
				endOpt: { right: '10px'},
				afterEnter: function () {
					console.log("安全检查,进入后的请求。")
				}
			})
		}
		// 设备巡检
		function device() {

			common.setSliderClose('#modalSafeCheck', {
				position: 'right',
				closeOpt: { right: '-280px'}
			})

			common.setSliderToggle('#modalDevieceCheck', {
				position: 'right',
				initValue: '-280px',
				startOpt: { right: '-280px'},
				endOpt: { right: '10px'},
				afterEnter: function () {
					console.log("设备巡检,进入后的请求。")
				}
			})
		}
		// 数据统计
		function dataStatic() {
			alert("数据统计!");
		}
		// 设备查询
		function searchDevice() {
			alert("设备查询!");
		}
	}
	// 对象选择弹窗的操作
	FZY.selectObjectModal = function () {
		// 关闭
		$("#modalSelectObject").on("click", ".modal-close", function () {
			$("#modalSelectObject").toggleClass("modal-show");
		})
		// 确定
		$("#modalSelectBtn").on("click", function () {
			$("#modalSelectObject").toggleClass("modal-show");
		})
		// 数据请求
		setData();
		// 样式 toggle
		$("#objectWrap").on("click", '.tree-toggle', function () {
			var $this = $(this);
			var $thisIcon = $this.children();
			var $targetUL = $this.next();
			var $treeToggle = $("#objectWrap").find(".tree-toggle");

			if ($targetUL[0]) {
				// 折叠
				$targetUL.toggleClass("hide");
				$thisIcon.toggleClass("icon-arrow-right");
			} else {
				// 选中状态
				$treeToggle.removeClass("active")
				$this.addClass("active");
			}
		})
		// 样式 toggle
		$("#regionFacility").on("click", '.tree-toggle', function () {
			var $this = $(this);
			var $thisIcon = $this.children();
			var $targetUL = $this.next();
			var $treeToggle = $("#regionFacility").find(".tree-toggle");

			if ($targetUL[0]) {
				// 折叠
				$targetUL.toggleClass("hide");
				$thisIcon.toggleClass("icon-arrow-right");
			} else {
				// 选中状态
				$treeToggle.removeClass("active")
				$this.addClass("active");
			}
		})

		function setData() {
			
			var da = [
			    {
			        "id": 1,  
			        "ClassName": "设备类别1",
			        "level": 1,
			        "children": [
			            {
			                "id": 4,
			                "ClassName": "消防栓",
			                "level": 2,
			                "children": []
			            },
			            {
			                "id": 4,
			                "ClassName": "末端试水装置",
			                "level": 2,
			                "children": []
			            },
			            {
			                "id": 4,
			                "ClassName": "湿试报警阀",
			                "level": 2,
			                "children": []
			            },
			            {
			                "id": 4,
			                "ClassName": "烟感探测器",
			                "level": 2,
			                "children": []
			            },
			            {
			                "id": 4,
			                "ClassName": "气体灭火控制盘",
			                "level": 2,
			                "children": []
			            }
			        ]
			    }
			]
			$("#objectWrap").html(common.treeHtml(da));
			$("#regionFacility").html(common.treeHtml(da));
		}
	}

	/**
	 * 点击消防系统弹窗显示后的操作
	 */
	FZY.handleFireSystem = function () {
		$("#fireSystemUl").on("click", "a", function (e) {
			var $this = $(this);
			$("#fireSystemUl").find("a").removeClass("active");
			$this.addClass("active")
		})
	}

	var da = [
	    {  
	        "id": 1,  
	        "text": "A",
	        "level": 1,
	        "children": [  
	            {  
	                "id": 4,  
	                "text": "C[父A]",  
	                "level": 2,
	                "children": [  
	                    {  
	                        "id": 7,  
	                        "level": 3,
	                        "text": "F[父C]",  
	                        "children": [  
	                            {  
	                                "id": 4,  
	                                "level": 4,
	                                "text": "G[父F]",  
	                                "children": []  
	                            }  
	                        ]  
	                    },  
	                    {  
	                        "id": 2,  
	                        "level": 3,
	                        "text": "E[父C]",  
	                        "children": []  
	                    }  
	                ]  
	            }  
	        ]  
	    },  
	    {  
	        "id": 6,  
	        "text": "B",  
	        "level": 1,
	        "children": [  
	            {  
	                "id": 5,  
	                "level": 2,
	                "text": "D[父B]",  
	                "children": []  
	            }  
	        ]  
	    }  
	]  

	$(".modal-wrap-main").html(common.treeHtml(da))

	FZY.clickSafeCheck = function () {
		$(".aside-item-click").on("click", function () {
			alert("显示详细信息。");
		})
	}


	FZY.init();
})()