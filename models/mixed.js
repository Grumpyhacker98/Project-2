module.exports = function(sequelize, DataTypes) {
  // var Example = sequelize.define("Example", {
  //   text: DataTypes.STRING,
  //   description: DataTypes.TEXT
  // });
  // return Example;
  var Mixed = sequelize.define("Mixed", {
    name: DataTypes.STRING,
    alcoholic: DataTypes.BOOLEAN,
    category: DataTypes.STRING,
    glass: DataTypes.STRING,
    Ing1: DataTypes.STRING,
    Ing1Vol: DataTypes.STRING,
    Ing2: DataTypes.STRING,
    Ing2Vol: DataTypes.STRING,
    Ing3: DataTypes.STRING,
    Ing3Vol: DataTypes.STRING,
    Ing4: DataTypes.STRING,
    Ing4Vol: DataTypes.STRING,
    Ing5: DataTypes.STRING,
    Ing5Vol: DataTypes.STRING,
    Ing6: DataTypes.STRING,
    Ing6Vol: DataTypes.STRING,
    Ing7: DataTypes.STRING,
    Ing7Vol: DataTypes.STRING,
    Ing8: DataTypes.STRING,
    Ing8Vol: DataTypes.STRING
  });
  return Mixed;
};
