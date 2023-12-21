import logo from './logo.svg';
import './App.css';
function Todos1 (props) {
  return (
    <>
    <div>
      <div>
        <h5 class="card bg-dark text-center">Catatan 1</h5>
        <p>Setor uang di ATM</p>
      </div>
      <div>
        {props.tanggal}
      </div>
    </div>
    </>
  )
}

function Todos2 (props) {
  return (
    <>
    <div>
      <div>
        <h5 class="card bg-dark text-center">Catatan 2</h5>
        <p>Tarik uang 200 ribu di ATM</p>
      </div>
      <div>
        {props.tanggal}
      </div>
    </div>
    </>
  )
}

function Todos3 (props) {
  return (
    <>
    <div>
      <div>
        <h5 class="card bg-dark text-center">Catatan 3</h5>
        <p>Setor Tunai Uang 100 ribu di ATM</p>
      </div>
      <div>
        {props.tanggal}
      </div>
    </div>
    </>
  )
}
function App() {

  return (
    <div>
 
      <div class = "text-right">
        <Todos1 tanggal = "13-11-2023"/>
        <Todos2 tanggal = "15-11-2023"/>
        <Todos3 tanggal = "23-11-2023"/>
      </div>
    </div>
  );
}

export default App;
