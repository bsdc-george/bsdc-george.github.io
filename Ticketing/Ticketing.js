console.log("George Is Great! Lily Stinks!")

const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission behavior
  const formData = {};
  formData.name = document.getElementById('name').value;
  formData.age = document.getElementById('age').value;
  // do something with the formData object
});

const resultsContainer = document.getElementById('results');
resultsContainer.innerHTML = `
  <p>Name: ${formData.name}</p>
  <p>Age: ${formData.age}</p>
`;