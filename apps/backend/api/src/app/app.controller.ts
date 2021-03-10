import {Controller, Get} from '@nestjs/common'


/**
 * Base controller backend-api app
 */
@Controller()
export class AppController {
  /**
   * Return welcome string
   */
  @Get()
  getData() {
    return {message: 'Welcome to backend/api!'}
  }
}
