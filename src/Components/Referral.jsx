import React, { useState, useEffect } from 'react';


export default function Referral() {
    const [referralLink, setReferralLink] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [copiedCount, setCopiedCount] = useState(0);

    // set loggedin state to true to automatically generate referral link
    useEffect(() => {
        setIsLoggedIn(true);
        generateReferralLink();
      }, []);

    // to generate the referral link
    const generateReferralLink = async () => {
        try {
          const referralCode = generateRandomReferralCode(); 
          const referralLink = `https://mealmapa.com/signup?referral=${referralCode}`;
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
    const copyReferralLink = () => {
        const referralLinkInput = document.getElementById('referralLink');
        referralLinkInput.select();
        
        try {
          navigator.clipboard.writeText(referralLinkInput.value);
          setCopiedCount(copiedCount + 1);
          alert('Referral link copied to clipboard');
        } catch (error) {
          console.error('Failed to copy referral link: ', error);
        }
    };

    return (
        <>
            <div className=" text-left inline-block w-80 bg-slate-100 border pl-4 py-2 rounded-xl">
                <h1 className="text-3xl mb-2"><span id="count" className="font-semibold">{copiedCount * 10}</span> Pts</h1>
                <p className="text-sm mb-3 ">Reach 400 points and get a meal on us!</p>
                <button className="bg-black text-white rounded-md px-2 pb-1">Redeem Points</button>
            </div><br></br>
    
            <div className="text-left inline-block w-80 bg-slate-100 border pl-4 py-2 rounded-xl mt-4">
                <p className="font-semibold mb-2">Invite a friend</p>
                <p className="text-sm mb-3 ">Earn 10 points for every friend that signs up.</p>
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
                    <button onClick={copyReferralLink} className="bg-black text-white rounded-lg text-sm pb-1 px-1 absolute right-2">
                    Copy
                    </button>
                </div>
                )}
                {!isLoggedIn && <div className="bg-white border rounded-lg inline-block w-[270px] relative px-2 py-2">
                    <input
                    className="placeholder:text-blue-700 text-sm inline-block w-[200px] text-blue-700"
                    type="text"
                    placeholder="https://example.com/blessing"
                    readOnly
                    />
                    <button className="bg-black text-white rounded-lg text-sm pb-1 px-1 absolute right-2">
                        Copy
                    </button>
                </div>}
                
            </div>
        </>
    );
}