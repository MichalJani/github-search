import { dataFormatter, sortAscByName } from './functions';
import {
  formattedTestArray,
  repoTestArray,
  userTestArray,
  unsortedTestArray,
  sortedTestArray
} from './testUtils';

describe('dataFormatter ', () => {
  it('Should format the data', () => {
    expect(dataFormatter(userTestArray, repoTestArray)).toEqual(
      formattedTestArray
    );
  });
});

describe('sortAscByName ', () => {
  it('Should sort the array', () => {
    expect(sortAscByName(unsortedTestArray)).toEqual(sortedTestArray);
  });
});
