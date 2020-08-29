import React, { Component }	from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar                 from '../../components/Common/Navbar/Navbar'
import Carousel               from 'react-bootstrap/Carousel'

import Slider1                from '../../assets/img/banner/WarhammerBanner.png'
import Slider2                from '../../assets/img/banner/StarfinderBanner.png'

import UserService          from '../../services/user.service';
import OrganisatorService   from "../../services/organisator.service";

class Home extends Component {

  state = {
    img : {
      image: {
        "name": 6,
        "value": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCACAAIADASIAAhEBAxEB/8QAHQAAAQUBAQEBAAAAAAAAAAAABwIDBAYIBQEACf/EAD0QAAEDAwMBBQQGCQUBAQAAAAECAwQABREGEiExBxNBUWEiMnGxCBQjgZHRFTNCQ1JTcpKhFmKCk+HwNP/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAIFAQb/xAAkEQACAgICAgICAwAAAAAAAAAAAQIRAxIEITFBE1EioUJhgf/aAAwDAQACEQMRAD8AMTnec/bO++f3qvM+tRnFO5/XPf8Aar86nOJwT/WfmajuI60rY0NJU6VD7Z3/ALVfnUtguBHLzv8A2q/OmWk+NSGx1qEoWFO/znf+1X51IYU5kDvXif61fnUR1xtlouvONtNJGVLWrAH30MdWa6v8xu4R9MuNRmFIcagupT9u4oD3wTwM4OKnktQTdSaosGmGg5f7/GtuSEhD0j7Q559wHdj1xVNsfbNpq9awcs0CQpNvbaWtU96RjfjooI67SePFXpWTLvY33oj8l2S5cH3nEtvPqdLinHT1KlKPTJ/xU+0NuRokQtKfwwFha2VbNq0nhTZx0yOavoqBW7N1R3C9HbksvOOMuDchYWopIPrmnAXOftXf71fnWV4l5uGnYTNz09qeWyWu6ckJS73oUtStuXAs7cEg8eWM0YNLdqUW4uliSGnJCltttJa+zQrIG5ZKuc5Pu+Aqle0WqugjLWv+Y7/er86aC3Sf1jv96vzqnXvUd2ltwoltcjMSblMS1HSFFTgbSCtxfHhtH35q5tZKEqzuyBlW3bk+JwOnwqeTlUelSwn9a5/er86TvX/Nc/vV+derHFIT1NcZyhW5f8x3+9X50ptTh/eu/wB6vzpGOlPsp6VCUc19PKvir50xgVMcHtq+KvnUVwc1AgjFLRSU082M5qEKv2mBw2ZkJQ4pnvFBwJ8yk4OPHFZa1jqCcXYrMd51LLGcJT1WATnx/wDhWwtRxm5NjltujgNKVkZ3AgZBGOc0AuzfsKvmsZL828SU2u1tvKSVbd7ryhydo6Ac8nzqbKPbLKLl0gOWi5JZhBl1Sg424VhQUdjhJJ38dDz08xXYcvd+mxChi0rVte7xtLSSEgKVlW0eA3c4+NbG0p2H6G05GCUWxufIVyt6T7ZJx4DoK60mz2i1NKbh2yJFQkEqCWgAB9w60HJy9P4h8PEWR1sYInsX91t96bYZcQLzuShJDW0nJ49DyKndncN6XpTUsqc84k25sObishbacg7iOpFa7vltakxHnf1JSFELKEqA8gQaz3riyRWly3VPJYalR1/XW2WsBwAHAAB65qYeX8r1aovyeAsUdk7K5A1xPs2o7VdZZky1NNOCMUvFICcAKHpgYo/di3aovU14/RV17hpUvcIZCS24pY8MZIOfxrK02PJEZ2Mw5hQDKnVBIV3eeDn45Ga72n58qLdLY6Eu54cVJTlLja2VAheQM8fgrpTziqMxSaZutYwaaI9o01Zrgm82SFd0N90JjKXtnXaSOR+NSCOtACHqBUiOnKqbbbOQKnsIwPWrJUQ4agN5+J+dR3R86luj2z8T86jrSTVCyI4FPNivCnmloFQ6Kc3d2e75Xg7Qem7HGfvqzaThot1mjQke13TQBV4lR5UrnzJJqo3W5RLNa37vPUpMWIA46UpycZA4HxNdTRnaJpHUkZRsV1jTFoHtshWHEk+YPNAy3svoYwxuLryy5OqUGzgZUB0qn3srU73K05ClgqBVxnwpvtH18xpKxrnrYU+T7LbYUEArIPBJ6fOs9wte631Te5D9zubsGM2C4mBareuU6EE8ZIGEj4mhTg8q/H0M4JfC/wAl5Cb2n3D9GWh1ts+0r2iRjqeM1nTWrYNiluNQ1Orb3Kf2cHBHtL46kZq0631m1MjCCq9sSlsblFpbRaf2gZKiD1Hzqnv6ntjNuSmO+44t5xKPZaJASeOp9atgwzj2kX5PIxyWrl6KJAfRFjO3OI8pxMnvU7eqsBASnI86u2jLdDftxiOoTIc754NAukJU21ggkjjaT4UK73KisXd5dr//ADhfeBA3JCVA8jkcDmrrpe9PJhrcty2FR0F1lP1h3u0p7xI3KJI8jj4itOurMRduka27BrvGuWh1QGJP1hdseLS1lJCiFjfu9RkqwaIG0ZzQ87AIDUXTkx4R+5fcLIdTx4JJSOOpwaIxHNBCNUKaB7wVLbqO2P8AypLYqyKnEWM5+J+dMLGKf8T8T86acFCCIZPvU42jK0gq27iBuPQZOMmvCKVjIqHQQT+0WRcJ9ztkrT2qAuPcXI0ZMZofVGFNObW1uqA3uKyApWSAMjA8alJ0leH79pFdlnXBGprgRKvF6Bj/AFeA2nJWkNAZWsgYAOQc5NEpcF5uRMlQbhJhLlHvJCEIStDrgSE95g8hRSAD4HFOac01Gt7kq6rfluz1xVtodeeSEt7wAQlCQEjp160HJPWSpDXHxbwauvH7M/8Aba9dL9r0Mou13ukZlAZjpkqQrDu7B7sISlKVFPPTnHWrnpss6b0DdNNrN0gyLvxIlwdqpnIxtBGSOMjkeJpAatZduveRrb+j47u11cp1RU8o8lQIPGPA9avfZ5qDSkuxMuWtb7LWwpbzhPeEHBwvHtDj40qs0ml/Rq5OHCCdK4vqgVQeymyxVOXy6WV2NBaiJi25mY4ovnghTjwJ4Sc429T1wBVAn6YTGRKYaTGLKVk/ZNAYA525xnHlRo7S78w0soEh3BOEkqJTn0z1oUouqGVzAUpBU2pKNyScZ4KT5jy8jRcE5zl2+hfk44Y4ql+gc2vTSZc+7d682yWWi8QpPtc8demMdaZtdpMpc2IwHG3YbYJj7cblBOSfwq1LcbhWC7cJcXKLUdG3JKiVhRAPlgdK6NjtS1w3riiU4Jb7xVOUpKUrcQoEBpkfxZG0+O3Jp3LJ1SEeJCFucvBoTsES8jRbjalKU2h1tppRSc4S0nIOevJxRA25qudlluatfZ3YYrKNuYxfcwsrBW4orUQT1GTx6VaUAYqRVdCuWe83L7Z6hIA+6nm+TTSaeboiVAzhnhZ+J+dIXTzqeT8T8zTJoDCjVOAV8BSwmocZ8E88+NDnUV1mvaxl6Zn3OXbEPQnEx3Yy0gqcxlKuRgjHHxolIHtVQ+2OyMzo9vlHcl5bqWWHUq2Kbe3AjBH8Sc/eBQs2NNX9DfFzPG9V7M4T9Aapbd765rdai9+pK3ZMvYFcZCgFHp/mrtY9c2+y6WFiCWloQS2hLDoUhIA4USf/ALxon23SsbSwXb2Oz2DquVEjiQ1c505CHJS1KUO6WFgjclKve6EDzqnXvS2p9RIbi3dWn9PWtsgqj2SLudbRsKAgvqG0nHVQHBHFDc9upeDThgnbcb/1op9zuTep7VMcZccDkQpC0le/KVAhKgfDBGDXAv76RZrRcDw7IjBxxO3jcOM/4zRN15Z7Bons6dXa4aYpdb+r7RklSSdwJPirqcnrQJul3L1ugxVLyhlvakdfZznpROPHbteLEeXkcLi33QSezxEF+Hcpzq2+8h2515Ct2e7WoEFSR0BwaotyiTLZ2puWSNcFPbosVuOl0ngvpbVlPglQJAzXUt93egaSXGCu6VdChkNpSBltKslRwPgK0NoLs2sM3WTWvrjD+tSExIRgZV9m2+01sKlD9ojgjwFON1IzvMAox4TVtiR7ewna1FZQwhOc4CUgfMU4FbBilrP/ALTS+RmqFB0e9T7fhUVByamMcYJqyIcdYyT8T86g3CZCh3OHbX5KBLmfqUDPvYyEk9M4FTz75+J+ZoSdvd0egIiuwXm23/rLWwBWF7krGMfeKWyz1aS+x/jYI5dk/SCmE1JS3lFCfVPbvpWBd50K0Wq4XlUdewSELS1HcXk5CSfaKQf2sc+FU2f9IDVzqyLfZLFBR4BaVvqHxJIH+KZjikxJ5Io0Yluot5s0e/2SXY5XDctsthfi0sctuDyKVAEVmZ/tw7STlf6UtbQ8Am2N/wCM1yLj2pdpl0JLmr7gz4JRFShhHPogVb4JFflRpOxRb1qDRtnLy4yJiY5ZnqfQQ4l5tRQ4QB0yUnivr3aotuYL12ue6IyApZPspSBwAPM1nvR3aVrSA01peAhd9fuEr7Pe7h9x5xXI3E85V4muL263rtGS47b9U2e4WVhwhIaeWlSSUpGdpQSCOc5pF8WSk0/Bpx5y+Nd20QPpB9pJ1LLj2KytOGIw5vG1RIUrkZNDSI73cgB577dYPeI/hT649KZRGecBDK1sLJOdqcrx558KnWy1tx94SlSlK95Sz7R9T5U7BRxx1iZ0nPLLaR12JSpEthW3DbawEI9K1x2V3x1zUyYP15tu0xtLsPTw6sJaYlKklLPJ4SpSCc+Y21mTR+j7tftr8VH1eADhc55BLfHg2OrivQceZrRGmWdO6f7LtSwJyMwJFuk/XnJCgt2UtTKkhSz4npgDhOBiqXsy8qjGkGdxKgSCMEHBB6gimHM54oXfRi1//qnRMHT94lKXqK2QkZU6vK5ccDAVk8qUgYB8SMHzorrTk5q0ouLpgYtNWNtnKx6da6CEnCcVEQgA1MYPT2utReDpyQ2S7wFHkkgJycZ8hQd+kZZHTBVOEZ0ISO+KwglAx1yRwP8AFGyCpwBag2kKUThXoDQ67WtayNPMpissuJ7z3lFnvO9ycFODxg+tZeTMpTTXo2uLglFOLdWZQhdy43ltbatxKsJUDweB09BTzzewZ8DRwa1PpG+2pli86SsziMFOUREtrTjpgoAI/Ght2h2WFaJDb9qecetkrKmEvK3OskYy2o/teh8R15rWw8uOR61TMnNwp4o7WminvYI56edS4hQmMQnqOMep6U2xD75pLrjiglQ3YCcfOntjYLfdp6nqeu0f+00JkjR8g2zW9nuB6xJ8Z0/c8itp9uOgmNZafWtqKmRNjpOGj++TycAnosE5Sfu6GsV2tuM9qe3tzZKIsVcyOH33VYQ0gPJUpRPkEg0SO27tP1hreWhyBOuVl0a8+5GjxYxUw7MCUk9846PaxjnuxwOM5NAzRUumFxzlF7Io57LtWSrjKt9ltDshTKyl6Q99kyyfJaj4+gyauWjuxyHaimVqRxN2lAghraURmz/T1X/y/CnOzD6Qj9svUfTGvpTblhkBLMOcGglVvUAAN4HvtHxPVPXpRh1Kh12V3UVKVA4IWlQUkpIyCCOCCOc0pJSj0xpZIz7RV5DSS2G0JSEhG1I4AQkeAA4AoJfSG1QYNoa0xGdy9NO91KeNrIPj6qIx8M0c7vFj2mxzr3epKmLdAjqkSVJ94pH7I/3EkADzNYu1hPm3/UMq+TkpQ5KcKu7HKWkjhKB6JGBR+PHaVi/Inqjsaa1fcbDqC2XW1PuMSoDqXGXE9UkdQR4gjgjxFbn7NO03SevIjCYFwjRLutA7+2vHYtC/ENk8LTnkYOa/O9hpYWNqsetdyzynWZB3e0C37afNJOPD1FNzgpiuPI0fpVsKFlK0qCgcEHqKdbSetZP7GO3u6WJ9iy6wefvFk4Q1KUrfLhjoOTy6j0PtDwPhWrLFcrZerW3crNcY1xgue4+wvcnPXaR1SfQ80tKDiMxmpHLM9TYU6UbUozj4A+NCHtU7WdJofFtUwqS+g4dSlGVt8cZ8qvwdJ3Ook9+G1qJT4nBJwAOtZ27Xbvo64agdcgxlCctxRkqQj3leO4EZBrDwraVM9JNqEdklYsS+zq4MOOGPe7ZKdcKy5GklPtHxLasoqtajjMMoaXEubtxYe3FK3khLjahgFJA9np0xXOQzZyADMnRCedidrqfhzyKRMWy2+5GZd3MoPsK8eRnn1rV4uOp2Y/KzXChLRKojbQ4AJB+ANSAUglzwHspHoKhx14Qr0Jx99KLyAMDw4rQM08cbTIuNujOcofnx21p80lYyPwo0fTNvEa2f6es8CO0wzFtjz6WkI2hKnFJQMkDqUtmgjGkIGpLEFrwj9JMqWo+CUnJP4Co/b/q53V2pLpfULU21OlfZICv3SQEIz/xSKFONzLp1Gib2S9nszUa4V/uiyWXnCUgYIQ3kAH4knHwrYem9PfoCzMW+KlTlvYQA02cqLSfJJ64/21Q+wKMm7dlmlnPqiWQtDTYQE43JYBUV/eoJop6x1Jb9D6IuWo7ojdHt8fvENk8vPE4baHqpRA+GaSnJzlQzBKEbM6fS+1ohTkPs/tbqS20W511UPFwjLLJ/pB3keZTWe24wcaIPFS7pPn36+TbxdJHfzZshciQ55rUcnHp4D0pxpKQOTgeOPIU/jgoRoTyS2lZy48cN7nHSlKE9Vq4Ap23HvZSnWm3O47valxSdoUd2eAeSKfEZh5TUx1HeDna2rJSkZ4VjzqUhe9fn6+FXKiNpFW/s415f9E3pE+zzXGT0ebPLbyf4VoPCvn5GquUjrSCnrXUyH//Z"
      }
    },
    campagne : {
      "name" : "ma_premiere campagne"
    },
    game : {

      name: "ma_premiere game",
      campagne_id: 1,
      date: "1998-05-02 01:23:56",
      type_id: 1,
      description: {
        description: "c'est ma premiere game biatch",
        categorieDeJoueur: "Initié",
        langue: "FR",
        matureContent: "KO",
        region: "Paris"
      }

    },
    user :{
      mail : null,
      avatar : null,
      avatarAlt : " 0 ",
      //@aliak -> je te laisse compléter le nécessaire pour le profil
      //    -> dans componentDidMount je complete le user (c'est pour les test uniquement)
    }
  }

