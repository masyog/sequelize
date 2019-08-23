const models = require("../models");
const view = require("../view/view");

class Controller {
  static add(name, email, phone) {
    models.Contact.create({
      name: name,
      email: email,
      phone: phone
    })
      .then(data => {
        const dataContact = data.get({ plain: true });
        view.messageSuccess(dataContact);
      })
      .catch(err => {
        view.messageErr(err.message);
      });
  }

  static read() {
    models.Contact.findAll()
      .then(dataAllContact => {
        dataAllContact.forEach(data => {
          view.messageSuccess(data.dataValues);
        });
      })
      .catch(err => {
        view.messageErr(err.message);
      });
  }

  static update(id, name, email, phone) {
    models.Contact.update({
      name: name,
      email: email,
      phone: phone
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
    models.Contact.destroy({
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

module.exports = Controller;