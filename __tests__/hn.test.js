import  Pole from '../hn'

describe('hnpuzze',()=>{
    it('3 dishes',()=>{

        let pa = new Pole('A',3)
        let pb = new Pole('B')
        let pc = new Pole('B')
        Pole.align(pa,pb,pc)
        expect(pa.dishes).toEqual([])
        expect(pb.dishes).toEqual([])
        expect(pc.dishes).toEqual([1,2,3])
        

    })
})


