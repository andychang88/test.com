var psyukxsid="3l8uEwprHEFa";
// safe-monitor@gecko.js

var psyukxiso;
try {
	psyukxiso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.psyukxwid != null);
} catch(e) {
	psyukxiso = false;
}
if (psyukxiso) {
	window.psyukxwid = opener.psyukxwid + 1;
	psyukxsid = psyukxsid + "_" + window.psyukxwid;
} else {
	window.psyukxwid = 1;
}
function psyukxn() {
	return (new Date()).getTime();
}
var psyukxs = psyukxn();
function psyukxst(f, t) {
	if ((psyukxn() - psyukxs) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var psyukxil;
var psyukxit;
function psyukxpi() {
	var il;
	if (3 == 2) {
		il = window.pageXOffset + 50;
	} else if (3 == 3) {
		il = (window.innerWidth * 50 / 100) + window.pageXOffset;
	} else {
		il = 50;
	}
	il -= (271 / 2);
	var it;
	if (3 == 2) {
		it = window.pageYOffset + 50;
	} else if (3 == 3) {
		it = (window.innerHeight * 50 / 100) + window.pageYOffset;
	} else {
		it = 50;
	}
	it -= (191 / 2);
	if ((il != psyukxil) || (it != psyukxit)) {
		psyukxil = il;
		psyukxit = it;
		var d = document.getElementById('ciyukx');
		if (d != null) {
			d.style.left  = Math.round(psyukxil) + "px";
			d.style.top  = Math.round(psyukxit) + "px";
		}
	}
	setTimeout("psyukxpi()", 100);
}
var psyukxlc = 0;
function psyukxsi(t) {
	window.onscroll = psyukxpi;
	window.onresize = psyukxpi;
	psyukxpi();
	psyukxlc = 0;
	var url = "http://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/1vatm9neo3k4j1nz2v9z1ipqoy.html?ps_t=" + psyukxn() + "&ps_vsid=" + psyukxsid + "";
	var d = document.getElementById('ciyukx');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:271;height:191" src="' + url + 
			'" onload="psyukxld()" frameborder="no" width="271" height="191" scrolling="no"></iframe>';
	}
}
function psyukxld() {
	if (psyukxlc == 1) {
		var d = document.getElementById('ciyukx');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	psyukxlc++;
}
if (false) {
	psyukxsi(1);
}
var psyukxop = false;
function psyukxco() {
	var w1 = psyukxci.width - 1;
	psyukxscf((w1 & 2) != 0);
	var h = psyukxci.height;

	if (h == 1) {
		psyukxop = false;

	// manual invitation
	} else if ((h == 2) && (!psyukxop)) {
		psyukxop = true;
		psyukxsi(1);

	// auto invitation
	} else if ((h == 3) && (!psyukxop)) {
		psyukxop = true;
		psyukxsi(2);
	}
}
var psyukxci = new Image();
psyukxci.onload = psyukxco;
var psyukxpm = false;
var psyukxcp = psyukxpm ? 30 : 60;
var psyukxct = null;
function psyukxscf(p) {
	if (psyukxpm != p) {
		psyukxpm = p;
		psyukxcp = psyukxpm ? 30 : 60;
		if (psyukxct != null) {
			clearTimeout(psyukxct);
			psyukxct = null;
		}
		psyukxct = psyukxst("psyukxrc()", psyukxcp);
	}
}
function psyukxrc() {
	psyukxct = psyukxst("psyukxrc()", psyukxcp);
	try {
		psyukxci.src = "http://image.providesupport.com/cmd/1vatm9neo3k4j1nz2v9z1ipqoy?" + "ps_t=" + psyukxn() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + psyukxsid + "" + "";
	} catch(e) {
	}
}
psyukxrc();


