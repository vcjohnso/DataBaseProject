import "./App.css";
import "./Mainpage.css";

const Mainpage = () => {
  return(
    <div>
      <div>
        <div>
          <div>
            <h2 data-testid="header1" class="center m-3">Welcome to FlightCity!</h2>
          </div>
          <div
            style={{
              padding: "1rem 1rem 1rem",
              border: "double #f7f7f9",
              backgroundColor: "rgb(220, 220, 220, 0.5)",
              boxSizing: "content-box",
            }}
          >
            <img 
            src="https://media.istockphoto.com/photos/commercial-jet-flying-over-clouds-picture-id155380716?b=1&k=20&m=155380716&s=170667a&w=0&h=LjalFiyrKtBye-26dufNMHkbU_k_KrJ1-UYnbTpaxtM="
            class="center-img"
            >
            </img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;