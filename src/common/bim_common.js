(function () {
	var common = {}
	
	/**
	 * [ajax description]
	 * @param  {[objec]} obj [description]
	 */	
	common.ajax = function (obj) {
		obj = obj || {}
		var type = obj.type || 'get',
			url = obj.url,
			data = obj.data,
			success = obj.success;
		var XHR = null;
		if (window.XMLHttpRequest) {
			XHR = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			XHR = new ActiveXObject("Microsoft.XMLHTTP");
		}

		if (XHR) {
			if (type === 'get') {
				XHR.open('get', url)
				XHR.onreadystatechange = function () {
					if (XHR.readyState == 4 && XHR.status == 200) {
						success && success(XHR.responseText);
						XHR = null;
					}
				}
			} else if (type === 'post') {
				
			}
		}
	};

	/**
	 * 树形结构
	 */
	common.treeHtml = function (data) {
		if (!data) return false;
		var html = '';
		function loop(data) {
			html += '<ul class="tree-wrap">';
			for (var i = 0; i < data.length; i++) {
				var item = data[i];
				html += '<li class="tree-item"><p class="tree-title tree-toggle">' + icon(item.children) +item.text + '</p>' 
				if (item.children != 0) loop(item.children)
				html += '</li>'
			}
			html += "</ul>"
			return html
		}

		function icon(children) {
			var s = '';
			if (children.length != 0) s = '<i class="iconfont icon-weibiaoti1"></i>'
			return s;
		}
		return loop(data)
	};

	/**
	 * 把线性数据结构改成树形数据结构
	 * 10001000
	 * 100010001000
	 * @param {[type]} data [description]
	 */
	common.setDataStructure = function (data) {
		if (!data) return null;

		var minLen = 8,
			maxLen = 20,
			stepLen = 4;

		// 查找父集合的id,设置为pId,
		for (var i = 0; i < data.length; i++) {
			var item = data[i];
			var id = item.id;
			var idLen = id.length;

			if (idLen === minLen) {
				item.pId = 0 + '';
			} else {
				item.pId = id.substring(0, idLen - stepLen);
			}
			item.children = [];
		}

		function Tree(data) {
			this.tree = data || [];
			this.groups = {};
		}

		Tree.prototype = {
			init: function(pid) {
				this.group();
				var data = this.getData(this.groups[pid]);
				return data;
			},
			group: function () {
		        for(var i = 0; i < this.tree.length; i++){
		            if(this.groups[this.tree[i].pId]){
		                this.groups[this.tree[i].pId].push(this.tree[i]);
		            }else{
		                this.groups[this.tree[i].pId]=[];
		                this.groups[this.tree[i].pId].push(this.tree[i]);
		            }
		        }
			},
			getData: function (info) {
				if (!info) return;

				var children = [];
				for (var i = 0; i < info.length; i++) {
					var item = info[i];
					item.children = item['children'].concat(this.getData(this.groups[item.id]));
					children.push(item);
				}

				return children;
			}
		}
		return new Tree(data).init('0');
	};

	/**
	 * 控制div slider滑入和滑出
	 * @param {[type]} el  [盒子的元素]
	 * @param {[type]} opt [description]
	 *                 opt{
	 *                 	position //位置 'bottom', 'top', 'left', 'right'
	 *                 	initValue // 初始的值
	 *                 	startOpt: [obj]// 开始时候的配置
	 *                 	endOpt: [obj]// 结束时候的配置
	 *                 	afterEnter [fn]
	 *                 }
	 *  @example
			common.setSliderToggle('#modalFireSystem', {
				position: 'bottom',
				initValue: '-200px',
				startOpt: { bottom: '-200px'},
				endOpt: { bottom: '50px'}
			})
	 */
	common.setSliderToggle = function (el, opt) {
		opt = opt || {};

		var $El = $(el);
		if (!$El[0]) return false;

		var position = opt.position,
			initValue = opt.initValue,
			startOpt = opt.startOpt,
			endOpt = opt.endOpt,
			afterEnter = opt.afterEnter;

		var nowBottom = $El.css(position)

		if (nowBottom === initValue) {
			$El.animate(endOpt)
			// 进入后的回调
			afterEnter && afterEnter();
		} else {
			$El.animate(startOpt)
		}
	}
	
	window.common = common;
})()