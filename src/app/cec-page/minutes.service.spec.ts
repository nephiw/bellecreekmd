import { MinutesService, CECMinute } from './minutes.service';

describe('MinutesService', () => {
  let service: MinutesService;

  beforeEach(() => {
    // const angularFirestore = jasmine.createSpyObj('AngularFirestore', ['collection']);
    // const angularCollection = jasmine.createSpyObj('AngularCollection', ['valueChanges']);
    // angularCollection.valueChanges.and.returnValue(minutes);
    // angularFirestore.collection.and.returnValue(angularCollection);

    service = new MinutesService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
