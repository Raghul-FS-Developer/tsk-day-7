class Uber  {
    baseFare;
    costPerMinute;
    costPerMile;
    bookingFee;
    cancellationFee;
    constructor(baseFare, costPerMinute, costPerMile, bookingFee, cancellationFee){
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
        this.cancellationFee = cancellationFee
    }
    getRideFee(miles, waitingTimeInMinutes){
        return `\nFare: $${this.baseFare + this.bookingFee + (this.costPerMile*miles) + (this.costPerMinute*waitingTimeInMinutes)} | Cancellation fee: ${this.cancellationFee}`;
    }
    
}

class UberX extends Uber {
    constructor(){
        super(
            0.80,
            0.21,
            1.10,
            0.50,
            0.00
        )
    }
}


class UberXL extends Uber {
    constructor(){
        super(
            1.00,
            0.41,
            1.30,
            0.70,
            0.00
        )
    }
}

class UberBLACK extends Uber {
    constructor(){
        super(
            1.20,
            0.61,
            1.50,
            0.90,
            0.00        
        )
    }
}

class UberSUV extends Uber {  
    constructor(){
        super(
            2.20,
            1.61,
            2.50,
            1.90,
            3.00,
        )
    }

}

console.log('UberX price for 10 miles and 3 minutes waiting time: ', new UberX().getRideFee(10, 3));
console.log('UberXL price for 10 miles and 3 minutes waiting time: ', new UberXL().getRideFee(10, 3));
console.log('UberBLACK price for 10 miles and 3 minutes waiting time: ', new UberBLACK().getRideFee(10, 3));
console.log('UberSUV price for 10 miles and 3 minutes waiting time: ', new UberSUV().getRideFee(10, 3));