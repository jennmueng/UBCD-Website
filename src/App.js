import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { HeaderEn, HeaderTh } from './components/header/header';
import { ProjectsEn, ProjectsTh } from './pages/projects/projects';
import { HomeEn, HomeTh } from './pages/home/home';
import { IndivEn, IndivTh } from './pages/projects/indivProjects';
import Footer from './components/footer/footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let lang = '';
    if (!lang) {
      lang = 'EN';
    }
    this.state = {
      lang : lang,
      contentClasses : 'contentArea'
    }
    
  }

  changeLang = (lang) => {
    this.setState({
      lang : lang
    })
    console.log(this.props);
  }
  render() {
    return (
      <div className='App'>
            {this.state.lang === 'EN' 
            ? <HeaderEn changeLang={this.changeLang} lang={this.state.lang}/>
            : <HeaderTh changeLang={this.changeLang} lang={this.state.lang}/>
            }
            <div className={this.state.contentClasses}>
            <Switch>
              <Route exact path='/' component={this.state.lang === 'EN' ? HomeEn : HomeTh}/>
              <Route exact path='/projects' component={this.state.lang === 'EN' ? ProjectsEn : ProjectsTh}/>
              <Route path='/projects' component={this.state.lang === 'EN' ? IndivEn : IndivTh}/>
            </Switch>
            </div>
            <Footer />
      </div>
    );
  }
}

export default App;
