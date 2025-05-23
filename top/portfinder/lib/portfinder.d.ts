/**
 * portfinder.js typescript definitions.
 *
 * (C) 2011, Charlie Robbins
 */

type PortfinderCallback = (err: Error, port: number) => void;

interface PortFinderOptions {
  /**
   * Host to find available port on.
   */
  host?: string;
  /**
   * search start port (equals to port when not provided)
   * This exists because getPort and getPortPromise mutates port state in
   * recursive calls and doesn't have a way to retrieve begininng port while
   * searching.
   */
  startPort?: number;
  /**
   * Minimum port (takes precedence over `basePort`).
   */
  port?: number;
  /**
   * Maximum port
   */
  stopPort?: number;
}

type SocketfinderCallback = (err: Error, socket: string) => void;

interface SocketFinderOptions {
  /**
   * Mode to use when creating folder for socket if it doesn't exist
   */
  mod?: number;
  /**
   * Path to the socket file to create
   * (defaults to `${exports.basePath}.sock` if not provided)
   */
  path?: string;
}

/**
 * The lowest port to begin any port search from.
 */
export let basePort: number;

/**
 * Set the lowest port to begin any port search from.
 */
export function setBasePort(port: number): void;

/**
 * The highest port to end any port search from.
 */
export let highestPort: number;

/**
 * Set the higheset port to end any port search from.
 */
export function setHighestPort(port: number): void;

/**
 * Default path to begin any socket search from.
 */
 export let basePath: string;

/**
 * Set the base path to begin any socket search from.
 */
export function setBasePath(path: string): void;

/**
 * Responds with a unbound port on the current machine.
 */
export function getPort(options: PortFinderOptions): Promise<number>;
export function getPort(callback: PortfinderCallback): void;
export function getPort(options: PortFinderOptions, callback: PortfinderCallback): void;

/**
 * Responds a promise of an unbound port on the current machine.
 */
export function getPortPromise(options?: PortFinderOptions): Promise<number>;

/**
 * Responds with an array of unbound ports on the current machine.
 */
export function getPorts(count: number, options: PortFinderOptions): Promise<Array<number>>;
export function getPorts(count: number, callback: (err: Error, ports: Array<number>) => void): void;
export function getPorts(count: number, options: PortFinderOptions, callback: (err: Error, ports: Array<number>) => void): void;

/**
 * Responds a promise that resolves to an array of unbound ports on the current machine.
 */
export function getPortsPromise(count: number, options?: PortFinderOptions): Promise<Array<number>>;

export function getSocket(options: SocketFinderOptions): Promise<string>;
export function getSocket(callback: SocketfinderCallback): void;
export function getSocket(options: SocketFinderOptions, callback: SocketfinderCallback): void;

export function getSocketPromise(options?: SocketFinderOptions): Promise<string>;
