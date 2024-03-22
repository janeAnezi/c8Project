
import React, { useState, useEffect } from 'react';
import suffiximg from '../assets/images/suffix.png'

export default function Referral() {
    const [referralLink, setReferralLink] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [copiedCount, setCopiedCount] = useState(0);
  

    // to set loggedin state to true to automatically generate referral link
    useEffect(() => {
        setIsLoggedIn(true);
        generateReferralLink();
      }, []);

    // to retrieve the points from localStorage and display the latest points for each user
    useEffect(() => {
      const points = localStorage.getItem('Points');
      if (points) {
          setCopiedCount(parseInt(points));
      }
    }, []);
    
    // to generate the referral link
    const generateReferralLink = async () => {
        try {
          const referralCode = generateRandomReferralCode(); 
          const referralLink = `https://MealPal.com/signup?referral=${referralCode}`;
          // to Save referral code to local storage
          localStorage.setItem('referralCode', referralCode);
    
          setReferralLink(referralLink);
        } catch (error) {
          console.error('Error generating referral link:', error);
        }
    };

    // to generate random characters  for referral link 
    const generateRandomReferralCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let referralCode = '';
        for (let i = 0; i < 6; i++) {
          referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return referralCode;
    };

    // to copy the referral link to clipboard
    const copyReferralLink = (event) => {
      setReferralLink(event.target.value);
        
        try {
          navigator.clipboard.writeText(referralLink);
          
          // Show the notification
          var notification = document.getElementById("copyNotification");
          notification.style.opacity = "1";

          // Hide the notification after 1 second
          setTimeout(function() {
            notification.style.opacity = "0";

            // Delay before fetching points from local storage
            setTimeout(() => {
              const points = localStorage.getItem('Points');
              if (points) {
                setCopiedCount(parseInt(points));
              }
            }, 500);
          }, 1000);
          
          // Update points in localStorage
          let points = copiedCount + 10;
          localStorage.setItem('Points', points.toString()); 

        } catch (error) {
          console.error('Failed to copy referral link: ', error);
        }
    };
    const redeemPoints = () => {   
      const updatedPoints = Math.max(copiedCount - 400, 0);
      localStorage.setItem('Points', updatedPoints.toString());
      setCopiedCount(updatedPoints);
    };

    if (copiedCount >= 400) {
      document.getElementById('redeem').style.background = 'green'
    }

    

    return (
        <><div className='flex justify-center items-center'>
            <div className=" text-left inline-block w-80 bg-slate-100 border mt-3 pb-2 px-3 pt-3 rounded-xl">
              <h1 className="text-3xl mb-2"><span id="count" className="font-semibold">{copiedCount}</span> Pts</h1>
              <p className="text-sm mb-2 ">Reach 400 points and get a meal on us!</p>
              <button id='redeem' onClick={redeemPoints} disabled={copiedCount < 400} className="bg-black hover:bg-slate-700 text-white rounded-md px-2 pb-1">Redeem Points</button>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="text-left inline-block w-80  bg-slate-100 border pb-2 px-3 pt-3 rounded-xl mt-4">
                <p className="font-semibold mb-2">Invite a friend</p>
                <p className="text-sm mb-2 ">Earn 10 points for every friend that signs up.</p>
                {isLoggedIn && (
                <div className="bg-white border rounded-lg inline-block w-[270px] relative px-2 py-2">
                    <input
                    id="referralLink"
                    className="placeholder:text-blue-700 text-sm inline-block w-[200px] text-blue-700"
                    type="text"
                    placeholder="https://example.com/blessing"
                    value={referralLink}
                    readOnly
                    />
                    <button onClick={copyReferralLink} className="bg-black hover:bg-slate-700 text-white rounded-lg text-sm pb-1 px-1 absolute right-2">
                    Copy
                    </button>
                    {/* pop up notification */}
                    <div id="copyNotification" className="fixed top-[236px] right-[138px] text-xs text-green-700 opacity-0  transition-opacity duration-700">Copied!</div>
                </div>
                )}
                {!isLoggedIn && <div className="bg-white border rounded-lg inline-block w-[270px] relative px-2 py-2">
                    <input
                      className="placeholder:text-blue-700 text-sm inline-block w-[200px] text-blue-700"
                      type="text"
                      placeholder="https://example.com/blessing"
                      readOnly
                    />
                    <button className="bg-black  text-white rounded-lg text-sm pb-1 px-1 absolute right-2">
                      Copy
                    </button>
                </div>}
                
            </div>
          </div>
          <div className='flex justify-center items-center mt-4'><img src={suffiximg} alt="a suffix-image"/></div>
        </>
    );
}
