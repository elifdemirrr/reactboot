 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div class="wrapper">
            <div class="logo">
              <img src="db2.png" alt="" />
            </div>
            <div class="text-center mt-4 name">
              DuyuBox
            </div>
            <form class="p-3 mt-3">
              <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Kullanıcı Adı" />
              </div>
              <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Şifre" />
              </div>
              <button class="btn mt-3">Giriş</button>
            </form>
            <div class="text-center fs-6">
              <a href="#">Şifremi unuttum</a> or <a href="#">Üye Ol</a>
            </div>
          </div>
        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
          <img className='' src="busineess.png" style={{height:"70vh"}}></img>
        </div>
      </div>

    </div>

  );
}

export default App;
