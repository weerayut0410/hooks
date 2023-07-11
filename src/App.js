import "./App.css";
import { useState } from "react";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [produc1, setProduct1] = useState(150);
  const [produc2, setProduct2] = useState(800);
  const [produc3, setProduct3] = useState(300);

  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} บาท</h3>
      </div>
      <div>
        <img src="case.jpg" alt="case" width="15%" />
        <br />
        case ราคา {produc1} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + produc1);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - produc1);
        }
      }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <img src="hat.jpg" alt="hat" width="15%" />
        <br />
        หมวก ราคา {produc2} บาท
        </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + produc2);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - produc2);
        }
      }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <img src="shirt.jpg" alt="shirt" width="15%" />
        <br />
        เสื้อ ราคา {produc3} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + produc3);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - produc3);
        }
      }}
      >
        นำออกจากตะกร้า
      </button>
    </div>
  );
}

export default App;
