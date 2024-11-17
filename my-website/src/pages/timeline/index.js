import React from 'react';
import Layout from '@theme/Layout';
import './index.module.css'
export default function MyReactPage() {
  return (
    <Layout>
      <div id="timeline-content">
        <h1>My Story So Far ....</h1>

        <ul class="timeline">

          {/* TUM */}
          <li class="event" id="date" data-date="2017">
            
          <div>
              <h3>Hanoi University of Science and Technology</h3>
              <p>Spent my naive, peaceful Bachelor years at HUST 👨🏻‍🎓🇻🇳</p>
              <p>Majoring in Electronics and Telecommunication Engineering 📐 </p>    
            </div>
            <div className='icon'>
              <img src="/img/hust-1.png"></img>
            </div>
            
            <div>
              <h3>Technical University Munich</h3>
              <p> Got EU Erasmus+ scholarship (big one 💰) to study in Germany 🇩🇪 </p>
              <p> 2 semesters having pretzels as breakfast at the School of Informatics 🥨 </p>
              <p> Got fascinated with DL and Computer Vision (so hypeeeed in 2019  👾)</p>    
            </div>
            <div className='icon'>
              <img src="/img/tum-1.png"></img>
            </div>
          </li>

          
          {/* `{IVSR}` */}
          <li class="event" id="date" data-date="2020">
            <div>
              <h3>Autonomous Drones</h3>
              <p>Came back to HUST for finishing up my thesis</p>
              <p>Research Assistant at IVSR Lab under Dr. Anh Quang Nguyen (a die-hard fan of Man United 🔱👹🏴󠁧󠁢󠁥󠁮󠁧󠁿) </p>
              <p>Integrated neural nets into navigation and control softwares embedded on delivery UAVs (Yay, Uber Eats Airline! 🍗🍟) </p>
              <p>Published a couple of papers under guidance from supportive mentors in 🇦🇹, 🇩🇰 and 🇯🇵</p>
              <p>Tried to create racing drones that can go fully auto-pilot ... </p>    
              <p>... but end up leaving the project to my entrusted brother Dung Tran 😅</p>
              <p>... as I was bored of Controlled Experiment Research, and wanted to have a few taste of ....</p>    
    
            </div>
            
            <div className='icon'>
              <img src="/img/tugraz.png"></img>
            </div>

            <div className='icon'>
              <img src="/img/airlab.png"></img>
            </div>
          
            <div className='icon'>
              <img src="/img/ritsumeikan-1.png"></img>
            </div>
          </li>
          {/* </li> */}
          {/* BREAK */}
          <li class="event" id="date" data-date="">
            <div>
              <h3>GOING INTO THE INDUSTRY 😈😈😈....
              </h3>
            </div> */

          </li>

          {/* <li class="event" id="date" data-date="2019"> */}
            {/* <div> */}
              {/* <h3>Training NNs for Robotics</h3> */}
              {/* <p>"We can be all things to Squarespace users!" 📣</p>     */}
            {/* </div> */}
            
          

          {/* FPT Software */}
          <li class="event" id="date" data-date="2022">
            <div>
              <h3>AI4Code Team, FPT Software AI Center</h3>
              <p>Landed my first job at the biggest and baddest software outsourcing company in Vietnam!</p>
              <p>"....But ...but I do not want to become an outsource developer, Mr. Recruiter! Can I do something else, pleaseeee! " 🥹🥹🥹</p>        
              <p>Ended up in Dr. Nghi Bui's AI4Code team, developed internal AI tools that can (ironically) enable even more productive and less miserable outsource developers 😂😂😂 </p>
              <p>Working under my kind-hearted and wiseful mentor, enlightener and gym bud Khanh Nghiem 😎💚</p>
              <p>Divided my efforts into 70% for engineering ⌨️, 30% for conducting Design, Mining Research 🔬</p>
            </div>

            <div className="image" style={{ width: '300px', height: '200px' }}>
              <img src="/img/aic.png" style={{ width: '100%', height: 'auto' }} />
            </div>

          </li>

          <li class="event" id="date" data-date="as an AI Engineer">
            <div>
              <h3>Building AI Coding Assistants</h3>
              <p>Helped created Docify, an extension that allow developers to document their codes faster so that they would not be scolded by their senior colleagues </p>    
            </div>
            <div className='icon'>
              <img src="/img/codevista.png"></img>
            </div>
            <div className='icon'>
              <img src="/img/docify.png"></img>
            </div>
          </li>

          <li class="event" id="date" data-date="as an AI Researcher">
            <div>
              <h3>EMNLP 2023</h3>
              <p>"We can be all things to Squarespace users!" 📣</p>    
            </div>
            <div className='icon'>
              <img src="/img/the-vault.png"></img>
            </div>
            <div className='icon'>
              <img src="/img/codetext_logo.png"></img>
            </div>
          </li>

          <li class="event" data-date="April 2024">
            <div>
              <h3>ICSE 2024</h3>
              <p>Attended the 46th International Conference on Software Engineering 📣</p>
              <p>Presented at the 1st ACM/IEEE Workshop on IDEs hosted by JetBrains 📣</p>
              <p>Our position paper {''}
                <span
                  className="link"
                  onClick={() =>
                    window.location.href = 'https://dl.acm.org/doi/10.1145/3643796.3648467'
                  }
                >
                  "Envisioning the Next-Generation AI Coding Assistants: Insights & Proposals" won the Best Paper Award
                </span>{''} 📣</p>
            </div>
            <div className='icon'>
              <img src="/img/icse-2.jpg"></img>
            </div>
          </li>


          going back to the academia ....
          {/* BREAK */}
          <li class="event" id="date" data-date="">

          </li>
          

          {/* DUBLIN */}
          <li class="event" data-date="September 2024">
            <div>
              <h3>Started my PhD at University College Dublin</h3>
              <p>Back to academia 🎓</p>
              <p>
                Supervised by{' '}
                <span
                  className="link"
                  onClick={() =>
                    window.location.href = 'https://people.ucd.ie/liliana.pasquale'
                  }
                >
                  Dr. Liliana Pasquale
                </span>{' '}
                and{' '}
                <span
                  className="link"
                  onClick={() =>
                    window.location.href = 'https://people.ucd.ie/alzubair.hassan'
                  }
                >
                  Dr. Alzubair Hassan
                </span>
              </p>            </div>
            <div className='icon'>
              <img src="/img/ucd-2.png"></img>
            </div>
            <div>
              <h3>Researcher at LERO </h3>
              <p>The SFI Research Centre for Software</p>
              <p>Ivestigating the association between AI and Software Security</p>

            </div>
            <div className='icon'>
              <img src="/img/lero_centre_logo.jpeg"></img>
            </div>
          </li>


          <li class="event" data-date="">
            
            <div>
              {/* <h3>Squareflair Today</h3> */}
              
              {/* <p>"We design and build from scratch!" 📣</p> <p>When we say <em><strong>100% custom</strong></em> we mean it— and we build all sites on the Squarespace Developer platform.</p> */}
                {/* <p>Did you know that all of our pixels are hand-forged from the rarest of subpixels grown and harvested in the <em>Nerd Forest</em>? <br/>🤜💥🤛</p> */}
                      
              {/* <p><strong>Our success can be measured by lives and brands enhanced by 9+ years of 100% Squarespace-focused service!</strong></p> */}
              
              <p><a href="https://www.squareflair.com">My Full CV</a></p>
            </div>
            {/* <div className='icon'>
              <img src="https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_1280.png"></img>
            </div> */}
          </li>
        </ul>
      </div>
    </Layout>
  );
}