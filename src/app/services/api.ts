import { throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, switchMap } from 'rxjs/operators';
import { URLS } from '../constants/urls';

export function getTableData() {
	return fromFetch(URLS.api).pipe(
		switchMap(response => (response.ok ? response.json() : throwError(response))),
		map(({ users }) => users)
	);
}
