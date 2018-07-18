import { CecPageModule } from './cec-page.module';

describe('CecPageModule', () => {
  let cecPageModule: CecPageModule;

  beforeEach(() => {
    cecPageModule = new CecPageModule();
  });

  it('should create an instance', () => {
    expect(cecPageModule).toBeTruthy();
  });
});
