import { Test, TestingModule } from '@nestjs/testing';
import { GenereController } from './genere.controller';
import { GenereService } from './genere.service';

describe('GenereController', () => {
  let controller: GenereController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenereController],
      providers: [GenereService],
    }).compile();

    controller = module.get<GenereController>(GenereController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
