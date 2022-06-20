import { Pipe, PipeTransform } from '@angular/core';
import { LaunchDto } from '../dto/LaunchDto';

@Pipe({
  name: 'failedlaunch'
})
export class FailedLaunchFilterPipe implements PipeTransform {
  transform(failedLaunchFilterTransform: LaunchDto[], failedLaunchFilter: boolean) {
    if (!failedLaunchFilterTransform || !failedLaunchFilter) {
      return failedLaunchFilterTransform;
    }
    return failedLaunchFilterTransform.filter(
      failedLaunchList => failedLaunchList.success === false
    );
  }
}
