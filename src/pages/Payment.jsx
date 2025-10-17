import zelleLogo from "../assets/zelle.PNG";

const Payment = () => {
  return (
    <>
      <div className="w-full my-10 max-w-7xl mx-auto">
        <section className="h-20 rounded-xl mt-10 bg-[#ffffff]">
          <div className="">
            <h2 className="font-black text-2xl text-left pt-5 pl-4">
              Complete your payment
            </h2>
          </div>
        </section>
        {/* selection */}
        <main className="flex justify-center items-start mt-10 rounded-md gap-5 mb-10">
          <div className="membership w-[60%] bg-[#ffffff] rounded-xl space-y-8 p-4">
            <header>
              <h3 className="text-black font-semibold text-xl mb-3">
                1. Select your Membership
              </h3>
              <hr />
            </header>
            <div>
              <h1 className="text-black font-semibold text-xl mt-2">
                Membership Fee
              </h1>
              <p className="mt-5">General Member</p>
            </div>
            <div>
              <label className="flex justify-between bg-[#ffffff] border-2 border-slate-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-slate-50 cursor-pointer ">
                <div className="flex justify-center">
                  <input type="radio" name="Country" />
                  <p className="pl-2">Membership Fee</p>
                </div>
                <div>
                  <p className="text-black text-lg">0.00 $</p>
                </div>
              </label>
            </div>
            {/* yearly */}
            <section className="yearly">
              <div>
                <p className="mt-5">Yearly Member</p>
              </div>
              <div className="rounded-md border-2 border-slate-100 p-1">
                <div>
                  <label className="flex justify-between bg-[#ffffff] border-2 border-slate-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-slate-50 cursor-pointer ">
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center">
                        <input type="radio" name="Country" />
                        <p className="pl-2">Membership Fee</p>
                      </div>
                      <div className="bg-[#012077] rounded-3xl px-2 py-0.5 text-white ml-2">
                        <p className="text-sm">Yearly</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-lg">120.00 $</p>
                    </div>
                  </label>
                </div>
                <div>
                  <label className="flex justify-between bg-[#ffffff] border-2 border-slate-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-slate-50 cursor-pointer ">
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center">
                        <input type="radio" name="Country" />
                        <p className="pl-2">Membership Fee</p>
                      </div>
                      <div className="bg-[#012077] rounded-3xl px-2 py-0.5 text-white ml-2">
                        <p className="text-sm">12 Installments</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-lg"> 10.00 $</p>
                    </div>
                  </label>
                </div>
              </div>
            </section>

            {/* monthly */}
            <section className="yearly">
              <div>
                <p className="mt-5">Life Member</p>
              </div>
              <div className="rounded-md border-2 border-slate-100 p-1">
                <div>
                  <label className="flex justify-between bg-[#ffffff] border-2 border-slate-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-slate-50 cursor-pointer ">
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center">
                        <input type="radio" name="Country" />
                        <p className="pl-2">Membership Fee</p>
                      </div>
                      <div className="bg-[#012077] rounded-3xl px-2 py-0.5 text-white ml-2">
                        <p className="text-sm">Upfront</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-lg">500.00 $</p>
                    </div>
                  </label>
                </div>
                <div>
                  <label className="flex justify-between bg-[#ffffff] border-2 border-slate-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-slate-50 cursor-pointer ">
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center">
                        <input type="radio" name="Country" />
                        <p className="pl-2">Membership Fee</p>
                      </div>
                      <div className="bg-[#012077] rounded-3xl px-2 py-0.5 text-white ml-2">
                        <p className="text-sm">5 Installments</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-lg"> 100.00 $</p>
                    </div>
                  </label>
                </div>
              </div>
            </section>
            {/* <div className="border rounded-md p-4 w-full mx-auto max-w-2xl">
              <h4 className="text-xl lg:text-2xl font-semibold">
                Select Your Country
              </h4>

              <div>
                <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                  <input type="radio" name="Country" />
                  <i className="pl-2">Germany</i>
                </label>

                <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                  <input type="radio" name="Country" />
                  <i className="pl-2">France</i>
                </label>

                <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                  <input type="radio" name="Country" />
                  <i className="pl-2">United Kingdom</i>
                </label>

                <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                  <input type="radio" name="Country" />
                  <i className="pl-2">Netherlands</i>
                </label>
              </div>
            </div> */}
          </div>
          {/* payment methods */}
          <div className="payment-method w-[40%] bg-[#ffffff] rounded-xl p-6">
            <div className="mb-3">
              <h2 className="text-xl font-semibold text-black">
                2. Payment Method
              </h2>
            </div>
            <div className="payment-buttons space-y-4 flex-col">
              <button className="w-full flex justify-center items-center rounded-2xl border-2 cursor-pointer border-slate-100 p-3">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-black">Zelle (Scan to Pay) </p>
                  <img className="h-10 w-20" src={zelleLogo} alt="" />
                </div>
              </button>
              <button className="w-full flex justify-center items-center rounded-2xl border-2 cursor-pointer border-slate-100 p-3">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-black">
                    Square | Credit/Debit Card Checkout{" "}
                  </p>
                  <img className="h-10 w-20" src={zelleLogo} alt="" />
                </div>
              </button>
              <button className="w-full flex justify-center items-center rounded-2xl border-2 cursor-pointer border-slate-100 p-3">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-black">
                    Stripe | Credit/Debit Card Checkout{" "}
                  </p>
                  <img className="h-10 w-20" src={zelleLogo} alt="" />
                </div>
              </button>
              <button className="w-full flex justify-center items-center rounded-2xl border-2 cursor-pointer border-slate-100 p-3">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-black">Venmo (Scan to Pay) </p>
                  <img className="h-10 w-20" src={zelleLogo} alt="" />
                </div>
              </button>
              <button className="w-full flex justify-center items-center rounded-2xl border-2 cursor-pointer border-slate-100 p-3">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-black">
                    Paypal | Credit/Debit Card Checkout{" "}
                  </p>
                  <img className="h-10 w-20" src={zelleLogo} alt="" />
                </div>
              </button>
              <button className="w-full flex justify-center items-center rounded-2xl border-2 cursor-pointer border-slate-100 p-3">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-black">Cash</p>
                  <img className="h-10 w-20" src={zelleLogo} alt="" />
                </div>
              </button>
              <button className="w-full flex justify-center items-center rounded-2xl border-2 cursor-pointer border-slate-100 p-3">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg text-black">Wire Transfer</p>
                  <img className="h-10 w-20" src={zelleLogo} alt="" />
                </div>
              </button>
            </div>
          </div>
        </main>
        {/* payment summary */}
        <section className="rounded-xl mt-5 w-full p-6 bg-[#ffffff]">
          <header>
            <h2 className="text-2xl text-black">3. Payment Summary</h2>

            <div className="flex justify-between items-start mt-2">
              <p>Selected plan</p>
              <p>upfront</p>
            </div>
            <div className="flex justify-between items-start mt-2">
              <p>Installments</p>
              <p>0/0</p>
            </div>
          </header>
          <div className="mt-3">
            <div className="flex justify-between items-start">
              <h1>Membership Fee</h1>
              <p> 500.00 $</p>
            </div>
            <div className="flex justify-between items-start mt-2">
              <p>Processing Fee</p>
              <p> 50.00 $</p>
            </div>
            <hr className="mt-4" />

            <div className="flex justify-between items-start mt-3">
              <p>Total Payable Amount</p>
              <p>00.00 $</p>
            </div>
            <button className="flex justify-center items-center w-full py-2 cursor-pointer mt-3 rounded-xl bg-[#012077] text-xl text-white">
              Pay now
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Payment;
