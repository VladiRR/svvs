/**
 * interface IUser
 *
 * @description
 *
 * provides an entity interface user
 */
export interface IUser {
  /**
   * user ID
   */
  id: number;

  /**
   *  User creation date
   */
  created: string;

  /**
   * User update date
   */
  updated: string;

  /**
   * User's e-mail
   */
  email: string;

  /**
   *  User's phone (optional)
   */
  phone?: string;

  /**
   * User's password
   */
  password: string;

  /**
   * User's name
   *
   * @description
   *
   * Used as default username
   */
  username: string;

  /**
   * User's nickname
   *
   * @description
   *
   * If present used as public username
   */
  nickname?: string;
}
