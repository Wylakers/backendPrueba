import preArmado from "../models/PreArmado.js";
import Producto from "../models/Producto.js";

export const getAll = async (req, res) => {
  try {
    const preArmados = await preArmado.findAll({ include: Producto });

    res.json(preArmados);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const preArmado1 = await preArmado.findByPk(id, { include: Producto });

    res.json(preArmado1);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { Nombre, Descripcion } = req.body;

    const crearPreArmado = await preArmado.create({ Nombre, Descripcion });

    res.json(crearPreArmado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nombre, Descripcion } = req.body;

    const actualizarPreArmado = await preArmado.findByPk(id);
    actualizarPreArmado.Nombre = Nombre;
    actualizarPreArmado.Descripcion = Descripcion;

    res.json(actualizarPreArmado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarPreArmado = await preArmado.destroy({
      where: { Pre_Armado_ID: id },
    });

    res.json(eliminarPreArmado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
