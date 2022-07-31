import Page from '../../components/layout/Page/Page';
import Slider from '../../components/shared/Slider/Slider';

export const GetStartedScreen = () => {
  const firstTime = localStorage.getItem('firstTime') !== 'false';

  // TODO: render animated loading screen instead of get started screen if not first time
  if (!firstTime) {
    window.location.href = '/home';
    return null;
  } else {
    localStorage.setItem('firstTime', 'false');
    return (
      <Page>
        <div className="flex h-full flex-col items-center justify-center self-center">
          <Slider />
        </div>
      </Page>
    );
  }
};
