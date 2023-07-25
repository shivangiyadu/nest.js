import { Test, TestingModule } from '@nestjs/testing';
import { ShivangiController } from './shivangi.controller';

describe('ShivangiController', () => {
  let controller: ShivangiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShivangiController],
    }).compile();

    controller = module.get<ShivangiController>(ShivangiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
