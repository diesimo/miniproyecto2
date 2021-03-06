import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
