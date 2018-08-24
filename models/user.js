var bcrypt = require('bcrypt');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Please enter a valid email.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 16],
          msg: 'Password must be 8-16 charaters in length.'
        }
      }
    },
    dob: DataTypes.DATE,
    admin: DataTypes.BOOLEAN,
    image: {
      type: DataTypes.STRING,
      isUrl: {
        msg: 'Please enter an image url.'
      }
    }
  }, {
    hooks: {
      beforeCreate: function(pendingUser){
        if(pendingUser && pendingUser.password){
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        } else {

        }
      }
    }
  });
  user.associate = function(models) {
    // associations can be defined here
  };

  user.prototype.isValidPassword = function(typedPassword){
    return bcrypt.compareSync(typedPassword, this.password);
  }


  return user;
};