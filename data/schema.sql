-- Table for categories
CREATE TABLE IF NOT EXISTS categories (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Table for products
CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  description TEXT,
  price DECIMAL(10,2) DEFAULT NULL,
  categories_id INT NOT NULL,
  status ENUM('normal','new','offer') DEFAULT NULL,
  image VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_product_categories_idx (categories_id),
  CONSTRAINT fk_product_categories FOREIGN KEY (categories_id) REFERENCES categories (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
