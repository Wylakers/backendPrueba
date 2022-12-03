import TipoReview from "../models/TipoReview.js";
import Review from "../models/Review.js";

export const getAll = async (req, res) => {
  try {
    const review = await TipoReview.findAll({ include: Review });

    res.json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await TipoReview.findByPk(id, { include: Review });

    res.json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { Nombre, Descripcion, Review_ID } = req.body;

    const crearTipoReview = await TipoReview.create({
      Nombre,
      Descripcion,
      Review_ID,
    });

    res.json(crearTipoReview);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizarTipoReview = await TipoReview.findOne({
      where: {
        Review_ID: id,
      },
    });

    actualizarTipoReview.set(req.body);

    await actualizarTipoReview.save();

    res.json(actualizarTipoReview);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarTipoReview = await TipoReview.destroy({
      where: {
        Tipo_Review_ID: id,
      },
    });
    res.json(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
