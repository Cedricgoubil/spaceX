import { Pipe, PipeTransform } from '@angular/core';
import { LaunchDto } from '../dto/LaunchDto';

@Pipe({
  name: 'succeedlaunch'
})
export class SucceedLaunchFilterPipe implements PipeTransform {
  transform(succeedLaunchFilterTransform: LaunchDto[], succeedLaunchFilter: boolean) {
    if (!succeedLaunchFilterTransform || !succeedLaunchFilter) {
      return succeedLaunchFilterTransform;
    }
    return succeedLaunchFilterTransform.filter(
      succeedLaunchList => succeedLaunchList.success === true
    );
  }
}
