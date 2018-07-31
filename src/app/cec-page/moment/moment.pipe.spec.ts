import { MomentPipe } from './moment.pipe';

describe('MomentPipe', () => {
  let moment: jasmine.Spy,
    format: jasmine.Spy,
    pipe: MomentPipe;

  beforeEach(() => {
    format = jasmine.createSpy('format');
    moment = jasmine.createSpy('moment');

    moment.and.returnValue({ format });
    format.and.returnValue('test');

    pipe = new MomentPipe(moment);
  });

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('when transform is called', () => {
    let result: string;

    beforeEach(() => {
      result = pipe.transform('2018-01-01', 'MMM');
    });

    it('converts the string to a moment date', () => {
      expect(moment).toHaveBeenCalledWith('2018-01-01');
    });

    it('format with the passed in pattern', () => {
      expect(format).toHaveBeenCalledWith('MMM');
    });

    it('returns the result of the format', () => {
      expect(result).toBe('test');
    });
  });

  describe('when transform is called without good values', () => {
    it('returns an empty string if no value passed', () => {
      expect(pipe.transform('', 'MM')).toBe('');
    });

    it('returns an empty string if no format string is passed', () => {
      expect(pipe.transform('2018', '')).toBe('');
    });
  });
});
