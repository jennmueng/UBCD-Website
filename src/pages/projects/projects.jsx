import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import smartPole from './smart-pole.jpg';
import smartBus from './smart-bus.jpg';
import brainCloud from './braincloud.jpg';
import uSME from './usme.jpg';
import uUbon from './uubon.jpg';
import uExpress from './uexpress.jpg';
import uCubator from './ucubator.jpg';
import ubonTeens from './ubonteens.jpg';
import './projects.css';

export class ProjectsEn extends Component {
  render() {
    return (
      <div className="projects">

        <div className='project'>
          <img className='projectBg' src={brainCloud} alt="brainCloud"/>
          <Link to='/projects/braincloud' className='projectOverlay'>
            <div className='projectInfo'>
              <h1>BrainCloud</h1>
              <p>
                Making learning English affordable, engaging, and fun for everyone.
              </p>
            </div>
          </Link>
        </div>

        <div className='project'>
          <img className='projectBg' src={smartPole} alt="smartPole"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>Smart Pole</h1>
              <p>
                Seeking to connect the whole city together.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={smartBus} alt="smartBus"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>Smart Bus</h1>
              <p>
                Accessible Mobility for all in the province.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={uCubator} alt="uCubator"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>uCubator</h1>
              <p>
                Funding startups to push Thailand forward.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={uUbon} alt="uUbon"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>uUbon</h1>
              <p>
                The app that controls all of Ubon.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={uSME} alt="uSME"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>uSME</h1>
              <p>
                Taking Ubon's OTOP creators to new levels.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={uExpress} alt="uExpress"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>uExpress</h1>
              <p>
                Expanding the province to e-commerce.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={ubonTeens} alt="ubonTeens"/>
          <Link to='/projects/ubonteens' className='projectOverlay'>
            <div className='projectInfo'>
              <h1>Ubon Teens</h1>
              <p>
                The youth that will move ubon forward.
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export class ProjectsTh extends Component {
  render() {
    return (
      <div className="projects">

        <div className='project'>
          <img className='projectBg' src={brainCloud} alt="brainCloud"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>BrainCloud</h1>
              <p>
                Making learning English affordable, engaging, and fun for everyone.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={smartPole} alt="smartPole"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>Smart Pole</h1>
              <p>
                Seeking to connect the whole city together.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={smartBus} alt="smartBus"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>Smart Bus</h1>
              <p>
                Accessible Mobility for all in the province.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={uCubator} alt="uCubator"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>uCubator</h1>
              <p>
                Funding startups to push Thailand forward.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={uUbon} alt="uUbon"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>uUbon</h1>
              <p>
                The app that controls all of Ubon.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={uSME} alt="uSME"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>uSME</h1>
              <p>
                Taking Ubon's OTOP creators to new levels.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={uExpress} alt="uExpress"/>
          <div className='projectOverlay'>
            <div className='projectInfo'>
              <h1>uExpress</h1>
              <p>
                Expanding the province to e-commerce.
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <img className='projectBg' src={ubonTeens} alt="ubonTeens"/>
          <Link to='/projects/ubonteens' className='projectOverlay'>
            <div className='projectInfo'>
              <h1>วัยรุ่นพัฒนาเมือง</h1>
              <p>
                The youth that will move ubon forward.
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}