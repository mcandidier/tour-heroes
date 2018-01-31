import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; 
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { Heroes } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(Heroes);
  }

}
