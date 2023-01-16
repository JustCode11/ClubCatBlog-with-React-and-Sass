import React from 'react';
import Layout from './components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import CatVideo from '../assets/video/video.mp4';
// images introduction
import IntroductionCat1 from '../assets/img/introduction/cat1.jpg';
import IntroductionCat2 from '../assets/img/introduction/cat2.jpg';
import IntroductionCat3 from '../assets/img/introduction/cat3.jpg';
// images tipps
import TippsCat from '../assets/img/tipps/cat.jpg';
// images motivation
import MotCat1 from '../assets/img/motivation/mot1.jpg';
import MotCat2 from '../assets/img/motivation/mot2.jpg';
import MotCat3 from '../assets/img/motivation/mot3.jpg';
// images contact
import ContactCat from '../assets/img/contact/contactCat.jpg';
// images info
import InfoCat from '../assets/img/infos/infoCat.jpg';
// images review
import ReviewCat from '../assets/img/review/reviewCat.jpg';

import IntroductionCard from './components/IntroductionCard';
import InfoBox from './components/InfoBox';

const App = () => {
    const introductionData = [
        {
            img: IntroductionCat1,
            title: "Cat Cafe",
            description: "Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus."
        },
        {
            img: IntroductionCat2,
            title: "Cat Care",
            description: "Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus."
        },
        {
            img: IntroductionCat3,
            title: "Pet Guide",
            description: "Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus."
        }
    ]
    const infoData = [
        {
            title: "pet guide",
            description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
        },
        {
            title: "top tips",
            description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
        },
        {
            title: "best toys",
            description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
        },
        {
            title: "cat products",
            description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
        },
        {
            title: "cat lovers",
            description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
        },
        {
            title: "gifts for cats",
            description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
        }
    ]
    return (
        <Layout>
            <div className="intro">
                <video loop autoPlay muted id="bg-video">
                    <source src={CatVideo} type="video/mp4"></source>
                </video>
                <div className="text-intro">
                    <span>Tips for life with cats</span>
                    <h1>Cat stories,<br /> news, tips & tricks</h1>
                </div>
            </div>
            <div className="introduction">
                <div className="introduction__topBg">
                    <div className="introduction__topBg__title container">
                        <h2>Welcome to the Club Cat Blog</h2>
                        <p>Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint
                            occaecat.</p>
                    </div>
                </div>
                <div className="introduction__cardsBg">
                    <div className="introduction__cardsBg__cards container spacing">
                        {introductionData && introductionData.map((card, index) => {
                            return (
                                <IntroductionCard key={index} title={card.title} description={card.description} img={card.img} />
                            )
                        })}
                    </div>
                </div>
                <div className="introduction__bottomBg"></div>
            </div>
            <div className="tipps">
                <div className="tipps__bg">
                    <div className="tipps__bg__container container">
                        <div className="tipps__bg__container__top">
                            <img src={TippsCat} alt="Cat laying" />
                        </div>
                        <div className="tipps__bg__container__bottom">
                            <div className="tipps__bg__container__bottom__darkBox">
                                <span>cat blog</span>
                                <p>Thinking of getting a cat?</p>
                            </div>
                            <div className="tipps__bg__container__bottom__lightBox">
                                <h3>Cat Care for Beginners</h3>
                                <ol>
                                    <li>Provide plenty of human companionship.</li>
                                    <li>Provide regular, suitable meals with a constant supply of fresh water.</li>
                                    <li>Provide a clean and comfortable bed.</li>
                                    <li>Provide the cat with outdoor access or be prepared to empty and clean a litter tray on a daily basis.</li>
                                </ol>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="motivation">
                <div className="motivation__bg">
                    <div className="motivation__bg__cards container">
                        <div className="motivation__bg__cards__card">
                            <img src={MotCat1} alt="couple with cat" />
                        </div>
                        <div className="motivation__bg__cards__card">
                            <img src={MotCat2} alt="couple with cat in box" />
                        </div>
                        <div className="motivation__bg__cards__card">
                            <img src={MotCat3} alt="woman with cat" />
                        </div>
                        <div className="motivation__bg__cards__card spacingM">
                            <h3>Why do we love cats?</h3>
                            <p>​​Adipiscing bibendum est ultricies integer quis auctor elit. Eget nunc scelerisque viverra mauris in. Volutpat est velit egestas dui id. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nulla pharetra diam sit amet nisl. Lorem ipsum dolor sit amet consectetur adipiscing elit. Tempus quam pellentesque nec nam aliquam sem et. Nunc</p>
                            <button>read more</button>
                        </div>
                    </div>
                </div>
                <div className="motivation__darkBg"></div>
            </div>
            <div className="contact">
                <div className="contact__bg">
                    <div className="contact__bg__container container spacingLg">
                        <img src={ContactCat} alt="cat face" />
                        <p className="contact__bg__container__header">Get the greatest stories right in your mailbox</p>
                        <form className="contactForm">
                            <label htmlFor="email" hidden>
                                Email
                            </label>
                            <input type="email" placeholder="Enter a valid email address" />
                            <input type="submit" value="submit" />
                        </form>
                        <p className="contact__bg__container__info">And don’t worry, we hate spam too! You can unsubcribe at anytime.</p>
                    </div>
                </div>
            </div>
            <div className="infos">
                <div className="infos__bg">
                    <div className="infos__bg__container container">
                        <div className="infos__bg__container__top">
                            <div className="img-container">
                                <img src={InfoCat} alt="woman with cat" />
                            </div>
                        </div>
                        <div className="infos__bg__container__bottom">
                            <div className="infoBox-container">
                                {infoData.map((info, index) => {
                                    return <InfoBox key={index} title={info.title} description={info.description} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="infos__bgDark"></div>
            </div>
            <div className="review">
                <div className="review__bg">
                    <div className="review__bg__container container">
                        <section className="review__bg__container__text spacingM">
                            <h3>Keeping Pets Happy</h3>
                            <p>Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Ut faucibus pulvinar elementum integer enim neque volutpat. Augue mauris augue neque gravida in. Venenatis cras sed felis eget velit aliquet sagittis. Morbi leo urna molestie at.</p>
                            <button>read more</button>
                        </section>
                        <div className="review__bg__container__img">
                            <div className="img-background">
                                <img src={ReviewCat} alt="woman with cat" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form">
                <div className="form__bg">
                    <div className="form__bg__container container">
                        <div className="form__bg__container__top spacingM">
                            <h3>Need Help?</h3>
                            <p>​Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div className="form__bg__container__top__socials">
                                <a href="#" aria-label="Link to Facebook">
                                    <FontAwesomeIcon icon={faFacebookF} title="Facebook" />
                                </a>
                                <a href="#" aria-label="Link to Twitter">
                                    <FontAwesomeIcon icon={faTwitter} title="Twitter" />
                                </a>
                                <a href="#" aria-label=" Link to Instagram">
                                    <FontAwesomeIcon icon={faInstagram} title="Instagram" />
                                </a>
                                <a href="#" aria-label=" Link to Google Plus">
                                    <FontAwesomeIcon icon={faGooglePlusG} title="Google Plus" />
                                </a>
                            </div>
                        </div>
                        <div className="form__bg__container__bottom">
                            <form className="spacing">
                                <div className="form-row">
                                    <label>Name</label>
                                    <input type="text" placeholder="Enter your Name" />
                                </div>
                                <div className="form-row-container">
                                    <div className="form-row">
                                        <label>Phone</label>
                                        <input type="text" placeholder="Enter your phone" />
                                    </div>
                                    <div className="form-row">
                                        <label>Email</label>
                                        <input type="email" placeholder="Enter a valid email address" />
                                    </div>
                                </div>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="form__bgDark"></div>
            </div>
        </Layout>
    )
}

export default App;