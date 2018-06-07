import {
 Component,
 OnInit
}
from '@angular/core';
import {
 UtilService
}
from './sharedModules/services/Util.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'Contacts App';
 showAlert = false;
 alertType = '';
 alertText = '';
 constructor(private utilService: UtilService) {

 }

 ngOnInit() {
  console.log('aaa', this.utilService)
  this.utilService.alertState.subscribe((data) => {
   this.alertType = data.type || '';
   this.alertText = data.message || '';
   this.showAlert = (data.showAlert == false) ? false : true;
  });
 }
}
