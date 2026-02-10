import React, { Fragment } from 'react'
import './Home.css'
import salad from'../../salad.jpg'
import pizza from '../../2.png'
import Data  from '../../Data'
import Carousel from 'react-bootstrap/Carousel';
import item1 from'../../item1.jpg'
import item2 from'../../item2.jpg'


const Home =()=> {
  const blogitem = Data.map((item,index)=>{
    return(
      <div key={index}  className='col-md-4 datatext'>
        <img src={item.img} alt={item.title}/> 
        <h5>{item.title}</h5>
        <span>{item.time}</span>
        <h6>{item.price} <del style={{color:"#999999", marginLeft:"10px"}}>{item.deleted}</del></h6>
        <button>Learn More</button>
      </div>
      
    )
  })
  return (
    <Fragment>
      <section className='numbers'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className='col-md-3'>
              <h2>1440+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className='col-md-3'>
              <h2>5786+</h2>
              <h6>ROKETS</h6>
            </div>
            <div className='col-md-3'>
              <h2>7110+</h2>
              <h6>GLOBS</h6>
            </div>
          </div>
        </div>
      </section>


      <section className='bride'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={salad} title='salad' alt="salad"/>
            </div>
            <div id='title' className='col-md-6'>
              <h2>We pride Ourselves On making real food from the best ingredient </h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quis. Cupiditate nobis quae nihil pariatur quaerat maiores velit neque aliquid eaque inventore! Aliquam.</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className='ingredient'>
        <div className='container'>
          <div className='row'>
            <div id='content' className='col-md-6'>
              <h2>We made everything by hand with the best possible ingredient</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum placeat neque, sed distinctio inventore nam totam</p>
              <ul>
                <li> itiis fugit laudantium, corporis eaque?</li>
                <li> Lorem ipsum dolor sit amet consectetur </li>
                <li> adipisicing elit. Repudiandae cupiditate </li>
              </ul>
              <button>Learn More</button>
            </div>
            <div className='col-md-6'>
              <img src={pizza} title='pizza' alt="pizza"/>
            </div>
          </div>
        </div>
      </section>

      <section className='parelex'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>When a man`s Stomach is full it makes no<br></br> difference whether he is reach or poor </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corporis reprehenderit temporibus,<br></br> officiis, iste totam libero enim, accusamus expedita quis autem perferendis.</p>
              <a href='/'>Watch Our Story</a>
            </div>
          </div>
        </div>
      </section>

      <section className='blogs'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-12'>
              <h2>Explore Our Foods</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi quae repellat molestias ab aliquid beatae consequuntur aspernatur tenetur nihil recusandae, eum aperiam, culpa nobis esse, error commodi. In voluptas possimus unde minima doloremque eius alias beatae, corporis cum numquam minus sit placeat laborum, expedita dolorum tenetur.</p>
            </div>
          </div>
          <div className='row'>
            {blogitem}
            
          </div>
        </div>
      </section>

      <section className='sliders'>
        <h2>Testimonials</h2>
        <div id='cursole' className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <Carousel>
                <Carousel.Item>
                 <img src={item1} alt="coffee"/>
                  <h4 style={{color:"black", marginTop:"50px", padding:"0px 10px"}}>First slide labelLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum </h4>
                  <p style={{color:"#ab3550" , marginTop:"0px", padding:"20px 0px"}}>Simba Dave - Web Design</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={item2} alt="sandwitch" />
                    <h4 style={{color:"black", marginTop:"50px", padding:"0px 10px"}}>Second slide label dolor sit amet consectetur adipisicing elit. Nostrum eligendi </h4>
                    <p style={{color:"#ab3550", marginTop:"0px", padding:"20px 0px"}}>jack - UX Designer</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={item1} alt="person" />
                  <h4 style={{color:"black" , marginTop:"50px", padding:"0px 10px"}}>First slide labelLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum </h4>
                  <p style={{color:"#ab3550" , marginTop:"0px", padding:"20px 0px"}}>menna bahgat - Front end</p>
                </Carousel.Item>
              </Carousel>
           </div>
          </div>
       </div>
     </section>


     <section className='question'>
      <h3>Frequently Asked Questions</h3>
       <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div>
                <h4>~ Is Foodera Bread really baked fresh each day?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <h4>~ Can I order your products online?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <h4>~ Do you bake breads containing animal fats ?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <h4>~ When are you opening a shop near me?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>
          </div>
       </div>
     </section>

     <section className='between'>
      <div className='container'>
        <div className='row'>
          <div className=' col-md-8'>
            <h4>Baked fresh daily by bakers with passion.</h4>
          </div>
          <div className=' col-md-4'>
            <button>Learn More</button>
          </div>
        </div>
      </div>
     </section>


     <section className='theend'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-12' >
            <h2>Hurry up! Subscribe our newsletterand <br></br>and get 25% Off</h2>
            <p>Limited time offer for this month. No credit card required.</p>
            <input type='email' placeholder='Email Address Here'/>
            <button>Subescripe</button>
          </div>
        </div>
      </div>
     </section>


     <section className='footer'>
        <div className='container'>
          <div className='links'>
            <a href='/'>Register</a>
            <a href='/'>Forum</a>
            <a href='/'>Affiliate</a>
            <a href='/'>FAQ</a>
          </div>
          <p>© 2021. Foodera. All rights reserved.</p>          
        </div>
      </section>

      
    </Fragment>
  )
}


export default Home;