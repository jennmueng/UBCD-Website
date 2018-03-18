import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './indivProjects.css';

export class IndivEn extends Component {
  render() {
    return (
      <div className="Home">
        <div className='hero'>
            <div className='heroText'>
                <h1>Ubon Ratchathani City Development</h1>
                <h3>Born or live in Ubon, always love Ubon.</h3>
                <p>
                    Our mission is to unite the Ubon people to work together to push Ubon forward and drive locals to invest more in their own area.
                </p>
                <Link to='/news'>
                    <button className='heroButton'>
                    Keep Up With Us
                    </button>
                </Link>
            </div>
        </div>
        
      </div>
    );
  }
}

export class IndivTh extends Component {
    render() {
      return (
        <div className="Home">   
            <div className='hero'>
                <div className='heroText'>
                    <h1>อุบลราชธานีพัฒนาเมือง</h1>
                    <h3>เกิดอุบล...รักอุบล <br/>
                    อยู่อุบล...รักอุบล
                </h3>
                    <p>
                    สร้างความร่วมมือ และสนับสนุนให้เกิดการพัฒนาเมืองแบบมีส่วนร่วมจากคนในพื้นที่ เพื่อให้เกิดการลงทุนในโครงสร้างพื้นฐานของเมือง และกิจการสาธารณะ ที่เป็นความต้องการของประชาชนในพื้นที่อย่างแท้จริง
                    </p>
                    <Link to='/news'>
                        <button className='heroButton'>
                        ติดตามข่าวสารของเรา
                        </button>
                    </Link>
                </div>
        </div>
        </div>
      );
    }
  }