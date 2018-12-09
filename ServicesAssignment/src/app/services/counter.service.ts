export class CounterService {
  activeCount = 0;
  inactiveCount = 0;

  incrementActiveCount() {
    this.activeCount++;
    console.log('Counts for Active actions: ' + this.activeCount);
  }

  incrementInactiveCount() {
    this.inactiveCount++;
    console.log('Counts for Inactive actions: ' + this.inactiveCount);
  }
}
