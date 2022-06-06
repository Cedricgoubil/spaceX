import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { CrewDto } from '../components/dto/CrewDto';

@Pipe({
  name: 'searchcrew'
})
export class SearchCrewFilterPipe implements PipeTransform {
  transform(searchCrewFilterTransform: CrewDto[], searchTerm: string) {
    if (!searchCrewFilterTransform || !searchTerm) {
      return searchCrewFilterTransform;
    }
    return searchCrewFilterTransform.filter(
      pipe(crewCard => {
        return (
          crewCard?.name?.toUpperCase().match(searchTerm.toUpperCase())
        );
      })
    );
  }
}
