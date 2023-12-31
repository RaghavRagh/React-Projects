export default function Hero() {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>

                <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE FOR HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE ARE HERE FOR HELP YOU WITH OUR SHOES.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                </div>

                <div className="brand-icons">
                    <a href="#"><img src="/images/amazon.png" alt="amazon-logo" /></a>
                    <a href="#"><img src="/images/flipkart.png" alt="flipkart-logo" /></a>
                </div>
            </div>

            <div className="hero-image">
                <img src="./images/hero-image.png" alt="hero-logo" />
            </div>
        </main>
    );
}