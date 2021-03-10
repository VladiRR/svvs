import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

import {UserEntity} from '../entities/user.entity'


/**
 * UserService find or create user from userRepository
 */
@Injectable()
export class UserService {
  /**
   * Inject into UserService: userRepository
   *
   * @param userRepository
   */
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
  }

  /**
   * Find all users from userRepository
   */
  async find(): Promise<UserEntity[]> {
    return await this.userRepository.find()
  }

  /**
   * Find user by id from userRepository
   *
   * @param id
   */
  async findOneById(id: number): Promise<UserEntity> {
    return await (this.userRepository.findOne(id)) || null
  }

  /**
   * Find user by username from userRepository
   *
   * @param username
   */
  async findOneByUserName(username: string): Promise<UserEntity> {
    const users = await this.userRepository.find({username})

    return users.length === 1 ? users[0] : null
  }

  /**
   * Create new user into userRepository
   *
   * @param user provides candidate of new user into userRepository
   */
  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    const newUser = await this.userRepository.create(user)

    return this.userRepository.save(newUser)
  }

}
