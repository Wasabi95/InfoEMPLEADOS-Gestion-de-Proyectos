//src/components/Public.js
//src/components/Public.js
//src/components/Public.js

import { Link } from 'react-router-dom'
import logo from '../img/Logo.png';  // Import your logo

const Public = () => {
    const content = (
        <section className="public">
            <header>
            <Link to="/dash" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                       
                        <img 
                            src={logo} 
                            alt="Company Logo" 
                            style={{ width: '50px', height: 'auto', marginRight: '10px' }} // Inline styles for the logo
                        />
                        <h1 className="dash-header__title">infoEMPLEADOS</h1>
                    </Link>
            </header>
            <main className="public__main">
            <p>Estamos en la hermosa ciudad de Cali.</p>
                <p>Somos una empresa de tecnología</p>
                <p>que fabrica software para</p>
                <p>mejorar la productividad</p>
                <p>y facilitar procesos empresariales.</p>

                <address className="public__addr">
                    InfoEMPLEADOS<br />
                    5255 Hello Drive<br />
                    Cali, Colombia 768890<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public