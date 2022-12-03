import Categoria from "../models/Categoria.js";

export const getAll = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const categoria = await Categoria.findByPk(id);
    res.json(categoria);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { Nombre, Descripcion } = req.body;

    const crearCategoria = await Categoria.create({ Nombre, Descripcion });

    res.json(crearCategoria);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizarCategoria = await Categoria.findByPk(id);

    actualizarCategoria.set(req.body);

    await actualizarCategoria.save();

    res.json(actualizarCategoria);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarCategoria = await Categoria.destroy({
      where: { Categoria_ID: id },
    });

    res.json(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