  componentDidMount() {
    this.setState({user : {mail : "test"}})// = (localStorage.getItem("ProfilMail") != null) ? localStorage.getItem("ProfilMail") : null
    this.setState({user : {avatar : "test"}})// = (localStorage.getItem("ProfilAvatar") != null) ? localStorage.getItem("ProfilAvatar") : null
    this.setState((prevState,currentprops) => {return ({
        user : {
          mail : (localStorage.getItem("ProfilMail") != null) ? localStorage.getItem("ProfilMail") : null,
          avatar : (localStorage.getItem("ProfilAvatar") != null) ? localStorage.getItem("ProfilAvatar") : null,
          }
        })})
  }
//test d'ajout de l'image ("l'avatar") a user
  async TestFunc(){

    console.log('LANCEMENT...');
    let response = await UserService.addAvatar(this.state.img);
    if (response.ok) {
      const json = await response.json();
      console.log('EFFICIENT TEST !');
      console.log(json);
    }else{
      console.log('ERROR TEST SUBJECT !');
    }
  }
//c'est le tests pour recuperation de profil d utilisateur
  async TestFunc1(){
    console.log('LANCEMENT...TestFunc1');
    let response = await UserService.getProfil();
    if (response.ok) {

/*      const json = await response.json();
    console.log('EFFICIENT TEST ! TestFunc1');
      console.log(json);
      this.state.user = json.data;*/
    }else{
    console.log('ERROR TEST SUBJECT ! TestFunc1');
  }

  }
  //c'est le test de creation d'une game
  async TestFunc2(){
    console.log('LANCEMENT...TestFunc2');
    let response = await OrganisatorService.create_campagne(this.state.campagne);
    if (response.ok) {
      console.log('EFFICIENT TEST ! TestFunc2.1');

      let {value, id} = await response.json();

      this.setState((prevState) => ({
        game: {
          ...prevState.game,
          campagne_id: id,
        }
      }));


    }else {
      console.log('ERROR TEST SUBJECT ! TestFunc2.1');
    }
    let response2 = await OrganisatorService.create_game(this.state.game);
    if (response2.ok) {
    console.log('EFFICIENT TEST ! TestFunc2.2');
    }else {
      console.log('ERROR TEST SUBJECT ! TestFunc2.2');
    }
  }
  async TestFunc3(){
    console.log('LANCEMENT...TestFunc3');
    console.log('EFFICIENT TEST ! TestFunc3');
    console.log('ERROR TEST SUBJECT ! TestFunc3');
  }
  async TestFunc4(){
    console.log('LANCEMENT...TestFunc4');
    console.log('EFFICIENT TEST ! TestFunc4');
    console.log('ERROR TEST SUBJECT ! TestFunc4');
  }
  async TestFunc5(){
    console.log('LANCEMENT...TestFunc5');
    console.log('EFFICIENT TEST ! TestFunc5');
    console.log('ERROR TEST SUBJECT ! TestFunc5');
  }
  async TestFunc6(){
    console.log('LANCEMENT...TestFunc6');
    console.log('EFFICIENT TEST ! TestFunc6');
    console.log('ERROR TEST SUBJECT ! TestFunc6');
  }
  async TestFunc7(){
    console.log('LANCEMENT...TestFunc7');
    console.log('EFFICIENT TEST ! TestFunc7');
    console.log('ERROR TEST SUBJECT ! TestFunc7');
  }
  async TestFunc8(){
    console.log('LANCEMENT...TestFunc8');
    console.log('EFFICIENT TEST ! TestFunc8');
    console.log('ERROR TEST SUBJECT ! TestFunc8');
  }
  async TestFunc9(){
    console.log('LANCEMENT...TestFunc9');
    console.log('EFFICIENT TEST ! TestFunc9');
    console.log('ERROR TEST SUBJECT ! TestFunc9');
  }
  async TestFunc10(){
    console.log('LANCEMENT...TestFunc10');
    console.log('EFFICIENT TEST ! TestFunc10');
    console.log('ERROR TEST SUBJECT ! TestFunc10');
  }
  async TestFunc11(){
    console.log('LANCEMENT...TestFunc11');
    console.log('EFFICIENT TEST ! TestFunc11');
    console.log('ERROR TEST SUBJECT ! TestFunc11');
  }
  async TestFunc12(){
    console.log('LANCEMENT...TestFunc12');
    console.log('EFFICIENT TEST ! TestFunc12');
    console.log('ERROR TEST SUBJECT ! TestFunc12');
  }

