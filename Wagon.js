class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.getAvailableSeatCount()) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        const isNotHealthy = (traveler) => traveler.isHealthy === false;
        return this.passengers.some(isNotHealthy)
    }
    totalFood() {
        let wholeFood = 0;
        for (let index = 0; index < this.passengers.length; index++) {
            const traveler = this.passengers[index]
            wholeFood += traveler.food
        }
        return wholeFood
    }
}