export interface StationNameI {
  ar: string;
  en: string;
}

export class Station {
  constructor(name: StationNameI, lines: Line[]) {
    this.name = name;
    this.lines = lines;
  }

  private _name: StationNameI = {
    ar: '',
    en: '',
  };
  public get name(): StationNameI {
    return this._name;
  }
  public set name(value: StationNameI) {
    this._name = value;
  }

  private _lines: Line[] = [];
  public get lines(): Line[] {
    return this._lines;
  }
  public set lines(value: Line[]) {
    this._lines = value;
  }

  private _nextStations: Station[] = [];
  public get nextStations(): Station[] {
    return this._nextStations;
  }
  public set nextStations(value: Station[]) {
    this._nextStations = value;
  }

  private _prevStations: Station[] = [];
  public get prevStations(): Station[] {
    return this._prevStations;
  }
  public set prevStations(value: Station[]) {
    this._prevStations = value;
  }

  public get isTransitStation() {
    return this.lines.length > 1;
  }

  public get allStations(): Station[] {
    return [...this.nextStations, ...this.prevStations];
  }
}
class Line {
  private _lineNumber;
  public get lineNumber() {
    return this._lineNumber;
  }
  public set lineNumber(value) {
    this._lineNumber = value;
  }

  constructor(lineNumber: number) {
    this._lineNumber = lineNumber;
  }
}
const lineOne = new Line(1);
const lineTwo = new Line(2);
const lineThree = new Line(3);

/* 
====================== Line One Stations ======================
 */
export const helwan = new Station({ ar: 'حلوان', en: 'Helwan' }, [lineOne]);
export const ain_helwan = new Station({ ar: 'عين حلوان', en: 'Ain Helwan' }, [
  lineOne,
]);
export const helwan_university = new Station(
  { ar: 'جامعة حلوان', en: 'Helwan University' },
  [lineOne]
);
export const wadi_hof = new Station({ ar: 'وادي حوف', en: 'Wadi Hof' }, [
  lineOne,
]);
export const hadayek_helwan = new Station(
  { ar: 'حدائق حلوان', en: 'Hadayek Helwan' },
  [lineOne]
);
export const el_maasara = new Station({ ar: 'المعصرة', en: 'El-Maasara' }, [
  lineOne,
]);
export const tora_el_asmant = new Station(
  { ar: 'طرة الأسمنت', en: 'Tora El-Asmant' },
  [lineOne]
);
export const kozzika = new Station({ ar: 'كوتسيكا', en: 'Kozzika' }, [lineOne]);
export const tora_el_balad = new Station(
  { ar: 'طرة البلد', en: 'Tora El-Balad' },
  [lineOne]
);
export const sakanat_el_maadi = new Station(
  { ar: '	ثكنات المعادي', en: 'Sakanat El-Maadi' },
  [lineOne]
);
export const maadi = new Station({ ar: 'المعادي', en: 'Maadi' }, [lineOne]);
export const hadayek_el_maadi = new Station(
  { ar: 'حدائق المعادي', en: 'Hadayek El-Maadi' },
  [lineOne]
);
export const dar_el_salam = new Station(
  { ar: 'دار السلام', en: 'Dar El-Salam' },
  [lineOne]
);
export const el_zahraa = new Station({ ar: 'الزهراء', en: 'El-Zahraa' }, [
  lineOne,
]);
export const mar_girgis = new Station({ ar: 'مار جرجس', en: 'Mar Girgis' }, [
  lineOne,
]);
export const el_malek_el_saleh = new Station(
  { ar: 'الملك الصالح', en: 'El-Malek El-Saleh' },
  [lineOne]
);
export const al_sayeda_zeinab = new Station(
  { ar: 'السيدة زينب', en: 'Al-Sayeda Zeinab' },
  [lineOne]
);
export const saad_zaghloul = new Station(
  { ar: 'سعد زغلول', en: 'Saad Zaghloul' },
  [lineOne]
);
export const sadat = new Station({ ar: 'السادات', en: 'Sadat' }, [
  lineTwo,
  lineOne,
]);
export const nasser = new Station({ ar: 'جمال عبدالناصر', en: 'Nasser' }, [
  lineOne,
  lineThree,
]);
export const orabi = new Station({ ar: 'عرابي', en: 'Orabi' }, [lineOne]);
export const al_shohadaa = new Station({ ar: 'الشهداء', en: 'Al-Shohadaa' }, [
  lineOne,
  lineTwo,
]);
export const ghamra = new Station({ ar: 'غمرة', en: 'Ghamra' }, [lineOne]);
export const el_demerdash = new Station(
  { ar: 'الدمرداش', en: 'El-Demerdash' },
  [lineOne]
);
export const manshiet_el_sadr = new Station(
  { ar: 'منشية الصدر', en: 'Manshiet El-Sadr' },
  [lineOne]
);
export const kobri_el_qobba = new Station(
  { ar: 'كوبري القبة', en: 'Kobri El-Qobba' },
  [lineOne]
);
export const hammamat_el_qobba = new Station(
  { ar: 'حمامات القبة', en: 'Hammamat El-Qobba' },
  [lineOne]
);
export const saray_el_qobba = new Station(
  { ar: 'ساراي القبة', en: 'Saray El-Qobba' },
  [lineOne]
);
export const hadayeq_el_zaitoun = new Station(
  { ar: 'حدائق الزيتون', en: 'Hadayeq El-Zaitoun' },
  [lineOne]
);
export const helmeyet_el_zaitoun = new Station(
  { ar: 'حلمية الزيتون', en: 'Helmeyet El-Zaitoun' },
  [lineOne]
);
export const el_matareyya = new Station({ ar: 'المطرية', en: 'El-Matareyya' }, [
  lineOne,
]);
export const ain_shams = new Station({ ar: 'عين شمس', en: 'Ain Shams' }, [
  lineOne,
]);
export const ezbet_el_nakhl = new Station(
  { ar: 'عزبة النخل', en: 'Ezbet El-Nakhl' },
  [lineOne]
);
export const el_marg = new Station({ ar: 'المرج', en: 'El-Marg' }, [lineOne]);
export const new_el_marg = new Station(
  { ar: 'المرج الجديدة', en: 'New El-Marg' },
  [lineOne]
);

