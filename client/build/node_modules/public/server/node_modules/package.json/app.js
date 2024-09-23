// src/App.js
import React from 'react';
import './App.css';




function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Xoriant</h1>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#login">Login</a></li>
                <li><a href="#signup">Signup</a></li>
            </ul>
            </header>
       
            <div className="content">
                <div className="left-side">
                    <section id="about">
                        <h2>About Us</h2>
                        <p>Welcome to <strong>InnovateTech Solutions,</strong> where cutting-edge technology meets innovative thinking. Founded in 2024, we are a dynamic startup specializing in modern web development and artificial intelligence. Our mission is to empower businesses with state-of-the-art digital solutions that drive growth, efficiency, and exceptional user experiences.</p>

<p>At InnovateTech Solutions, we believe in the transformative power of AI and web technologies. Our team of passionate developers, data scientists, and AI experts is dedicated to pushing the boundaries of what’s possible, delivering tailored solutions that meet the unique needs of our clients. Whether you’re a startup looking to establish your online presence or an enterprise aiming to optimize your operations, we are here to help you succeed in the digital age.</p>
                    </section>
                    <section id="services">
                        <h2>Our Services</h2>
                        <p>1. Web Development

a.Custom Website Design & Development: We create visually stunning, responsive, and user-friendly websites tailored to your brand and business goals.
b.E-commerce Solutions: From online stores to payment gateways, we build robust e-commerce platforms that drive sales and enhance customer satisfaction.
c.Web Application Development: Our team develops scalable and secure web applications that streamline your business processes and improve efficiency.
2. Artificial Intelligence

a.AI-Powered Chatbots: Enhance customer engagement and support with intelligent chatbots that provide instant, personalized responses.
b.Machine Learning Solutions: Leverage our expertise in machine learning to gain insights from your data, automate tasks, and make data-driven decisions.
c.Natural Language Processing (NLP): Improve your applications with advanced NLP capabilities, enabling better understanding and interaction with your users.
3. Digital Transformation Consulting

a.Strategy & Planning: We help you develop a comprehensive digital transformation strategy that aligns with your business objectives.
b.Technology Integration: Our experts assist in integrating the latest technologies into your existing systems, ensuring a seamless transition and minimal disruption.
c.Training & Support: We provide training and ongoing support to ensure your team is equipped to leverage new technologies effectively.
4. Cloud Services

a.Cloud Migration: Transition your infrastructure to the cloud with minimal downtime and maximum efficiency.
b.Cloud Management: We offer comprehensive cloud management services to optimize performance, security, and cost-efficiency.
c.DevOps: Implement DevOps practices to accelerate your development cycles and improve collaboration between your development and operations teams.</p>
                    </section>
                </div>
                <div className="separator"></div>
                <div className="right-side">
                    <section id="contact">
                        <h2>Contact Us</h2>
                        <form>
                            <label htmlFor="first-name">First-Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="sur-name">Sur-Name:</label>
                            <input type="text" id="name" name="name" required />                            
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            <button type="submit">Submit</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
