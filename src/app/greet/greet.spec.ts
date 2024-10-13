import {greet} from './greet';

describe('greet', ()=> {
    it('should iclude the name in the message', () =>{
        expect(greet('mosh')).toContain('mosh');
    })
});