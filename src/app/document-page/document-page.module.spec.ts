import { DocumentPageModule } from './document-page.module';

describe('DocumentPageModule', () => {
  let documentPageModule: DocumentPageModule;

  beforeEach(() => {
    documentPageModule = new DocumentPageModule();
  });

  it('should create an instance', () => {
    expect(documentPageModule).toBeTruthy();
  });
});
