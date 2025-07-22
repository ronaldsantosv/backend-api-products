import {
  obtenerTodos,
  obtenerPorId,
  crearProducto,
  eliminarProducto
} from '../services/product.service.js';

export const getAllProducts = async (req, res) => {
  try {
    const productos = await obtenerTodos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const producto = await obtenerPorId(req.params.id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar producto' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const nuevo = await crearProducto(req.body);
    res.status(201).json({
      mensaje: 'Producto creado',
      producto: nuevo
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await eliminarProducto(req.params.id);
    res.json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};

