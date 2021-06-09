import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'online-ofline-detector';
  isShowNoInternet: boolean;
  showErrorMsg:string;

  constructor(){
    this.isShowNoInternet = false;
    this.showErrorMsg = '';
  }

  ngOnInit(): void {
    if (!navigator.onLine) {
      this.showOfflineMsg();
    }

    fromEvent(window, 'offline').subscribe(() => {
      this.showOfflineMsg();
    });
  }

  onImgError() {
    this.showErrorMsg = 'No internet connection. Please check your internet connection !!.';
  }


  private showOfflineMsg() {
    this.isShowNoInternet = true;
  }
}
