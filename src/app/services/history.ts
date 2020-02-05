import { createBrowserHistory } from 'history';

// Export history as a singleton, so it can be shared between AngularJS and React code
export const history = createBrowserHistory();
