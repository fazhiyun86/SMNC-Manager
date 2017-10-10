(function () {
	var FZY = {};

	FZY.init = function () {
		this.toggle(toggleCB);
		this.toggleDevice(toggleDeviceCB);

		this.setDeviceType();
		this.setMouseMove(mouseMoveFn, mouseUpFn);

		this.setBindClick();
	}

	/**
	 * 树形结构的点击事件
	 * @return {[type]} [description]
	 */
	FZY.toggle = function (callback) {
		$(".device-type").on("click", '.tree-toggle', function () {
			var $this = $(this);
			var $thisIcon = $this.children();
			var $targetUL = $this.next();
			var $toggles = $(".device-type").find(".tree-toggle");

			if (!!$targetUL[0]) {

				$targetUL.toggleClass("hide");
				$thisIcon.toggleClass("icon-arrow-right");

			} else {
				$toggles.removeClass("active")
				$this.addClass("active");

				var obj = {
					id: $this.attr("data-id"),
					text: $this.text()
				}
				callback && callback(obj);
			}
		})
	};
	// 点击左边树形结构的回调
	function toggleCB(data) {
		console.log("回调", data)
	}

	/**
	 * 设备树形结构的点击事件
	 * @return {[type]} [description]
	 */
	FZY.toggleDevice = function (callback) {
		$(".device-info").on("click", '.tree-toggle', function () {
			var $this = $(this);
			var $thisIcon = $this.children();
			var $targetUL = $this.next();
			var $toggles = $(".device-info").find(".tree-toggle");

			if (!!$targetUL[0]) {

				$targetUL.toggleClass("hide");
				$thisIcon.toggleClass("icon-arrow-right");

			} else {
				$toggles.removeClass("active");
				$this.addClass("active");

				var obj = {
					id: $this.attr("data-id"),
					text: $this.text()
				}
				callback && callback(obj);
			}
		})
	};
	// 右边树形结构的回调
	function toggleDeviceCB(data) {
		console.log("回调", data)
	}

	/**
	 * 设置设备类型点击事件
	 */
	FZY.setDeviceType = function () {
		var da = [
		    {
		        "id": 1,  
		        "text": "设备类别1",
		        "level": 1,
		        "children": [
		            {
		                "id": 4,
		                "text": "消防栓",
		                "level": 2,
		                "children": []
		            },
		            {
		                "id": 4,
		                "text": "末端试水装置",
		                "level": 2,
		                "children": []
		            },
		            {
		                "id": 4,
		                "text": "湿试报警阀",
		                "level": 2,
		                "children": []
		            },
		            {
		                "id": 4,
		                "text": "烟感探测器",
		                "level": 2,
		                "children": []
		            },
		            {
		                "id": 4,
		                "text": "气体灭火控制盘",
		                "level": 2,
		                "children": []
		            }
		        ]
		    }
		]
		$(".device-type").html(common.treeHtml(da));
	};

	/**
	 * 右面属性值的编辑和控制（value 值可以左右滑动来控制）
	 */
	FZY.setMouseMove = function (mouseUpCB) {
		// 鼠标滑动的时候的精确度
		const PRECISEION = 10;
		// precision

		// 双击显示编辑
		$(".double-show").on("dblclick", function () {
			var $this = $(this);
			var $edit = $this.prev(".double-edit");

			$this.addClass("hide").prev(".double-edit").removeClass("hide").val($this.text() - 0).focus()
		})

		// 输入框失去焦点
		$(".double-edit").on("blur", function () {
			var $this = $(this);
			var val = $this.val();

			$this.addClass("hide").next(".double-show").removeClass("hide").text(val)
		})

		// 点击左右滑动
		var flag = false

		var $showBar = $(".double-show"),
			$editInp = $(".double-edit");

		var move = {};
		// 鼠标点下
		$showBar.on("mousedown", function (e) {
			console.log("down")
			flag = true;
			move.$this = $(this);
			move.startClientX = e.clientX;
			move.startClientY = e.clientY;
			move.initValue = parseInt($(this).text());
		})
		// 鼠标在移动的时候
		$(document).on("mousemove", function (e) {
			if (!flag) return false;

			move.stepX = move.startClientX - e.clientX;
			move.stepY = move.startClientY - e.clientY;

			var $this = move.$this;
			var value = move.stepX / PRECISEION;
			$this.text(move.initValue + value);

			mouseMoveFn && mouseMoveFn();
		})
		// 鼠标抬起来
		$(document).on("mouseup", function (e) {
			if (!flag) return;
			flag = false;
			move.$this = null;
			move.endClientX = e.clientX;
			move.endClientY = e.clientY;
			mouseUpCB && mouseUpCB();
		})
	};
	// 鼠标移动时候的回调
	function mouseMoveFn() {
		console.log("图标移动,回调");
	}
	// 鼠标抬起时候的回调
	function mouseUpFn() {
		console.log("鼠标抬起,回调");
	}

	/**
	 * 点击绑定的操作
	 */
	FZY.setBindClick = function () {
		
		$("#bindBtn").on("click", function () {
			toggleShow();
		})

		// close
		$(".modal-close").on("click", function () {
			toggleShow();
		})

		function toggleShow() {
			$(".modal").toggleClass("modal-show");
			$(".modal-bg").toggleClass("modal-show");
		}
	}

	FZY.init();
})()
