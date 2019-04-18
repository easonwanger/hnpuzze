

/**
 * a Pole with its name is capable of containing dishes
 */
class Pole{
    constructor(name,dishes){
        dishes++
        this.name = name    
        this.dishes = Array.apply(null, {length: dishes||0}).map(Number.call,Number).slice(1)
    }
    

}

 function align(origin, temp, target) {

    if (origin.dishes.length == 1) {
        moveDish(origin.dishes.shift(),origin, target)
    } else {
        let last = origin.dishes.pop()
        align(origin, target, temp)
        moveDish(last, origin, target)
        align(temp, origin, target)

    }

}

/**
 * move dishes from one pole to another, in asynchorous style
 * @param {Pole} origin 
 * @param {Pole} temp 
 * @param {Pole} target 
 */
 function *stepByStepAlign(origin, temp, target) {

    if (origin.dishes.length == 1) {
       yield moveDish(origin.dishes.shift(),origin, target)
    } else {
        let last = origin.dishes.pop()
       yield* stepByStepAlign(origin, target, temp)
       yield moveDish(last, origin, target)
       yield* stepByStepAlign(temp, origin, target)

    }
    

}

/**
 * move a single dish from pole to another
 * @param {number} md 
 * @param {Pole} from 
 * @param {Pole} to 
 */
function moveDish(md, from, to) {

    to.dishes.unshift(md)
    console.log(`${md} ${from.name}-->${to.name}`)

}

Pole.align = align
Pole.stepByStepAlign = stepByStepAlign

export default Pole

//var it = align(new Pole('A',3),new Pole('B'),new Pole('C'))
