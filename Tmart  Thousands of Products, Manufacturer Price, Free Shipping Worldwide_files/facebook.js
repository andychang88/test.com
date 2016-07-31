$(function(){if(typeof(Tmart.HOST)=='undefined'){Tmart.HOST=('https:'==document.location.protocol?'https://':'http://')+ location.host;}
window.Tmart.facebook={login:function(){}};if(APP_LOCALE==''||APP_ID==''||APP_VERSION==''){return;}
$.getScript('//connect.facebook.net/'+ APP_LOCALE+'/sdk.js',function(){FB.init({appId:APP_ID,version:APP_VERSION});if(typeof(FB)=='undefined'){return;}
window.Tmart.facebook.login=function(){FB.login(function(response){if(!response.authResponse){return;}
var f_token=response.authResponse.accessToken;FB.api('/me',function(response){$.post(Tmart.HOST+'/zc/user/login/fb_auth',{token:f_token},function(){location.reload();});});},{scope:'email'});}});});