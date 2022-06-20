import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { LaunchDto } from '../dto/LaunchDto';


@Pipe({
  name: 'searchlaunch'
})
export class SearchLaunchFilterPipe implements PipeTransform {
  transform(searchLaunchFilterTransform: LaunchDto[], searchTerm: string) {
    if (!searchLaunchFilterTransform || !searchTerm) {
      return searchLaunchFilterTransform;
    }
    return searchLaunchFilterTransform.filter(
      pipe(launchCard => {
        return (
          launchCard?.name?.toUpperCase().match(searchTerm.toUpperCase())
        );
      })
    );
  }
}
