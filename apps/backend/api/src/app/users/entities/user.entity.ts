import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import type { IUser } from '@svvs/shared/utils/interfaces';

/**
 * Entity users provide access to db table users
 */
@Entity({
  name: 'users',
})
export class UserEntity implements IUser {
  /**
   * User ID unique identifier (autogenerate)
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * User creation date (autogenerate)
   */
  @CreateDateColumn()
  created: string;

  /**
   * User update date (autogenerate)
   */
  @UpdateDateColumn()
  updated: string;

  /**
   * User e-mail
   *
   * if necessary - set the value {unique: true} in user.entity.ts
   *
   */
  @Column()
  email: string;

  /**
   * User phone (optional)
   */
  @Column({ nullable: true })
  phone: string;

  /**
   * User password
   */
  @Column()
  password: string;

  /**
   * Username {unique}
   *
   * @description
   *
   * Used as default username
   */
  @Column({ length: 50, unique: true })
  username: string;

  /**
   * User nickname (optional)
   *
   * @description
   *
   * If present used as public username
   */
  @Column({ length: 50, unique: true, nullable: true })
  nickname: string;
}
