(function () {
	var FZY = {};

	FZY.init = function () {
		this.toggle();
		this.deviceTypeClick();

		this.setDeviceType();
		this.setMouseMove();
	}

	/**
	 * 树形结构的点击事件
	 * @return {[type]} [description]
	 */
	FZY.toggle = function () {
		$(".tree").on("click", '.tree-toggle', function () {
			var $this = $(this);
			var $thisIcon = $this.children();
			var $targetUL = $this.next();

			if (!$targetUL[0]) return false

			$targetUL.toggleClass("hide");
			$thisIcon.toggleClass("icon-arrow-right");
		})
	};

	/**
	 * 点击设备类型后的处理函数
	 * @return {[type]} [description]
	 */
	FZY.deviceTypeClick = function () {
		$(".tree").on("click", '.tree-toggle', function () {
			var $this = $(this);
			var $thisIcon = $this.children();
			//点击的toggle有图标的话，则返回
			if ($thisIcon[0]) return false;
			$(".tree-toggle").removeClass("active")
			$this.addClass("active");
			// 点击完设备类型的时候
			// to do ........
			console.log($this.text())
		})
	};

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
	}

	/**
	 * 右面属性值的编辑和控制
	 */
	FZY.setMouseMove = function () {
		// 双击显示编辑
		$(".double-show").on("dblclick", function () {
			var $this = $(this);
			var $edit = $this.prev(".double-edit");

			$this.addClass("hide").prev(".double-edit").removeClass("hide")
		})

		// 点击左右滑动
		var flag = false

		var $showBar = $(".double-show"),
			$editInp = $(".double-edit");

		var move = {};
		// 鼠标点下
		$showBar.on("mousedown", function (e) {
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

			setValue(move)
		})
		// 鼠标抬起来
		$(document).on("mouseup", function (e) {
			flag = false;

			move.$this = null;
			move.endClientX = e.clientX;
			move.endClientY = e.clientY;
		})
		// 设置值
		function setValue(move) {
			var $this = move.$this;
			console.log(move.stepX)

			$this.text(move.initValue + move.stepX);
		}
	}

	FZY.init();
})()