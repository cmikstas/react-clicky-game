import React, { Component } from "react";
import Navbar from "./components/Navbar";
import DemonCard from "./components/DemonCard";
import StatusBar from "./components/StatusBar"
import images from "./images.json";
import './style.css';

class App extends Component 
{
    state =
    {
        count: 0,
        highCount: 0,
        shuffledArr: [],
        clickedArr: [],
        gameMessage: "Click a card to begin"
    };

    handleIncrement = (id) => 
    {
        let tempArr = [...this.state.clickedArr];
        let tempCount = this.state.count;
        let tempHighCount = this.state.highCount;
        let tempGameMessage;

        console.log(id);

        if (!tempArr.includes(id))
        {
            tempGameMessage = "You have chosen wisely";
            tempArr.push(id);
            tempCount++;

            if (tempCount > tempHighCount)
            {
                tempHighCount = tempCount;
            }
        }
        else
        {
            tempGameMessage = "You have chosen foolishly, start again.";
            tempArr = [];
            tempCount = 0;
        }

        this.setState(
            {
                count: tempCount,
                highCount: tempHighCount,
                gameMessage: tempGameMessage,
                clickedArr: tempArr
            }
        )

        this.cardRandomizer();
    };

    cardRandomizer = () =>
    {
        let randomArr = [];
        let tempArr = [];

        while (randomArr.length < 12)
        {
            let newIndex = Math.floor(Math.random() * 12);

            if (!randomArr.includes(newIndex))
            {
                randomArr.push(newIndex);
            }
        }

        for (let i = 0; i < randomArr.length; i++)
        {
            tempArr.push(images[randomArr[i]]);
        }
        
        this.setState({ shuffledArr: tempArr });
    };

    componentDidMount()
    {
        this.cardRandomizer();
    }
        
    render()
    {
        return (
            <div className="htmlBody">
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="jumbotron jumbo text-center">
                    <StatusBar
                        count={this.state.count}
                        gameMessage={this.state.gameMessage}
                        highCount={this.state.highCount}
                    >
                    </StatusBar>

                </div>
                <div className="container containerDiv">
                    {this.state.shuffledArr.map(demons => (
                        <DemonCard
                            name={demons.name}
                            image={demons.image}
                            id={demons.id}
                            key={demons.id}
                            handleIncrement={this.handleIncrement}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default App;
