document.getElementById('fizzbuzz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fizz_nb = document.getElementById('fizz_nb').value;
    const buzz_nb = document.getElementById('buzz_nb').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;

    const data = JSON.stringify({ fizz_nb, buzz_nb, start, end });
    console.log(data);

    fetch('https://fizzbuzz-api-qhsi.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = data.join(', ');
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
