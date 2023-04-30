const conexion = require("../../../../config/conexion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllproducts = (req, res) => {
  const sql = "SELECT * FROM products";
  conexion.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

exports.getAllcategories = (req, res) => {
  const sql = "SELECT * FROM categories";
  conexion.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM products WHERE id = ${id}`;
  conexion.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json(rows);
    }
  });
};

exports.createProduct = async (req, res, next) => {
  const {
    product_name,
    product_price,
    product_image,
    category_id,
    description,
  } = req.body;

  const sql = `INSERT INTO products (product_name, product_price, product_image, category_id, description) VALUES ('${product_name}', '${product_price}', '${product_image}', '${category_id}','${description}' )`;
  conexion.query(sql, (error, rows) => {
    if (error) {
      res.json({ status: 500, messge: "ERROR_PRODUCT_CREATE" });
    } else {
      res.json({ status: 200, messge: "PRODUCT_CREATE_SUCCESFULLY" });
    }
  });
};

exports.updateProduct = (req, res) => {
  const {
    product_name,
    product_price,
    product_image,
    category_id,
    id,
    description,
  } = req.body;

  const sql = `UPDATE products SET product_name = '${product_name}', product_price='${product_price}', product_image='${product_image}', category_id='${category_id}', description='${description}' WHERE id = '${id}'`;
  conexion.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json("PRODUCT_UPDATED_SUCCESFULLY");
    }
  });
};
exports.createCategory = (req, res) => {
  const { name_category } = req.body;

  const sql = `INSERT INTO categories (name_category) VALUES ('${name_category}')`;
  conexion.query(sql, (error, rows) => {
    if (error) {
      res.json({ status: 500, messge: "ERROR_CATEGORY_CREATE" });
    } else {
      res.json({ status: 200, messge: "CATEGORY_CREATE_SUCCESFULLY" });
    }
  });
};

exports.updateCategory = (req, res) => {
  const { name_category, id } = req.body;

  const sql = `UPDATE categories SET name_category = '${name_category}' WHERE id = '${id}'`;
  conexion.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json("CATEGORY_UPDATED_SUCCESFULLY");
    }
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM products WHERE id = '${id}'`;
  conexion.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json("PRODUCT_DELETED_SUCCESSFULY");
    }
  });
};

exports.deleteCategory = (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM categories WHERE id = '${id}'`;
  conexion.query(sql, (error, rows) => {
    if (error) {
      res.json(error);
    } else {
      res.json("CATEGORY_DELETED_SUCCESSFULY");
    }
  });
};
