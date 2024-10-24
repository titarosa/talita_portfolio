// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem 0', backgroundColor: '#222', color: '#fff' }}>
            <p>&copy; 2024 Your Name</p>
            <div>
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
                    GitHub
                </a>
                <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
                    LinkedIn
                </a>
                <a href="https://stackoverflow.com/users/your-stackoverflow-id" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
                    Stack Overflow
                </a>
            </div>
        </footer>
    );
};

export default Footer;
