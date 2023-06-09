const App = () => {

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((res) => res.json()).then((data) => {
      console.log(data)
      if(data.insertedId){
        alert('user added succesfully')
        form.reset()
      }
    })
  }

  return (
    <>
      <h2>Simgple CRUD</h2>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" /> <br />
        <input type="email" name="email" placeholder="Your email" /> <br />
        <input type="submit" value="Add user" />
      </form>
    </>
  );
};

export default App;