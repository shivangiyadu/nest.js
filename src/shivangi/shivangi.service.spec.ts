import { Test, TestingModule } from '@nestjs/testing';
import { ShivangiService } from './shivangi.service';

describe('ShivangiService', () => {
  let service: ShivangiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShivangiService],
    }).compile();

    service = module.get<ShivangiService>(ShivangiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
