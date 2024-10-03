// src/features/auth/Welcome.js
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useTitle from '../../hooks/useTitle';

const Welcome = () => {
    const { username, isManager, isAdmin } = useAuth();

    useTitle(`infoEMPLEADOS: ${username}`);

    const date = new Date();
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);

    // Inline styles for the buttons
    const buttonStyle = {
        display: 'inline-block',
        padding: '10px 20px',
        margin: '10px 0',
        fontSize: '1rem',
        color: '#fff', // Text color
        backgroundColor: '#007bff', // Button background color
        border: 'none',
        borderRadius: '5px',
        textDecoration: 'none', // Remove underline from link
        transition: 'background-color 0.3s, transform 0.2s', // Smooth transition for hover effects
    };

    const buttonHoverStyle = {
        ...buttonStyle,
        backgroundColor: '#0056b3', // Darker blue on hover
        transform: 'scale(1.05)', // Slightly grow the button
    };

    const content = (
        <section className="welcome">
            <p>{today}</p>
            <h1>Welcome {username}!</h1>

            <p>
                <Link 
                    to="/dash/notes" 
                    style={buttonStyle} 
                    onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)} 
                    onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                >
                    Ver Tareas
                </Link>
            </p>
            <p>
                <Link 
                    to="/dash/notes/new" 
                    style={buttonStyle} 
                    onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)} 
                    onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                >
                    Adicionar Tareas
                </Link>
            </p>

            {(isManager || isAdmin) && (
                <>
                    <p>
                        <Link 
                            to="/dash/users" 
                            style={buttonStyle} 
                            onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)} 
                            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                        >
                            Configuracion de Usuarios
                        </Link>
                    </p>
                    <p>
                        <Link 
                            to="/dash/users/new" 
                            style={buttonStyle} 
                            onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)} 
                            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                        >
                            Adicionar Nuevo Usuario
                        </Link>
                    </p>
                </>
            )}
        </section>
    );

    return content;
};

export default Welcome;
