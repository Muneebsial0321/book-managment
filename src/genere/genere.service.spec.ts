import { Test, TestingModule } from '@nestjs/testing';
import { GenereService } from './genere.service';

describe('GenereService', () => {
  let service: GenereService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenereService],
    }).compile();

    service = module.get<GenereService>(GenereService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
