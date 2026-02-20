const App = () => {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  
  return (
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>
        <hr />
        <div>
          <label>
            Amount:
            <input type="text" placeholder="Amount" />
          </label>
        </div>
        <section className="currency-selector">
          <label>
            From:
            <select>
              {
                ["USD", "EUR", "GBP", "INR", "AUD"].map((currency) => {
                  return (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  )
                })
              }
            </select>
          </label>
          <label>
            To:
            <select>
              {
                ["INR", "USD", "EUR", "GBP", "AUD"].map((currency) => {
                  return (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  )
                })
              }
            </select>
          </label>
        </section>
        <button disabled ={isLoading || amount<=0}>{isLoading ? "coverting...":"convert"}</button>
      </div>
    </section>
  )
}
export default App
