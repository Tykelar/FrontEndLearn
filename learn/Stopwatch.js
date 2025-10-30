let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number);
////////////////////////////////////////////////
//A diferença do anterior para addEventListener, é que no primeiro o numero é incrementado dentro do objeto mas sendo scoped quando tentamos dar console log, o valor é 10
let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj)


/*-----------------------------------------------------------------*/

function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
        throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    
    }

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch is not running');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) /1000;
        duration += seconds;
    }


    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;},
    })
}