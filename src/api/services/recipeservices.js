const recipe = require("../models/recipeschema");

exports.CreateRecipeService = (body) => {
  const { dish, chef, ingredientArray, image, description } = body;
  const newRecipe = new recipe({
    dish,
    chef,
    ingredientArray,
    image,
    description,
  });
  return new Promise((resolve, reject) => {
    recipe
      .findOne({ dish: newRecipe.dish })
      .then((recipe) => {
        if (recipe) return reject("Recipe Exists");
        newRecipe
          .save()
          .then((r) => resolve(r))
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};

exports.ReadRecipeService = () => {
  return new Promise((resolve, reject) => {
    recipe
      .find()
      .then((r) => resolve(r))
      .catch((err) => reject(err));
  });
};
exports.ReadOneRecipeService = (id) => {
  return new Promise((resolve, reject) => {
    recipe
      .findOne({ _id: id })
      .then((r) => resolve(r))
      .catch((err) => reject(err));
  });
};
exports.UpdateRecipeService = (id, body) => {
  const { dish, chef, description, ingredientArray, image } = body;
  let UpdatedRecipe =  { dish, chef, description, ingredientArray, image } ;
  return new Promise((resolve, reject) => {
    recipe
      .findOneAndUpdate({ _id: id }, { $set : UpdatedRecipe }, { new: true })
      .then((r) => {
          resolve(r)
        })
      .catch((err) => reject(err));
  });
};
exports.DeleteRecipeService = (id) => {
  return new Promise((resolve, reject) => {
    recipe
      .findOneAndDelete({ _id: id })
      .then((r) => resolve(r))
      .catch((err) => reject(err));
  });
};
