import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import axios from "axios";

const CoinSearch = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, [url]);
  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input type="text" placeholder="Search a coin" />
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr>
              <td>
                <AiOutlineStar />
              </td>
              <td>{coin.market_cap_rank}</td>
              <td>{coin.name}</td>
              <td>
                <div>
                  <img src={coin.image} alt={coin.id} width="25" height="25" />
                  <p>{coin.name}</p>
                </div>
              </td>
              <td>{coin.symbol}</td>
              <td>{coin.curent_price}</td>
              <td>{coin.price_change_percentage_24h}</td>
              <td>{coin.total_volume}</td>
              <td>{coin.market_cap}</td>
              <td>{coin.sparkline_in_7d.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
