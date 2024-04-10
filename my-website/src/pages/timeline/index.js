import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <div id="timeline-content">
        <h1>Timeline</h1>

        <ul class="timeline">
          <li class="event" data-date="65Million B.C.">
            <div>
              <h3>Dinosaurs Roamed the Earth</h3>
              <p>RAWWWWWWRRR 🐢🦂</p>
            </div>
            <div className='icon'>
              <img src="https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_1280.png"></img>
            </div>
            
          </li>
          <li class="event" data-date="2005">
            <div>
              <h3>Creative Component Launched</h3>
              <p>"We can be all things to all people!" 📣</p>
              <p>"We can be all things to all people!" 📣</p>
              <p>"We can be all things to all people!" 📣</p>
              <p>"We can be all things to all people!" 📣</p>
              <p>"We can be all things to all people!" 📣</p>
              <p>"We can be all things to all people!" 📣</p>
              <p>"We can be all things to all people!" 📣</p>
              <p>"We can be all things to all people!" 📣</p>
            </div>
            <div className='icon'>
              <img src="https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_1280.png"></img>
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