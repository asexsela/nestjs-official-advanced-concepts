import { IntervalHost } from "../scheduler/interval-host.decorator";
import { Interval } from "../scheduler/interval.decorator";

// @IntervalHost
export class CronService {
  // @Interval(1000) // 👈
  everySecond() {
    console.log('This will be logged every second 🐈 ');
  }
}
