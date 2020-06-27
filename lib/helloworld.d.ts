export default class HelloWorld {
}
export declare class Entity {
    id: number;
    name: string;
    constructor(id: number, name: string);
}
export declare type Data = {
    id: number;
    name: string;
};
export interface Api {
    create(name: string): Data;
}
export declare class Service {
    api: Api;
    constructor(api: Api);
    create(name: string): Entity;
}
