import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
      public navCtrl: NavController,
      public platform: Platform,
      public actionsheetCtrl: ActionSheetController,
      public alertCtrl: AlertController
  ) { }

  openActionSheet() {
      let actionSheet = this.actionsheetCtrl.create({
          title: 'Albums',
          cssClass: 'action-sheets-basic-page',
          buttons: [
              {
                  text: 'Delete',
                  role: 'destructive',
                  icon: !this.platform.is('ios') ? 'trash' : null,
                  handler: () => {
                      console.log('Delete clicked');
                  }
              },
              {
                  text: 'Share',
                  icon: !this.platform.is('ios') ? 'share' : null,
                  handler: () => {
                      console.log('Share clicked');
                  }
              },
              {
                  text: 'Play',
                  icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                  handler: () => {
                      console.log('Play clicked');
                  }
              },
              {
                  text: 'Favorite',
                  icon: !this.platform.is('ios') ? 'heart-outline' : null,
                  handler: () => {
                      console.log('Favorite clicked');
                  }
              },
              {
                  text: 'Cancel',
                  role: 'cancel', // will always sort to be on the bottom
                  icon: !this.platform.is('ios') ? 'close' : null,
                  handler: () => {
                      console.log('Cancel clicked');
                  }
              }
          ]
      });
      actionSheet.present();
  }

  showBasicAlert() {
      const alert = this.alertCtrl.create({
          title: 'New Friend!',
          subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
          buttons: ['OK']
      });
      alert.present();
  }

  showPromptAlert() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


}
