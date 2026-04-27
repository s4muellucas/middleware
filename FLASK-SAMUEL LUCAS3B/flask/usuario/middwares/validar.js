module.exports = function (req, res, next) {
  const { nome, cpf } = req.body;

  if (!nome || !cpf) {
    return res.status(400).json({ erro: "Campos obrigatórios" });
  }

  if (cpf.length !== 11) {
    return res.status(400).json({ erro: "CPF inválido" });
  }

  next();
};