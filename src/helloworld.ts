export default class HelloWorld {}

// Entity
export class Entity {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

// Adapter Data Class
export type Data = {
  id: number;
  name: string;
};

// Effective Repository
export interface Api {
  create(name: string): Data;
}

// Service(Usecases) 
export class Service {
  api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  create(name: string) {
    const data = this.api.create(name);
    const entity = new Entity(data.id, name);
    return entity;
  }
}
