const db = require("../models");
const Favorites = db.favorites;
const Op = db.Sequelize.Op;

// Create and Save a new favorites
exports.create = (req, res) => {

    const favorite = {
        title: req.body.title,
        actors: req.body.actors,
        review: req.body.review,
        date: req.body.date,
        image: req.body.image
    };

    Favorites.create(favorite)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the favorite."
            });
        });
};
// Retrieve all Favorites or favorites by title from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Favorites.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Favorites."
            });
        });
};

// Find a single favorites with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Favorites.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Favorites with id=" + id
        });
      });
};

// Update a favorites by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Favorites.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Favorites was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Favorites with id=${id}. Maybe Favorites was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Favorites with id=" + id
        });
      });
};

// Delete a favorites with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Favorites.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Favorites was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Favorites with id=${id}. Maybe Favorites was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Favorites with id=" + id
        });
      });
};
