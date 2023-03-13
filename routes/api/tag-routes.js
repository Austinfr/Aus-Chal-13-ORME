const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findAll({
      include: []
    });

    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{

  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    let tagName = req.params.name ? req.params.name : req.params.tagName;

    await Tag.create({ tag_name: tagName });

  }catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try{

    let tagName = req.params.name ? req.params.name : req.params.tagName;

    await Tag.update(
      {
        tag_name: tagName
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

  }catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{

    await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
