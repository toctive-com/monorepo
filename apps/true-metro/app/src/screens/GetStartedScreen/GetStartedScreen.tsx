import Page from '../../components/layout/Page/Page';
import Slider from '../../components/shared/Slider/Slider';

export const GetStartedScreen = () => {
  const firstTime = localStorage.getItem('firstTime') !== 'false';

  if (!firstTime) {
    window.location.href = '/home';
    return null;
  } else {
    localStorage.setItem('firstTime', 'false');
    return (
      <Page className='!p-0'>
        <div className="flex h-full flex-col items-center justify-center self-center gap-4">
          <Slider />
        </div>
      </Page>
    );
  }
};
