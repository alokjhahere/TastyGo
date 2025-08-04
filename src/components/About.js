const About = () => {
    return (
         <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Delicious food delivered to your doorstep, fast and fresh.</p>
      </div>

      <div className="about-text">
        <p>
          Welcome to TastyGO! We’re passionate about bringing your
          favorite meals from top-rated restaurants straight to your door. Our
          mission is to simplify the way you experience food delivery—quick,
          reliable, and satisfying.
        </p>
      </div>

      <div className="about-highlights">
        <div className="highlight-card">
          <h3>Fast Delivery</h3>
          <p>Our delivery partners ensure your food reaches you piping hot and on time.</p>
        </div>
        <div className="highlight-card">
          <h3>Top Restaurants</h3>
          <p>We partner with the best local and international food joints.</p>
        </div>
        <div className="highlight-card">
          <h3>Secure Payments</h3>
          <p>Multiple payment options with best-in-class encryption.</p>
        </div>
        <div className="highlight-card">
          <h3>Customer Support</h3>
          <p>24/7 live support to help you with orders, refunds, or questions.</p>
        </div>
        <div className="space"></div>
      </div>
    </div>
    )
};

export default About;