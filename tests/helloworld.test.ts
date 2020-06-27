import * as helloworld from "../src/helloworld";
import {mock, anyString} from 'jest-mock-extended';

describe('entity', (): void => {
    test('should construct new entity', (): void => {
    const entity : helloworld.Entity = new helloworld.Entity(0, "name1");
        expect(entity.id).toBe(0);
        expect(entity.name).toBe('name1');
    });
});

describe('create', (): void => {
    test('should create new entity', (): void => {
    const mockApi = mock<helloworld.Api>();
    const service = new helloworld.Service(mockApi);
    mockApi.create.calledWith(anyString()).mockReturnValue(new helloworld.Entity(0, ""));
    const entity : helloworld.Entity = service.create("name1");
        expect(entity.id).toBe(0);
        expect(entity.name).toBe('name1');
    });
});
