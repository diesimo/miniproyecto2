import { TestBed } from '@angular/core/testing';

import { ConnectfbService } from './connect-fb.service';

describe('ConnectFBService', () => {
  let service: ConnectfbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectfbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
