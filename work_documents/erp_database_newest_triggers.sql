-- MySQL dump 10.13  Distrib 5.5.41, for Linux (x86_64)
--
-- Host: rdshya1yiemresvglnzvp.mysql.rds.aliyuncs.com    Database: erp_database_newest
-- ------------------------------------------------------
-- Server version	5.5.18.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`salamoer`@`%`*/ /*!50003 TRIGGER `update_logisticsOrderNo` BEFORE UPDATE ON `erp_ali_orders` 
    FOR EACH ROW BEGIN
    
  IF OLD.logisticsOrderNo IS NULL &&  NEW.logisticsOrderNo!='' THEN
	UPDATE `erp_procurement` SET logisticsOrderNo=NEW.logisticsOrderNo WHERE externalOrderID=OLD.orderId;
  END IF;
  
  IF OLD.logisticsOrderNo IS NOT NULL && OLD.logisticsOrderNo!=NEW.logisticsOrderNo THEN
	UPDATE `erp_procurement` SET logisticsOrderNo=NEW.logisticsOrderNo WHERE externalOrderID=OLD.orderId;
  END IF;
  
	END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`slme`@`%`*/ /*!50003 TRIGGER FRCHANGE 
BEFORE 
INSERT ON erp_orders 
FOR EACH ROW 
BEGIN 
DECLARE d VARCHAR(20); 
SET d = LEFT(NEW.buyer_zip,3); 
IF (new.buyer_country_code = 'FR' AND d=974) 
THEN 
SET NEW.buyer_country_code = 'RE'; 
SET NEW.buyer_country = 'Reunion'; 
END IF; 
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`salamoer`@`%`*/ /*!50003 TRIGGER `erp_database_newest`.`updateTrackNumber` 
BEFORE UPDATE  ON erp_database_newest.erp_orders
 FOR EACH ROW  
begin

DECLARE shipment_id INT;
    IF NEW.shipmentAutoMatched > 0 THEN
        SELECT COUNT(*) INTO shipment_id FROM erp_shipment WHERE equal_order_id = 1 AND shipmentID = NEW.shipmentAutoMatched;
        IF shipment_id > 0 THEN
            IF NEW.orders_shipping_code IS NULL OR NEW.orders_shipping_code = '' THEN
                IF OLD.orders_status = '1' AND NEW.orders_status = '3' THEN
                    SET NEW.orders_shipping_code = CONCAT('S',NEW.erp_orders_id);
                END IF;
            END IF;
        END IF;
    END IF;

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`salamoer`@`%`*/ /*!50003 TRIGGER `erp_database_newest`.`insertProductTotal` 
AFTER INSERT  ON erp_database_newest.erp_products_data
 FOR EACH ROW  
begin


INSERT INTO erp_get_totals(get_totals_sku,get_totals_time,get_totals_storage_real,get_totals_storage_unreal,get_totals_reason,get_totals_year,get_totals_month,get_totals_add_count,user_id) VALUES (new.products_sku,NOW(),new.products_storage,new.products_storage,'Initialized...',YEAR(NOW()),MONTH(NOW()),1,30);
INSERT INTO erp_stock_detail(products_id, products_sku, stock_warehouse_id) VALUES (new.products_id, new.products_sku, new.product_warehouse_id);


end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`salamoer`@`%`*/ /*!50003 TRIGGER `erp_database_newest`.`updateProductWarehouse` 
AFTER UPDATE  ON erp_database_newest.erp_products_data
 FOR EACH ROW  
begin

  IF new.product_warehouse_id <> old.product_warehouse_id THEN
UPDATE erp_stock_detail SET stock_warehouse_id = new.product_warehouse_id WHERE products_id = old.products_id;
END IF;

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`salamoer`@`%`*/ /*!50003 TRIGGER `erp_database_newest`.`deleteProductStock` 
AFTER DELETE  ON erp_database_newest.erp_products_data
 FOR EACH ROW  
begin

    DELETE FROM erp_stock_detail WHERE products_id = old.products_id;

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`salamoer`@`%`*/ /*!50003 TRIGGER `erp_database_newest`.`insertProductTotal_copy` 
AFTER INSERT  ON erp_database_newest.erp_products_data_copy
 FOR EACH ROW  
begin

INSERT INTO erp_get_totals(get_totals_sku,get_totals_time,get_totals_storage_real,get_totals_storage_unreal,get_totals_reason,get_totals_year,get_totals_month,get_totals_add_count,user_id) VALUES (new.products_sku,NOW(),new.products_storage,new.products_storage,'Initialized...',YEAR(NOW()),MONTH(NOW()),1,30);


end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`salamoer`@`%`*/ /*!50003 TRIGGER `erp_database_newest`.`stockChangeLog` 
AFTER UPDATE  ON erp_database_newest.erp_stock_detail
 FOR EACH ROW  
begin

IF new.actual_stock > old.actual_stock THEN
	
		INSERT INTO erp_stock_detail_operate_record_detail_trigger (operate_type,product_id,operate_count,stock,operate_time) VALUES ('in',old.products_id,new.actual_stock-old.actual_stock,new.actual_stock,NOW());
	
	ELSEIF new.actual_stock < old.actual_stock THEN
	
		INSERT INTO erp_stock_detail_operate_record_detail_trigger (operate_type,product_id,operate_count,stock,operate_time) VALUES ('out',old.products_id,old.actual_stock-new.actual_stock,new.actual_stock,NOW());
	
	END IF;

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-10 11:14:14
