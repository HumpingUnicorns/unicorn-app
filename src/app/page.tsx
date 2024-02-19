'use client'
import Table from './Components/Table/Table';
import Navigation from './Components/Navbar/Navigation';
import Image from '../../node_modules/next/image';
import { useAccount } from 'wagmi';

function App() {
  const account = useAccount();
  console.log(account);

  return (
      <div>
        <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
        <Image 
          src="/background.png"
          alt="Mountains with snow"
          layout="fill"
          objectFit='cover'
        />
      </div>
        <div>
          <Navigation />
        </div> 
        <div className='flex flex-col justify-center items-center mt-6'>
          <h2 className={`flex justify-center border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f3f3f3] text-8xl font-text font-bold mt-4 mb-4`}>Welcome to the Unicorn Humping</h2>
          <h2 className={`flex justify-center border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f3f3f3] text-6xl font-text font-bold mt-4 mb-10`}>Foreplay</h2>
          addresses: {JSON.stringify(account.addresses)}

        </div>
        <div className='flex justify-center place-content-start' >
          <Table />
        </div>
        <div className="grid grid-rows-1 grid-cols-3 gap-1 place-items-center  w-full text-2xl font-text font-black uppercase mt-4">
            <div style={{ borderRadius: 600 }} className={`flex flex-col justify-center pl-2 pr-2 pt-6 pb-6 w-3/5 text-white border-4 border-[#F880C2] bg-[#414A78] shadow-2xl shadow-[#414A78]`}>
                <p className={`flex justify-center w-full font-spegiel  text-xxs md:text-sm lg:text-xl xl:text-4xl`}>Total humping</p>
                <h2 className={`flex justify-center w-full font-texxt text-base md:text-sm lg:text-base xl:text-4xl`}>56</h2>
            </div>
            <div>

            </div>
            <div style={{ borderRadius: 600 }} className={`flex flex-col justify-center pl-2 pr-2 pt-6 pb-6 w-3/5 text-white border-4 border-[#F880C2] bg-[#414A78] shadow-2xl shadow-[#414A78]`}>
                <p className={`flex justify-center w-full font-spegiel  text-xxs md:text-sm lg:text-xl xl:text-4xl`}>Day until</p>
                <h2 className={`flex justify-center w-full font-texxt text-base md:text-sm lg:text-base xl:text-4xl`}>5</h2>
            </div>
        </div>
      </div>
  )
}

export default App
