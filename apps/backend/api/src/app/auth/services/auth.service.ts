import { Injectable } from '@nestjs/common'
import { ISignAuthPayload, ISignAuthResponse } from '@svvs/shared/data-access/interfaces'


@Injectable()
export class AuthService {

  login(signInPayload: ISignAuthPayload):Promise<ISignAuthResponse> {

    return
  }
}