 render(){
  return (
      <div className="Home">
    <Navbar/>

    <main className="main-container">

    <div className="card">
      <div className="row">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-danger w-200px" 
            href="# " onClick={() => {console.log(this.state)}}>
              State
          </a>
        </div>
        <div className="col-md-4 text-center">
          <h6 className="h6 text-secondary pt-1">ZONE BÊTA</h6>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc()}}>
              TestButton
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc1()}}>
              TestButton 1
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc2()}}>
              TestButton 2
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc3()}}>
              TestButton 3
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc4()}}>
              TestButton 4
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc5()}}>
              TestButton 5
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc6()}}>
              TestButton 6
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc7()}}>
              TestButton 7
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc8()}}>
              TestButton 8
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc9()}}>
              TestButton 9
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc10()}}>
              TestButton 10
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc11()}}>
              TestButton 11
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc12()}}>
              TestButton 12
          </a>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={this.state.img.image.value} />
        </div>
        <div className="col-md-4 text-center">
          <img src={this.state.user.avatar} />
        </div>
        <div className="col-md-4 text-center">
          {this.state.img.image.name}
        </div>
      </div>
    </div>
      

      <div className="main-content">
        <div className="card">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Slider1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Warhammer JDR 4eme Edition</h3>
                <p>Fight with brothers !</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Slider2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h2>Light you'r star.</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="col-12">
        <div className="divider text-uppercase fw-500">Le powerpoint</div>
      </div>
{/*
      <div className="col-12 text-center">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRz5TdFn8ZbkxBim2w08-DJM-IeI7_37V3T9c5psCv8_lwx-SWJwL07TPDjXmft1A/embed?start=true&loop=true&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>*/}

      <div className="col-12">
        <div className="divider text-uppercase fw-500">Some Stats</div>
      </div>

      <div className="main-content">
        <div className="row">

          <div className="col-md-4">
            <div className="card card-body">
                <div className="text-center">
                  <span className="">258 306 Parties en cours</span><br/>
                  <span>
                    <i className="ti-angle-up text-success"></i>
                    <span className="fs-18 ml-1">27%</span>
                  </span>
                </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-body">
                <div className="text-center">
                  <span className="">258 306 Parties en cours</span><br/>
                  <span>
                    <i className="ti-angle-up text-success"></i>
                    <span className="fs-18 ml-1">27%</span>
                  </span>
                </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-body">
                <div className="text-center">
                  <span className="">28 631 Parties en cours</span><br/>
                  <span>
                    <i className="ti-angle-up text-success"></i>
                    <span className="fs-18 ml-1">27%</span>
                  </span>
                </div>
            </div>
          </div>

      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title"><strong>Earnings</strong></h5>
            <a className="btn btn-xs btn-secondary" href="../widget/chart.html">More Charts</a>
          </div>

          <div className="card-body">
            <ul className="list-inline text-center gap-items-4 mb-30">
              <li className="list-inline-item">
                <span className="badge badge-lg badge-dot mr-1" style={{"backgroundColor": "#b1bccb"}}></span>
                <span>Advertising</span>
              </li>
              <li className="list-inline-item">
                <span className="badge badge-lg badge-dot mr-1" style={{"backgroundColor": "#01c4cc"}}></span>
                <span>Hosting</span>
              </li>
            </ul>

            <canvas id="chart-js-2" height="130" data-provide="chartjs"></canvas>
          </div>
        </div>
      </div>








      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title"><strong>Top</strong> Advertisers</h5>

            <ul className="card-controls">
              <li className="dropdown">
                <a data-toggle="dropdown" href=" #"><i className="ti-more-alt rotate-90"></i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item active" href=" #">Today</a>
                  <a className="dropdown-item" href=" #">Yesterday</a>
                  <a className="dropdown-item" href=" #">Last week</a>
                  <a className="dropdown-item" href=" #">Last month</a>
                </div>
              </li>
              <li><a className="card-btn-reload" href=" #" title="" data-provide="tooltip" data-original-title="Refresh"><i className="fa fa-circle-thin"></i></a></li>
            </ul>
          </div>

          <div className="card-body card-body">
            <p className="text-center d-none d-xl-block">We need to stop interrupting what people are and be what people are interested in. We need to stop interrupting what people are and be what people are interested in.</p>

            <div className="text-center py-20 d-none d-lg-block">
              <div data-provide="peity" data-type="donut" data-size="150" data-inner-radius="55" data-fill="#efb3e6,#ffdf7c,#b2def7">9,6,5</div>
            </div>

            <div className="text-center py-20 d-lg-none">
              <div data-provide="peity" data-type="donut" data-size="87" data-inner-radius="35" data-fill="#efb3e6,#ffdf7c,#b2def7">9,6,5</div>
            </div>

            <ul className="list-inline mb-0">
              <li className="flexbox mb-1">
                <div>
                  <span className="badge badge-dot badge-lg mr-1" style={{"backgroundColor" : "#efb3e6"}}></span>
                  <span>Google</span>
                </div>
                <div>953</div>
              </li>

              <li className="flexbox mb-1">
                <div>
                  <span className="badge badge-dot badge-lg mr-1" style={{"backgroundColor" : "#ffdf7c"}}></span>
                  <span>Facebook</span>
                </div>
                <div>813</div>
              </li>

              <li className="flexbox">
                <div>
                  <span className="badge badge-dot badge-lg mr-1" style={{"backgroundColor" : "#b2def7"}}></span>
                  <span>Twitter</span>
                </div>
                <div>369</div>
              </li>
            </ul>
          </div>
        </div>
      </div>







      <div className="col-12">
        <div className="divider text-uppercase fw-500">Social</div>
      </div>





      <div className="col-md-6 col-lg-4">
        <div className="card p-30 pt-50 text-center">
          <div>
            <a className="avatar avatar-xxl status-success mb-3" href="../page/profile.html">
              <img src="../assets/img/avatar/1.jpg" alt="..."/>
            </a>
          </div>
          <h5><a href="../page/profile.html">Maryam Amiri</a></h5>
          <p><small className="fs-13">Designer</small></p>
          <p className="text-light fs-12 mb-30">Hello everyone, I am Maryam. My designs are used in several big companies in United State and other countries.</p>
          <div className="gap-items fs-16">
            <a className="text-facebook" href=" #"><i className="fa fa-facebook"></i></a>
            <a className="text-dribbble" href=" #"><i className="fa fa-dribbble"></i></a>
            <a className="text-google" href=" #"><i className="fa fa-google"></i></a>
            <a className="text-twitter" href=" #"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>








      <div className="col-md-6 col-lg-4">
        <div className="card">
          <h5 className="card-title"><strong>Friends</strong></h5>

          <div className="media-list media-list-sm media-list-hover media-list-divided scrollable ps-container ps-theme-default ps-active-y" style={{height: "295px"}} data-ps-id="dadac395-34e9-0117-df73-bf58e70fcf18">
            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/2.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Hossein Shams</a></h6>
                <small className="text-fader">Co-Founder</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" href=" #">Followed</a>
              </div>
            </div>


            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Maryam Amiri</a></h6>
                <small className="text-fader">Co-Founder</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" href=" #">Followed</a>
              </div>
            </div>


            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/3.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Sarah Conner</a></h6>
                <small className="text-fader">Designer</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-success w-100px" href=" #">Follow</a>
              </div>
            </div>



            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/4.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Frank Camly</a></h6>
                <small className="text-fader">CTO</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-success w-100px" href=" #">Follow</a>
              </div>
            </div>



            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/5.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Ted Erricson</a></h6>
                <small className="text-fader">Lead Developer</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" href=" #">Followed</a>
              </div>
            </div>



            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/6.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Ranian Mostalik</a></h6>
                <small className="text-fader">Senior Developer</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-success w-100px" href=" #">Follow</a>
              </div>
            </div>



            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/7.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">John Franklin</a></h6>
                <small className="text-fader">Front-end Developer</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-success w-100px" href=" #">Follow</a>
              </div>
            </div>



            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/8.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Emma Larson</a></h6>
                <small className="text-fader">PHP Guru</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-success w-100px" href=" #">Follow</a>
              </div>
            </div>
            <div className="ps-scrollbar-x-rail" style={{left: "0px", bottom: "0px"}}>
              <div className="ps-scrollbar-x" tabIndex="0" style={{left: "0px", width: "0px"}}>
              </div>
            </div>
            <div className="ps-scrollbar-y-rail" style={{"top": "0px", height: "295px", right: "2px"}}>
              <div className="ps-scrollbar-y" tabIndex="0" style={{"top": "0px", height: "108px"}}>
              </div>
            </div>
          </div>

          <div className="text-center bt-1 border-light p-2">
            <a className="text-default text-uppercase d-block fs-10 fw-500 ls-1" href=" #">Invite Friends</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 d-none d-lg-block">
        <div className="flexbox flex-justified text-center bg-white mb-15">
          <div className="no-shrink py-30">
            <span className="ti-facebook fs-40" style={{color: "#3b5998"}}></span>
          </div>

          <div className="py-30 bg-lighter">
            <div className="fs-30">+100</div>
            <span>Likes</span>
          </div>
        </div>



        <div className="flexbox flex-justified text-center bg-white mb-15">
          <div className="no-shrink py-30">
            <span className="ti-twitter fs-40" style={{color: "#00aced"}}></span>
          </div>

          <div className="py-30 bg-lighter">
            <div className="fs-30">+99</div>
            <span>Followers</span>
          </div>
        </div>



        <div className="flexbox flex-justified text-center bg-white">
          <div className="no-shrink py-30">
            <span className="ti-dribbble fs-40" style={{color: "#ea4c89"}}></span>
          </div>

          <div className="py-30 bg-lighter">
            <div className="fs-30">+45</div>
            <span>Shots</span>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="divider text-uppercase fw-500">Apps</div>
      </div>




      <div className="col-md-6">
        <div className="card card-bordered">
          <div className="card-header">
            <h4 className="card-title"><strong>Chat</strong></h4>
            <a className="btn btn-xs btn-secondary" href="../page-app/chat.html">Chat App</a>
          </div>


          <div className="scrollable ps-container ps-theme-default ps-active-y" id="chat-content" style={{height:"400px"}} data-provide="emoji" data-ps-id="1f813844-7691-d16d-d146-56b47bb7ab5f">
            <div className="media media-chat">
              <img className="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
              <div className="media-body">
                <p>Hi</p>
                <p>How are you ...???</p>
                <p>What are you doing tomorrow?<br/>Would you like to get out of the town for a while?</p>
                <p className="meta"><time dateTime="2018">23:58</time></p>
              </div>
            </div>

            <div className="media media-meta-day">Today</div>

            <div className="media media-chat media-chat-reverse">
              <div className="media-body">
                <p>Hiii, I'm good.</p>
                <p>How are you doing?</p>
                <p>Long time no see!</p>
                <p className="meta"><time dateTime="2018">00:06</time></p>
              </div>
            </div>

            <div className="media media-chat">
              <img className="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
              <div className="media-body">
                <p>Yeah</p>
                <p>We were out of country for a vacation. We visited several beautiful countries and made a lot of memmories. :stuck_out_tongue_winking_eye: :stuck_out_tongue_winking_eye:</p>
                <p className="meta"><time dateTime="2018">00:07</time></p>
              </div>
            </div>

            <div className="media media-chat media-chat-reverse">
              <div className="media-body">
                <p>That's awesome!</p>
                <p>You should tell me everything with all small details. I'm so curious to hear your stories.</p>
                <p>Did you take pictures?</p>
                <p className="meta"><time dateTime="2018">00:09</time></p>
              </div>
            </div>

            <div className="media media-chat">
              <img className="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
              <div className="media-body">
                <p>We took a loooot. Here is some of them, I'll show you the rest once we meet :wink:</p>
                <p className="row gap-1" data-provide="photoswipe">
                  <a className="col-4 d-inline-block" href=" #"><img src="../assets/img/gallery/thumb-sm/8.jpg" alt="..."/></a>
                  <a className="col-4 d-inline-block" href=" #"><img src="../assets/img/gallery/thumb-sm/11.jpg" alt="..."/></a>
                  <a className="col-4 d-inline-block" href=" #"><img src="../assets/img/gallery/thumb-sm/7.jpg" alt="..."/></a>
                </p>
                <p className="meta"><time dateTime="2018">00:10</time></p>
              </div>
            </div>

            <div className="media media-chat media-chat-reverse">
              <div className="media-body">
                <p>These places are fantastic. Wish I could join you guys :disappointed: :disappointed:</p>
                <p className="meta"><time dateTime="2018">00:10</time></p>
              </div>
            </div>

            <div className="media media-chat">
              <img className="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
              <div className="media-body">
                <p>You can actually. We are planning our next vacation for new year holidays :wink:</p>
                <p className="meta"><time dateTime="2018">00:12</time></p>
              </div>
            </div>

            <div className="media media-chat media-chat-reverse">
              <div className="media-body">
                <p>Are you serious?!! :heart_eyes:</p>
                <p className="meta"><time dateTime="2018">00:12</time></p>
              </div>
            </div>

            <div className="ps-scrollbar-x-rail" style={{left: "0px", bottom: "-270px"}}>
              <div className="ps-scrollbar-x" tabIndex="0" style={{left: "0px", width: "0px"}}>
              </div>
            </div>
            <div className="ps-scrollbar-y-rail" style={{top: "270px", height: "400px", right: "2px"}}>
              <div className="ps-scrollbar-y" tabIndex="0" style={{top: "73px", height: "108px"}}>
              </div>
            </div>
          </div>

          <div className="publisher bt-1 border-light">
            <img className="avatar avatar-xs" src="../assets/img/avatar/2.jpg" alt="..."/>
            <input className="publisher-input" type="text" placeholder="Write something"/>
            <span className="publisher-btn file-group">
              <i className="fa fa-paperclip file-browser"></i>
              <input type="file"/>
            </span>
            <a className="publisher-btn" href=" #"><i className="fa fa-smile-o"></i></a>
            <a className="publisher-btn text-info" href=" #"><i className="fa fa-paper-plane"></i></a>
          </div>

        </div>
      </div>

      <div className="col-md-6">
        <div className="card card-bordered">
          <h4 className="card-title"><strong>Todo list</strong></h4>

          <div className="media-list media-list-hover" data-provide="selectall">

            <header className="media media-single media-list-header">
              <div className="custom-control custom-control-lg custom-checkbox pl-4">
                <input type="checkbox" className="custom-control-input"/>
                <label className="custom-control-label"></label>
              </div>

              <div className="lookup lookup-sm flex-grow-1">
                <input type="text" placeholder="Search..." data-provide="media-search"/>
              </div>
            </header>

            <div className="media-list-body scrollable ps-container ps-theme-default" data-provide="sortable" data-sortable-handle=".sortable-dot" style={{height:"344px"}} data-ps-id="4b6ee4e3-5c77-dd34-a741-ffe7600bcfd9">
              <div className="media media-single bl-3 border-danger">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Schedule meeting with Bob</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="media media-single">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Take children from school</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="media media-single">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Final design delivery</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="media media-single bl-3 border-warning">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Watch GOT - Episode 6</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="media media-single">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Read an article</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="media media-single bl-3 border-danger">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Begin promotional phase</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="ps-scrollbar-x-rail" style={{left: "0px", bottom: "0px"}}>
                <div className="ps-scrollbar-x" tabIndex="0" style={{left: "0px", width: "0px"}}>
                </div>
              </div>
              <div className="ps-scrollbar-y-rail" style={{top: "0px", right: "2px"}}>
                <div className="ps-scrollbar-y" tabIndex="0" style={{top: "0px", height: "0px"}}>
                </div>
              </div>
            </div>

          </div>

          <div className="publisher bt-1 border-light">
            <input className="publisher-input" type="text" placeholder="Add new task"/>
            <a className="btn btn-sm btn-secondary" href=" #"><i className="fa fa-paper-plane"></i></a>
          </div>

        </div>
      </div>



    </div>
  </div>


  <footer className="site-footer">
    <div className="row">
      <div className="col-md-6">
        <p className="text-center text-md-left">Copyright © 2019 <a href="http://thetheme.io/theadmin">TheAdmin</a>. All rights reserved.</p>
      </div>

      <div className="col-md-6">
        <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
          <li className="nav-item">
            <a className="nav-link" href="../help/articles.html">Documentation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../help/faq.html">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://themeforest.net/item/theadmin-responsive-bootstrap-4-admin-dashboard-webapp-template/20475359?license=regular&amp;open_purchase_for_item_id=20475359&amp;purchasable=source&amp;ref=thethemeio">Purchase Now</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>


  </main>
  </div>
  );
}
}

export default withRouter(Home)

