// CRUD.js

const fs = require('fs');

class CRUD {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath;
    this.data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  }

  create(newItem) {
    this.data.push(newItem);
    this.saveData();
  }

  read() {
    return this.data;
  }

  update(id, updatedItem) {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      this.data[index] = updatedItem;
      this.saveData();
    }
  }

  delete(id) {
    this.data = this.data.filter(item => item.id !== id);
    this.saveData();
  }

  saveData() {
    fs.writeFileSync(this.dataFilePath, JSON.stringify(this.data, null, 2));
  }
}

module.exports = CRUD;