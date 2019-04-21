import  Pole from '../hn'

describe('hnpuzze',()=>{
    it('3 dishes',()=>{

        const pa = new Pole('A',3)
        const pb = new Pole('B')
        const pc = new Pole('C')
        const moveCallback = jest.fn()

        Pole.align(pa,pb,pc,moveCallback)
        expect(pa.dishes).toEqual([])
        expect(pb.dishes).toEqual([])
        expect(pc.dishes).toEqual([1,2,3])

        expect(moveCallback).toHaveBeenCalledTimes((2 ** 3) - 1);


        

    })
})


