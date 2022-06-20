import { Pipe, PipeTransform } from '@angular/core';
import { LaunchDto } from '../dto/LaunchDto';


@Pipe({
  name: 'upcominglaunch'
})
export class UpcomingLaunchFilterPipe implements PipeTransform {
  transform(upcomingLaunchFilterTransform: LaunchDto[], upcomingLaunchFilter: boolean) {
    if (!upcomingLaunchFilterTransform || !upcomingLaunchFilter) {
      return upcomingLaunchFilterTransform;
    }
    return upcomingLaunchFilterTransform.filter(
      upcomingLaunchList => upcomingLaunchList.success === null
    );
  }
}
