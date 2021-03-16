module.exports = (sequelize, dataType) => {
  const User = sequelize.define("users", {
    email: { type: dataType.STRING } ,
    password: { type: dataType.STRING },
    username: { type: dataType.STRING },
    profile_picture: {type: dataType.STRING ,defaultValue:"https://www.uvu.edu/biology/research/heath_ogden/images/ogdenlab_default.jpg"},
  }, {
    timestamps: false
});

  return User;
};
