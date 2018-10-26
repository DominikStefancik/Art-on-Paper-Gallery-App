import { Test, TestingModule } from "@nestjs/testing";
import { PaperArtPieceService } from "./paper-art-piece.service";

describe("PaperArtPieceService", () => {
  let service: PaperArtPieceService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaperArtPieceService],
    }).compile();
    service = module.get<PaperArtPieceService>(PaperArtPieceService);
  });
  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
