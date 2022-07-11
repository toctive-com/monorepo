import { Route, Routes } from 'react-router-dom';

import { SplashScreen } from './screens/SplashScreen';
import { HomeScreen } from './screens/HomeScreen';
import { MapScreen } from './screens/MapScreen';
import { SettingsScreen } from './screens/SettingsScreen';

import { AboutUsScreen } from './screens/AboutUsScreen';
import { ContactMetroScreen } from './screens/ContactMetroScreen';
import { ContactUsScreen } from './screens/ContactUsScreen';

import { StartTripScreen } from './screens/StartTripScreen';
import { TripStationsScreen } from './screens/TripStationsScreen';
import { ClosestTransitStationsScreen } from './screens/ClosestTransitStationsScreen';
import { SeeAllStations } from './screens/SeeAllStations';

import { MetroSchedulesScreen } from './screens/MetroSchedulesScreen';
import { SafetyInstructionsScreen } from './screens/SafetyInstructionsScreen';
import { StationServicesScreen } from './screens/StationServicesScreen';
import { SubscriptionScreen } from './screens/SubscriptionScreen';
import { TransitStationsScreen } from './screens/TransitStationsScreen';
import { ViolationsAndFinesScreen } from './screens/ViolationsAndFinesScreen';
import { Page } from './components/layout/Page/Page';

export function App() {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
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
        <Route path="/station-services" element={<StationServicesScreen />} />
        <Route path="/subscription" element={<SubscriptionScreen />} />
        <Route path="/transit-stations" element={<TransitStationsScreen />} />
        <Route
          path="/violations-and-fines"
          element={<ViolationsAndFinesScreen />}
        />
      </Routes>
    </Page>
  );
}

export default App;
