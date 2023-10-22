import useCurrencyinfo from "./hook/useCurrencyinfo";
import { useState } from "react";
import Inputbox from "./Inputbox";

function Currency() {
  let [amount, setamount] = useState("");
  let [from, setfrom] = useState("usd");
  let [to, setto] = useState("inr");
  let [convertamount, setconvertamount] = useState("");

  const currencyinfo = useCurrencyinfo(from);
  console.log(currencyinfo);

  const options = Object.keys(currencyinfo);
  console.log(options);

  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertamount(amount);
    setamount(convertamount);
  };

  const convert = () => {
    setconvertamount(amount * currencyinfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
      style={{ backgroundColor: "black" }}
    >
      <div>
        <div
          className="w-full max-w-md 
              max-auto border border-gray-60 rounded-lg p-5
               backdrop-blur-sm bg-white/30"
        >
          <form
            onSubmit={e => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="from"
                amount={amount}
                currencyoptions={options}
                selectcurrency={from}
                onamountchange={amount => setamount(amount)}
                oncurrencychange={currency => setfrom(currency)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="to"
                amount={convertamount}
                oncurrencychange={currency => setto(currency)}
                currencyoptions={options}
                selectcurrency={to}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Currency;
