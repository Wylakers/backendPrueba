import Orden_Producto from "../models/Orden-Producto.js";

export const getAll = async (req, res) => {
  try {
    const ordenProductos = await Orden_Producto.findAll();

    res.json(ordenProductos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const ordenProducto = await Orden_Producto.findByPk(id);

    res.json(ordenProducto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { Orden_ID, Producto_ID } = req.body;

    const crearOrdenProducto = await Orden_Producto.create({
      Orden_ID,
      Producto_ID,
    });

    res.json(crearOrdenProducto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizarOrden = await Orden_Producto.findByPk(id);

    actualizarOrden.set(req.body);

    await actualizarOrden.save();

    res.json(actualizarOrden);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarOrdenProducto = await Orden_Producto.destroy({
      where: { Orden_Producto_ID: id },
    });

    res.json(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
