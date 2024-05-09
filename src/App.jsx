import React, { useState } from 'react';
import Header from './Components/Header';
import Admin from './Components/Admin';
import Dashboard from './Components/Dashboard';
import Students from './Components/Students';
import Profile from './Components/Profile';
import Footer from './Components/Footer';

function App() {
  const [activeMenu, setActiveMenu] = useState('Admin');

  const Handles = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="your-container-class h-screen flex flex-col bg-blue-900 text-white">
      <Header />
      <div className="flex flex-grow">
        {/* Navigation */}
        <div className="flex-shrink-0 bg-blue-900 rounded-md overflow-hidden shadow-md">
          <ul className="flex flex-col p-4">  
            <li
              onClick={() => Handles('Profile')}
              className={`text-lg font-extrabold cursor-pointer hover:text-red-500 text-yellow-600 ${
                activeMenu === 'Profile' ? 'bg-blue-900 text-white' : ''
              }`}
            >
              <img
                src="https://scontent.fcgy3-1.fna.fbcdn.net/v/t39.30808-6/369418669_1096882361276749_5160148080088586343_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEFu1HpKdVO_Z-hEjVnZbot6QWrugt4jODpBau6C3iM4MVfljDY-ke5yaWSBmL-5ukHp3ZPvuxDGXFJ01Y4YqbR&_nc_ohc=pXCyMbYX3Z8Q7kNvgGgb84h&_nc_ht=scontent.fcgy3-1.fna&oh=00_AfBhXzRhy28928H8crpFYoqZXE-hNEnQ3jw-xR6wKAILVA&oe=6642CADC"
                alt="Profile"
                className="w-12 h-12 rounded-full mr-2" 
              />
              Profile
            </li>
            <li
              onClick={() => Handles('Admin')}
              className={`text-lg font-extrabold cursor-pointer hover:text-red-500 text-yellow-600 ${
                activeMenu === 'Admin' ? 'bg-blue-900 text-white' : ''
              }`}
            >
              Admin
            </li>
            <li
              onClick={() => Handles('Dashboard')}
              className={`text-lg font-extrabold cursor-pointer hover:text-red-500 text-yellow-600 ${
                activeMenu === 'Dashboard' ? 'bg-blue-900 text-white' : ''
              }`}
            >
              Dashboard
            </li>
            <li
              onClick={() => Handles('Students')}
              className={`text-lg font-extrabold cursor-pointer hover:text-red-500 text-yellow-600 ${
                activeMenu === 'Students' ? 'bg-blue-900 text-white' : ''
              }`}
            >
              Students
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-grow p-4 overflow-auto relative" style={{ backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {activeMenu === 'Admin' && (
            <>
              <img
                src="https://scontent.fcgy3-1.fna.fbcdn.net/v/t39.30808-6/312201435_911691319795855_5122235707027439476_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH9oYq9Bs_kafhoaCsjAfmWl3wlOmGr6wOXfCU6YavrA_ySS3eo6fVGcAsYH5xuuHbFy9n5_2stKZD5j4LZO1mT&_nc_ohc=b0620b11bEkQ7kNvgHm6U1b&_nc_ht=scontent.fcgy3-1.fna&oh=00_AfBK-CJUconXEFDHBiuIChw1Aj2LqOwehB1wIcsm0Ez9SQ&oe=6642905D" // Replace with your admin image URL
                alt="Admin"
                className="absolute"
                style={{ width: '800px', height: '800px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} 
              />
              <Admin />
            </>
          )}
          {activeMenu === 'Dashboard' && <Dashboard />}
          {activeMenu === 'Students' && (
            <>
              <img
                src="https://scontent.fcgy3-1.fna.fbcdn.net/v/t39.30808-6/361400055_1077643423200643_5152172423724258316_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG9NLc-mh6Ty9PjRaOOQIjCiU0vu4g39WOJTS-7iDf1Y7y2duSNcjwDnZ9ZbIpXL5qUbxRuObHCtWmYR8_T0aXj&_nc_ohc=Kq4Q-kcFHEQQ7kNvgGiPSOl&_nc_ht=scontent.fcgy3-1.fna&oh=00_AfDw0T-7E1msLca-rXsWKgTWv8aN04Kq2C8kqWqQ9NYOpA&oe=6642A00D"
                alt="Students"
                className="absolute"
                style={{ width: '800px', height: '800px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} 
              />
              <Students />
            </>
          )}
          {activeMenu === 'Profile' && (
            <>
              <img
                src="https://scontent.fcgy3-1.fna.fbcdn.net/v/t39.30808-6/369418669_1096882361276749_5160148080088586343_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEFu1HpKdVO_Z-hEjVnZbot6QWrugt4jODpBau6C3iM4MVfljDY-ke5yaWSBmL-5ukHp3ZPvuxDGXFJ01Y4YqbR&_nc_ohc=pXCyMbYX3Z8Q7kNvgGgb84h&_nc_ht=scontent.fcgy3-1.fna&oh=00_AfBhXzRhy28928H8crpFYoqZXE-hNEnQ3jw-xR6wKAILVA&oe=6642CADC"
                alt="Profile"
                className="absolute"
                style={{ width: '600px', height: '800px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} 
              />
              <Profile />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
