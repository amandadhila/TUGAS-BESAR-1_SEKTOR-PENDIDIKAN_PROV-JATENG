// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------
// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [1, 104, 122, 56, 118, 91],
    },
  ],
  chart: {
    type: 'bar',
    height: 500,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Cilacap', 'Banyumas', 'Purbalingga', 'Banjarnegara', 'Kebumen', 'Purworejo', 'Wonosobo', 'Magelang', 'Boyolali', 'Klaten', 'Sukoharjo', 'Wonogiri', 'Karanganyar', 'Sragen', 'Grobogan', 'Blora', 'Rembang', 'Pati', 'Kudus ', 'Jepara', 'Demak', 'Semarang', 'Temanggung', 'Kendal', 'Batang', 'Pekalongan', 'Pemalang', 'Tegal', 'Brebes', 'Kota Magelang', 'Kota Surakarta', 'Kota Salatiga', 'Kota Semarang', 'Kota pekalongan', 'Kota tegal'],
  },
  yaxis: {
    title: {
      text: 'Kabupaten Dan Kota',
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// Data Daerah
const daerahLabels1 = ['Cilacap', 'Banyumas', 'Purbalingga', 'Banjarnegara', 'Kebumen', 'Purworejo', 'Wonosobo', 'Magelang', 'Boyolali', 'Klaten', 'Sukoharjo', 'Wonogiri', 'Karanganyar', 'Sragen', 'Grobogan', 'Blora', 'Rembang', 'Pati', 'Kudus ', 'Jepara', 'Demak', 'Semarang', 'Temanggung', 'Kendal', 'Batang', 'Pekalongan', 'Pemalang', 'Tegal', 'Brebes', 'Kota Magelang', 'Kota Surakarta', 'Kota Salatiga', 'Kota Semarang', 'Kota pekalongan', 'Kota tegal'];

// BAR CHART - Jumlah Guru1
const barChartGuru1Options = {
  series: [{
    name: 'Jumlah Guru',
    data: [1095, 1211, 579, 427, 691, 587, 529, 950, 905, 918, 930, 727, 673, 688, 902, 600, 519, 911, 626, 754, 959, 731, 401, 853, 421, 560, 787, 677, 1157, 387, 1874, 262, 378],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartGuru1 = new ApexCharts(document.querySelector('#bar-chart-guru1'), barChartGuru1Options);
barChartGuru1.render();

// BAR CHART - Jumlah Siswa1
const barChartSiswa1Options = {
  series: [{
    name: 'Jumlah Siswa',
    data: [19356, 21245, 11785, 8272, 13362, 9309, 9855, 15768, 15808, 17280, 15402, 11403, 11382, 11445, 18175, 9573, 8871, 14973, 10592, 13929, 16371, 14036, 7358, 14544, 6675, 9423, 13177, 11948, 20683, 5744, 19452, 4672, 30935, 3950, 6201],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSiswa1 = new ApexCharts(document.querySelector('#bar-chart-siswa1'), barChartSiswa1Options);
barChartSiswa1.render();

// BAR CHART - Jumlah Sekolah1
const barChartSekolah1Options = {
  series: [{
    name: 'Jumlah Sekolah',
    data: [42, 38, 16, 12, 23, 23, 17, 37, 30, 23, 28, 21, 18, 24, 34, 24, 15, 29, 17, 23, 32, 26, 17, 34, 16, 17, 22, 26, 33, 13, 33, 8, 70, 10, 10],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSekolah1 = new ApexCharts(document.querySelector('#bar-chart-sekolah1'), barChartSekolah1Options);
barChartSekolah1.render();



// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Jumlah Siswa',
      data: [19356, 21245, 11785, 8272, 13362, 9309, 9855, 15768, 15808, 17280, 15402, 11403, 11382, 11445, 18175, 9573, 8871, 14973, 10592, 13929, 16371, 14036, 7358, 14544, 6675, 9423, 13177, 11948, 20683, 5744, 19452, 4672, 30935, 3950, 6201],
    },
    {
      name: 'Jumlah Sekolah',
        data: [42, 38, 16, 12, 23, 23, 17, 37, 30, 23, 28, 21, 18, 24, 34, 24, 15, 29, 17, 23, 32, 26, 17, 34, 16, 17, 22, 26, 33, 13, 33, 8, 70, 10, 10],
    },
    {
      name: 'Jumlah Guru',
      data: [1095, 1211, 579, 427, 691, 587, 529, 950, 905, 918, 930, 727, 673, 688, 902, 600, 519, 911, 626, 754, 959, 731, 401, 853, 421, 560, 787, 677, 1157, 387, 1874, 262, 378],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#f5b74f','#367952','#246dec' ],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Cilacap', 'Banyumas', 'Purbalingga', 'Banjarnegara', 'Kebumen', 'Purworejo', 'Wonosobo', 'Magelang', 'Boyolali', 'Klaten', 'Sukoharjo', 'Wonogiri', 'Karanganyar', 'Sragen', 'Grobogan', 'Blora', 'Rembang', 'Pati', 'Kudus ', 'Jepara', 'Demak', 'Semarang', 'Temanggung', 'Kendal', 'Batang', 'Pekalongan', 'Pemalang', 'Tegal', 'Brebes', 'Kota Magelang', 'Kota Surakarta', 'Kota Salatiga', 'Kota Semarang', 'Kota pekalongan', 'Kota tegal'],
  markers: {
    size: 2,
  },
  yaxis: [
    {
      title: {
        text: 'Jumlah Siswa',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Jumlah Guru',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// Data Daerah
const daerahLabels = ['Cilacap', 'Banyumas', 'Purbalingga', 'Banjarnegara', 'Kebumen', 'Purworejo', 'Wonosobo', 'Magelang', 'Boyolali', 'Klaten', 'Sukoharjo', 'Wonogiri', 'Karanganyar', 'Sragen', 'Grobogan', 'Blora', 'Rembang', 'Pati', 'Kudus ', 'Jepara', 'Demak', 'Semarang', 'Temanggung', 'Kendal', 'Batang', 'Pekalongan', 'Pemalang', 'Tegal', 'Brebes', 'Kota Magelang', 'Kota Surakarta', 'Kota Salatiga', 'Kota Semarang', 'Kota pekalongan', 'Kota tegal'];

// PIE CHART - Jumlah Guru
const pieChartGuruOptions = {
  series: [1095, 1211, 579, 427, 691, 587, 529, 950, 905, 918, 930, 727, 673, 688, 902, 600, 519, 911, 626, 754, 959, 731, 401, 853, 421, 560, 787, 677, 1157, 387, 1874, 262, 378],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  title: {
    text: 'Jumlah Guru'
  }
};

const pieChartGuru = new ApexCharts(
  document.querySelector('#pie-chart-guru'),
  pieChartGuruOptions
);
pieChartGuru.render();

// PIE CHART - Jumlah Siswa
const pieChartSiswaOptions = {
  series: [19356, 21245, 11785, 8272, 13362, 9309, 9855, 15768, 15808, 17280, 15402, 11403, 11382, 11445, 18175, 9573, 8871, 14973, 10592, 13929, 16371, 14036, 7358, 14544, 6675, 9423, 13177, 11948, 20683, 5744, 19452, 4672, 30935, 3950, 6201],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  title: {
    text: 'Jumlah Siswa'
  }
};

const pieChartSiswa = new ApexCharts(
  document.querySelector('#pie-chart-Siswa'),
  pieChartSiswaOptions
);
pieChartSiswa.render();


// PIE CHART - Jumlah Sekolah
const pieChartSekolahOptions = {
  series: [42, 38, 16, 12, 23, 23, 17, 37, 30, 23, 28, 21, 18, 24, 34, 24, 15, 29, 17, 23, 32, 26, 17, 34, 16, 17, 22, 26, 33, 13, 33, 8, 70, 10, 10],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  title: {
    text: 'Jumlah Sekolah'
  }
};

const pieChartSekolah = new ApexCharts(
  document.querySelector('#pie-chart-sekolah'),
  pieChartSekolahOptions
);
pieChartSekolah.render();