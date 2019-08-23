const models = require("../models");
const view = require("../view/view");

class ControllerAddress {
  static add(city, zip_code, street) {
    models.Address.create({
      city: city,
      zip_code: zip_code,
      street: street
    })
      .then(data => {
        view.messageSuccess(data);
      })
      .catch(err => {
        view.messageErr(err.message);
      });
  }

  static read() {
    models.Address.findAll()
      .then(dataAllAddress => {
        dataAllAddress.forEach(data => {
          view.messageSuccess(data.dataValues);
        });
      })
      .catch(err => {
        view.messageErr(err.message);
      });
  }

  static update(id, city, zip_code, street) {
    models.Address.update({
      city: city,
      zip_code: zip_code,
      street: street
    }, {
      where: {
        id: id
      }
    })
      .then(() => {
        view.messageSuccess(`Data with id ${id} success to updated`);
      })
      .catch(err => {
        view.messageErr(err.message);
      });
  }

  static delete(id) {
    models.Address.destroy({
      where: {
        id: id
      }
    })
      .then(() => {
        view.messageSuccess(`Data with id ${id} success deleted`);
      })
      .catch(err => {
        view.messageErr(err.message);
      });
  }
}

module.exports = ControllerAddress;