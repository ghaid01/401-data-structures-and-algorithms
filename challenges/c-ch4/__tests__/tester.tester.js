'use strict';

const matrixChallenge = require('../challenge4.js');

describe('testing if the addition is working', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect((1+2)).toBe(3);
      });

    it('when given an array return the addition of each row', () =>{
    let array = [[1,2,3], [4,5,6]] ;
    console.log("asdsadsadasdasd",matrixChallenge.matrix(array));
 expect(matrixChallenge.matrix(array)).toBeEqual([6,15]);
});

});


