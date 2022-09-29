//Promises
// .then / .catch

async function FetchDataOnGitHub() {
  try {
    const response = await fetch('https://api.github.com/users/Ciro-TI-System');
    const body = await response.json();
    console.log(body);
    return body.name;
  } catch (error) {
    console.log(err);
  } finally {
    console.log('Promise fulfilled!')
  }
}

FetchDataOnGitHub();
FetchDataOnGitHub().then(name => {
  console.log(name)
});