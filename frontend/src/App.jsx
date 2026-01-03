import { backendApi } from "./Api/backend";

function App() {

  const fetchdata = async () => {

    const data = await backendApi();

    console.log(data);

  }

  return(<>

      <button onClick={fetchdata}>fetch</button>
  
  </>)
  
}

export default App;