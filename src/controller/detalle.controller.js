import detalleUsuario from "../models/DetalleUsuario.js";

export const getAll = async (req, res) => {
  try {
    const detalles = await detalleUsuario.findAll();

    res.json(detalles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await detalleUsuario.findByPk(id);

    res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const {
      Direccion,
      Departamento,
      Ciudad,
      Codigo_postal,
      Telefono,
      Usuario_ID,
    } = req.body;

    const crearDetalle = await detalleUsuario.create({
      Direccion,
      Departamento,
      Ciudad,
      Codigo_postal,
      Telefono,
      Usuario_ID,
    });

    res.json(crearDetalle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      Usuario_ID,
      Direccion,
      Departamento,
      Ciudad,
      Codigo_postal,
      Telefono,
    } = req.body;

    const actualizarDetalle = await detalleUsuario.findByPk(id);
    actualizarDetalle.Usuario_ID = Usuario_ID;
    actualizarDetalle.Direccion = Direccion;
    actualizarDetalle.Departamento = Departamento;
    actualizarDetalle.Ciudad = Ciudad;
    actualizarDetalle.Codigo_postal = Codigo_postal;
    actualizarDetalle.Telefono = Telefono;

    actualizarDetalle.save();

    res.json(actualizarDetalle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarDetalle = await detalleUsuario.destroy({
      where: {
        Detalle_ID: id,
      },
    });
    res.json(eliminarDetalle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
