<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/7/27
 * Time: 14:16
 */
error_reporting(E_ALL);
phpinfo();
header( 'Content-Type:text/html; charset=utf-8');

$accountDate = array(
    'UserId'=>'public1',
    'UserPassword'=> '123456',
    'userToken'=>'0ee02d147f1e4cbc882e3fd42e826f2c'
);

$content="
<document>
	<createOrder>
	  <userToken>8a3ddab172a74ad887be919a2aa41641</userToken>
		<createOrderRequest>  //创建订单请求
		  <orderNo/>
		  <trackingNo/>
		  <cargoCode>W</cargoCode>
		  <transportWayCode>SGPOSTG</transportWayCode>
		  <goodsCategory>G</goodsCategory>
		  <goodsDescription>bag</goodsDescription>
		  <insured>N</insured>
		  <pieces>1</pieces>
		  <weight>0.386</weight>
		  <originCountryCode>CN</originCountryCode>
		  <destinationCountryCode>AU</destinationCountryCode>
		  <consigneeCompanyName>XXX company</consigneeCompanyName>
		  <consigneeName>Bruce Lee</consigneeName>
		  <consigneeTelephone>01088223345</consigneeTelephone>
		  <consigneeMobile>13688888888</consigneeMobile>
		  <street>Lipovaja 2345 Orenburg</street>
		  <city>Orenburg</city>
		  <province>Russia</province>
		  <consigneePostcode>10001</consigneePostcode >
		  <shipperAddress>xxx street</shipperAddress>
		  <shipperCompanyName>Hlt limit comany</shipperCompanyName>
		  <shipperName>Zhangsan</shipperName>
		  <shipperPostcode>518000</shipperPostcode>
		  <shipperTelephone>07558888888</shipperTelephone>
		  <shipperMobile>13132222222</shipperMobile>
		  <memo></memo>
			<declareItems>        //订单详情
			  <name>Canvas bag</name>
			  <cnName>帆布袋</cnName>
			  <pieces>1</pieces>
			  <netWeight>0.683</netWeight>
			  <unitPrice>8.6</unitPrice>
			  <productMemo>库位：A010102  SKU：P03231 品名：帆布包 颜色：红色 数量：1</productMemo >
              <customsNo>6104220010</customsNo >
              <rebate>N</rebate>
			  <commodityNum> CPD2014061800000002</commodityNum >
		  </declareItems>
			<declareItems>//申报明细列表
			  <name>Paper bag</name>
			  <pieces>10</pieces>
			  <netWeight>0.123</netWeight>
			  <unitPrice>1.2</unitPrice>
		  </declareItems>
		</createOrderRequest>
	</createOrder>

</document>";


//echo $content;exit;

$url = 'http://api.goto56.com:8086/apic/services/order?wsdl';
//echo $url;exit;
$header= array("Content-type: text/xml");//定义content-type为xml
$ch=curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
$response = curl_exec($ch);echo $response;exit;
if(curl_errno($ch))
{
    print curl_error($ch);
}
curl_close($ch);

?>