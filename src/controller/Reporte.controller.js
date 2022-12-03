import Reporte from "../models/Reporte.js";
import Usuario from "../models/Usuario.js";

export const getAll = async (req, res) => {
  try {
    const reportes = await Reporte.findAll({ include: Usuario });

    res.json(reportes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const reporte = await Reporte.findByPk(id, { include: Usuario });

    res.json(reporte);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { Correo, Nombre, Telefono, Asunto, Descripcion, Usuario_ID } =
      req.body;

    const nuevoReporte = Reporte.create({
      Correo,
      Nombre,
      Telefono,
      Asunto,
      Descripcion,
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

    const actualizarReporte = await Reporte.findOne({
      where: {
        Usuario_ID: id,
      },
    });

    actualizarReporte.set(req.body);

    await actualizarReporte.save();

    res.json(actualizarReporte);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarReporte = await Reporte.destroy({
      where: {
        Reporte_ID: id,
      },
    });
    res.json(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