/* 
====================== Line Two Stations ======================
 */
export const el_mounib = new Station({ ar: 'المنيب', en: 'El-Mounib' }, [
  lineTwo,
]);
export const sakiat_mekky = new Station(
  { ar: 'ساقية مكي', en: 'Sakiat Mekky' },
  [lineTwo]
);
export const omm_el_masryeen = new Station(
  { ar: 'أم المصريين', en: 'Omm El-Masryeen' },
  [lineTwo]
);
export const el_giza = new Station({ ar: 'الجيزة', en: 'El Giza' }, [lineTwo]);
export const faisal = new Station({ ar: 'فيصل', en: 'Faisal' }, [lineTwo]);
// cairo_university
export const el_bohoth = new Station({ ar: 'البحوث', en: 'El Bohoth' }, [
  lineTwo,
]);
export const dokki = new Station({ ar: 'الدقي', en: 'Dokki' }, [lineTwo]);
export const opera = new Station({ ar: 'الأوبرا', en: 'Opera' }, [lineTwo]);
// sadat
export const mohamed_naguib = new Station(
  { ar: 'محمد نجيب', en: 'Mohamed Naguib' },
  [lineTwo]
);
// attaba
// al_shohadaa
export const masarra = new Station({ ar: 'مسرة', en: 'Masarra' }, [lineTwo]);
export const road_el_farag = new Station(
  { ar: 'روض الفرج', en: 'Road El-Farag' },
  [lineTwo]
);
export const st_teresa = new Station({ ar: 'سانتا تريزا', en: 'St. Teresa' }, [
  lineTwo,
]);
export const khalafawy = new Station({ ar: 'الخلفاوي', en: 'Khalafawy' }, [
  lineTwo,
]);
export const mezallat = new Station({ ar: 'المظلات', en: 'Mezallat' }, [
  lineTwo,
]);
export const kolleyyet_el_zeraa = new Station(
  { ar: 'كلية الزراعة', en: 'Kolleyyet El-Zeraa' },
  [lineTwo]
);
export const shubra_el_kheima = new Station(
  { ar: 'شبرا الخيمة', en: 'Shubra El-Kheima' },
  [lineTwo]
);

/* 
====================== Line Three Stations ======================
 */
