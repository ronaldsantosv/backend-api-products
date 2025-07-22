import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Lógica simple para ejemplo (en producción usar base de datos y hashing)
  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ mensaje: 'Login exitoso', token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

export default router;

