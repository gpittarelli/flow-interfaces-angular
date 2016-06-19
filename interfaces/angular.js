/* jshint ignore: start */
type AngularJSIterable = Object | Array<any>;
type AngularJSStringNumber = string | number;
type AngularJSDependencyDirectiveFunction = (...args: any) => Object;
type AngularJSDependencyControllerFunction = (...args: any) => any;
type AngularJSDependencyFactoryFunction = (...args: any) => any;

type AngularJSIterator = (value: any, key: string | number) => void;

type AngularJSTimeout = <T>(fn?: () => T, delay?: number, invokeApply?: boolean) => Promise<T>;

declare class AngularJSJQueryLite {
  bind(eventType: string, handler: Function): AngularJSJQueryLite;
  css(properties: Object): AngularJSJQueryLite;
  css(propertyName: string): string;
  css(propertyName: string, propertyFunction: (index: number, value: string) => AngularJSStringNumber): AngularJSJQueryLite;
  css(propertyName: string, value: string): AngularJSJQueryLite;
  unbind(eventType: string): AngularJSJQueryLite;
  unbind(eventType: string, handler: Function): AngularJSJQueryLite;
}

declare class AngularJSModule {
  name: string;
  controller(name: string, dependencies: AngularJSDependencyControllerFunction | Array<AngularJSDependencyControllerFunction | string>): AngularJSModule;
  provider(name: string, dependencies: AngularJSDependencyControllerFunction | Array<AngularJSDependencyControllerFunction | string>): AngularJSModule;
  directive(name: string, directiveFactory: Array<AngularJSDependencyDirectiveFunction | string>): AngularJSModule;
  directive(name: string, directiveFactory: Function): AngularJSModule;
  directive(name: { name: Array<AngularJSDependencyDirectiveFunction | string> }): AngularJSModule;
  factory(name: string, providerFunction: AngularJSDependencyFactoryFunction | Array<AngularJSDependencyFactoryFunction | string>): AngularJSModule;
  value(name: string, object: any): AngularJSModule;
  config(fn: (...deps: Array<any>) => any): AngularJSModule;
  run(fn: (...deps: Array<any>) => any): AngularJSModule;
  constant(name: string, object: any): AngularJSModule;
  filter(name: string, fn: (...args: Array<any>) => any): AngularJSModule;
}

type AngularJS = {
  // copy(object: Object | Array): Object | Array;
  copy<T>(object: T): T;
  element(element: string | Element): AngularJSJQueryLite;
  extend<T>(dst: T, src: Object): T;
  forEach(obj: AngularJSIterable, iterator: AngularJSIterator): AngularJSIterable;
  forEach(obj: AngularJSIterable, iterator: AngularJSIterator, context: Object): AngularJSIterable;
  module(name: string, dependencies: Array<string>): AngularJSModule;
  module(name: string): AngularJSModule;
  noop(...x: Array<any>): void;
  isUndefined(x: any): boolean;
  isDefined(x: any): boolean;
  isArray(x: any): boolean;
  fromJson(raw: string): Object;
  toJson(in: Object): string;
};

declare var angular: AngularJS;
