/**
 * Abstract Auth storage
 */
export abstract class IAuthStorage {

  /**
   * Clear auth storage
   */
  abstract clear(): void

  /**
   * Get access token from  auth storage
   */
  abstract getAccessToken(): string | null

  /**
   * Set access token from  auth storage
   *
   * @param accessToken
   */
  abstract setAccessToken(accessToken: string): void

  /**
   * Remove access token from  auth storage
   */
  abstract removeAccessToken(): void
}

