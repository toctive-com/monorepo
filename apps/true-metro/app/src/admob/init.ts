import { AdMob } from '@capacitor-community/admob';

export async function initialize(): Promise<void> {
  const { status } = await AdMob.trackingAuthorizationStatus();

  if (status === 'notDetermined') {
    /**
     * If you want to explain TrackingAuthorization before showing the iOS dialog,
     * you can show the modal here.
     * ex)
     * const modal = await this.modalCtrl.create({
     *   component: RequestTrackingPage,
     * });
     * await modal.present();
     * await modal.onDidDismiss();  // Wait for close modal
     **/
  }
 
  AdMob.initialize({
    requestTrackingAuthorization: true,
    testingDevices: ['ddd903a2-d3a2-451a-ad51-2414ff0fb094', '410df994-10b2-4c4a-bd23-ee3faa4ec014'],
    initializeForTesting: true,
  });
}

export default initialize;