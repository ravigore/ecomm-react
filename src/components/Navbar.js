import React, {Component} from 'react'
import { history } from '../helpers/History';
import Profile from './Profile';
import logo from '../shopico.png'

export default class Navbar extends Component {
    state = {
        displayMenu: false,
        toggle: false
      };
    toggle = ()=>{
        this.setState({
          toggle: !this.state.toggle
        });
      }
    showDropdownMenu = (e)=>{
        e.preventDefault();
        this.setState({ displayMenu: true});
    }
    hideDropdownMenu = (e)=>{
        e.preventDefault();
        this.setState({ displayMenu: false });
    }
    logoutMe =(e)=>{
        localStorage.setItem("username","");
        history.push("/");
    }
    updateStateInfo = ({displayMenu=this.state.displayMenu, toggle=this.state.toggle}) =>{
        this.setState({
            displayMenu,
            toggle
        })
    }
  render() {
    const useremail = localStorage.getItem("username");
    return (
        <header>
        <nav className="navbar navbar-expand-lg nav-custom">
        <div className="navbar-header text-center col">
            <a className="navbar-brand" href="/#"><img className="" width="100" src={logo} alt="Logo" /></a>
        </div>
        <div className="col-md-5">
        <div className="input-group"> 
        <input type="text" className="form-control input-text" placeholder="Search "/>
        <div className="input-group-append"> <button className="btn btn-outline-warning btn-sm pl-4 pr-4 search-btn" type="button"><i className="fa fa-search"></i></button> </div>
        </div>
        </div>
        <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a href="/#" onClick={this.showDropdownMenu} className="nav-link dropdown-toggle"><i className="fa fa-user-circle-o fa-lg p-2"></i>{useremail}</a>
                    { this.state.displayMenu ? (
                    <ul onMouseLeave={this.hideDropdownMenu} className={`dropdown-menu ${this.state.displayMenu ? 'show':''}`}>
                        <li><span  onClick={this.toggle} className="dropdown-item"><i className="fa fa-user-o"></i> Profile</span></li>
                        <li className="divider dropdown-divider"></li>
                        <li><span onClick={this.logoutMe} className="dropdown-item"><i className="fa fa-sign-out"/> Logout</span></li>
                    </ul>
                ):
                (
                null
                )}
                </li>
            </ul>
            <div id="ex4">
            <span className="p1 fa-stack fa-2x has-badge" data-count="4">
            <a href="/#"><i className="p3 fa fa-2x fa-shopping-cart fa-stack-1x xfa-inverse"></i></a>
            </span>
            </div>
            {/* <a href="/#"><i className="fa fa-shopping-cart fa-2x mr-2" aria-hidden="true"></i><span className="badges badges-align">3</span>Cart</a> */}
        </div>
    </nav>
    <Profile updateHomeState={this.updateStateInfo} homeInfo={this.state}/>
    </header>
    )
  }
}
