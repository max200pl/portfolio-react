import React from 'react'

const ModalSeeMyResume = () => {
  return (
    <div class="modal">
    <div class="modal__dialog">
      <button class="modal__close" type="button" data-close>
        <img src="images/modal/exit.svg" alt="Close" />
      </button>

      <div class="modal__content">
      
        <div class="elements__container">

          <div class="elements">
           

            
               
            
         

       
          <div class="elements__wrapper ">

            <div class="elements elements--basis_60">
              <h1 class="elements__title">HARD Skills</h1>

              <div class="skills">
                <div class="skills-item">
                  <h3 class="skills__title">HTML 5</h3>
                  <div class="skills-item__progress" data-progress="90">
                  </div>
                </div>
                
                <div class="skills-item">
                  <h3 class="skills__title">CSS 3</h3>
                  <div class="skills-item__progress" data-progress="80">
                  </div>
                </div>
               
                <div class="skills-item">
                  <h3 class="skills__title">JavaScript</h3>
                  <div class="skills-item__progress" data-progress="40">
                  </div>
                </div>
              
                <div class="skills-item">
                  <h3 class="skills__title">Jquery</h3>
                  <div class="skills-item__progress" data-progress="60">
                  </div>
                </div>
             
                <div class="skills-item">
                  <h3 class="skills__title">PHP</h3>
                  <div class="skills-item__progress" data-progress="30">
                  </div>
                </div>
              
                <div class="skills-item">
                  <h3 class="skills__title">@Media</h3>
                  <div class="skills-item__progress" data-progress="90">
                  </div>
                </div>
              
                <div class="skills-item">
                  <h3 class="skills__title">БЭМ</h3>
                  <div class="skills-item__progress" data-progress="70">
                  </div>
                </div>
               
                <div class="skills-item">
                  <h3 class="skills__title">Git</h3>
                  <div class="skills-item__progress" data-progress="90">
                  </div>
                </div>
               
                <div class="skills-item">
                  <h3 class="skills__title">Gulp 4</h3>
                  <div class="skills-item__progress" data-progress="75">
                  </div>
                </div>
              

              </div>
             
            </div>
            

            <div class="elements elements--basis_40 elements--border_left elements--padding">
              <h1 class="elements__title">Languages</h1>

              <h4 class="languages__title">English</h4>
              <div class="languages__degree">Pre-Intermediate</div>

              <h4 class="languages__title">Ukrainian</h4>
              <div class="languages__degree">Native</div>

              <h4 class="languages__title">Russian</h4>
              <div class="languages__degree">Native</div>
            </div>
          </div>

       
          <div class="elements">
            <h1 class="elements__title">Work History</h1>
            <div class="works-modal">
              <div class="works-modal__data">
                <div class="works-modal__name">Company: Spunch web-studio</div>
                <div class="works-modal__specialty">Specialty: Junior HTML developer </div>
                <div class="works-modal__time">
                  <span class="works-modal__startDate">february 2020</span>
                  <span class="works-modal__endDate">July 2020</span>
                  <span class="works-modal__fulDate"></br>(3 months)</span>
                </div>
              </div>
              <div class="works-modal__description">
                <div class="works-modal__responsibilities">My responsibilities:</div>
                <div class="works-modal__specialty">
                  <ul class="works-modal__specialty-list">
                    <li>Adaptation for different screen sizes (@media)</li>
                    <li>Turning a PSD template into code HTML\CSS</li>
                    <li>Integration of layout pages into project (Laravel/PHP)</li>
                    <li>Making edits to existing code (HTML/CSS)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="works-modal">
              <div class="works-modal__data">
                <div class="works-modal__name">Company: Turaiev.company</div>
                <div class="works-modal__specialty">Specialty: HTML developer </div>
                <div class="works-modal__time">
                  <span class="works-modal__startDate">June 2021</span>
                  <span class="works-modal__endDate">...</span>
                  <span class="works-modal__fulDate"></br>(2 months)</span>
                </div>
              </div>
              <div class="works-modal__description">
                <div class="works-modal__responsibilities">My responsibilities:</div>
                <div class="works-modal__specialty">
                  <ul class="works-modal__specialty-list">
                    <li>Cross-browser layout with templates (Figma)</li>
                    <li>Implementation of responsive sliders (native js\@media)</li>
                    <li>Application of BEM methodology</li>
                    <li>Turning a PSD template into code (HTML\CSS\SASS)</li>
                    <li>Integration of layout pages into project (ExpressJS/NodeJS)</li>
                    <li>Sliders in pure js</li>
                    <li>Form submission(fetch, axios)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
          <div class="elements">
            <h1 class="elements__title">Education</h1>

            <div class="education">
              <div class="education__data">
                <div class="education__city">Kharkiv</div>
                <div class="education__time">
                  <span class="education__startDate">September 2014</span>
                  <span class="education__endDate">february 2019</span>
                  <span class="education__fulDate"></br>(4 years 5 months)</span>
                </div>
              </div>
              <div class="education__description">
                <div class="education__university">National University of Radioelectronics</div>
                <div class="education__specialty">Automation and computer-integrated technologies</div>
              </div>
            </div>
            <div class="education">
              <div class="education__data">
                <div class="education__city">Druzhkivka</div>
                <div class="education__time">
                  <span class="education__startDate">September 2010</span>
                  <span class="education__endDate">July 2014</span>
                  <span class="education__fulDate"></br>(4 years)</span>
                </div>
              </div>
              <div class="education__description">
                <div class="education__university">College of Donbass State Engineering Academy</div>
                <div class="education__specialty">Technical maintenance of machines with PU and RTC</div>
              </div>
            </div>
          </div>
           
          
          <div class="elements">
            <h1 class="elements__title">Achievements</h1>
            <!-- Achievements 1 -->
            <div class="achievements">
              <div class="achievements__data">
                <div class="achievements__city">Kharkiv</div>
                <div class="achievements__time">
                  <span class="achievements__startDate">April 2017</span>
                </div>
              </div>
              <div class="achievements__description">
                <div class="achievements__university">Kharkiv National University of Radioelectronics</div>
                <div class="achievements__specialty">Automation and computer-integrated technologies</div>

                <div class="achievements__summary">
                  <h2>Exhibition: Youth Technical Creativity</h2>
                  <p>Place: <span>First place</span></p>
                  <p>Nomination: <span>devices and mechanism</span></p>
                  <a
                    href="https://nure.ua/ru/department/kafedra-kompyuterno-integrirovannyih-tehno-logiy-avtomatizatsii-i-mehatroniki-kitam/laboratorii-kafedry/studencheskoe-konstruktorskoe-tehnologicheskoe-bjuro-po-robototehnike-i-mehatronike">
                    link to NURE.ua</a>
                </div>

              </div>
            </div>
            <!-- /achievements 1 -->
          </div>
          <!-- /element 5 -->
        </div>
        <!-- elements__container -->

        <!-- resume-footer -->
        <div class="resume-footer">
          <a class="resume-footer__btn" href="#">PRINT</a>
          <a class="resume-footer__btn" href="#" data-modal="#modal_hire-me">Hire me</a>
          <a class="resume-footer__btn" href="#">Download PDF</a>
        </div>
        <!-- resume-footer -->

      </div>
    </div>
   
  </div>
  )
}

export default ModalSeeMyResume