export interface ZbelardAppConfig {
  /**
   * The name of your application.
   */
  name: string;
  env: 'test' | 'dev' | 'staging' | 'prod';
  /**
   * Make `true` for more verbose logging.
   */
  debug: boolean;
}