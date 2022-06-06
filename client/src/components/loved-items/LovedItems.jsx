import "./loved-items.scss"

function LovedItems() {
  return (
    <div className="most-loved">
        <div className="most-loved-item">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="Property Images" className="most-loved-image"/>
            <span className="most-loved-name">Aparthotel Stare Miasto</span>
            <span className="most-loved-city">Madrid</span>
            <div className="most-loved-price">Starting from $120</div>
            <div className="most-loved-rating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="most-loved-item">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" alt="Property Images" className="most-loved-image"/>
            <span className="most-loved-name">Comfort Suites Airport</span>
            <span className="most-loved-city">Austin</span>
            <div className="most-loved-price">Starting from $140</div>
            <div className="most-loved-rating">
                <button>9.3</button>
                <span>Exceptional</span>
            </div>
        </div>

        <div className="most-loved-item">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1" alt="Property Images" className="most-loved-image"/>
            <span className="most-loved-name">Four Seasons Hotel</span>
            <span className="most-loved-city">Lisbon</span>
            <div className="most-loved-price">Starting from $99</div>
            <div className="most-loved-rating">
                <button>8.8</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="most-loved-item">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1" alt="Property Images" className="most-loved-image"/>
            <span className="most-loved-name">Hilton Garden Inn</span>
            <span className="most-loved-city">Berlin</span>
            <div className="most-loved-price">Starting from $105</div>
            <div className="most-loved-rating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default LovedItems     