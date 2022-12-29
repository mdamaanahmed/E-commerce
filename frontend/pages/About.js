import React from 'react'
import '../../assets/css/about.css'
import about_bg from '../../assets/images/about_bg.jpg'
import { IoCheckmarkDone } from 'react-icons/io5';
import { TiPlusOutline } from 'react-icons/ti';
import { TbTriangles } from 'react-icons/tb';
import TeamCard from '../components/TeamCard'
import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.jpg'
import team3 from '../../assets/images/team3.jpg'
import '../../assets/css/teamCard.css'

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading_design1 mt-5">
              <h1>About E-COMMERCE</h1>
              <p>providing best services anywhere anytime</p>
            </div>
            <div className="content_container">
              <div className="row">
                <div className="col-lg-6 p-0">
                  <div className="img">
                    <img src={about_bg} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="content mt-4 mt-lg-0">
                    <h3>Know Us and Our Works.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odio impedit consequuntur autem, dolorem ut doloribus officia voluptas odit repudiandae rerum delectus accusamus atque dolores numquam! Molestiae totam tempore, officia amet ad accusamus officiis nesciunt facilis quaerat nobis non! Reprehenderit sint iusto neque similique temporibus ullam nulla tenetur unde velit ratione pariatur deleniti numquam porro ex repellendus nisi dolore corrupti tempora, et molestias accusamus explicabo quia! Quos eveniet ex nulla nemo asperiores placeat labore inventore voluptate molestiae at ea laborum cum maiores architecto, eaque cupiditate qui velit earum possimus expedita animi ipsum. Laboriosam hic alias in neque aliquid illo dolorem!</p>
                    <div>
                      <div className="icon_div">
                        <IoCheckmarkDone className='icon' />
                      </div>
                      <p> Ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati elit onsectetur adipisicing sunt eveniet voluptas rem iure quia.</p>
                    </div>
                    <div>
                      <div className="icon_div">
                        <IoCheckmarkDone className='icon' />
                      </div>
                      <p> Obcaecati sunt eveniet voluptas rem iure quia.</p>
                    </div>
                    <div>
                      <div className="icon_div">
                        <IoCheckmarkDone className='icon' />
                      </div>
                      <p> Amet consectetur adipisicing elit onsectetur adipisicing elit. Obcaecati sunt eveniet voluptas rem iure quia.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team_cards">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading_design2">
              <h1><span><TbTriangles /></span> <span><TiPlusOutline /></span> <span><TiPlusOutline /></span> Team Members</h1>
              <p>any time active team members</p>
            </div>
            <TeamCard img={team3} name='Ajay' role='Head Of Departments' />
            <TeamCard img={team1} name='Himanshu Mishra' role='CEO' />
            <TeamCard img={team2} name='Nishant Singh' role='Manager' />
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default About