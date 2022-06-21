import { Pipe, PipeTransform } from '@angular/core';
import { LaunchDto } from '../dto/LaunchDto';

@Pipe({
  name: 'passedlaunch'
})
export class PassedLaunchFilterPipe implements PipeTransform {
  transform(passedLaunchFilterTransform: LaunchDto[]) {
    if (!passedLaunchFilterTransform) {
      return passedLaunchFilterTransform;
    }
    return passedLaunchFilterTransform.filter(
      passedLaunchList => passedLaunchList.upcoming === false
    );
  }
}
