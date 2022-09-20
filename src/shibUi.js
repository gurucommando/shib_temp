import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./navbar";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class Shiba_Ui extends React.Component {
    state = { 

     } 
     
    render() { 
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 4
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        return (
        <>
          
            <Navbar/>
             
            <div className="row row-1">
                        <div class="col-lg-7 p-5">
                            <h1>A Decentralized Meme Token that Evolved into a Vibrant Ecosystem</h1>
                            <p>
                            SHIB, LEASH, BONE — ShibaSwap — Innovative Reward System — The Shiba Incubator — And more. 585k+ Community Members and Growing Fast!
                            </p>
                            <button className="btnHow">How To Buy</button>
                            <button className="btnBuy">Read WoofPaper v2</button>
                        </div>
                        <div class="col-lg-5">
                           <img className="moon" src="/images/moon.svg"/>
                           <img className="shiba" src="/images/hero-shib.png"/> 
                        </div>
               
            </div>

    {/* ============================================================================================================== */}
            <div className="row row-2">
                <div className="col-lg-6 p-5 col-our">
                    <h1>Our Project & Ecosystem</h1><br/>
                    
                        <p>From its inception, Shiba Inu has done things differently. Starting with a supply of 1 quadrillion, our founder, Ryoshi, locked 50% in Uniswap, then “burned” the other half to Ethereum co-founder Vitalik Buterin for safekeeping.</p><br/>
                        <p>To help reverse the devastating spread of Covid-19 in India, VB has since utilized SHIB in the largest crypto donation in history, and then actually burned 40% of its total supply to a dead wallet, ensuring our long-term success and stability. In the words of Ryoshi, “Thank you to the woofmeister for enabling true decentralization. Now we truly begin.”</p>
                  
                </div>
                <div className="col-lg-6 col-our-2">
                    
                    <div class="row row-cols-1 row-cols-md-3 g-4 p-5 mainCard">
                            <div class="col">
                                <div class="card">
                                   {/* <center><img src="/images/card-1.svg" class="card1-img-top" alt="card-1"/></center> */}
                                   {/* <center><img src="/images/redhorse.svg" class="card-img-bottom" alt="card-1"/></center> */}
                                    <div class="card-body">
                                        <p class="card-title">Liquidity Locked  to Uniswap </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                {/* <center><img src="/images/card-2.png" class="card-img-top" alt="..."/></center>  */}
                                   {/* <center><img src="/images/bluecard.png" class="card2-img-bottom" alt="card-1"/></center> */}

                                    <div class="card-body">
                                        <p class="card-title">India's Covid Relief Fund</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                   {/* <center><img src="/images/card-3.svg" class="card-img-top" alt="..."/></center> */}
                                   {/* <center><img src="/images/greencard.svg" class="card-img-bottom" alt="card-1"/></center> */}

                                    <div class="card-body">
                                        <p class="card-title">Vitalik Buterin Burn burn </p>
                                    </div>
                                </div>
                            </div>
                            
                          
                            
                        </div>
                    </div>
                  
                </div>

            
{/* ============================================== SHIB CARD =========================================== */}
            <div className="row p-5 row-3">
                <div className="col">
                    <div class="main-card-2">
                        <div class="col">
                            <div class="card">
                                <center><img src="/images/shib-1.png" class="card-img-top" alt="..."/></center>
                                <div class="card-body">
                                    <div className="d-flex liveBtn">
                                        <h3 class="card-title">SHIB</h3>
                                        <button>See Live Chart</button>
                                    </div>
                                    <p class="card-text">The Shiba Inu token is our foundational currency that allows investors to hold millions,
                                                         billions, or even trillions, of it in their wallets. <br/><br/>Between its international recognition and its legitimate utility,
                                                         SHIB is up thousands of times and is constantly expanding its reach. SHIB is the first 
                                                         to be listed and incentivized on ShibaSwap, our proprietary DEX.
                                    </p>
                                    <button className="btnEnd">Buy SHIB</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div class="main-card-2">
                        <div class="col">
                            <div class="card">
                                <center><img src="/images/shib-2.png" class="card-img-top" alt="..."/></center>
                                <div class="card-body">
                                    <div className="d-flex liveBtn">
                                        <h3 class="card-title">LEASH</h3>
                                        <button>See Live Chart</button>
                                    </div>
                                    <p class="card-text">LEASH was originally set to be a rebase token, but then we removed the rebase and unleashed its 
                                                        full potential. With a total supply of ONLY 107,646 tokens, it represents the
                                                         other end of our Ecosystem spectrum. <br/><br/><br/>LEASH is the second token incentivized on ShibaSwap and will offer 
                                                         lucrative rewards for the holders providing its liquidity.
                                    </p>
                                    <button className="btnEnd">Buy LEASH</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div class=" main-card-2">
                        <div class="col">
                            <div class="card">
                                <center><img src="/images/shib-3.png" class="card-img-top" alt="..."/></center>
                                <div class="card-body">
                                    <div className="d-flex liveBtn">
                                        <h3 class="card-title">BONE</h3>
                                        <button>See Live Chart</button>
                                    </div>
                                    <p class="card-text">BONE has 250,000,000 tokens, and is designed to fit perfectly between 
                                                        the previous two tokens in regards to circulation supply.
                                                         <br/><br/>Moreover, the token is a Governance token which will allow 
                                                         the #ShibArmy to vote on upcoming proposals on our Doggy DAO.
                                    </p>
                                    <button className="btnEnd">Buy Bone</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
{/* =============================================== HOW TO BUY ============================================== */}
        <div className="main-Buy">  
            <div className="row row-4">
                <div className="col-lg-7 order-lg-1 order-last col-our">
                        <h1>How To Buy</h1><br/>
                        <p>SHIB and LEASH are best purchased and sold through ShibaSwap, but can also be found on Uniswap and an ever-growing list of CEXs. Please note that, outside of ShibaSwap, exchanges which support one may not support the other.</p><br/>
                        <p>SHIB is a decentralized experiment and, as such, we always incentivize the use of DEXs. If you choose to utilize a CEX instead, remember to research it first to ensure it is both safe and secure.</p>
                    <button className="btnEnd1">Buy SHIB</button>
                    <button className="btnEnd1">Buy LEASH</button>
                    <button className="btnEnd1">Buy LEASH </button>
                    
                        <h2 className="quick">Quick Start Guide</h2>
                    
                </div>
                <div className="col-lg-5 order-sm-1 col-circle">
                    
                        <img className="astro" src="images/astro.png"/>
                        <img className="circle" src="/images/circle.svg"/>
                    
                    <div className="main-mini-shib">
                                <img className="circle-shib1" src="/images/miniShib-1.png"/>
                                <img className="circle-shib2" src="/images/miniShib-2.png"/>
                                <img className="circle-shib3" src="/images/miniShib-3.png"/>
                    </div>
                </div>
            </div>
{/* ====================================== Quick ============================================================================= */}
                <center>
                <div className="main-quick">
                    <div className="d-lg-flex flex-row card-main" >
                        <div className="d-lg-flex flex-row card-main-2">
                            <div className="quick-num">
                                1
                            </div>
                            <div className="yellow-line"></div>
                        </div>
                        <div className="card-text">
                            <h2>Create MetaMask wallet snap</h2>
                            <p>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive SHIB or LEASH.</p>
                            
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="d-lg-flex flex-row card-main" >
                        <div className="d-lg-flex flex-row card-main-2">
                            <div className="quick-num">
                                2
                            </div>
                            <div className="yellow-line"></div>
                        </div>
                        <div className="card-text">
                            <h2>Send ETH to your wallet</h2>
                            <p>You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the ERC-20 network when transfering ETH.</p>
                           
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="d-lg-flex flex-row card-main" >
                        <div className="d-lg-flex flex-row card-main-2">
                            <div className="quick-num">
                                3
                            </div>
                            <div className="yellow-line"></div>
                        </div>
                        <div className="card-text">
                            <h2>Connect your wallet to ShibaSwap</h2>
                            <p>Access your wallet to ShibaSwap by clicking ‘Connect to a wallet’ and selecting MetaMask.Access your wallet to ShibaSwap by clicking ‘Connect to a wallet’ and selecting MetaMask.</p>
                                                  
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="d-lg-flex flex-col card-main" >
                        <div className="d-lg-flex flex-row card-main-2">
                            <div className="quick-num">
                                4
                            </div>
                            <div className="yellow-line"></div>
                        </div>
                        <div className="card-text">
                            <h2>Swap ETH for SHIB, LEASH or BONE</h2>
                            <p>You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.</p>
                           
                        </div>
                    </div>
                    <div className="divider"></div>
            </div>
            </center>

{/* ====================================== Shiba app ======================================================================== */}
            <div className="row row-5">
                <div className="col-lg-6 shiba-col">
                  <center><img src="/images/shibaApp.png"/></center>
                    <button class="btnShibaApp" type="button">Use ShibaSwap</button>
                </div>
                <div className="col-lg-6 order-lg-2 order-first">
                    <h1>ShibaSwap</h1>
                    <div className="certik">
                        <img src="/images/certik-logo.svg"></img>
                        <li>On Board</li>
                        <button id="audit" type="button">Audit Report</button>
                    </div>
                    <p>SHIB, LEASH, and BONE, come together to create ShibaSwap, the next evolution in DeFi platforms. ShibaSwap gives users the ability to DIG (provide liquidity), BURY (stake), and SWAP tokens to gain WOOF Returns through our sophisticated and innovative passive income reward system.</p>
                    <p>Our platform also allows the ShibArmy to access upcoming NFTs and additional tools, such as portfolio trackers, to make navigating the crypto world simple and intuitive.</p>
                </div>
            </div>
            
    {/* ========================================== slider ===================================================== */}
    <div className="art">
        <h1>Art</h1>
        <p>We are proud to support ingenuity in all its forms with the Shiba Inu Incubator. The ShibArmy is made up of 
            talented individuals who have united to build something remarkable, and we support this by cultivating an 
            environment which encourages creativity and growth. Through the power of the Shiba Inu Incubator, we help
            holders find the tools they need to bring their inspiration and unique perspectives to life. This as just
                another way to encourage others to step outside of preconceived limits and regulations and experience what 
                it means to be part of our decentralized movement.</p>
    </div>
    
    <Carousel responsive={responsive}>
        <div className="slider"><img src="/images/slider1.jpeg"/></div>
        <div className="slider"><img src="/images/slider2.jpg"/></div>
        <div className="slider"><img src="/images/slider3.png"/></div>
        <div className="slider"><img src="/images/slider4.png"/></div>
        <div className="slider"><img src="/images/slider5.png"/></div>
        <div className="slider"><img src="/images/slider6.jpeg"/></div>
        <div className="slider"><img src="/images/slider7.png"/></div>
        <div className="slider"><img src="/images/slider8.png"/></div>
        <div className="slider"><img src="/images/slider9.png"/></div>
        <div className="slider"><img src="/images/slider10.png"/></div>
        
    </Carousel>;
    {/* =============================================== RESCUE ====================================== */}
                <div className="recuse">  
                    <div className="row row-4">
                        <div className="col-lg-7 col-our">
                                
                                    <h1>RESCUE</h1><br/>
                                    <p>From the tips of their noses to the ends of their tails, Shiba Inu are intelligent, brave, and independent, with an equal propensity for loyalty and mischief. Sadly, the characteristics which make them extraordinary are the same ones which make them a challenging pet. Inexperienced owners can find themselves unprepared for a dog that’s known for its bold (i.e. stubborn) personality.</p><br/>
                                    <p>Luckily, we are helping these dogs in real life! We use Amazon Smile to collect and donate a percentage of your Amazon purchases to the Shiba Inu Rescue Association. Joining is easy and free! Just use smile.amazon.com when placing orders and select Shiba Inu Rescue Association (a 501(c)3, preferred non-profit organization). You’re seconds away from helping Shibs in need. Start funding shelters today.</p>
                        </div>
                        <div className="col-lg-5">
                                
                            <button className="btnRescue" >Recuse Me</button>
                            <img className="candy-1" src="/images/candy-1.svg"/>
                            <img className="candy-2" src="/images/candy-2.svg"/>
                            <img className="candy-3" src="/images/candy-3.svg"/>
                            <img className="amazon" src="/images/amazon.svg"/>
                        </div>
                    </div>
                </div>
    </div>
        {/* ======================================= commounity ========================================== */}
         <div className="community">
                <h1>Community</h1>
                <p>If you'd like to donate to the Devs, send ETH, SHIB, LEASH or BONE here. Thank you for your support! WOOF!</p>
            <div className="copy">
                <p>0xc351155C80aCD043BD5F8FE7ffc8536af1fF937</p>
                <button type="button">copy to clipboard</button>

            </div>
        </div> 
        {/* ================================== Icon footer =============================== */}
        <div className="main-icon">
            <div className="icon-text">
                <p>Our community grows stronger every day. Please follow our social platforms to get the most up-to-date,accurate SHIB information.</p>
            </div>
            <div className="d-flex align-content-center icons">
                <a>
                    <img src="/images/teligram.svg"/>
                    <p>Teligram</p>
                </a>
                <a>
                    <img src="/images/twitter.svg"/>
                    <p>Twitter</p>
                </a>
                <a>
                    <img src="/images/reddit.svg"/>
                    <p>Reddti</p>
                </a>
                <a>
                    <img src="/images/discord.svg"/>
                    <p>Discord</p>
                </a>
               


            </div>
        </div>

      {/* ============================================= main footer ========================================= */}
            <div className="footer">
                <ul className=" d-flex footer-ul">
                    <li>Medium</li>
                    <li>Etherscan</li>
                    <li>CoinMarketCap</li>
                    <li>CoinGecko</li>
                </ul>
            </div>



</>
        );
    }
}
 
export default Shiba_Ui;