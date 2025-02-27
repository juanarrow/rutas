import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {

  subscription:Subscription|undefined;
  constructor(
    private navCtrl:NavController,
    private authService:AuthService
  ) { 
    this.subscription = this.authService.authenticated$.subscribe((value)=>{
      if(!value)
        this.navCtrl.navigateRoot('/home');
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit() {
  }

}
