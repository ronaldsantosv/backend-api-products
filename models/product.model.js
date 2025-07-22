import { db } from '../config/firebase.js';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const productosRef = collection(db, 'productos');

export const obtenerTodosLosProductos = async () => {
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const obtenerProductoPorId = async (id) => {
  const docRef = doc(db, 'productos', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const crearNuevoProducto = async (data) => {
  const nuevo = await addDoc(productosRef, data);
  return { id: nuevo.id, ...data };
};

export const eliminarProductoPorId = async (id) => {
  const docRef = doc(db, 'productos', id);
  await deleteDoc(docRef);
};
