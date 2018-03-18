import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid'
import logoLong from './logo-long.png';
import './header.css';

export class HeaderEn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu : false
        }
    }
    menuOpen = () => {
        this.setState({
            menu : true
        });
    }
    menuClose = () => {
        this.setState({
            menu : false
        });
    }
  render() {
    return (
      <div className="Header">
        <Link to='/'>
        <img className='headerLogo' src={logoLong} alt="UBCD"/>
        </Link>
        <div className='burgerLink' onClick={this.state.menu ? this.menuClose : this.menuOpen}>
            <Icon className='burgerIcon' icon={this.state.menu ? faTimes : faBars} size='lg'/>
        </div>
        <div className="headerMenu">
            <div className={this.state.menu ? 'burger open' : 'burger'}>
                <ol className='headerLinkArea'>
                    {this.state.menu ? <Link onClick={this.menuClose} to='/' className='headerLink' >Home</Link>  : null}
                    <Link onClick={this.menuClose} to='/projects' className='headerLink' >Projects</Link> 
                    <Link onClick={this.menuClose} to='/team' className='headerLink'>News</Link> 
                    <Link onClick={this.menuClose} to='/about' className='headerLink'>About</Link>
                    <Link onClick={this.menuClose} to='/contact' className='headerLink'>Contact</Link> 
                    <div className='langChanger'>
                        <a 
                            className={this.props.lang === 'EN' ? 'selectedLang lang' : 'lang'}
                            onClick={() => {this.props.changeLang('EN')}}
                        >EN</a>
                        |
                        <a className='lang' onClick={() => {this.props.changeLang('TH')}}>TH</a>
                    </div>
                    
                </ol>
            </div>
            

        </div>
      </div>
    );
  }
}

export class HeaderTh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu : false
        }
    }
    menuOpen = () => {
        this.setState({
            menu : true
        });
    }
    menuClose = () => {
        this.setState({
            menu : false
        });
    }
    render() {
      return (
        <div className="Header">
            <Link to='/'>
                <img className='headerLogo' src={logoLong} alt="UBCD"/>
            </Link>
            <div className='burgerLink' onClick={this.state.menu ? this.menuClose : this.menuOpen}>
            <Icon className='burgerIcon' icon={this.state.menu ? faTimes : faBars} size='lg'/>
        </div>
        <div className="headerMenu">
            <div className={this.state.menu ? 'burger open' : 'burger'}>
                <ol className='headerLinkArea'>
                    {this.state.menu ? <Link onClick={this.menuClose} to='/' className='headerLink' >หน้าแรก</Link>  : null}
                    <Link onClick={this.menuClose} to='/projects' className='headerLink' >โครงการ</Link> 
                    <Link onClick={this.menuClose} to='/team' className='headerLink'>ข่าวสาร</Link> 
                    <Link onClick={this.menuClose} to='/about' className='headerLink'>เกี่ยวกับเรา</Link>
                    <Link onClick={this.menuClose} to='/contact' className='headerLink'>ติดต่อ</Link> 
                    <div className='langChanger'>
                        <a 
                            className='lang'
                            onClick={() => {this.props.changeLang('EN')}}
                        >EN</a>
                        |
                        <a className={this.props.lang === 'TH' ? 'selectedLang lang' : 'lang'} onClick={() => {this.props.changeLang('TH')}}>TH</a>
                    </div>
                    
                </ol>
            </div>
            

        </div>
        </div>
      );
    }
  }
