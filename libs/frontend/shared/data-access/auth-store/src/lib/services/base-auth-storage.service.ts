import {IAuthStorage} from '../interfaces/auth-storage.interface'
import {Injectable} from '@angular/core'
import {ILocalStorage} from '@svvs/shared/utils/interfaces'


/**
 * Key auth-storage
 */
export const authStorageKey: { [key: string]: string } = {
  accessToken: 'auth'
}

/**
 * Base auth-storage implementation
 */
@Injectable()
export class BaseAuthStorageService implements IAuthStorage {
  constructor(
    private storage: ILocalStorage
  ) {
  }

  /**
   * Clear all value of auth storage
   */
  clear(): void {
    for (const prop of Object.values(authStorageKey)) {
      this.storage.removeItem(prop)
    }
  }

  /**
   * Get access token from auth-storage
   */
  getAccessToken(): string | null {
    return this.storage.getItem(authStorageKey.accessToken) || null
  }

  /**
   * Remove access token from auth-storage
   */
  removeAccessToken(): void {
    this.storage.removeItem(authStorageKey.accessToken)
  }

  /**
   * Set access token from auth-storage
   *
   * @param accessToken Access Token
   */
  setAccessToken(accessToken: string): void {
    this.storage.setItem(authStorageKey.accessToken, accessToken)
  }
}
