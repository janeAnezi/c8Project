import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const generateReferralLink = async (userId) => {
  const referralCode = generateUniqueReferralCode(); // Implement your own method to generate a unique referral code
  const referralLink = `https://example.com/signup?ref=${referralCode}`;

  // Store referral link in Firestore
  await firebase.firestore().collection('referralLinks').doc(userId).set({
    referralCode,
    referralLink,
  });
};

const ReferralComponent = ({ userId }) => {
  const [referralLink, setReferralLink] = useState('');

  useEffect(() => {
    const fetchReferralLink = async () => {
      const doc = await firebase.firestore().collection('referralLinks').doc(userId).get();
      if (doc.exists) {
        setReferralLink(doc.data().referralLink);
      } else {
        await generateReferralLink(userId);
      }
    };

    fetchReferralLink();
  }, [userId]);
  const handleCopyLink = () => {
    const inputRef = document.getElementById('referralLink');

    // Check if the input field exists
  if (inputRef) {
    // Select the text in the input field
    inputRef.select();
    inputRef.setSelectionRange(0, 99999); // For mobile devices

    try {
      // Copy the selected text to the clipboard using the Clipboard API
      navigator.clipboard.writeText(inputRef.value);
      alert('Referral link copied to clipboard!');
    } catch (error) {
      console.error('Unable to copy to clipboard:', error);
      alert('Failed to copy referral link to clipboard.');
    }
  }

  };
  

  return(
    <>
      <div className="text-left inline-block w-80 bg-slate-100 border pl-4 py-2 rounded-xl mt-4">
            <p className="font-semibold mb-2">Invite a friend</p>
            <p className="text-sm mb-3 ">Earn 10 points for every friend that signs up.</p>
            <div className="bg-white border rounded-lg inline-block w-[270px] relative px-2 py-2">
              <input id="referralLink" className="placeholder:text-blue-700 text-sm inline-block w-[200px] " type="text" value={referralLink} placeholder="https://example.com/blessing" readOnly />
              <button onClick={handleCopyLink} className="bg-black text-white rounded-lg text-sm pb-1 px-1 absolute right-2">Copy</button>
            </div>
            
        </div>
    </>
  )
}

export default ReferralComponent;