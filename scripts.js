// Pollution Levels (Pie Chart)
const pollutionChart = new Chart(document.getElementById('pollution-chart'), {
    type: 'pie',
    data: {
        labels: ['AQI', 'Noise', 'CO2 Emissions'],
        datasets: [{
            data: [150, 70, 300],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: '#fff' }
            }
        }
    }
});

// Energy Consumption (Bar Chart)
const energyChart = new Chart(document.getElementById('energy-chart'), {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Electricity (kWh)',
                data: [1200, 1500, 1300, 1400, 1600],
                backgroundColor: '#36a2eb',
                borderWidth: 1
            },
            {
                label: 'Water (Liters)',
                data: [5000, 4800, 5200, 5100, 4900],
                backgroundColor: '#ffcd56',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true, ticks: { color: '#fff' } },
            x: { ticks: { color: '#fff' } }
        },
        plugins: {
            legend: {
                labels: { color: '#fff' }
            }
        }
    }
});

// Public Safety (Line Chart)
const safetyChart = new Chart(document.getElementById('safety-chart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Crime Incidents',
                data: [30, 25, 40, 35, 20],
                borderColor: '#ff6384',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Response Time (min)',
                data: [5, 4, 6, 5, 3],
                borderColor: '#36a2eb',
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true, ticks: { color: '#fff' } },
            x: { ticks: { color: '#fff' } }
        },
        plugins: {
            legend: {
                labels: { color: '#fff' }
            }
        }
    }
});

// Basic filter interactivity (placeholder for future data updates)
document.getElementById('location-filter').addEventListener('change', (e) => {
    console.log('Location filter changed to:', e.target.value);
    // Add logic to update charts based on location
});

document.getElementById('time-filter').addEventListener('change', (e) => {
    console.log('Time filter changed to:', e.target.value);
    // Add logic to update charts based on time range
});