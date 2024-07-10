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
CREATE SCHEMA IF NOT EXISTS `melreposteria` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `melreposteria` ;

-- -----------------------------------------------------
-- Table `melreposteria`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `melreposteria`.`clientes` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `calle_numero` VARCHAR(255) NULL DEFAULT NULL,
  `codigo_postal` INT NULL DEFAULT NULL,
  `colonia` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `telefono` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 46
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `melreposteria`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `melreposteria`.`productos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `imagen` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `precio` DOUBLE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 77
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `melreposteria`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `melreposteria`.`pedidos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `calle_numero` VARCHAR(255) NULL DEFAULT NULL,
  `clientes_id` BIGINT NULL DEFAULT NULL,
  `colonia` VARCHAR(255) NULL DEFAULT NULL,
  `cp` INT NOT NULL,
  `direccion_envio` VARCHAR(255) NULL DEFAULT NULL,
  `precio` DOUBLE NOT NULL,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `total` DOUBLE NOT NULL,
  `productos_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKnsjvn06kdb3qeghv5bq0m7tgn` (`clientes_id` ASC) VISIBLE,
  INDEX `FKce19v2ijkgluj96ub9218ikic` (`productos_id` ASC) VISIBLE,
  CONSTRAINT `FKce19v2ijkgluj96ub9218ikic`
    FOREIGN KEY (`productos_id`)
    REFERENCES `melreposteria`.`productos` (`id`),
  CONSTRAINT `FKnsjvn06kdb3qeghv5bq0m7tgn`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `melreposteria`.`clientes` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
