const people = require('../models/peopleModel');

module.exports = {
  get: async (req, res) => {
    try {
      res.json(await people.findAll());
    } catch (error) {
      throw error;
    }
  },
  getById: async (req, res) => {
    try {
      const id = req.params.id;
      res.json(await people.findByPk(id));
    } catch (error) {
      throw error;
    }
  },
  post: async (req, res) => {
    try {
      res.json(await people.create(req.body));
    } catch (error) {
      throw error;
    }
  },
  put: async (req, res) => {
    try {
      const { name } = req.body;
      const id = req.params.id;
      res.json(people.update({ name }, { where: { id } }));
    } catch (error) {
      throw error;
    }
  },
  del: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await people.findByPk(id);
      if (result) {
        res.json({ status: !!(await result.destroy()) });
      }
      res.json({ status: false });
    } catch (error) {
      throw error;
    }
  },
};
