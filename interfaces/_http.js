/* jshint ignore: start */
type AngularJS_HTTPResponse = {
  data: string | Object;
  status: number;
  headers(headerName: string): string;
  config: Object;
  statusText: string
}

declare class AngularJS_HTTP {
  get(url: string): Promise<AngularJS_HTTPResponse>;
  get(url: string, config: Object): Promise<AngularJS_HTTPResponse>;
}

declare var $http: AngularJS_HTTP;