export const airport = new Station({ ar: 'المطار', en: 'Airport' }, [
  lineThree,
]);
export const ahmed_galal = new Station({ ar: 'أحمد جلال', en: 'Ahmed Galal' }, [
  lineThree,
]);
export const adly_mansour = new Station(
  { ar: 'عدلي منصور', en: 'Adly Mansour' },
  [lineThree]
);
export const el_haykestep = new Station(
  { ar: 'الهايكستب', en: 'El Haykestep' },
  [lineThree]
);
export const omar_ibn_el_khattab = new Station(
  { ar: 'عمر بن الخطاب', en: 'Omar Ibn El-Khattab' },
  [lineThree]
);
export const qobaa = new Station({ ar: 'قباء', en: 'Qobaa' }, [lineThree]);
export const hesham_barakat = new Station(
  { ar: 'هشام بركات', en: 'Hesham Barakat' },
  [lineThree]
);
export const el_nozha = new Station({ ar: 'النزهة', en: 'El-Nozha' }, [
  lineThree,
]);
export const nadi_el_shams = new Station(
  { ar: 'نادي الشمس', en: 'Nadi El-Shams' },
  [lineThree]
);
export const alf_maskan = new Station({ ar: 'ألف مسكن', en: 'Alf Maskan' }, [
  lineThree,
]);
export const heliopolis_square = new Station(
  { ar: 'ميدان هليوبوليس', en: 'Heliopolis Square' },
  [lineThree]
);
export const haroun = new Station({ ar: 'هارون', en: 'Haroun' }, [lineThree]);
export const al_ahram = new Station({ ar: 'الأهرام', en: 'Al-Ahram' }, [
  lineThree,
]);
export const koleyet_el_banat = new Station(
  { ar: 'كلية البنات', en: 'Koleyet El-Banat' },
  [lineThree]
);
export const stadium = new Station({ ar: 'الإستاد', en: 'Stadium' }, [
  lineThree,
]);
export const fair_zone = new Station({ ar: 'أرض المعارض', en: 'Fair Zone' }, [
  lineThree,
]);
export const abbassia = new Station({ ar: 'العباسية', en: 'Abbassia' }, [
  lineThree,
]);
export const abdou_pasha = new Station({ ar: 'عبده باشا', en: 'Abdou Pasha' }, [
  lineThree,
]);
export const el_geish = new Station({ ar: 'الجيش', en: 'El Geish' }, [
  lineThree,
]);
export const bab_el_shaaria = new Station(
  { ar: 'باب الشعرية', en: 'Bab El Shaaria' },
  [lineThree]
);
export const attaba = new Station({ ar: 'العتبة', en: 'Attaba' }, [
  lineTwo,
  lineThree,
]);

// Nasser Station is between Attaba and maspero

export const maspero = new Station({ ar: 'ماسبيرو', en: 'Maspero' }, [
  lineThree,
]);

export const zamalek = new Station({ ar: 'الزمالك', en: 'Zamalek' }, [
  lineThree,
]);
export const kit_kat = new Station({ ar: 'الكيت كات', en: 'Kit Kat' }, [
  lineThree,
]);
export const sudan_street = new Station({ ar: 'السودان', en: 'Sudan Street' }, [
  lineThree,
]);
export const imbaba = new Station({ ar: 'إمبابة', en: 'Imbaba' }, [lineThree]);
export const el_bohy = new Station({ ar: 'البوهي', en: 'El-Bohy' }, [
  lineThree,
]);
export const el_kawmeya_al_arabiya = new Station(
  { ar: 'القومية العربية', en: 'El-Kawmeya Al-Arabiya' },
  [lineThree]
);
export const ring_road = new Station(
  { ar: 'الطريق الدائري', en: 'Ring Road' },
  [lineThree]
);
export const rod_el_farag_axis = new Station(
  { ar: 'محور روض الفرج', en: 'Rod El-Farag Axis' },
  [lineThree]
);
export const el_tawfikeya = new Station(
  { ar: 'التوفيقية', en: 'El-Tawfikeya' },
  [lineThree]
);
export const wadi_el_nil = new Station(
  { ar: 'وادي النيل', en: 'Wadi El-Nil' },
  [lineThree]
);
export const gamaat_el_dowal_al_arabiya = new Station(
  { ar: 'جامعة الدول العربية', en: 'Gamaat El Dowal Al-Arabiya' },
  [lineThree]
);
export const bulaq_el_dakroor = new Station(
  { ar: 'بولاق الدكرور', en: 'Bulaq El-Dakroor' },
  [lineThree]
);
export const cairo_university = new Station(
  { ar: 'جامعة القاهرة', en: 'Cairo University' },
  [lineTwo, lineThree]
);

/**
 * Setting prevStations and nextStations for all stations
 *
 */
/* 
====================== Line One ======================
 */
