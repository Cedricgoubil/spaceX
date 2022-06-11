import { Pipe, PipeTransform } from '@angular/core';
import { LaunchDto } from '../components/dto/launchdto';

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
