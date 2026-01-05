/**
 * Fulfillment Arm Sorter - Main Entry Point
 * A basic Node.js TypeScript starter application
 */

class FulfillmentArmSorter {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log(`Hello from ${this.name}! 🚀`);
    console.log('This is a basic Node.js TypeScript starter template.');
  }

  public getInfo(): { name: string; environment: string } {
    return {
      name: this.name,
      environment: process.env.NODE_ENV || 'development',
    };
  }
}

// Main execution
const app = new FulfillmentArmSorter('Fulfillment Arm Sorter');
app.greet();

const info = app.getInfo();
console.log('\nApplication Info:', info);

export default FulfillmentArmSorter;
