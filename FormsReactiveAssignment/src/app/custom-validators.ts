import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class CustomValidators {
  static validateProjectName(control: FormControl): {[s: string]: boolean} {
    if ( control.value === "Test" ) {
      return {'forbiddenProjectName': true};
    }
    return null;
  }

  static validateProjectMail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'forbiddenEmail': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
