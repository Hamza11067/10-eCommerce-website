import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email.</h1>
        <p>Subscribe to newletter to stay updated</p>
        <div>
            <input type="email" placeholder="what is your email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter