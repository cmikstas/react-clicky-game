import React, { Component } from "react";
//import Navbar from "./components/Navbar";
import GameTitle from "./components/GameTitle";
import GameDesc from "./components/GameDesc";
import DemonCard from "./components/DemonCard";
import images from "./images.json";

class App extends Component 
{
    state =
        {
            images
        };

    render()
    {
        return (
            <body>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <a href="#" className="navbar-brand text text-light">
                            <h3>Chris Mikstas</h3>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link text text-light" href="../Bootstap-Portfolio/assets/resume/Resume - Chris Mikstas.pdf">Resume</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text text-light" href="../Bootstap-Portfolio/portfolio.html">Return to Portfolio</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="jumbotron text-center">
                    <GameTitle>Clicky Game!</GameTitle>
                    <GameDesc>Click on an image to earn points, but don't click on any more than once!</GameDesc>
                </div>
                <div>
                    {this.state.images.map(demons => (
                        <DemonCard
                            name={demons.name}
                            image={demons.image}
                            id={demons.id}
                            key={demons.id}
                        />
        ))}
                </div>
            </body>
        )
    }
}

export default App;
