import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { CrewDto } from '../components/dto/CrewDto';

@Pipe({
  name: 'searchlaunch'
})
export class SearchLaunchFilterPipe implements PipeTransform {
  transform(searchLaunchFilterTransform: CrewDto[], searchTerm: string) {
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
