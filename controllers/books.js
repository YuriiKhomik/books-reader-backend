const Joi = require("joi");

const { Book } = require("../models/book");

const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../helpers");

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

const getAll = async (req, res) => {
  const result = await Book.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  // const result = await Book.findOne({_id: id})
  const result = await Book.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Book.create(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Delete success",
  });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateAuthor: ctrlWrapper(updateAuthor),
  deleteById: ctrlWrapper(deleteById),
};
