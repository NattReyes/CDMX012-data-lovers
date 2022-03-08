import { filterDirectors, filterProducers } from '../src/data.js';
import {films, hayaoMiyazaki, isaoTakahata} from '../src/mockData1.js';
import {alphOrder, orden} from '../src/data.js';

describe('Test del filtrado', () => {
  it('is a function', () => {
    expect(typeof filterDirectors).toBe('function');
  });
})
  describe('Test del filtrado', () => {
    it('is a function', () => {
      expect(typeof filterProducers).toBe('function');
    })

test('Filtrado de datos', () => {
  expect(filterDirectors(films, 'Hayao Miyazaki')).toStrictEqual(hayaoMiyazaki)
})
})

test('Filtrado de productores', () => {
  expect(filterProducers(films, 'Isao Takahata')).toStrictEqual(isaoTakahata)
})

  describe('Test del ordenado', () => {
  it('is a function', () => {
    expect(typeof alphOrder).toBe('function');
  });
})

test('Test de ordenado', () => {
expect(alphOrder.films).toBe(orden)
})