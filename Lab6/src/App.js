import React from 'react'
import './App.css';
import HamburgerImg from './img/1.jpg';
import KotletImg from './img/2.jpg';
import LasagneImg from './img/3.png';
import StekImg from './img/4.jpg';
import PierogiImg from './img/5.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Naglowek></Naglowek>
      <Rodzic></Rodzic>
    </div>
  );
}

function Naglowek(){
  return (
    <div>
      <h1 className="appHeader">Karta dań</h1>
    </div>
  )
}



class Rodzic extends React.Component{
  render(){
    const Przepisy = [
      {
        id:1,
        nazwa:"Hamburger",
        czas: "15 min",
        cena: "12 zł",
        photo: HamburgerImg,
        stan: "Zamówione",
      },
      {
        id:2,
        nazwa:"Kotlet schabowy",
        czas: "10 min",
        cena: "18 zł",
        photo: KotletImg,
        stan: "Zamówione",
      },
      {
        id:3,
        nazwa:"Lasagne",
        czas: "40 min",
        cena: "16 zł",
        photo: LasagneImg,
        stan: "Zamówione",
      },
      {
        id:4,
        nazwa:"Stek",
        czas: "20 min",
        cena: "40 zł",
        photo: StekImg,
        stan: "Zamówione",
      },
      {
        id:5,
        nazwa:"Pierogi",
        czas: "10 min",
        cena: "14 zł",
        photo: PierogiImg,
        stan: "Zamówione",
      }
    ];
    return(
      <div className="dania">
        <div><WysDania przepisy={Przepisy}></WysDania></div>
        <div><ImgDania zdjecia={Przepisy}></ImgDania></div>
      </div>
    );
  }
}

class WysDania extends React.Component{
  render(){
    return(
      <div>
        {this.props.przepisy.map(function(przepis){
          return(
             <div className="przepisy" key={przepis.id}>
                <a>{przepis.nazwa}<br></br> Cena: {przepis.cena}<br></br><br></br>Czas:{przepis.czas}</a>
              </div>  
            )
          })
        }
      </div>
    )
  }
}


class ImgDania extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      zamowienieWar: false,
      zamowienieStan: '',
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  handleClick(key) {
    this.setState(state => ({
      zamowienieStan: this.props.zdjecia[0].stan,
      zamowienieWar: !this.state.zamowienieWar
    }));
    if(this.state.zamowienieWar) document.querySelectorAll(".zamowienie")[key-1].style.display = "none";
    else document.querySelectorAll(".zamowienie")[key-1].style.display = "block";
  }

  render(){
    return(
      <div>
        {this.props.zdjecia.map((przepis)=>{
          return(
            <div className="zamowienieInfo" key={przepis.id}>
              <img className="imga" src={przepis.photo} onClick={()=>this.handleClick(przepis.id)} alt="logo" />
              <span className={"zamowienie"} >{this.state.zamowienieStan} </span>
            </div>  
          )
        })}
      </div>
    )
  }
}
export default App;