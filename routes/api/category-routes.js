const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findAll({
      include: { model: Product }
    });
    res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findByPk(req.params.id, {
      include: { model: Product }
    });

    if(!categoryData){
      res.status(404).json({ message: `Could not find any category with that id` });
      return;
    }

    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    //if the user tries to hand in a category name with either name or categoryName as the parameter
    let categoryName = req.params.name ? req.params.name : req.params.categoryName;

    const newCategory = await Category.create({ category_name: categoryName });

  }catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    //if the user tries to hand in a category name with either name or categoryName as the parameter
    let categoryName = req.params.name ? req.params.name : req.params.categoryName;

    await Category.update({ category_name: categoryName }, {
      where: {
        id: req.params.id
      }
    })

  }catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    await Category.destroy({
      where: {
        id: req.params.id
      }
    })
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
