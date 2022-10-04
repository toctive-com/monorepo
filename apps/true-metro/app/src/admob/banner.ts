import {
  AdMob,
  AdMobError,
  BannerAdOptions,
  BannerAdPluginEvents,
  BannerAdPosition,
  BannerAdSize,
} from '@capacitor-community/admob';

export async function banner(): Promise<void> {
  AdMob.addListener(BannerAdPluginEvents.FailedToLoad, (error: AdMobError) => {
    console.log(
      '🚀 ~ file: banner.ts ~ line 12 ~ error',
      error.message,
      error.code
    );
    // Subscribe Banner Event Listener
  });

  const options: BannerAdOptions = {
    adId: 'ca-app-pub-9598731420833259/7280272066',
    adSize: BannerAdSize.BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
    margin: 0,
    // isTesting: false,
    // npa: true
  };
  await AdMob.showBanner(options);
  await AdMob.hideBanner();
}
