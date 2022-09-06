import "./App.css";


function App() {
  
  let numeroDeClase = 40;
  
  
  return (
    <div className="App">
      <p style={
        {
            color: "salmon",
            paddimgtop: '18px',
        }
      }>
      Bienvenidos a la clase {numeroDeClase}!
      </p>
      <br/>
      <input placeholder="Ingrese algun contenido"/>
    </div>
  );
}

export default App;
