export default function ReferralComponent() {
  return(
    <>
      <div className="text-left inline-block w-80 bg-slate-100 border pl-4 py-2 rounded-xl mt-4">
            <p className="font-semibold mb-2">Invite a friend</p>
            <p className="text-sm mb-3 ">Earn 10 points for every friend that signs up.</p>
            <div className="bg-white border inline-block w-[300px]">
              <input className="placeholder:text-blue-700 inline-block w-64" type="text" placeholder="https://example.com/blessing" readOnly />
              <button>Copy</button>
            </div>
            
        </div>
    </>
  )
}