helwan.prevStations = [ain_helwan];
helwan.nextStations = [];

ain_helwan.prevStations = [helwan_university];
ain_helwan.nextStations = [helwan];

helwan_university.prevStations = [wadi_hof];
helwan_university.nextStations = [ain_helwan];

wadi_hof.prevStations = [hadayek_helwan];
wadi_hof.nextStations = [helwan_university];

hadayek_helwan.prevStations = [el_maasara];
hadayek_helwan.nextStations = [wadi_hof];

el_maasara.prevStations = [tora_el_asmant];
el_maasara.nextStations = [hadayek_helwan];

tora_el_asmant.prevStations = [kozzika];
tora_el_asmant.nextStations = [el_maasara];

kozzika.prevStations = [tora_el_balad];
kozzika.nextStations = [tora_el_asmant];

tora_el_balad.prevStations = [sakanat_el_maadi];
tora_el_balad.nextStations = [kozzika];

sakanat_el_maadi.prevStations = [maadi];
sakanat_el_maadi.nextStations = [tora_el_balad];

maadi.prevStations = [hadayek_el_maadi];
maadi.nextStations = [sakanat_el_maadi];

hadayek_el_maadi.prevStations = [dar_el_salam];
hadayek_el_maadi.nextStations = [maadi];

dar_el_salam.prevStations = [el_zahraa];
dar_el_salam.nextStations = [hadayek_el_maadi];

el_zahraa.prevStations = [mar_girgis];
el_zahraa.nextStations = [dar_el_salam];

mar_girgis.prevStations = [el_malek_el_saleh];
mar_girgis.nextStations = [el_zahraa];

el_malek_el_saleh.prevStations = [al_sayeda_zeinab];
el_malek_el_saleh.nextStations = [mar_girgis];

al_sayeda_zeinab.prevStations = [saad_zaghloul];
al_sayeda_zeinab.nextStations = [el_malek_el_saleh];

saad_zaghloul.prevStations = [sadat];
saad_zaghloul.nextStations = [al_sayeda_zeinab];

sadat.prevStations = [nasser];
sadat.nextStations = [saad_zaghloul, mohamed_naguib, opera];

// nasser.prevStations = [orabi, attaba];
nasser.prevStations = [orabi];
// nasser.nextStations = [sadat, maspero];
nasser.nextStations = [sadat];

orabi.prevStations = [al_shohadaa];
orabi.nextStations = [nasser];

al_shohadaa.prevStations = [ghamra, masarra];
al_shohadaa.nextStations = [orabi, attaba];

ghamra.prevStations = [el_demerdash];
ghamra.nextStations = [al_shohadaa];

el_demerdash.prevStations = [manshiet_el_sadr];
el_demerdash.nextStations = [ghamra];

manshiet_el_sadr.prevStations = [kobri_el_qobba];
manshiet_el_sadr.nextStations = [el_demerdash];

kobri_el_qobba.prevStations = [hammamat_el_qobba];
kobri_el_qobba.nextStations = [manshiet_el_sadr];

hammamat_el_qobba.prevStations = [saray_el_qobba];
hammamat_el_qobba.nextStations = [kobri_el_qobba];

saray_el_qobba.prevStations = [hadayeq_el_zaitoun];
saray_el_qobba.nextStations = [hammamat_el_qobba];

hadayeq_el_zaitoun.prevStations = [helmeyet_el_zaitoun];
hadayeq_el_zaitoun.nextStations = [saray_el_qobba];

helmeyet_el_zaitoun.prevStations = [el_matareyya];
helmeyet_el_zaitoun.nextStations = [hadayeq_el_zaitoun];

el_matareyya.prevStations = [ain_shams];
el_matareyya.nextStations = [helmeyet_el_zaitoun];

ain_shams.prevStations = [ezbet_el_nakhl];
ain_shams.nextStations = [el_matareyya];

ezbet_el_nakhl.prevStations = [el_marg];
ezbet_el_nakhl.nextStations = [ain_shams];

el_marg.prevStations = [new_el_marg];
el_marg.nextStations = [ezbet_el_nakhl];

new_el_marg.prevStations = [];
new_el_marg.nextStations = [el_marg];

/* 
====================== Line Two ======================
 */
el_mounib.prevStations = [sakiat_mekky];
el_mounib.nextStations = []; // no next stations for el_mounib station because it is the last station in line two

sakiat_mekky.prevStations = [omm_el_masryeen];
sakiat_mekky.nextStations = [el_mounib];

