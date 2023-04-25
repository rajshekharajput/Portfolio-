//import { Person } from '@material-ui/icons';
import './topbar.scss'
//import PersonIcon from '@mui/icons-material/Person';

export default function Topbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genuine.</a>
          <div className="itemContainer">
            {/* <PersonIcon className='icon'/> */}
              
            
          </div>
        </div>
        <h1>Project</h1>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'>  </span>
            <span className='line3'>  </span>
          </div>
        </div>
      </div>
    </div>
  )
}
