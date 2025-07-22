import {
  obtenerTodosLosProductos,
  obtenerProductoPorId,
  crearNuevoProducto,
  eliminarProductoPorId
} from '../models/product.model.js';

export const obtenerTodos = async () => {
  return await obtenerTodosLosProductos();
};

export const obtenerPorId = async (id) => {
  return await obtenerProductoPorId(id);
};

export const crearProducto = async (producto) => {
  return await crearNuevoProducto(producto);
};

export const eliminarProducto = async (id) => {
  return await eliminarProductoPorId(id);
};