omm_el_masryeen.prevStations = [el_giza];
omm_el_masryeen.nextStations = [sakiat_mekky];

el_giza.prevStations = [faisal];
el_giza.nextStations = [omm_el_masryeen];

faisal.prevStations = [cairo_university];
faisal.nextStations = [el_giza];

// cairo_university

el_bohoth.prevStations = [dokki];
el_bohoth.nextStations = [cairo_university];

dokki.prevStations = [opera];
dokki.nextStations = [el_bohoth];

opera.prevStations = [sadat];
opera.nextStations = [dokki];

// sadat

mohamed_naguib.prevStations = [attaba];
mohamed_naguib.nextStations = [sadat];

// attaba
// al_shohadaa

masarra.prevStations = [road_el_farag];
masarra.nextStations = [al_shohadaa];

road_el_farag.prevStations = [st_teresa];
road_el_farag.nextStations = [masarra];

st_teresa.prevStations = [khalafawy];
st_teresa.nextStations = [road_el_farag];

khalafawy.prevStations = [mezallat];
khalafawy.nextStations = [st_teresa];

mezallat.prevStations = [kolleyyet_el_zeraa];
mezallat.nextStations = [khalafawy];

kolleyyet_el_zeraa.prevStations = [shubra_el_kheima];
kolleyyet_el_zeraa.nextStations = [mezallat];

shubra_el_kheima.prevStations = []; // No prevStations for shubra_el_kheima station because it is the first station of the line
shubra_el_kheima.nextStations = [kolleyyet_el_zeraa];

/* 
====================== Line Three ======================
 */
// airport.prevStations = [];
// airport.nextStations = [ahmed_galal];
// ahmed_galal.prevStations = [airport];
// ahmed_galal.nextStations = [adly_mansour];
// adly_mansour.prevStations = [ahmed_galal];

adly_mansour.prevStations = [];
adly_mansour.nextStations = [el_haykestep];

el_haykestep.prevStations = [adly_mansour];
el_haykestep.nextStations = [omar_ibn_el_khattab];

omar_ibn_el_khattab.prevStations = [el_haykestep];
omar_ibn_el_khattab.nextStations = [qobaa];

qobaa.prevStations = [omar_ibn_el_khattab];
qobaa.nextStations = [hesham_barakat];

hesham_barakat.prevStations = [qobaa];
hesham_barakat.nextStations = [el_nozha];

el_nozha.prevStations = [hesham_barakat];
el_nozha.nextStations = [nadi_el_shams];

nadi_el_shams.prevStations = [el_nozha];
nadi_el_shams.nextStations = [alf_maskan];

alf_maskan.prevStations = [nadi_el_shams];
alf_maskan.nextStations = [heliopolis_square];

heliopolis_square.prevStations = [alf_maskan];
heliopolis_square.nextStations = [haroun];

haroun.prevStations = [heliopolis_square];
haroun.nextStations = [al_ahram];

al_ahram.prevStations = [haroun];
al_ahram.nextStations = [koleyet_el_banat];

koleyet_el_banat.prevStations = [al_ahram];
koleyet_el_banat.nextStations = [stadium];

stadium.prevStations = [koleyet_el_banat];
stadium.nextStations = [fair_zone];

fair_zone.prevStations = [stadium];
fair_zone.nextStations = [abbassia];

abbassia.prevStations = [fair_zone];
abbassia.nextStations = [abdou_pasha];

abdou_pasha.prevStations = [abbassia];
abdou_pasha.nextStations = [el_geish];

el_geish.prevStations = [abdou_pasha];
el_geish.nextStations = [bab_el_shaaria];

bab_el_shaaria.prevStations = [el_geish];
bab_el_shaaria.nextStations = [attaba];

attaba.prevStations = [bab_el_shaaria];
// attaba.nextStations = [nasser];
attaba.nextStations = [al_shohadaa, mohamed_naguib];

// Nasser Station is between Attaba Station and Maspero Station

// maspero.prevStations = [nasser];
// maspero.nextStations = [zamalek];

// zamalek.prevStations = [maspero];
// zamalek.nextStations = [kit_kat];

// kit_kat.prevStations = [zamalek];
// kit_kat.nextStations = [sudan_street, el_tawfikeya];

// sudan_street.prevStations = [kit_kat];
// sudan_street.nextStations = [imbaba];

// imbaba.prevStations = [sudan_street];
// imbaba.nextStations = [el_bohy];

