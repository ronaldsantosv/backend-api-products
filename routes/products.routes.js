import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from '../controllers/product.controller.js';

import { verificarToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Rutas protegidas
router.post('/create', verificarToken, createProduct);
router.delete('/:id', verificarToken, deleteProduct);

export default router;


