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
	}
	
	window.common = common;
})()