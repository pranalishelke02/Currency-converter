import { useId } from "react";
function Inputbox({
  amount,
  currencyoptions = [],
  oncurrencychange,
  onamountchange,
  label,
  selectcurrency = "usd",
  // className = "",
}) {
  let sameid = useId();
  return (
    // <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label htmlFor={sameid} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          id={sameid}
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="amount"
          value={amount}
          onChange={e =>
            onamountchange(Number(e.target.value))
          }
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">currency type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectcurrency}
          onChange={e =>oncurrencychange(e.target.value)}
        >
          {currencyoptions.map(currency => {
            // console.log(currency);
         return   <option key={currency} value={currency}>
              {currency}
            </option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
