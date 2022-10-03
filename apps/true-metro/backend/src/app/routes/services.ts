import Router from 'express';
import stationServicesJsonAr from '../data/services/ar.json';
import stationServicesJsonEn from '../data/services/en.json';

const router = Router();

router.get('/', (req, res) => {
  const { lang } = req.query;

  if (lang === 'en') {
    res.json(stationServicesJsonEn);
  } else if (lang === 'ar') {
    res.json(stationServicesJsonAr);
  } else {
    res.json({ ar: stationServicesJsonAr, en: stationServicesJsonEn });
  }
});

export default router;
