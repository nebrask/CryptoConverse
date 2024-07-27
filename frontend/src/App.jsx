import NavBar from './pages/NavBar/NavBar';
import Home from './pages/HomeScreen/Home';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/PortfolioScreen/Portfolio';
import Activity from './pages/ActivityScreen/Activity';
import Wallet from './pages/WalletScreen/Wallet';
import Withdrawal from './pages/WithdrawalScreen/Withdrawal';
import Payment from './pages/PaymentScreen/Payment';
import Watchlist from './pages/WatchlistScreen/Watchlist';
import Profile from './pages/ProfileScreen/Profile';
import CryptoDetails from './pages/CryptoDetails/CryptoDetails';
import SearchCoin from './pages/SearchScreen/SearchCoin';
import Auth from './pages/AuthScreen/Auth';

function App() {
  return (
    <>
    <Auth/>
    {false && <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
        <Route path="/withdrawal" element={<Withdrawal/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/market/:id" element={<CryptoDetails/>}/>
        <Route path="/search" element={<SearchCoin/>}/>
      </Routes>
    </div>}
    </>
  );
}

export default App;
