/* ============================================================
   Charts.js — Chart.js visualizations for Bylines Research Page
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Shared config
  const COLORS = {
    hindu:   { bg: 'rgba(22,138,173,0.15)', border: '#168aad', point: '#168aad' },
    toi:     { bg: 'rgba(118,200,147,0.15)', border: '#76c893', point: '#76c893' },
    nie:     { bg: 'rgba(228,150,80,0.15)',  border: '#e49650', point: '#e49650' }
  };

  const BEAT_LABELS = ['Pol','Crm','Op','Bus','Sci-Tech','Civ','Arts','Cul','Sp','Env','Lyf','Ent','Edu','Int','Hel'];
  const BEAT_LABELS_2018 = ['Pol','Crm','Op','Bus','Sci-Tech','Civ','Arts','Cul','Sp','Lyf','Ent','Edu','Int','Hel'];

  const chartDefaults = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { family: "'Space Mono', monospace", size: 11, weight: '700' },
          color: '#184e77',
          padding: 20,
          usePointStyle: true,
          pointStyleWidth: 12
        }
      },
      tooltip: {
        backgroundColor: '#184e77',
        titleFont: { family: "'Sora', sans-serif", size: 13, weight: '700' },
        bodyFont: { family: "'Inter', sans-serif", size: 12 },
        padding: 14,
        cornerRadius: 10,
        displayColors: true
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { family: "'Space Mono', monospace", size: 10, weight: '700' },
          color: '#3a6a70',
          maxRotation: 45
        }
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(194,221,176,0.3)' },
        ticks: {
          font: { family: "'Space Mono', monospace", size: 10 },
          color: '#3a6a70'
        }
      }
    }
  };

  function makeBarDataset(label, data, colorKey) {
    return {
      label,
      data,
      backgroundColor: COLORS[colorKey].bg,
      borderColor: COLORS[colorKey].border,
      borderWidth: 2,
      borderRadius: 6,
      hoverBackgroundColor: COLORS[colorKey].border,
      hoverBorderWidth: 2
    };
  }

  // ====== OVERVIEW LINE CHART ======
  const overviewCtx = document.getElementById('chartOverview');
  if (overviewCtx) {
    new Chart(overviewCtx, {
      type: 'line',
      data: {
        labels: ['2015', '2016', '2017', '2018', '2019'],
        datasets: [
          {
            label: 'The Hindu',
            data: [997, 650, 682, 801, 725],
            borderColor: COLORS.hindu.border,
            backgroundColor: COLORS.hindu.bg,
            pointBackgroundColor: COLORS.hindu.point,
            pointRadius: 6,
            pointHoverRadius: 9,
            borderWidth: 3,
            fill: true,
            tension: 0.35
          },
          {
            label: 'Times of India',
            data: [512, 812, 454, 435, 763],
            borderColor: COLORS.toi.border,
            backgroundColor: COLORS.toi.bg,
            pointBackgroundColor: COLORS.toi.point,
            pointRadius: 6,
            pointHoverRadius: 9,
            borderWidth: 3,
            fill: true,
            tension: 0.35
          },
          {
            label: 'New Indian Express',
            data: [313, 509, 258, 456, 569],
            borderColor: COLORS.nie.border,
            backgroundColor: COLORS.nie.bg,
            pointBackgroundColor: COLORS.nie.point,
            pointRadius: 6,
            pointHoverRadius: 9,
            borderWidth: 3,
            fill: true,
            tension: 0.35
          }
        ]
      },
      options: {
        ...chartDefaults,
        plugins: {
          ...chartDefaults.plugins,
          title: { display: false }
        }
      }
    });
  }

  // ====== 2015 BAR CHART ======
  const ctx2015 = document.getElementById('chart2015');
  if (ctx2015) {
    new Chart(ctx2015, {
      type: 'bar',
      data: {
        labels: BEAT_LABELS,
        datasets: [
          makeBarDataset('The Hindu', [154,34,37,75,17,126,136,30,14,7,134,42,40,113,38], 'hindu'),
          makeBarDataset('Times of India', [44,18,16,48,13,57,20,5,24,6,80,128,18,15,25], 'toi'),
          makeBarDataset('New Indian Express', [39,18,16,48,13,57,20,5,24,2,82,43,34,3,7], 'nie')
        ]
      },
      options: chartDefaults
    });
  }

  // ====== 2016 BAR CHART ======
  const ctx2016 = document.getElementById('chart2016');
  if (ctx2016) {
    new Chart(ctx2016, {
      type: 'bar',
      data: {
        labels: BEAT_LABELS,
        datasets: [
          makeBarDataset('The Hindu', [110,34,22,45,20,87,52,21,22,7,63,73,28,46,20], 'hindu'),
          makeBarDataset('Times of India', [110,21,33,122,22,59,14,6,68,5,112,153,33,26,30], 'toi'),
          makeBarDataset('New Indian Express', [21,7,33,6,17,63,60,20,12,2,144,101,12,1,10], 'nie')
        ]
      },
      options: chartDefaults
    });
  }

  // ====== 2017 BAR CHART ======
  const ctx2017 = document.getElementById('chart2017');
  if (ctx2017) {
    new Chart(ctx2017, {
      type: 'bar',
      data: {
        labels: BEAT_LABELS,
        datasets: [
          makeBarDataset('The Hindu', [79,10,45,53,21,65,23,42,27,6,160,43,35,50,23], 'hindu'),
          makeBarDataset('Times of India', [41,11,15,93,10,51,9,10,15,2,37,116,20,16,8], 'toi'),
          makeBarDataset('New Indian Express', [20,15,7,9,5,25,27,6,9,3,64,45,8,2,13], 'nie')
        ]
      },
      options: chartDefaults
    });
  }

  // ====== 2018 BAR CHART ======
  const ctx2018 = document.getElementById('chart2018');
  if (ctx2018) {
    new Chart(ctx2018, {
      type: 'bar',
      data: {
        labels: BEAT_LABELS_2018,
        datasets: [
          makeBarDataset('The Hindu', [96,21,35,47,65,74,74,24,58,169,36,39,54,9], 'hindu'),
          makeBarDataset('Times of India', [71,13,11,48,21,42,20,26,40,97,12,13,19,2], 'toi'),
          makeBarDataset('New Indian Express', [34,40,20,50,44,26,28,9,32,86,25,24,13,25], 'nie')
        ]
      },
      options: chartDefaults
    });
  }

  // ====== 2019 BAR CHART ======
  const ctx2019 = document.getElementById('chart2019');
  if (ctx2019) {
    new Chart(ctx2019, {
      type: 'bar',
      data: {
        labels: BEAT_LABELS,
        datasets: [
          makeBarDataset('The Hindu', [33,9,50,49,49,31,58,24,40,46,130,85,35,28,58], 'hindu'),
          makeBarDataset('Times of India', [20,8,36,35,27,49,75,59,36,40,125,95,65,45,48], 'toi'),
          makeBarDataset('New Indian Express', [23,5,31,26,46,30,43,47,29,32,79,76,45,26,31], 'nie')
        ]
      },
      options: chartDefaults
    });
  }

  // ====== YEAR NAV HIGHLIGHT ON SCROLL ======
  const yearLinks = document.querySelectorAll('.year-nav a');
  const yearSections = document.querySelectorAll('.year-section');

  if (yearLinks.length && yearSections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          yearLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

    yearSections.forEach(sec => observer.observe(sec));
  }

  // ====== TABLE SORT ON COLUMN CLICK ======
  document.querySelectorAll('.data-table').forEach(table => {
    const headers = table.querySelectorAll('thead th');
    headers.forEach((th, colIdx) => {
      th.addEventListener('click', () => {
        const tbody = table.querySelector('tbody');
        if (!tbody) return;
        const rows = Array.from(tbody.querySelectorAll('tr'));
        const isAsc = th.dataset.sort !== 'asc';

        rows.sort((a, b) => {
          const cellA = a.children[colIdx]?.textContent.trim() || '';
          const cellB = b.children[colIdx]?.textContent.trim() || '';
          const numA = parseFloat(cellA);
          const numB = parseFloat(cellB);

          if (!isNaN(numA) && !isNaN(numB)) {
            return isAsc ? numA - numB : numB - numA;
          }
          return isAsc ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
        });

        // Reset all headers
        headers.forEach(h => delete h.dataset.sort);
        th.dataset.sort = isAsc ? 'asc' : 'desc';

        rows.forEach(row => tbody.appendChild(row));
      });
    });
  });
});
