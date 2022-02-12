import React from 'react';
import Section from './Section';
import "./Home.css";

function Home() {
    return (
        <div className="conteiner">
            <Section
                title = "Model S"
                description = "Order Online for Touchless Delivery"
                backgroundImage = "model-s.jpg"
                leftButton = "custom order"
                rightButton = "existing inventory"
            />
            <Section
                title = "Model Y"
                description = "Order Online for Touchless Delivery"
                backgroundImage = "model-y.jpg"
                leftButton = "custom order"
                rightButton = "existing inventory"
            />
            <Section
                title = "Model 3"
                description = "Order Online for Touchless Delivery"
                backgroundImage = "model-3.jpg"
                leftButton = "custom order"
                rightButton = "existing inventory"
            />
            <Section
                title = "Model X"
                description = "Order Online for Touchless Delivery"
                backgroundImage = "model-x.jpg"
                leftButton = "custom order"
                rightButton = "existing inventory"
            />
            <Section
                title = "Lowest Cost Solar Panels in America"
                description = "Money-back guarantee"
                backgroundImage = "solar-panel.jpg"
                leftButton = "order now"
                rightButton = "learn more"
            />
            <Section
                title = "Solar for New Roofs"
                description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImage = "solar-roof.jpg"
                leftButton = "order now"
                rightButton = "learn more"
            />
            <Section
                title = "Accesories"
                description = ""
                backgroundImage = "accessories.jpg"
                leftButton = "shop now"
            />
        </div>
    )
}

export default Home