// el_bohy.prevStations = [imbaba];
// el_bohy.nextStations = [el_kawmeya_al_arabiya];

// el_kawmeya_al_arabiya.prevStations = [el_bohy];
// el_kawmeya_al_arabiya.nextStations = [ring_road];

// ring_road.prevStations = [el_kawmeya_al_arabiya];
// ring_road.nextStations = [rod_el_farag_axis];

// No Next Stations. Rod ek farag axis is the last station in the line.
rod_el_farag_axis.prevStations = [ring_road];
// rod_el_farag_axis.nextStations = [];

// el_tawfikeya.prevStations = [kit_kat];
// el_tawfikeya.nextStations = [wadi_el_nil];

// wadi_el_nil.prevStations = [el_tawfikeya];
// wadi_el_nil.nextStations = [gamaat_el_dowal_al_arabiya];

// gamaat_el_dowal_al_arabiya.prevStations = [wadi_el_nil];
// gamaat_el_dowal_al_arabiya.nextStations = [bulaq_el_dakroor];

// bulaq_el_dakroor.prevStations = [gamaat_el_dowal_al_arabiya];
// bulaq_el_dakroor.nextStations = [cairo_university];

// cairo_university.prevStations = [bulaq_el_dakroor, el_bohoth];
cairo_university.prevStations = [el_bohoth];
cairo_university.nextStations = [faisal];

export const allStations = [
  helwan,
  ain_helwan,
  helwan_university,
  wadi_hof,
  hadayek_helwan,
  el_maasara,
  tora_el_asmant,
  kozzika,
  tora_el_balad,
  sakanat_el_maadi,
  maadi,
  hadayek_el_maadi,
  dar_el_salam,
  el_zahraa,
  mar_girgis,
  el_malek_el_saleh,
  al_sayeda_zeinab,
  saad_zaghloul,
  sadat,
  nasser,
  orabi,
  al_shohadaa,
  ghamra,
  el_demerdash,
  manshiet_el_sadr,
  kobri_el_qobba,
  hammamat_el_qobba,
  saray_el_qobba,
  hadayeq_el_zaitoun,
  helmeyet_el_zaitoun,
  el_matareyya,
  ain_shams,
  ezbet_el_nakhl,
  el_marg,
  new_el_marg,
  el_mounib,
  sakiat_mekky,
  omm_el_masryeen,
  el_giza,
  faisal,
  el_bohoth,
  dokki,
  opera,
  mohamed_naguib,
  masarra,
  road_el_farag,
  st_teresa,
  khalafawy,
  mezallat,
  kolleyyet_el_zeraa,
  shubra_el_kheima,
  // airport,
  // ahmed_galal,
  adly_mansour,
  el_haykestep,
  omar_ibn_el_khattab,
  qobaa,
  hesham_barakat,
  el_nozha,
  nadi_el_shams,
  alf_maskan,
  heliopolis_square,
  haroun,
  al_ahram,
  koleyet_el_banat,
  stadium,
  fair_zone,
  abbassia,
  abdou_pasha,
  el_geish,
  bab_el_shaaria,
  attaba,
  // maspero,
  // zamalek,
  // kit_kat,
  // sudan_street,
  // imbaba,
  // el_bohy,
  // el_kawmeya_al_arabiya,
  // ring_road,
  // rod_el_farag_axis,
  // el_tawfikeya,
  // wadi_el_nil,
  // gamaat_el_dowal_al_arabiya,
  // bulaq_el_dakroor,
  cairo_university,
];

export function makeTrip(
  startStation: Station,
  targetStation: Station,
  checkedStations: Station[] = []
): Station[][] {
  let allStations = startStation.allStations;
  allStations = allStations.filter(
    (station) => !checkedStations.includes(station)
  );

  const finalResults = [];

  if (allStations.includes(targetStation)) {
    finalResults.push([startStation, targetStation]);
    return finalResults;
  }

  for (const currentStation of allStations) {
    const newResults = makeTrip(currentStation, targetStation, [
      ...checkedStations,
      startStation,
    ]);

    if (newResults && newResults.length > 0) {
      for (const result of newResults) {
        finalResults.push([startStation, ...result]);
      }
    }
  }

  return finalResults;
}

// shortest path between stations
export function shortestPath(paths: Station[][]): Station[] {
  // return shortest path
  if (paths.length === 0) return [];

  return paths.reduce((prev, next) =>
    prev.length > next.length ? next : prev
  );
}
