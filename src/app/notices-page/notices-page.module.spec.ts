import { NoticesPageModule } from './notices-page.module';

describe('NoticesPageModule', () => {
  let noticesPageModule: NoticesPageModule;

  beforeEach(() => {
    noticesPageModule = new NoticesPageModule();
  });

  it('should create an instance', () => {
    expect(noticesPageModule).toBeTruthy();
  });
});
