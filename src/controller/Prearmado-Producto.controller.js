import preArmado_Producto from "../models/PreArmado-Producto.js";

export const getAll = async (req, res) => {
  try {
    const preArmados = await preArmado_Producto.findAll();

    res.json(preArmados);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const preArmado1 = await preArmado.findByPk(id);

    res.json(preArmado1);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { Pre_Armado_ID, Producto_ID } = req.body;

    const crearPreArmado = await preArmado.create({
      Pre_Armado_ID,
      Producto_ID,
    });

    res.json(crearPreArmado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizarPreArmado = await preArmado.findByPk(id);

    actualizarPreArmado.set(req.body);

    await actualizarPreArmado.save();

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

    res.json(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
