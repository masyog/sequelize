const argv = process.argv.slice(2);
const controllerContact = require('./controller/contact');
const controllerAddress = require('./controller/address')
const [ table, command,...args] = argv;

switch (table) {
  case "contact": {
    switch (command) {
      case 'add': {
        controllerContact.add(...args);
        break;
      }        
      case 'read': {
        controllerContact.read();
        break;
      }        
      case 'update': {
        controllerContact.update(...args);
        break;
      }        
      case 'delete': {
        controllerContact.delete(...args);
        break;
      }
      default: {
        console.log('Menu tidak tersedia!')
      }
    }
    break;
  }
  case 'address': {
    switch (args1) {
      case 'add': {
        controllerAddress.add(...args)
        break
      }
      case 'read': {
        controllerAddress.read()
        break
      }
      case 'update': {
        controllerAddress.update(...args)
        break
      }
      case 'delete': {
        controllerAddress.delete(...args)
        break
      }
      default: {
        console.log('Menu tidak tersedia!')
      }
    }
  }
  default: {
    console.log('Table tidak ada!')
  }
}