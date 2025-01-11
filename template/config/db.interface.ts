export interface ZbelardDatabaseConfig {
  persistable:
    | { driver: 'postgres'; url: string }

  /**
   * Let's not call this cache, because you might use Redis to share global state (like a gangster)
   */
  // TODO Add in-memory (Redis)
}
