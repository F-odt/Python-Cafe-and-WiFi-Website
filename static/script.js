function searchCafes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    fetch('/all')
        .then(response => response.json())
        .then(data => {
            const filteredCafes = data.cafes.filter(cafe =>
                cafe.name.toLowerCase().includes(searchTerm)
            );
            displayCafes(filteredCafes);
        });
}

function displayCafes(cafes) {
    const cafeList = document.getElementById('cafeList');
    cafeList.innerHTML = '';
    cafes.forEach(cafe => {
        const cafeCard = document.createElement('div');
        cafeCard.className = 'cafe-card';
        cafeCard.innerHTML = `
            <img src="${cafe.img_url}" alt="${cafe.name}">
            <div class="cafe-info">
                <h3>${cafe.name}</h3>
                <p>Location: ${cafe.location}</p>
                <p>WiFi: ${cafe.has_wifi ? 'Yes' : 'No'}</p>
                <p>Power Outlets: ${cafe.has_sockets ? 'Yes' : 'No'}</p>
                <p>Comfortable Seating: ${cafe.comfortable_seating ? 'Yes' : 'No'}</p>
                <p>Wheelchair Accessible: ${cafe.wheelchair_accessible ? 'Yes' : 'No'}</p>
                <p>Noise Level: ${cafe.noise_level}/10</p>
                <p>Average Cost: ${cafe.average_cost}</p>
                <a href="${cafe.map_url}" target="_blank">View on Google Maps</a>
                <button onclick="deleteCafe(${cafe.id})">Delete</button>
            </div>
        `;
        cafeList.appendChild(cafeCard);
    });
}

function deleteCafe(cafeId) {
    if (confirm('Are you sure you want to delete this cafe?')) {
        fetch(`/report-closed/${cafeId}?api-key=TopSecretAPIKey`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert(data.response.success);
            searchCafes();
        })
        .catch(error => console.error('Error:', error));
    }
}

document.getElementById('newCafeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('/add', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.response.success);
        this.reset();
        searchCafes();
    })
    .catch(error => console.error('Error:', error));
});

// Load all cafes on page load
window.onload = searchCafes;