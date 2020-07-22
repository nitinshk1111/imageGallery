import { Injectable } from '@angular/core';
import { entities } from './entities-mock';
import { Entity } from './entity';

@Injectable({
  providedIn: 'root',
})
export class EntitiesService {

  constructor() { }

  get() {
    const uniqueEntitiesfiftyPlusRating: Entity[] = [];
    const entityMap = {};
    for (const entity of entities) {
      if (!entityMap[entity.uuid] && entity.rating >= 50) {
        entity.rating = Math.round(entity.rating);
        entityMap[entity.uuid] = entity;
        uniqueEntitiesfiftyPlusRating.push(entity);
      }
    }
    return uniqueEntitiesfiftyPlusRating.sort((a: Entity , b: Entity) => b.rating - a.rating);
  }
}
