<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
include 'phpQuery.php';  
phpQuery::newDocumentFile('http://job.blueidea.com');  
$companies = pq('#hotcoms .coms')->find('div');  
foreach($companies as $company)  
{  
   echo pq($company)->find('h3 a')->text()."<br>";  
}  