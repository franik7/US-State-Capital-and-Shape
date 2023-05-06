document.querySelector('#clickMe').addEventListener('click', apiRequest);

async function apiRequest() {
  const state = document.querySelector('#state').value;
  const imageElement = document.querySelector('#URL');

  try {
    const response = await fetch(`/api?state=${state}`);
    const data = await response.json();

    console.log(data);
    document.querySelector('#capital').textContent = "Capital is " + data.capital;

    
    imageElement.src = data.URL;

    if (imageElement.classList.contains('hidden')) {
      imageElement.classList.remove('hidden');
    } else {
      imageElement.classList.remove('hidden');
    }

    

  } catch (error) {
    console.log(error);
  }
}
