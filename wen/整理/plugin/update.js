//=======================图片压缩==================================
(function(e, n, t) {
	n.M = n.M || {};
	n.M.NAPI = n.M.NAPI || {};
	var i = function() {
		var e = window.PhoneGap || window.Cordova || window.cordova;
		return e
	};
	var o = function(e) {
		return typeof e == "string" && e.constructor == String
	};

	function r() {
		var e = navigator.userAgent.toLowerCase();
		return /upchat/.test(e) ? true : false
	}

	function a() {
		var e = navigator.userAgent.toLowerCase();
		var n = new RegExp(/(android)\s+([\d.]+)/);
		return n.test(e)
	}
	var u = function(e, n, t, r, a, u) {
		i().exec(function(n) {
			var t = "";
			try {
				t = o(n) ? JSON.parse(n) : n
			} catch(i) {
				t = n
			}!!e && e.apply(null, [t])
		}, function(e) {
			var t = "";
			try {
				t = o(e) ? JSON.parse(e) : e
			} catch(i) {
				t = e
			}!!n && n.apply(null, [t])
		}, t, r, [a, u])
	};
	e.extend(n.M.NAPI, {
		showWaitingView: function() {
			if(r()) {
				u(null, null, "UPWebUI", "showWaitingView", {})
			}
		},
		showLoadingView: function() {
			if(r()) {
				u(null, null, "UPWebUI", "showLoadingView", {})
			}
		},
		showFlashInfo: function(e) {
			if(r()) {
				u(null, null, "UPWebUI", "showFlashInfo", e)
			}
		},
		showAlertView: function(e, n, t) {
			if(r()) {
				u(e, n, "UPWebUI", "showAlertView", t)
			}
		},
		dismiss: function() {
			if(r()) {
				u(null, null, "UPWebUI", "dismiss", {})
			}
		},
		startNewWebView: function(e, n) {
			if(r()) {
				u(null, null, "UPWebUI", "startNewWebView", e, n)
			}
		},
		closeWebView: function(e) {
			if(r()) {
				u(null, null, "UPWebUI", "closeWebView", e)
			}
		},
		setBarStatus: function(e) {
			if(r()) {
				u(null, null, "UPWebBars", "setBarStatus", e)
			}
		},
		setNavigationBarTitle: function(e) {
			if(r()) {
				u(null, null, "UPWebBars", "setNavigationBarTitle", e)
			}
		},
		setNavigationBarSubTitle: function(e) {
			if(r()) {
				u(null, null, "UPWebBars", "setNavigationBarSubTitle", e)
			}
		},
		cleanSubTitle: function() {
			if(r()) {
				u(null, null, "UPWebBars", "cleanSubTitle", {})
			}
		},
		getSecurity: function(e, n) {
			if(r()) {
				u(e, n, "UPChatPluginPublicAccount", "getSecurity", {})
			}
		},
		getDomainSecurity: function(e, n) {
			if(r()) {
				u(e, n, "UPChatPluginPublicAccount", "getDomainSecurity", {})
			} else {
				n()
			}
		},
		fetchUserId: function(e, n) {
			if(r()) {
				u(e, n, "UPChatPlugin", "fetchUserId", {})
			}
		},
		getApplicationList: function(e, n) {
			if(r()) {
				u(e, n, "UPApplication", "getApplicationList")
			}
		},
		returnOpenSchemeApp: function(e, n) {
			if(r()) {
				u(e, n, "UPOpenSchemeApp", "returnOpenSchemeApp")
			}
		},
		getLocation: function(e, n) {
			if(r()) {
				u(e, n, "UPLocation", "getLocation", {})
			}
		},
		openFileChooser: function(e, n) {
			if(r() && a()) {
				u(e, n, "FileChooser", "open", {})
			}
		},
		choosePhoto: function(e, n) {
			if(r()) {
				u(e, n, "UPImagePicker", "chooseImage", {})
			}
		},
		showPhotos: function(e, n, t) {
			if(r()) {
				u(e, n, "UPWebUI", "showPhotos", t)
			}
		},
		showMenu: function(e, n, t) {
			if(r()) {
				u(e, n, "UPWebUI", "showMenu", t)
			}
		},
		openPublicChat: function(e, n, t) {
			if(r()) {
				u(e, n, "UPChatPlugin", "openPublicChat", t)
			} else {
				n()
			}
		},
		getAesKey: function(e, n) {
			if(r()) {
				u(e, n, "UPImagePicker", "getaeskey", {})
			}
		},
		validateShare: function(e, n, t) {
			if(r()) {
				u(e, n, "UPShare", "validateShare", t)
			}
		}
	});
	n.M.init = function(e) {
		if(r()) {
			document.addEventListener("deviceready", e, false)
		} else {
			e()
		}
	};
	n.M.isNative = r
})(jQuery, window.UPCHAT = window.UPCHAT || {});
var query2Obj = function(e) {
	if(e[0] === "?" || e[0] === "#") {
		e = e.substring(1)
	}
	var n = {};
	e.replace(/\b([^&=]*)=([^&=]*)/g, function(e, t, i) {
		if(typeof n[t] != "undefined") {
			n[t] += "," + decodeURIComponent(i)
		} else {
			n[t] = decodeURIComponent(i)
		}
	});
	return n
};
var isNative = function() {
	var e = navigator.userAgent.toLowerCase();
	return /upchat/.test(e) ? true : false
};
var isIos = function() {
	var e = navigator.userAgent.toLowerCase();
	var n = new RegExp(/iphone|ipad/);
	return n.test(e)
};
var osp = isIos() ? "ios_" : "android_",
	version = "3.0.0";
var query = query2Obj(location.search);
var cordova_ver = query.cver ? query.cver : "";
cordova_ver = cordova_ver || version;
var p = window.location.href.indexOf("https") == 0 ? "https" : "http";
if(isNative()) {
	document.write('<script type="text/javascript" src="' + p + "://upchat.95516.net/public/scripts/cordova/min/cordova." + osp + cordova_ver + '-min.js"></script>')
}