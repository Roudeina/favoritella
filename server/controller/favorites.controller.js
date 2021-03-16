module.exports = (sequelize, Sequelize) => {
    const Farovites = sequelize.define("farovites", {
      title: {
        type: Sequelize.STRING
      },
      actors: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.NUMBER
      },
      date: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
    });
  
    return Farovites;
  };