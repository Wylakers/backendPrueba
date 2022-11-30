import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAll = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);
    res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { Nombre, Apellido, Correo, Password } = req.body;

    bcrypt.hash(Password, 10).then((hash) => {
      const nuevoUsuario = Usuario.create({
        Nombre,
        Apellido,
        Correo,
        Password: hash,
      });
    });
    res.json("Creado");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const { Nombre, Apellido, Correo, Password } = req.body;

    const actualizarUsuario = await Usuario.findByPk(id);
    actualizarUsuario.Nombre = Nombre;
    actualizarUsuario.Apellido = Apellido;
    actualizarUsuario.Correo = Correo;
    actualizarUsuario.Password = Password;

    await actualizarUsuario.save();

    res.json(actualizarUsuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminarUsuario = await Usuario.destroy({
      where: {
        Usuario_ID: id,
      },
    });

    res.json(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { Correo, Password } = req.body;

  const user = await Usuario.findOne({ where: { Correo } });

  if (!user) res.json({ error: "User not found" });

  // bcrypt.compare(Password, user.Password).then((match) => {
  //   if (!match) res.json({ error: "Wrong email and password" });

  const accessToken = jwt.sign(
    { Correo, Password },
    "secretthatprotectsthetoken"
  );

  res.json(accessToken);
  // });
};
