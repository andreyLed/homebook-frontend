class operations {
  constructor($http, storage) {
    'ngInject';
    this.$http = $http;
    this.storage = storage;
    this.URL = 'http://localhost:3000/users';
  }
  list(folder) {
    return this.$http.get(`${this.URL}/${folder}`).then(result => result.data);
  }

  add(operation) {
    return this.$http.post(`${this.URL}/operations`, operation).then(result => result.data);
  }

  update(data) {
    return this.$http.put(`${this.URL}/operations/${data._id}`, data).then(result => result.data);
  }

  save(requestType, data) {
    if (requestType === 'PUT') {
      return this.update(data);
    }
    return this.add(data);
  }

  remove(id) {
    return this.$http.delete(`${this.URL}/operations/${id}`);
  }

  detail(id) {
    return this.$http.get(`${this.URL}/operations/${id}`).then(result => result.data);
  }

  getOperationRequest(type) {
    switch (typeof type) {
      case 'string':
        return this.list(`operations?type=${type}`);
      case 'object':
        return this.list(`operations?from=${type.from}&to=${type.to}`);
      case 'undefined':
      default:
        return this.list('operations');
    }
  }

  normaliseOperation(operation) {
    const newOperation = Object.create(operation);
    newOperation.category = this.storage.categories.find((item) => {
      if (item.name === newOperation.category) {
        return item;
      }
      return undefined;
    });
    newOperation.account = this.storage.accounts.find((item) => {
      if (item.name === newOperation.account) {
        return item;
      }
      return undefined;
    });
    newOperation.amount = Number(newOperation.amount);

    return newOperation;
  }
}

export default operations;
