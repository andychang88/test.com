window.Tmart=window.Tmart||{};if(!Tmart.HOST){Tmart.HOST=('https:'==document.location.protocol?'https://':'http://')+ location.host;}
(function(t){t.validate={isEmail:function(value){var emailReg=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;return emailReg.test(value);},isDecimal:function(value){var decimalReg=/(^[-+]?[1-9]\d*(\.\d+)?$)|(^[-+]?[0]{1}\.\d+$)/;return decimalReg.test(value);},isInt:function(value){var intReg=/^\d+$/;return intReg.test(value);},isPositiveInt:function(value){var intReg=/^(0|([-+]?[1-9]{1}\d*))$/;return intReg.test(value);},isURL:function(value){var urlReg=/^((http|https)?:\/\/)?[^\/\.]+?\..+\w$/i;return urlReg.test(value);},equalTo:function(value,element){var target=$(element);return value===target.val();},minlength:function(value,param){if(!this.isInt(param)){return false;}
var length=$.isArray(value)?value.length:this.length($.trim(value));return length>=param;},maxlength:function(value,param){if(!this.isInt(param)){return false;}
var length=$.isArray(value)?value.length:this.length($.trim(value));return length<=param;},length:function(param){return $.trim(param).length;},compare:function(a,b){a=parseInt(a,10);b=parseInt(b,10);if(!$.isNumeric(a)||!$.isNumeric(b)){return false;}
if(a>=b){return true;}
return false;}};})(window.Tmart);$.init=function(fc){try{fc.call();}catch(err){if(window.console&&window.console.error){window.console.error(err.name+':'+ err.message);}}};(function(l){l.fn.loading=function(s){var c={rm:false};if(s)$.extend(c,s);this.each(function(){var $t=$(this);var w=$t.outerWidth();var h=$t.outerHeight();var src=('https:'==document.location.protocol?'https://':'http://')+ location.host+'/includes/view_controller/tmart/views/static/images/base/loading.gif';var c='<div class="J_loading" style="width:'+w+'px; height:'+h+'px;background: #fff;opacity: 0.65; position:absolute; top: 0;left: 0; "><img src="'+ src+'"></div>';$t.append(c);})
return this;}})(jQuery);(function(t){t.host=Tmart.HOST+'/zc/',t.get={gadget:function(limit,catid,that){var loaded=that.find('.J_topselling-lit').has('ul').html();if(loaded!=undefined){return false;}
$.getJSON(t.host+'front/category/gadget',{limit:limit,catId:catid},function(msg){var t=n='<ul>';$(msg.topsell).each(function(i,v){t+='<li><a rel="nofollow" href="'+ v.url+'"><img src="'+ v.products_image+'"></a> <span class="font12  line-through">'+(v.list_price?v.list_price_format:'')+'</span><span class="font13  font-red">'+ v.unit_price_format+'</span> </li>';t+='</ul>';that.find('.J_topselling-lit').html(t);});$(msg.new_arrival).each(function(i,v){n+='<li><a rel="nofollow" href="'+ v.url+'"><img src="'+ v.products_image+'"></a> <span class="font12  line-through">'+(v.list_price?v.list_price_format:'')+'</span><span class="font13  font-red">'+ v.unit_price_format+'</span> </li>';n+='</ul>';that.find('.J_newarrivals-lit').html(n);});});},isLogin:function(that){$.getJSON(t.host+'user/login/auth_info?jsoncallback=?',function(res){var s=res.ack;var l=$('#mini-sign');var c=$('#mini-info');l.hide();c.hide();if(window.location.hostname=="club.tmart.com"){$('#mini-sign-box').html(res.title);}else if(window.location.hostname=="helpcenter.tmart.com"){$('#mini-sign-box').html(res.title);}else if(window.location.hostname=="hcadmin.tmart.com"){$('#mini-sign-box').html(res.title);}else if(window.location.hostname=="hcwcf.tmart.com"){$('#mini-sign-box').html(res.title);}else if(window.location.hostname=="dev.club.tmart.com"){$('#mini-sign-box').html(res.title);}
$('#mini-sign-box').attr('href',res.main_url);if(s==0){l.show();}else{if(res.level_tip!=0){that.find('.J_level-tip').html(res.level_tip);}
that.find('.J_level').addClass('icon-level'+ res.level);that.find('.J_name').html(res.name);that.find('.J_orders').html(res.orders);that.find('.J_reviews').html(res.reviews);that.find('.J_points').html(res.points);that.find('.J_coupons').html(res.coupons);c.show();}});},interested:function(s,that,data){var $that=that
var hideModel=function(s,t){var r=$(s).find('.J_int');r.each(function(i,v){if($(this).data('model').indexOf(t)!=-1){$(this).hide();}})}
var postData={source:s,homepage:(location.pathname=='/'?'yes':'no')};for(var attr in data){postData[attr]=data[attr];}
$.ajax({type:'GET',url:t.host+'user/ajax/interested',data:postData,dataType:'json',success:function(ret){if(ret.totals=='0'){}
if(ret.doc!=''){$that.html(ret.doc);}}});},reviewDigg:function(n,p,t){var saveid=$.cookie('cookiesfaq');if(saveid!=null){var saveids=saveid.split(',');var hasid=false;saveid='';j=1;for(i=saveids.length- 1;i>=0;i--){if(saveids[i]==p&&hasid)continue;else{if(saveids[i]==p&&!hasid)hasid=true;saveid+=(saveid==''?saveids[i]:','+ saveids[i]);j++;if(j==20&&hasid)break;if(j==19&&!hasid)break;}}
if(hasid){alert("You Aleady digged!");return;}else saveid+=','+ p;$.cookie('cookiesfaq',saveid,1);}else{$.cookie('cookiesfaq',p,1);}
$.post("ajax_file.php",{file:"digg_ajax",type:(n==1)?'yes':'no',reviewsid:p},function(){$(t).next('b').html('('+(parseInt($(t).data('digg'))+ 1)+')');$(t).find('~span').html('√ Thanks!');});},wishlist:function(that,p){var $that=that
$.getJSON(t.host+'user/ajax/wishlist?jsoncallback=?',{page:p},function(data){$that.html(data.response);});},minicart:function(that,c){var $that=that
$.getJSON(t.host+'checkout/cart/mini_cart?jsoncallback=?',function(data){if(data.num==0){$that.remove();}else{$that.html(data.content);c.find('.J_num').html(data.num);c.find('.J_total').html(data.total);}});},gift:function(that,type){var $that=that
$.getJSON(t.host+'checkout/cart/gift',{"type":["free_gift","full_gift"]},function(data){$that.html(data.content);});},feedback:function(n){var c={digg:true,feedback_type:'sorce'};if(n){$.extend(c,n);}
var $that=$('.J_feedback_box');if(c.feedback_type=='affiliate-program'){var radom=Math.random();var urlVal='ajax_file.php?file=captcha';urlVal=urlVal+'&random'+radom;$('#captchaImg').attr('src',urlVal);$('#feedback_email').val($('#logined_email').val());$('#feedback_content').val('');$('#feedback_code').val('');$('#aff_feedback_error').html('');$that=$('.J_aff_feedback_box');}
$that.find('#experience_dislike').val('');if(c.feedback_type=='dislike'){$that.find('#experience_dislike').val('dislike');}
$that.find('.J_digg').show();if(c.digg==false){$that.find('.J_digg').hide();}
$that.modal();},newsletter:function(){$('.J_newsletter_box').modal();},loginPanel:function(n){var c={mod:'login',redirect:0,callback:0};if(n){$.extend(c,n);}
var $that=$('.J_sign_checkout_box');$that.find('.J_chk_btn, .J_reg_btn').hide();$that.find('.J_error').html('');if(c.mod=='login'){$that.find('button[type=submit]').removeClass('btn-info');$that.find('button[type=submit]').addClass('btn-basic');$that.find('.J_reg_btn').show();}
if(c.mod=='chk'){$that.find('button[type=submit]').removeClass('btn-basic');$that.find('button[type=submit]').addClass('btn-info');$that.find('.J_chk_btn').show();}
if(c.redirect){$that.find('.J_redirect').val(c.redirect);}
if(c.callback){$that.find('.J_callback').val(c.callback);}
if(c.source){$that.find('.J_source').val(c.source);}
if($('#register button[type=submit]').get()){$('#register button[type=submit]').removeAttr('disabled');}
if($('#register input[type=submit]').get()){$('#register input[type=submit]').removeAttr('disabled');}
$that.modal();},priceSwitch:function(u,m){$('#price_switch_redirect').remove();var form_html='<form id="price_switch_redirect" action="'+ u+'" method="post"><input type="hidden" name="price" value="'+ m+'" /></form>';$('body').append(form_html);$('#price_switch_redirect').submit();},standpointMultiPrice:function(act,t){var $that=$(t);if($that.data('digg')==1){return false;}
if(act==1){$that.next('.J_support').html(parseInt($that.next('.J_support').html())+ 1);$that.data('digg',1);}
if(act==0){$that.next('.J_opposet').html(parseInt($that.next('.J_opposet').html())+ 1);$that.data('digg',1);}
$.post('ajax_file.php',{file:'sites_feedback',action:'standpoint_for_multi_price',result:act},function(){});},tmartVote:function(v,s){if($(s).data('digg')==1){return false;}
$.post('ajax_file.php',{file:'sites_feedback',action:'tmart_vote',digg:v},function(ret){if(ret==1){$(s).data('digg',1);$(s).append('(<b class="font-blue"> √ </b>)');}});},multiPrice:function(n){var c={item_id:0,redirect:0},h='',supt,opst;if(n){$.extend(c,n);}
var $that=$('.J_switch_price');if(c.item_id>0){$.each(pricemodes[c.item_id],function(i,k){h+='<tr>';h+=' <td class="font-red">'+k.warehouse+'</td>';h+=' <td class="font-red">'+k.price+'</td>';h+=' <td>'+k.shipin+'</td>';h+=' <td>$0.00</td>';h+=' <td><span class="icon  icon-true-green"></span></td>';h+=' <td><span class="icon  '+((k.gift>0)?'icon-true-green':'')+'"></span></td>';h+=' <td><label><input type="radio" name="price_mode" '+((k.is_cur>0)?'checked="checked"':'')+' value="'+k.mode+'" onclick="$(\'form[name=multiprice]\').submit();" /></label></td>';h+='</tr>';supt=k.support;opst=k.oppose;});}
if(h){$that.find('.J_action').val(c.action);$that.find('.J_redirect').val(c.redirect);$that.find('.J_item_id').val(c.item_id);$that.find('.J_quantity').val(c.qty);$that.find('.J_support').html(supt);$that.find('.J_opposet').html(opst);$('.J_switch_price .J_price_list').html(h);}
$that.modal();},customModal:function(h,c,t,r,w){$('.J_custom_modal').remove();var d='';d+='<div class="modal  fade none J_custom_modal in" aria-hidden="false">'
d+=' <div class="icon  icon-close  win1-close J_c_dismiss" data-dismiss="modal" aria-hidden="true"></div>';if(h){d+=' <div class="modal-header"><h3 class="font-white">'+h+'</h3></div>';}
d+=' <div class="modal-body  clearfix"">'+c+'</div>';d+='</div>';$('body').append(d);$('.J_custom_modal').modal();if(t>0){setTimeout(function(){$('.J_custom_modal').modal('hide');},t);}
if(r){if(t>0){setTimeout(function(){window.location.reload();},t);}else{window.location.reload();}}
if(w){$('.J_c_dismiss').on('click',function(){setTimeout(function(){window.location.reload();},100);});}},intimateApparel:function(n){var c={mod:'intimate_apparel',redirect:0,callback:0};var $that=$('.J_intimate_apparel_box');$that.modal();}},t.cart={quaity:function(e,fn){e.find('.J_cut, .J_inc').each(function(){$(this).removeClass('active');$(this).hover(function(){$(this).addClass('active');},function(){$(this).removeClass('active');});});var oq,mod,pid,t=function(e,n){k=parseInt(e.val())+ n;if(k<=0){e.val(1);k=1;}
k=(k>999)?999:((k==0||isNaN(k))?1:k);e.val(k);k=parseInt(k);if(fn){fn(k,e);}
return k;}
var cut=$(e).find('.J_cut'),inc=$(e).find('.J_inc');var qty=$(e).find('.J_prodcuts_qty');qty.blur(function(){q=t(qty,0);});inc.click(function(){q=t(qty,1);});cut.click(function(){q=t(qty,-1);});},addToCart:function(pid,qty,mode){var r;d={products_id:pid,qty:qty,method:'add_to_cart',mode:mode}
$.ajax({dataType:'json',data:d,url:t.host+"checkout/cart/action",async:false,success:function(ret){r=ret;}});return r;},updateQty:function(k,e){var oq,mod,pid;oq=parseInt(e.data('qty'));mod=e.data('mod');pid=parseInt(e.data('itemid'));stock=parseInt(e.data('stock'),10);if(stock!=undefined){if(stock<=0){e.val(1);}
if(!(stock>=k)){if(stock<=0){$('#stock_'+pid).hide();}
else{$('#stock_'+pid).show();}
if(stock>0){e.val(parseInt(stock,10));k=parseInt(stock,10);}
else{e.val(oq);k=oq;}}
else{$('#stock_'+pid).hide();}}
if((k==oq)){return;}
d={products_id:pid,qty:k,action:'update',mode:mod,ret:'json'}
$.ajax({dataType:'json',data:d,url:t.host+"checkout/cart/action",success:function(ret){if(ret.status==1){location.href=decodeURIComponent(ret.redirect);}}});}},t.call={name:['wishlist','addWishlist'],init:function(t){for(i=0;i<this.name.length;i++){if(this.name[i]==t){return true;}}
return false;},wishlist:function(){var ret=parseInt($.getURLVar('callRet'));if(ret==1){Tmart.get.customModal('Move To Wish List','You\'ve added an item to your Wish List!');}else{Tmart.get.customModal('Move To Wish List','<p>This item was already in your Wish List.</p>');}},addWishlist:function(n){var sku=$.trim(n.sku);if(sku==''){return false;}
var wishUrl=Tmart.host+'user/ajax/add_wishlist';$.getJSON(wishUrl,{sku:$.trim(sku),cart_type:n.type,remove:n.remove}).done(function(d){if(d.status=='error'){l='';switch(d.msg){case'unlogin':l=lang.u_must_login;break;case'sku_exists':l=lang.item_in_wishlist;break;default:l=lang.item_in_wishlist;}
msg='<div>';msg+='<p class="text-center text-error">'+ l+'<p class="text-right"><a style="color:#3399cc" href="'+ n.url+'">'+ lang.view_my_wishlist+'</a></p></p>';msg+='</div>';}else{msg='<div>';msg+='<p class="text-center text-success">';msg+=lang.item_wishlist;msg+='<p class="text-right"><a  style="color:#3399cc" href="'+ n.url+'">'+ lang.view_my_wishlist+'</a></p></p>';msg+='</div>';}
var reload=(n.reload==false)?false:true;$('.J_sign_checkout_box').modal('hide');Tmart.get.customModal('Move To Wish List',msg,2000,reload);});},redirect:function(url){if(Tmart.validate.isURL(url)){location.href=decodeURIComponent(url);return;}}},t.aff={setAffiliate:function(d){$.post("ajax/affiliate?action=set",d);},getlink:function(m){var d={reload:false};if(m)$.extend(d,m);$('.J_sign_checkout_box').modal('hide');$.scLoading();var ret='';if(typeof(m)!='undefined'&&m.tm_cache!='no_cache'){ret=$.tmCache.get('aff_getlink');}
if(ret){$.scLoading({hide:true});var reload=(d.reload==1)?true:false;Tmart.get.customModal(false,ret,0,0,reload);return;}
$.ajax({type:'GET',url:Tmart.HOST+'/ajax/affiliate?action=getlink',data:d,success:function(ret){if(ret=='login_failed'){$.scLoading({hide:true});alert('Token expired!');window.location.reload();return false;}else if(ret=='affiliate_customers_false'){window.location.href='/users/account_affiliate.html';return false;}
ret=$.tmCache.set('aff_getlink',ret);$.scLoading({hide:true});var reload=(d.reload==1)?true:false;Tmart.get.customModal(false,ret,0,0,reload);}});},getAffCategoriesBanner:function(elemObj){var categoryLevel=elemObj.attr('name');categoryLevel=categoryLevel.split('_');categoryLevel=parseInt(categoryLevel[1]);var categoryId=elemObj.val();if(!categoryLevel||!categoryId){return false;}
var parentCategoryId=0;if(categoryLevel>1){parentCategoryId=$('#categories_select select[name=categories_'+(parseInt(categoryLevel)-1)+']').val();}
$.ajax({type:"get",url:t.host+'front/affiliate/categories_banner_show',data:{'categories_level':categoryLevel,'categories_id':categoryId,'parent_categories_id':parentCategoryId},beforeSend:function(e){boxAlert.loading(true);},success:function(res){var data=eval("("+res+")");switch(categoryLevel){case 1:$('#categories_select select:eq(3)').remove();$('#categories_select select:eq(2)').remove();$('#categories_select select:eq(1)').remove();setTimeout(function(){$('#categories_select').append(data.categoriesInfo);},100);break;case 2:$('#categories_select select:eq(3)').remove();$('#categories_select select:eq(2)').remove();setTimeout(function(){$('#categories_select').append(data.categoriesInfo);},100);break;case 3:$('#categories_select select:eq(3)').remove();setTimeout(function(){$('#categories_select').append(data.categoriesInfo);},100);break;}
if(data.categoriesImgInfo){$('#categories_banner_show').html(data.categoriesImgInfo);}
boxAlert.close();}});},getAffCustomBanner:function(pObj,pageSize){var page=$.trim(pObj.html());var currPage=$.trim($('#custom_banner_show li.active span.zc-current').html());currPage=parseInt(currPage);if(page=='<'||page=='&lt;'){page=currPage- 1;}else if(page=='>'||page=='&gt;'){page=currPage+ 1;}
page=parseInt(page);pageSize=parseInt(pageSize);if(!(page>0&&pageSize>0)){return false;}
$.ajax({type:'get',url:t.host+'front/affiliate/custom_banner_show',data:{'page':page,'limit':pageSize},beforeSend:function(){boxAlert.loading(true);},success:function(res){$('#custom_banner_show').html(res);boxAlert.close();}});},getAffFeedback:function(pObj,pageSize){var page=$.trim(pObj.html());var currPage=$.trim($('#discussions li.active span.zc-current').html());currPage=parseInt(currPage);if(page=='<'||page=='&lt;'){page=currPage- 1;}else if(page=='>'||page=='&gt;'){page=currPage+ 1;}
page=parseInt(page);pageSize=parseInt(pageSize);if(!(page>0&&pageSize>0)){return false;}
$.ajax({type:'get',url:t.host+'front/affiliate/discussion_show',data:{'page':page,'limit':pageSize},beforeSend:function(){boxAlert.loading(true);},success:function(res){$('#discussions').html(res);boxAlert.close();}});},affiliateGATrack:function(source,isAff){var p1='send';var p2='event';var p3='affiliate';var p4='';var p5='';source=$.trim(source);source=source.toLowerCase();switch(source){case'register':p4='register';p5='submit_unjoin';if(isAff==true){p5='submit_join';}
break;case'affiliate_program':p4='program';p5='submit_unjoin';if(isAff==true){p5='submit_join';}
break;case'affiliate_program_get_code':p4='get_code';p5='register_unjoin';if(isAff==true){p5='register_join';}
break;case'product_info':p4='click';p5='register_unjoin';if(isAff==true){p5='register_join';}
break;case'user_cart_login':p4='checkout';p5='login_unjoin';if(isAff==true){p5='login_join';}
break;case'user_cart_checkout':p4='checkout';p5='checkout_unjoin';if(isAff==true){p5='checkout_join';}
break;case'user_affiliate_program':p4='join_now';p5='unjoin';if(isAff==true){p5='join';}
break;}
if(!p1||!p2||!p3||!p4||!p5){return false;}
try{if(typeof(ga)=='function'){ga(p1,p2,p3,p4,p5);}}catch(e){}}}})(window.Tmart);$.init(function(){function rep(m){var that=$('.J_main_img');m.addClass("hover");i=m.find('.J_item');var o=new Image(),k=new Image();o.src=i.data('nor');k.src=i.data('large');that.loading();o.onload=function(){$('.J_loading').remove();that.find('a img').attr('src',o.src);k.onload=function(){that.find('a img').attr('data-large',i.data('large'));var ez=$('.J_main_img_zoon').data('elevateZoom');ez.swaptheimage(o.src,k.src);}}}
$(function(){$(".J_main_img_zoon").elevateZoom({scrollZoom:true});var $simg=$('.J_prodcut_left .production-img-small li');$simg.each(function(){$(this).on('click',function(){$simg.removeClass("hover");rep($(this));});});});});$.init(function(){$(function(){$('#mini-sign-box').hover(function(){Tmart.get.isLogin($('#mini-info'));});$('.J_wishlist').hover(function(){if($('.J_wishlist_box').find("input[name='loaded']").val()!=1){Tmart.get.wishlist($('.J_wishlist_box'));}});if($('.J_mincart_box').find("input[name='loaded']").val()!=1){Tmart.get.minicart($('.J_mincart_box'),$('.J_minicart'));}
$('.right-menu').backTop({speed:400});});});$.init(function(){$(function(){var callback=$.getURLVar('callback');if(Tmart.call.init(callback)){eval("Tmart.call."+callback+"()");}});});$.init(function(){$(function(){if(!("ontouchstart"in document)){$('.sub-menu-close').remove();}else{$('.sub-menu-close').click(function(){$(this).closest('.J_submenu').hide();$(this).closest('.J_popover_show').hide();});}});});