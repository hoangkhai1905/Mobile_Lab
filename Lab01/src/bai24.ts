//24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
abstract class Appliance {
    abstract turnOn(): void;
}
class Fan extends Appliance {
    turnOn(): void {
        console.log("Fan is now ON.");
    }
}
class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Air Conditioner is now ON.");
    }
}
