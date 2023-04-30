const conexion = require("../../../../config/conexion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products";
  conexion.query(sql, (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Error al obtener productos." });
    }
    res.status(200).json(rows);
  });
};

const getProductsByCategory = (req, res) => {
  const { id } = req.params;
  const sql = `
      SELECT p.id, p.product_name, p.description, p.product_price, p.product_image 
      FROM products p 
      JOIN categories c ON p.category_id = c.id 
      WHERE c.id = ?
    `;
  conexion.query(sql, [id], (error, rows) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "Error al obtener los productos en la categoría." });
    }
    if (rows.length === 0) {
      return res.status(404).json({ error: "Categoría no encontrada." });
    }
    res.status(200).json(rows);
  });
};

module.exports = {
  getAllProducts,
  getProductsByCategory,
};
