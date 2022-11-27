export default function handler(req, res) {
  const jadwal = [
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/belgia.png',
        name: 'BEL',
        score: 0,
      },
      teamAway: {
        flag: '/flag/france.png',
        name: 'FRA',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/norway.png',
        name: 'NOR',
        score: 0,
      },
      teamAway: {
        flag: '/flag/greece.png',
        name: 'GRE',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/belgia.png',
        name: 'BEL',
        score: 0,
      },
      teamAway: {
        flag: '/flag/france.png',
        name: 'FRA',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/norway.png',
        name: 'NOR',
        score: 0,
      },
      teamAway: {
        flag: '/flag/greece.png',
        name: 'GRE',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/belgia.png',
        name: 'BEL',
        score: 0,
      },
      teamAway: {
        flag: '/flag/france.png',
        name: 'FRA',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/norway.png',
        name: 'NOR',
        score: 0,
      },
      teamAway: {
        flag: '/flag/greece.png',
        name: 'GRE',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/belgia.png',
        name: 'BEL',
        score: 0,
      },
      teamAway: {
        flag: '/flag/france.png',
        name: 'FRA',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/norway.png',
        name: 'NOR',
        score: 0,
      },
      teamAway: {
        flag: '/flag/greece.png',
        name: 'GRE',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/belgia.png',
        name: 'BEL',
        score: 0,
      },
      teamAway: {
        flag: '/flag/france.png',
        name: 'FRA',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/norway.png',
        name: 'NOR',
        score: 0,
      },
      teamAway: {
        flag: '/flag/greece.png',
        name: 'GRE',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/belgia.png',
        name: 'BEL',
        score: 0,
      },
      teamAway: {
        flag: '/flag/france.png',
        name: 'FRA',
        score: 0,
      },
    },
    {
      pertandingan: 'Liga Inggris Premier League',
      jadwal: 'Rabu, 31 Maret 2021',
      teamHome: {
        flag: '/flag/norway.png',
        name: 'NOR',
        score: 0,
      },
      teamAway: {
        flag: '/flag/greece.png',
        name: 'GRE',
        score: 0,
      },
    },
  ];

  const listjadwal = [
    { value: 'AFF 2022' },
    { value: 'AFF 2023' },
    { value: 'AFF 2024' },
  ];

  const headline = [
    {
      tag: 'liga italia',
      tanggal: 'Rabu, 30 Maret 2020',
      title:
        'Gara-Gara Santiago Bernabeu, EL Real Batal Datangkan Cristiano Ronaldo?',
      subtitle: 'Cristiano Ronaldo',
      src: '/headline/headline1.png',
      desc: 'SPANYOL - Presiden Real Madrid, Ramon Calderon, agak ragu mantan timnya belanja jorjoran pada bursa transfer musim panas 2021',
    },
    {
      tag: 'video',
      tanggal: 'Rabu, 30 Maret 2020',
      title: 'Phoenix Suns Pecundangi Hornets',
      subtitle: null,
      src: '/headline/headline2.png',
    },
    {
      tag: 'PHOTO',
      tanggal: 'Rabu, 30 Maret 2020',
      title: 'Ketenaran Pevoli Cantik Sabina Altynbekova Sempat Bikin Khawatir',
      subtitle: null,
      src: '/headline/Rectangle-287.png',
    },
    {
      tag: 'SPORTAINMENT',
      tanggal: 'Rabu, 30 Maret 2020',
      title:
        'Bambang Pamungkas, Legenda Sepanjang Masa Persija dan Timnas Indonesia',
      subtitle: null,
      src: '/headline/headline3.png',
    },
    {
      tag: 'VIDEO',
      tanggal: 'Rabu, 30 Maret 2020',
      title: 'Pangeran Biru Ingin Terus Ikuti Piala Menpora',
      subtitle: 'Persib Vs Persiraja',
      src: '/headline/headline4.png',
    },
    {
      tag: 'BALAP',
      tanggal: 'Rabu, 30 Maret 2020',
      title: 'Jelang Seri Kedua MotoGP 2021: Rossi dan Morbidelli Sibuk',
      subtitle: null,
      src: '/headline/headline5.png',
    },
  ];

  const subHeadLine = [
    {
      title: 'Anthony Ginting Ungkap Sisi Positif Indonesia Badminton',
      src: '/subheadline/images1.png',
    },
    {
      title:
        'Jonatan Christie Soroti Venue Practice Hall Jelang Indonesia Badminton Festival',
      src: '/subheadline/images2.png',
    },
    {
      title: 'Jelang Indonesia Masters 2021, The Daddies Akui',
      src: '/subheadline/images3.png',
    },
    {
      title: 'Jonatan Christie Bersyukur Cederanya Berangsur Pulih ',
      src: '/subheadline/images4.png',
    },
    {
      title: 'Anthony Ginting Ungkap Sisi Positif Indonesia Badminton',
      src: '/subheadline/images1.png',
    },
    {
      title:
        'Jonatan Christie Soroti Venue Practice Hall Jelang Indonesia Badminton Festival',
      src: '/subheadline/images2.png',
    },
    {
      title: 'Jelang Indonesia Masters 2021, The Daddies Akui',
      src: '/subheadline/images3.png',
    },
    {
      title: 'Jonatan Christie Bersyukur Cederanya Berangsur Pulih ',
      src: '/subheadline/images4.png',
    },
    {
      title: 'Anthony Ginting Ungkap Sisi Positif Indonesia Badminton',
      src: '/subheadline/images1.png',
    },
    {
      title:
        'Jonatan Christie Soroti Venue Practice Hall Jelang Indonesia Badminton Festival',
      src: '/subheadline/images2.png',
    },
    {
      title: 'Jelang Indonesia Masters 2021, The Daddies Akui',
      src: '/subheadline/images3.png',
    },
    {
      title: 'Jonatan Christie Bersyukur Cederanya Berangsur Pulih ',
      src: '/subheadline/images4.png',
    },
  ];

  const latestNews = {
    src: '/latestNews/images1.png',
    tag: 'Photo',
    date: '29 Maret 2021',
    tagline: 'Kualifikasi Piala Dunia 2022',
    title:
      'Rossi dan Morbidelli Beda Pandangan Soal Balapan di MotoGP Doha, 4 April',
    desc: 'Pembalap Tim Mercedes, Lewis Hamilton, tampil sebagai pemenang di ajang Formula One (F1) GP Bahrain 2021. Akan tetapi, kemenangan ini tak didapat Hamilton dengan mudah karena ia harus bersaing sengit dengan pembalap Red Bull, Max Verstappen.',
    bigTumbnail: {
      tag: 'MOTO GP',
      tanggal: 'Rabu, 30 Maret 2020',
      title: 'Disalip Jelang Finis, Joan Mir Hanya Bisa Tersenyum Getir',
      subtitle: 'GP Sepang 2021',
      src: '/latestNews/big-tumbnail.png',
    },
  };

  const mostPopuler = {
    sliders: [
      {
        src: '/mostPopuler/images1.png',
        date: '29 Maret 2021',
        title: 'Italia Menang 2-0, Mancini Kecam Taktik Bulgaria',
      },
      {
        src: '/mostPopuler/images2.png',
        date: '29 Maret 2021',
        title: 'Ini Torehan Tim Balap Indonesia di GP Qatar 2021',
      },
      {
        src: '/mostPopuler/images3.png',
        date: '31 Maret 2021',
        title: 'Jadwal MotoGP Doha 2021: Valentino Rossi Memble Lagi?',
      },
      {
        src: '/mostPopuler/images4.png',
        date: '29 Maret 2021',
        title:
          'Hasil Positif di Seri Perdana Bikin Bagnaia Optimis Tatap MotoGP Doha 2021',
      },
      {
        src: '/mostPopuler/images5.png',
        date: '28 Maret 2021',
        title: 'Hendra Setiawan Dkk Pulang ke Indonesia',
      },
      {
        src: '/mostPopuler/images6.png',
        date: '28 Maret 2021',
        title: 'Greysia Polii Sampaikan Kritik Keras untuk BWF',
      },
    ],
    tumbnai: [
      {
        src: '/mostPopuler/tumb-images-1.png',
        tag: 'F1',
        date: '27 Maret 2021',
        title:
          'Sean Gelael Rebut Hasil Positif di Seri Terakhir Asian Le Mans Series 2021',
        desc: 'Pelita Jaya Bakrie sukses menunjukkan performa mengesan saat menghadapi pemuncak klasemen IBL musim 2021 Divisi Merah, Louvre Dewa United Surabaya, pada laga penutup seri dua.',
      },
      {
        src: '/mostPopuler/tumb-images-2.png',
        tag: 'Tennis',
        date: '27 Maret 2021',
        title:
          'Kompak! Naomi Osaka dan Serena Williams Absen di WTA Stuttgart Open',
        desc: 'Pelita Jaya Bakrie sukses menunjukkan performa mengesan saat menghadapi pemuncak klasemen IBL musim 2021 Divisi Merah, Louvre Dewa United Surabaya, pada laga penutup seri dua.',
      },
    ],
  };

  const multiMedia = [
    {
      src: '/multiMedia/images1.png',
      media: 'videos',
      title: 'Hasil MotoGP Qatar 2021: Vinales Menangi Seri Perdana',
      date: '4 Menit Lalu',
    },
    {
      src: '/multiMedia/images2.png',
      media: 'videos',
      title: 'Daddies dan Minions Dibekali Jurus Ampuh Penakluk Yuta/Endo',
      date: '4 Menit Lalu',
    },
    {
      src: '/multiMedia/images1.png',
      media: 'images',
      title: 'IBL 2021: West Bandits Berhasil Balas Kekalahan atas NSH',
      date: '4 Menit Lalu',
    },
    {
      src: '/multiMedia/images1.png',
      media: 'videos',
      title: 'Hasil MotoGP Qatar 2021: Vinales Menangi Seri Perdana',
      date: '4 Menit Lalu',
    },
    {
      src: '/multiMedia/images2.png',
      media: 'images',
      title: 'Daddies dan Minions Dibekali Jurus Ampuh Penakluk Yuta/Endo',
      date: '4 Menit Lalu',
    },
    {
      src: '/multiMedia/images1.png',
      media: 'images',
      title: 'IBL 2021: West Bandits Berhasil Balas Kekalahan atas NSH',
      date: '4 Menit Lalu',
    },
    {
      src: '/multiMedia/images1.png',
      media: 'videos',
      title: 'Hasil MotoGP Qatar 2021: Vinales Menangi Seri Perdana',
      date: '4 Menit Lalu',
    },
    {
      src: '/multiMedia/images2.png',
      media: 'images',
      title: 'Daddies dan Minions Dibekali Jurus Ampuh Penakluk Yuta/Endo',
      date: '4 Menit Lalu',
    },
  ];

  const editorChoice = {
    src: '/editorChoices/images1.png',
    tag: 'Bola Basket',
    tanggal: 'Rabu, 30 Maret 2020',
    title: 'IBL 2021: West Bandits Balas Kekalahan atas NSH',
    list: [
      {
        src: '/editorChoices/arr-images1.png',
        tanggal: '29 Maret 2021',
        title:
          'Vinales Dedikasikan Kemenangan di Qatar untuk sang Istri yang Tengah Hamil',
      },
      {
        src: '/editorChoices/arr-images2.png',
        tanggal: '29 Maret 2021',
        title:
          'Salah Strategi, Bagnaia Nyesel Sempat Duel dengan Vinales di MotoGP Qatar 2021',
      },
      {
        src: '/editorChoices/arr-images3.png',
        tanggal: '29 Maret 2021',
        title:
          'Arema Vs PSIS Semarang : Butuh Keajaiban, Pasukan Singo Edan Tertekan',
      },
      {
        src: '/editorChoices/arr-images4.png',
        tanggal: '29 Maret 2021',
        title:
          'Cegah Insiden All England Terulang, KOI Desak Nama Atlet Olimpiade Diperbarui',
      },
    ],
  };

  const hotTopic = [
    {
      title: 'Sepak Bola',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Moto GP',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Bola Basket',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Badminton',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Tenis',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Formula 1',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ];

  const statistik = [
    {
      nameTable: 'GROUP A',
      tabel: [
        {
          flag: '/statistik/italy.png',
          name: 'Turkey',
          p: 6,
          gd: 7,
          Pts: 13,
        },
        {
          flag: '/statistik/switzerland.png',
          name: 'Italy',
          p: 6,
          gd: 2,
          Pts: 10,
        },
        {
          flag: '/statistik/turkey.png',
          name: 'Wales',
          p: 6,
          gd: -6,
          Pts: 5,
        },
        {
          flag: '/statistik/wales.png',
          name: 'Switzerland',
          p: 6,
          gd: -4,
          Pts: 5,
        },
      ],
    },
    {
      nameTable: 'GROUP B',
      tabel: [
        {
          flag: '/statistik/italy.png',
          name: 'Turkey',
          p: 6,
          gd: 7,
          Pts: 13,
        },
        {
          flag: '/statistik/switzerland.png',
          name: 'Italy',
          p: 6,
          gd: 2,
          Pts: 10,
        },
        {
          flag: '/statistik/turkey.png',
          name: 'Wales',
          p: 6,
          gd: -6,
          Pts: 5,
        },
        {
          flag: '/statistik/wales.png',
          name: 'Switzerland',
          p: 6,
          gd: -4,
          Pts: 5,
        },
      ],
    },
    {
      nameTable: 'GROUP C',
      tabel: [
        {
          flag: '/statistik/italy.png',
          name: 'Turkey',
          p: 6,
          gd: 7,
          Pts: 13,
        },
        {
          flag: '/statistik/switzerland.png',
          name: 'Italy',
          p: 6,
          gd: 2,
          Pts: 10,
        },
        {
          flag: '/statistik/turkey.png',
          name: 'Wales',
          p: 6,
          gd: -6,
          Pts: 5,
        },
        {
          flag: '/statistik/wales.png',
          name: 'Switzerland',
          p: 6,
          gd: -4,
          Pts: 5,
        },
      ],
    },
  ];

  res.status(200).json({
    jadwal,
    listjadwal,
    headline,
    subHeadLine,
    latestNews,
    mostPopuler,
    multiMedia,
    editorChoice,
    hotTopic,
    statistik,
  });
}
