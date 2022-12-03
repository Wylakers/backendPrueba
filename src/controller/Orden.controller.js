import Orden from "../models/Orden.js";
import Producto from "../models/Producto.js";

export const getAll = async (req, res) => {
  try {
    const ordenes = await Orden.findAll({ include: Producto });
    res.json(ordenes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const orden = await Orden.findByPk(id, { include: Producto });
    res.json(orden);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { Monto, Direccion, Fecha, Usuario_ID } = req.body;

    const nuevaOrden = Orden.create({
      Monto,
      Direccion,
      Fecha,
      Usuario_ID,
    });

    res.json("Creado");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizarOrden = await Orden.findOnefindOne({
      where: {
        Usuario_ID: id,
      },
    });

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

    const eliminarOrden = await Orden.destroy({
      where: {
        Orden_ID: id,
      },
    });

    res.json(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
