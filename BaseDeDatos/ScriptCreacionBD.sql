-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema melreposteria
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema melreposteria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `melreposteria` DEFAULT CHARACTER SET utf8mb3 ;
USE `melreposteria` ;

-- -----------------------------------------------------
-- Table `melreposteria`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `melreposteria`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(80) NOT NULL,
  `Email` VARCHAR(80) NULL DEFAULT NULL,
  `Telefono` VARCHAR(80) NULL DEFAULT NULL,
  `Direccion` VARCHAR(80) NULL DEFAULT NULL,
  `Codigo postal` VARCHAR(80) NULL DEFAULT NULL,
  `Calle y numero` VARCHAR(80) NULL DEFAULT NULL,
  `Colonia` VARCHAR(80) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `melreposteria`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `melreposteria`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Total` INT NULL DEFAULT NULL,
  `Precio` INT NULL DEFAULT NULL,
  `Estatus` VARCHAR(80) NULL DEFAULT NULL,
  `Direccion de envio` VARCHAR(80) NULL DEFAULT NULL,
  `Calle y numero` VARCHAR(80) NULL DEFAULT NULL,
  `Codigo postal` VARCHAR(80) NULL DEFAULT NULL,
  `Colonia` VARCHAR(80) NULL DEFAULT NULL,
  `Clientes_id` INT NOT NULL DEFAULT '0',
  `productos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `productos_id`),
  INDEX `fk_Pedidos_Clientes_idx` (`Clientes_id` ASC) VISIBLE,
  INDEX `fk_pedidos_productos1_idx1` (`productos_id` ASC) VISIBLE,
  CONSTRAINT `fk_Pedidos_Clientes`
    FOREIGN KEY (`Clientes_id`)
    REFERENCES `melreposteria`.`clientes` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `melreposteria`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `melreposteria`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Categorias` VARCHAR(80) NULL DEFAULT NULL,
  `Nombre` VARCHAR(80) NULL DEFAULT NULL,
  `Precio` VARCHAR(80) NULL DEFAULT NULL,
  `Descripcion` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
