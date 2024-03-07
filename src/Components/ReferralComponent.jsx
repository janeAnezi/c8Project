export default function ReferralComponent() {
  

  return(
    <>
      <div className="text-left inline-block w-80 bg-slate-100 border pl-4 py-2 rounded-xl mt-4">
            <p className="font-semibold mb-2">Invite a friend</p>
            <p className="text-sm mb-3 ">Earn 10 points for every friend that signs up.</p>
            <div className="bg-white border rounded-lg inline-block w-[270px] relative px-2 py-1">
              <input className="placeholder:text-blue-700 text-sm inline-block w-[200px] " type="text" placeholder="https://example.com/blessing" readOnly />
              <button className="bg-black text-white rounded-lg  text-sm pb-1 px-0.5 absolute right-2">Copy</button>
            </div>
            
        </div>
    </>
  )
}