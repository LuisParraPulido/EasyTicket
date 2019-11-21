import Home from '../containers/Home';
import ListTickets from '../containers/ListTickets';
import BuyTicket from '../containers/BuyTicket';
import Register from '../containers/Register';
import Login from '../containers/Login';
import UserProfile from '../containers/UserProfile';
import TicketProfile from '../containers/TicketProfile';
import NotFound from '../containers/NotFound';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/listTickets',
    component: ListTickets,
    exact: true,
  },
  {
    path: '/buyTickets',
    component: BuyTicket,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/user-profile',
    component: UserProfile,
    exact: true,
  },
  {
    path: '/ticket-profile',
    component: TicketProfile,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
