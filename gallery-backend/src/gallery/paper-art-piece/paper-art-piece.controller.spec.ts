import { Test, TestingModule } from "@nestjs/testing";
import { PaperArtPieceController } from "./paper-art-piece.controller";

describe("PaperArtPiece Controller", () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PaperArtPieceController],
    }).compile();
  });
  it("should be defined", () => {
    const controller: PaperArtPieceController = module.get<PaperArtPieceController>(PaperArtPieceController);
    expect(controller).toBeDefined();
  });
});
