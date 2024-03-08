import React, { useState, useEffect } from 'react';


export default function Referral() {
    const [referralLink, setReferralLink] = useState('');

    // to generate random characters  for referral link 
    const generateRandomReferralCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let referralCode = '';
        for (let i = 0; i < 6; i++) {
          referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return referralCode;
    };

    return (
        <>
            <div className=" text-left inline-block w-80 bg-slate-100 border pl-4 py-2 rounded-xl">
                <h1 className="text-3xl mb-2"><span id="count" className="font-semibold">0</span> Pts</h1>
                <p className="text-sm mb-3 ">Reach 400 points and get a meal on us!</p>
                <button className="bg-black text-white rounded-md px-2 pb-1">Redeem Points</button>
            </div><br></br>
    
            <div className="text-left inline-block w-80 bg-slate-100 border pl-4 py-2 rounded-xl mt-4">
                <p className="font-semibold mb-2">Invite a friend</p>
                <p className="text-sm mb-3 ">Earn 10 points for every friend that signs up.</p>
                <div className="bg-white border rounded-lg inline-block w-[270px] relative px-2 py-2">
                    <input
                        id="referralLink"
                        className="placeholder:text-blue-700 text-sm inline-block w-[200px] text-blue-700"
                        type="text"
                        placeholder="https://example.com/blessing"
                        readOnly
                    />
                    <button className="bg-black text-white rounded-lg text-sm pb-1 px-1 absolute right-2">
                    Copy
                    </button>
                </div>
            </div>
        </>
    );
}