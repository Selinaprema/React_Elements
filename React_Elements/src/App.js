import React from "react";
import "./App.css";
import profileimage from "./Images/img_linkedin.jpeg";

const user = {
  name: "Lauren",
  surname: "Dale",
  date_of_birth: "05/03/1991",
  address: "177 Hyde Park Lane",
  country: "United Kingdom",
  email: "lauren.dale@gmail.com",
  telephone: "+44 3493 233 233",
  company: "Laurens Bakery",
  profile_picture: profileimage,
  shopping_cart: [
    { id: 1, item: "Scarf", price: "£20" },
    { id: 2, item: "Mirror", price: "£25" },
    { id: 3, item: "Water Bottle", price: "£15" },
  ],
};

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          Welcome, {user.name} {user.surname}
        </h1>
        <img src={user.profile_picture} alt="User Profile" />
        <p>
          <strong>Date of Birth: </strong>
          {user.date_of_birth}
        </p>
      </div>
      <div>
        <p>
          <strong>Address: </strong>
          {user.address}
        </p>
        <p>
          <strong>Country: </strong>
          {user.country}
        </p>
        <p>
          <strong>Email: </strong>
          {user.email}
        </p>
        <p>
          <strong>Telephone: </strong>
          {user.telephone}
        </p>
        <p>
          <strong>Company: </strong> {user.company}
        </p>
      </div>

      <div className="shoppingcart">
        <h2>Shopping Cart</h2>
        <ul>
          {user.shopping_cart.map((item) => (
            <li key={item.id}>
              {item.item} - {item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
