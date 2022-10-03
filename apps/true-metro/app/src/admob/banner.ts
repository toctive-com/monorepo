import {
  AdMob,
  BannerAdOptions,
  BannerAdPosition,
  BannerAdSize,
} from '@capacitor-community/admob';

export async function banner(): Promise<void> {
  const options: BannerAdOptions = {
    adId: 'ca-app-pub-9598731420833259/7280272066',
    adSize: BannerAdSize.BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
    margin: 0,
    isTesting: true,
    // npa: true
  };
  AdMob.showBanner(options);
}
