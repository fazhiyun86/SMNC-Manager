(function () {
	var FZY = {};

	FZY.init = function () {
		this.clickHeaderLi();
		this.modals();
		FZY.handleFireSystem();
	}

	FZY.clickHeaderLi = function () {
		$(".header-li").on("click", function (e) {
			var $this = $(this);
			var liValue = $this.attr("data-li");

			setAsideShow(liValue);
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
				initValue: '-280px',
				startOpt: { left: '-280px'},
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
			alert("选择对象!");
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

			common.setSliderToggle('#modalSafeCheck', {
				position: 'right',
				initValue: '-280px',
				startOpt: { right: '-280px'},
				endOpt: { right: '10px'},
				afterEnter: function () {
					console.log("进入后的请求。")
				}
			})
		}
		// 设备巡检
		function device() {
			alert("设备巡检!");
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


	FZY.init();
})()