import { gsap } from 'gsap';
import { home, map, settings } from 'ionicons/icons';
import { useLayoutEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { SideMenuContext } from './hooks/SideMenuContext';

import { GetStartedScreen } from './screens/GetStartedScreen';
import { HomeScreen } from './screens/HomeScreen';
import { MapScreen } from './screens/MapScreen';
import { SettingsScreen } from './screens/SettingsScreen';

import { AboutUsScreen } from './screens/AboutUsScreen';
import { ContactMetroScreen } from './screens/ContactMetroScreen';
import { ContactUsScreen } from './screens/ContactUsScreen';

import { ClosestTransitStationsScreen } from './screens/ClosestTransitStationsScreen';
import { SeeAllStations } from './screens/SeeAllStations';
import { StartTripScreen } from './screens/StartTripScreen';
import { TripStationsScreen } from './screens/TripStationsScreen';

import { useTranslation } from 'react-i18next';
import { isRTL } from './assets/js/appDirection';
import { BottomNavigation } from './components/layout/BottomNavigation/BottomNavigation';
import { SideMenu } from './components/layout/SideMenu/SideMenu';
import NotFoundScreen from './screens/ErrorsScreen/NotFoundScreen/NotFoundScreen';
import { MetroSchedulesScreen } from './screens/MetroSchedulesScreen';
import { SafetyInstructionsScreen } from './screens/SafetyInstructionsScreen';
import {
  SearchForServices,
  ServicesByStation,
  StationServicesScreen,
} from './screens/StationServicesScreen';
import { SubscriptionScreen } from './screens/SubscriptionScreen';
import { TransitStationsScreen } from './screens/TransitStationsScreen';
import { ViolationsAndFinsScreen } from './screens/ViolationsAndFinsScreen';

export function App() {
  const pageRef = useRef(null);

  // To get the current location (e.g. /home or /start-trip)
  // we use this hook to execute the next useEffect to make transitions
  // between pages
  const location = useLocation();

  /* A useEffect hook that is executed when the location changes. It is used to make transitions between
pages. */
  useLayoutEffect(() => {
    let transition: gsap.core.Tween;
    if (pageRef.current) {
      transition = gsap.fromTo(
        pageRef.current,
        {
          x: 30 * (isRTL() ? -1 : 1),
          opacity: 0,
        },
        { x: 0, opacity: 1 }
      );
    }
    return () => {
      transition.kill();
    };
  }, [location.pathname]);

  /* A hook that is used to toggle the side menu. */
  const [sideMenuIsOpened, setSideMenuIsOpened] = useState(false);
  const toggleSideMenu = () => setSideMenuIsOpened(!sideMenuIsOpened);

  const { t } = useTranslation();
  /* Creating an array of objects that used in BottomNavigation component */
  const navigationItems = [
    {
      label: t`bottom-nav.map`,
      href: '/map',
      icon: map,
    },
    {
      label: t`bottom-nav.home`,
      href: '/home',
      icon: home,
    },
    {
      label: t`bottom-nav.settings`,
      href: '/settings',
      icon: settings,
    },
  ];

  const navigationLinks = navigationItems.map((item) => item.href);

  return (
    <div className="dark:bg-gray-900">
      <SideMenuContext.Provider value={toggleSideMenu}>
        <SideMenu
          sideMenuIsOpened={sideMenuIsOpened}
          setter={setSideMenuIsOpened}
        />
        <main ref={pageRef} className="w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<GetStartedScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/map" element={<MapScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="/contact-metro" element={<ContactMetroScreen />} />
            <Route path="/contact-us" element={<ContactUsScreen />} />
            <Route path="/about-us" element={<AboutUsScreen />} />
            <Route path="/start-trip">
              <Route index element={<StartTripScreen />} />
              <Route path="see-all-stations" element={<SeeAllStations />} />
            </Route>
            <Route path="/trip-stations" element={<TripStationsScreen />} />
            <Route
              path="/closest-transit-stations"
              element={<ClosestTransitStationsScreen />}
            />
            <Route path="/metro-schedules" element={<MetroSchedulesScreen />} />
            <Route
              path="/safety-instructions"
              element={<SafetyInstructionsScreen />}
            />
            <Route path="/station-services">
              <Route index element={<StationServicesScreen />} />
              <Route
                path="services-by-station"
                element={<ServicesByStation />}
              />
              <Route
                path="search-for-services"
                element={<SearchForServices />}
              />
            </Route>
            <Route path="/subscription" element={<SubscriptionScreen />} />
            <Route
              path="/transit-stations"
              element={<TransitStationsScreen />}
            />
            <Route
              path="/violations-and-fines"
              element={<ViolationsAndFinsScreen />}
            />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </main>
        {/* Checking if the current location is included in the navigationLinks array. If it is, it will
        render the BottomNavigation component. */}
        {navigationLinks.includes(location.pathname) && (
          <BottomNavigation items={navigationItems} />
        )}
      </SideMenuContext.Provider>
    </div>
  );
}

export default App;
