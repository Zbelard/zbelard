import { NumberStringOrLiteral, StringOrLiteral } from '../type-utils/index.ts';

export interface ZbelardDatabaseConfig {
  persistable:
    | { driver: 'postgres'; url: string }
    | {
        url?: never;
        driver: 'postgres';
        host?: StringOrLiteral<'127.0.0.1'>;
        port?: NumberStringOrLiteral<'5432'>;
        database?: StringOrLiteral<'zbelard'>;
        username?: StringOrLiteral<'user'>;
        password?: StringOrLiteral<'pass'>;
        sslmode?: 'prefer' | 'require';
      };

  /**
   * Let's not call this cache, because you might use Redis to share global state (like a gangster)
   */
  // TODO Add in-memory (Redis)
}
