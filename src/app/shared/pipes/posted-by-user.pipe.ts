import { Pipe, PipeTransform } from '@angular/core';
import { LandingService } from 'src/app/landing/services/landing.service';
import { User } from '../models/user';

@Pipe({
  name: 'postedByUser'
})
export class PostedByUserPipe implements PipeTransform {

  constructor(
    private landingS: LandingService
  ) {}

  transform(postUserInfo: User) {
    let base = 'Posted by '
    const userInfo = this.landingS.getUserDetails()
    if(!userInfo) {
      return null;
    } else {
      return postUserInfo.id == userInfo.id ? `${base} you` : `${base} ${postUserInfo.name}`
    }
  }

}
