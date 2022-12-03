import Review from "../models/Review.js";
import Usuario from "../models/Usuario.js";

export const getAll = async (req, res) => {
  try {
    const reviews = await Review.findAll({ include: Usuario });

    res.json(reviews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByPk(id, { include: Usuario });

    res.json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { Puntaje, Comentario, Video, Link, Usuario_ID } = req.body;

    const crearReview = await Review.create({
      Puntaje,
      Comentario,
      Video,
      Link,
      Usuario_ID,
    });

    res.json(crearReview);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizarReview = await Review.findOne({
      where: {
        Usuario_ID: id,
      },
    });

    actualizarReview.set(req.body);

    await actualizarReview.save();

    res.json(actualizarReview);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarReview = await Review.destroy({
      where: {
        Review_ID: id,
      },
    });
    res.json(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
