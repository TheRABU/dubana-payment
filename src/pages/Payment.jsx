const Payment = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <section className="h-20 max-w-7xl mx-auto rounded-xl mt-10 bg-[#ffffff]">
          <div className="">
            <h2 className="font-black text-2xl text-left pt-5 pl-4">
              Complete your payment
            </h2>
          </div>
        </section>
        <main className="flex justify-center items-start max-w-7xl mx-auto mt-10 rounded-md">
          <div className="membership w-[60%] bg-[#ffffff] rounded-xl p-4">
            <header>
              <h3 className="text-black font-semibold text-lg">
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
          <div className="payment-method w-[40%]"></div>
        </main>
      </div>
    </>
  );
};

export default Payment;
