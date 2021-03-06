import { TestBed } from '@angular/core/testing';

import { ConnectFBService } from './connect-fb.service';

describe('ConnectFBService', () => {
  let service: ConnectFBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectFBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
