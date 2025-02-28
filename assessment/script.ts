// Exercise 1: Single Responsibility Principle (SRP)
// Scenario:
// Imagine you’re writing software for a payment system. You create a single class that both processes payments and logs transactions. This mixes two responsibilities into one class.

// Current Code (Violates SRP):

// class PaymentHandler {
//     processPayment(amount: number): void {
//       // Process the payment logic
//       console.log(`Processing payment of $${amount}`);
//       this.logTransaction(amount);
//     }
  
//     logTransaction(amount: number): void {
//       // Log the transaction details
//       console.log(`Logged transaction for $${amount}`);
//     }
//   }
  
//   // Usage:
//   const handler = new PaymentHandler();
//   handler.processPayment(100);
  
  // Task:
  // Refactor the code so that one class handles payment processing and another handles transaction logging. Each class should have a single responsibility.
class processPayment {
    amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }
}
// instantiate the processing class
const payment = new processPayment(100);

class logTransaction {
    instantiatedPayment: processPayment;
    constructor(instantiatedPayment: processPayment) {
        this.instantiatedPayment = instantiatedPayment;
    }
    // console log the trans
    logToConsole() {
        console.log(`Logged transaction for $${this.instantiatedPayment.amount}`);
    }
}

// instantiate the log class
const log = new logTransaction(payment);
log.logToConsole();


  //------------------------------DONE //
  
  // Exercise 2: Open/Closed Principle (OCP)
  // Scenario:
  // A notification system currently supports only email notifications. To add SMS or push notifications, you’d have to modify the notification service directly, which isn’t ideal.
  
  // Current Code (Violates OCP):
  
//   class NotificationService {
//     send(notification: any): void {
//       if (notification.type === 'email') {
//         console.log(`Sending email to ${notification.address}`);
//       } else {
//         throw new Error('Notification type not supported!');
//       }
//     }
//   }
  
//   // Usage:
//   const emailNotification = { type: 'email', address: 'user@example.com' };
//   new NotificationService().send(emailNotification);
  
  // Task:
  // Refactor the design so that the notification service is open for extension (to support SMS, push, etc.) but closed for modification. Consider using an interface or abstract class for notifications so that new types can be added without changing the core service.
  interface NotificationService {
    send(): void;
  }

  class EmailNotification implements NotificationService {
    address: string;

    constructor(address: string) {
        this.address = address;
    }

    send(): string {        // Should return a string for the address to which the email is sent to.
        return `Sending email to ${this.address}`;
    }
  }

  class SMSNotification implements NotificationService {
    phoneNumber: string;

    constructor(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    send(): string {        // Should return a string for the phone number to which the SMS is sent to.
        return `Sending SMS to ${this.phoneNumber}`;
    }
  }

  class SendNotification {
    static send(NotificationService: NotificationService): void {
        return(NotificationService.send());
    }
}
  
    const emailNotification = new EmailNotification('user@example.com');
    const smsNotification = new SMSNotification('1234567890');
    SendNotification.send(emailNotification);
    SendNotification.send(smsNotification);
  
  // ----------------------------DONE //
  
  // Exercise 3: Liskov Substitution Principle (LSP)
  // Scenario:
  // Suppose you have a general class for vehicles with a method to start an engine. However, one subclass represents a bicycle—which has no engine. Replacing a general vehicle with a bicycle might break the system.
  
  // Current Code (Violates LSP):
  
//   class Vehicle {
//     startEngine(): void {
//       console.log('Engine started');
//     }
//   }
  
//   class Bicycle extends Vehicle {
//     // A bicycle doesn't have an engine!
//     startEngine(): void {
//       throw new Error("Bicycles don't have an engine!");
//     }
//   }
  
//   // Usage:
//   function startTrip(vehicle: Vehicle) {
//     vehicle.startEngine();
//   }
  
//   startTrip(new Bicycle()); // This will throw an error.
  
  // Task:
  // Adjust the design so that only vehicles with engines are required to implement a startEngine() method. Consider separating vehicles into types (for example, using interfaces for engine-based vehicles) so that substituting a bicycle won’t lead to errors.
    interface Engine {
        startEngine(): void;
    }
    interface NoEngine {}

    class Vehicle implements Engine {
        startEngine(): void {
            console.log('Engine started');
        }
    }

    class Bicycle implements NoEngine {
        // A bicycle doesn't have an engine!
    }

    function startTrip(vehicle: Engine) {
        vehicle.startEngine();
    }

  
  // ----------------------------DONE //
  
  // Exercise 4: Interface Segregation Principle (ISP)
  // Scenario:
  // A smart device interface currently forces all devices to implement functions for power, charging, and network connectivity. However, some devices (like a basic wired printer) might not need to handle wireless connections or battery charging.
  
  // Current Code (Violates ISP):
  
  interface SmartDevice {
    powerOn(): void;
    powerOff(): void;
    chargeBattery(): void;
    connectToNetwork(): void;
  }
  
  class Tablet implements SmartDevice {
    powerOn() {
      console.log('Tablet powering on');
    }
    powerOff() {
      console.log('Tablet powering off');
    }
    chargeBattery() {
      console.log('Tablet charging');
    }
    connectToNetwork() {
      console.log('Tablet connecting to WiFi');
    }
  }
  
  class WiredPrinter implements SmartDevice {
    powerOn() {
      console.log('Printer powering on');
    }
    powerOff() {
      console.log('Printer powering off');
    }
    chargeBattery() {
      // Wired printer doesn't use battery charging
      throw new Error('Not supported');
    }
    connectToNetwork() {
      // It connects via cable, not WiFi
      throw new Error('Not supported');
    }
  }
  
  // Task:
  // Redesign the interfaces so that each device only implements what it actually uses. Create smaller, more focused interfaces (for example, one for power control, one for network connectivity, and one for battery operations) so that classes like WiredPrinter aren’t forced to implement methods they don’t need.
  
  // Exercise 5: Dependency Inversion Principle (DIP)
  // Scenario:
  // A remote control class directly creates an instance of a television, tying it to a specific device. This makes it hard to reuse the remote control with other devices.
  
  // Current Code (Violates DIP):
  
  class Television {
    turnOn(): void {
      console.log('Television is now ON');
    }
    turnOff(): void {
      console.log('Television is now OFF');
    }
  }
  
  class RemoteControl {
    private tv = new Television();
  
    pressPowerButton(): void {
      // Directly operating on a specific Television instance
      this.tv.turnOn();
    }
  }
  
  // Usage:
  const remote = new RemoteControl();
  remote.pressPowerButton();
  
  // Task:
  // Refactor the code so that RemoteControl depends on an abstraction rather than a concrete class. Define an interface (e.g., Device) with the necessary operations, have Television implement that interface, and update RemoteControl to work with any device that conforms to that interface.
  