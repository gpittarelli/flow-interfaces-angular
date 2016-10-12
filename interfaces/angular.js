/* jshint ignore: start */
type AngularJSIterable = Object | Array<any>;
type AngularJSStringNumber = string | number;
type AngularJSDirectiveFunction = (...args: any) => Object;
type AngularJSControllerFunction = (...args: any) => any;
type AngularJSFactoryFunction = (...args: any) => any;

type AngularJSIterator = (value: any, key: string | number) => void;

type AngularJSTimeout = <T>(fn?: () => T, delay?: number, invokeApply?: boolean) => Promise<T>;

type AngularJSScope = {
  Scope(providers?: Object, instanceCache?: Object): AngularJSScope;
  $apply(exp?: string | () => any): any;
  $eval(exp?: string | () => any, locals?: Object): any;
  $$phase: string;
}

type AngularJSCompileProvider = {
  // TODO: Better typing of the definition objects

  directive(name: string | Object, directiveFactory: AngularJSDirectiveFunction | Array<string | AngularJSDirectiveFunction>): AngularJSCompileProvider;

  component(name: string, options: Object):  AngularJSCompileProvider;

  aHrefSanitizationWhitelist(): RegExp;
  aHrefSanitizationWhitelist(regexp: RegExp): AngularJSCompileProvider;

  imgSrcSanitizationWhitelist(): RegExp;
  imgSrcSanitizationWhitelist(regexp: RegExp): AngularJSCompileProvider;

  debugInfoEnabled(): boolean;
  debugInfoEnabled(enabled: boolean): AngularJSCompileProvider;

  onChangesTtl(): number;
  onChangesTtl(limit: number): AngularJSCompileProvider;
}

type AngularJSLog = {
  log(...args: Array<mixed>): void;
  info(...args: Array<mixed>): void;
  warn(...args: Array<mixed>): void;
  error(...args: Array<mixed>): void;
  debug(...args: Array<mixed>): void;
}

declare class AngularJSJQueryLite {
  bind(eventType: string, handler: Function): AngularJSJQueryLite;
  css(properties: Object): AngularJSJQueryLite;
  css(propertyName: string): string;
  css(propertyName: string, propertyFunction: (index: number, value: string) => AngularJSStringNumber): AngularJSJQueryLite;
  css(propertyName: string, value: string): AngularJSJQueryLite;
  unbind(eventType: string): AngularJSJQueryLite;
  unbind(eventType: string, handler: Function): AngularJSJQueryLite;
  focus(): void;
}

declare class AngularJSModule {
  name: string;
  controller(name: string, dependencies: AngularJSControllerFunction | Array<AngularJSControllerFunction | string>): AngularJSModule;
  provider(name: string, dependencies: AngularJSControllerFunction | Array<AngularJSControllerFunction | string>): AngularJSModule;
  directive(name: string, directiveFactory: Array<AngularJSDirectiveFunction | string>): AngularJSModule;
  directive(name: string, directiveFactory: Function): AngularJSModule;
  directive(name: { name: Array<AngularJSDirectiveFunction | string> }): AngularJSModule;
  factory(name: string, providerFunction: AngularJSFactoryFunction | Array<AngularJSFactoryFunction | string>): AngularJSModule;
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
  isNumber(x: any): boolean;
  isString(x: any): boolean;
  fromJson(raw: string): any;
  toJson(in: any): string;
};

declare var angular: AngularJS;
