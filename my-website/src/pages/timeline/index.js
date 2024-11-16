import React from 'react';
import Layout from '@theme/Layout';
import './index.module.css'
export default function MyReactPage() {
  return (
    <Layout>
      <div id="timeline-content">
        <h1>Timeline</h1>

        <ul class="timeline">
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

          <li class="event" data-date="April 2024">
            <div>
              <h3>ICSE 2024</h3>
              <p>Attended the 46th International Conference on Software Engineering 📣</p>
              <p>Presented at the 1st ACM/IEEE Workshop on IDEs 📣</p>
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
          <li class="event" id="date" data-date="2009">
            <div>
              <h3>Squareflair was Born</h3>
              <p></p> <p>"We can be all things to Squarespace users!" 📣</p>    
            </div>
            <div className='icon'>
              <img src="https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_1280.png"></img>
            </div>
          </li>
          
          <li class="event" data-date="2021">
            <div>
              <h3>Squareflair Today</h3>
              
              <p>"We design and build from scratch!" 📣</p> <p>When we say <em><strong>100% custom</strong></em> we mean it— and we build all sites on the Squarespace Developer platform.</p>
                <p>Did you know that all of our pixels are hand-forged from the rarest of subpixels grown and harvested in the <em>Nerd Forest</em>? <br/>🤜💥🤛</p>
                      
              <p><strong>Our success can be measured by lives and brands enhanced by 9+ years of 100% Squarespace-focused service!</strong></p>
              
              <p><a href="https://www.squareflair.com">squareflair.com</a></p>
            </div>
            <div className='icon'>
              <img src="https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_1280.png"></img>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}