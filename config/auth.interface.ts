/**
 * Just oauth, no username and password shit
 */
export interface ZbelardAuthConfig {
  providers: Set<'google' | 'github'>;
}
