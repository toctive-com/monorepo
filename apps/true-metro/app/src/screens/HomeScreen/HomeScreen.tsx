import { useTranslation } from 'react-i18next';
import Features from '../../components/layout/Features/Features';
import Page from '../../components/layout/Page/Page';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { AiOutlineSafetyCertificate, AiOutlineSchedule } from 'react-icons/ai';
import { BiTrip } from 'react-icons/bi';
import { FaIdCard } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import {
  MdMiscellaneousServices,
  MdNearMe,
  MdOutlineDirectionsTransitFilled,
} from 'react-icons/md';
import { Card } from '../../components/shared/Card/Card';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const HomeScreen = () => {
  const { t } = useTranslation();

  /* A hook that is used to animate the cards. */
  const featuresRef = useRef<any>(null);
  useEffect(() => {
    const animation = gsap.from(featuresRef.current?.children, {
      opacity: 0,
      stagger: 0.08,
      y: 20,
    });

    return () => {
      animation.kill();
    };
  }, []);

  const cards = [
    {
      label: t`home-screen.start-trip`,
      icon: <BiTrip size="96" />,
      href: '/start-trip',
    },
    // {
    //   label: t`home-screen.station-services`,
    //   icon: <MdMiscellaneousServices size="96" />,
    //   href: '/station-services',
    // },
    {
      label: t`home-screen.transit-stations`,
      icon: <MdOutlineDirectionsTransitFilled size="96" />,
      href: '/transit-stations',
    },
    {
      label: t`home-screen.safety-instructions`,
      icon: <AiOutlineSafetyCertificate size="96" />,
      href: '/safety-instructions',
    },
    {
      label: t`home-screen.metro-schedules`,
      icon: <AiOutlineSchedule size="96" />,
      href: '/metro-schedules',
    },
    {
      label: t`home-screen.violations-and-fines`,
      icon: <GiTakeMyMoney size="96" />,
      href: '/violations-and-fines',
    },
    {
      label: t`home-screen.closest-transit`,
      icon: <MdNearMe size="96" />,
      href: '/closest-transit-stations',
    },
    {
      label: t`home-screen.subscription-information`,
      icon: <FaIdCard size="96" />,
      href: '/subscription',
    },
  ];

  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader text={t`home-screen.title`} isBack={false} />

        <Features forwardRef={featuresRef}>
          {cards.map((item, index) => (
            <Card
              text={item.label}
              to={item.href}
              key={index}
              image={item.icon}
            />
          ))}
        </Features>
      </div>
    </Page>
  );
};
