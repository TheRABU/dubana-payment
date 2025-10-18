import { useEffect, useState } from "react";

import zelleLogo from "../assets/zelle.PNG";
import venmo from "../assets/venmo.PNG";
import square from "../assets/square.PNG";
import stripe from "../assets/stripe.PNG";
import paypal from "../assets/paypal.PNG";
import cash from "../assets/cash.PNG";
import bank from "../assets/bank.PNG";
import PaymentModal from "./PaymentModal";
import Swal from "sweetalert2";

const paymentImages = {
  zelle: zelleLogo,
  venmo: venmo,
  square: square,
  stripe: stripe,
  paypal: paypal,
  cash: cash,
  bank: bank,
};

const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    const storedRaw = localStorage.getItem("paymentData");
    try {
      const stored = storedRaw ? JSON.parse(storedRaw) : [];
      if (Array.isArray(stored)) setPaymentHistory(stored);
    } catch (err) {
      console.error("Corrupted paymentData in localStorage:", err);
      localStorage.removeItem("paymentData");
      setPaymentHistory([]);
    }
  }, []);

  const paymentMethods = [
    {
      id: "zelle",
      name: "Zelle (Scan to Pay)",
      img: paymentImages.zelle,
      needsModal: true,
    },
    {
      id: "square",
      name: "Square | Credit/Debit Card Checkout",
      img: paymentImages.square,
      needsModal: false,
    },
    {
      id: "stripe",
      name: "Stripe | Credit/Debit Card Checkout",
      img: paymentImages.stripe,
      needsModal: false,
    },
    {
      id: "venmo",
      name: "Venmo (Scan to Pay)",
      img: paymentImages.venmo,
      needsModal: true,
    },
    {
      id: "paypal",
      name: "Paypal | Credit/Debit Card Checkout",
      img: paymentImages.paypal,
      needsModal: false,
    },
    { id: "cash", name: "Cash", img: paymentImages.cash, needsModal: false },
    {
      id: "bank",
      name: "Wire Transfer",
      img: paymentImages.bank,
      needsModal: false,
    },
  ];

  const plans = [
    { id: "general", name: "General Member", price: 0, type: "Free" },
    { id: "yearly", name: "Yearly Member", price: 120, type: "Yearly" },
    {
      id: "yearly-installment",
      name: "Yearly Member",
      price: 120,
      type: "12 Installments",
    },
    { id: "life", name: "Life Member", price: 500, type: "Upfront" },
    {
      id: "life-installment",
      name: "Life Member",
      price: 100,
      type: "5 Installments",
    },
  ];

  const handlePaymentClick = (method) => {
    if (!selectedPlan) {
      Swal.fire({
        icon: "error",
        title: "Please select a membership plan first",
        text: "Something went wrong!",
      });
      return;
    }

    // If it's Zelle or Venmo, open modal
    if (method.needsModal) {
      setSelectedPaymentMethod(method);
      setIsModalOpen(true);
    } else {
      // For other payment methods, just set the selected method
      setSelectedPaymentMethod(method);
    }
  };

  const handlePaymentSubmit = (paymentData) => {
    const storedPayments =
      JSON.parse(localStorage.getItem("paymentData")) || [];
    const updatedPayments = [...storedPayments, paymentData];

    localStorage.setItem("paymentData", JSON.stringify(updatedPayments));
    setPaymentHistory(updatedPayments);

    console.log("Payment history:", updatedPayments);
    Swal.fire({
      title:
        "Payment completed successfully! and saved the data into localstorage",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
  };

  const handlePayNow = () => {
    if (!selectedPlan) {
      Swal.fire({
        icon: "error",
        title: "Please select a membership plan first",
        text: "Something went wrong!",
      });
      return;
    }

    if (!selectedPaymentMethod) {
      Swal.fire({
        icon: "error",
        title: "Please select a payment method first",
        text: "Something went wrong!",
      });
      return;
    }

    if (selectedPaymentMethod.needsModal) {
      Swal.fire({
        icon: "error",
        title: "Please complete the payment upload process",
        text: "Use the payment method button to upload your receipt",
      });
      return;
    }

    const paymentData = {
      paymentMethod: selectedPaymentMethod.name,
      amount: calculateTotal(),
      plan: getSelectedPlanData(),
      fileName: null,
      notes: `Direct payment via ${selectedPaymentMethod.name}`,
      timestamp: new Date().toISOString(),
    };

    handlePaymentSubmit(paymentData);
  };

  const calculateTotal = () => {
    if (!selectedPlan) return 0;
    const plan = plans.find((p) => p.id === selectedPlan);

    if (plan.id === "yearly-installment" || plan.id === "life-installment") {
      if (selectedPaymentMethod && !selectedPaymentMethod.needsModal) {
        return (plan.price + 2).toFixed(2);
      }
      return plan.price.toFixed(2);
    }

    // For upfront payments
    const processingFee =
      selectedPaymentMethod && !selectedPaymentMethod.needsModal
        ? 2
        : plan.price * 0.1;
    return (plan.price + processingFee).toFixed(2);
  };

  const getProcessingFee = () => {
    if (!selectedPlan) return "0.00";
    const plan = plans.find((p) => p.id === selectedPlan);

    if (selectedPaymentMethod && !selectedPaymentMethod.needsModal) {
      return "2.00";
    }

    // For scan-to-pay methods
    if (plan.id === "yearly-installment" || plan.id === "life-installment") {
      return "0.00";
    }

    return (plan.price * 0.1).toFixed(2);
  };

  const getSelectedPlanData = () => {
    if (!selectedPlan) return null;
    return plans.find((p) => p.id === selectedPlan);
  };

  const getInstallmentInfo = () => {
    const plan = getSelectedPlanData();
    if (!plan) return null;

    if (plan.id === "yearly-installment") {
      return { total: 12, perInstallment: 10 };
    }
    if (plan.id === "life-installment") {
      return { total: 5, perInstallment: 100 };
    }
    return null;
  };

  const installmentInfo = getInstallmentInfo();

  return (
    <>
      <div className="w-full my-10 max-w-7xl mx-auto px-4">
        <section className="h-20 rounded-xl mt-10 bg-[#ffffff]">
          <div>
            <h2 className="text-black font-semibold text-2xl text-left pt-5 pl-4">
              Complete your payment
            </h2>
          </div>
        </section>

        <main className="flex flex-col lg:flex-row justify-center items-start mt-10 rounded-md gap-5 mb-10">
          {/* membership*/}
          <div className="membership w-full lg:w-[60%] bg-[#ffffff] rounded-xl space-y-8 p-4">
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
              <label className="flex justify-between bg-[#ffffff] border-2 border-slate-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-slate-50 cursor-pointer">
                <div className="flex justify-center">
                  <input
                    type="radio"
                    name="membership"
                    value="general"
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  />
                  <p className="pl-2">Membership Fee</p>
                </div>
                <div>
                  <p className="text-black text-lg">$0.00</p>
                </div>
              </label>
            </div>

            {/* yearly */}
            <section className="yearly">
              <div>
                <p className="mt-5">Yearly Member</p>
              </div>
              <div className="rounded-md border-2 border-slate-100 p-1">
                <label className="flex justify-between bg-[#ffffff] border-2 border-slate-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-slate-50 cursor-pointer">
                  <div className="flex justify-center items-center">
                    <input
                      type="radio"
                      name="membership"
                      value="yearly"
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    />
                    <p className="pl-2">Membership Fee</p>
                    <div className="bg-[#012077] rounded-3xl px-2 py-0.5 text-white ml-2 text-sm">
                      Yearly
                    </div>
                  </div>
                  <p className="text-black text-lg">$120.00</p>
                </label>

                <label className="flex justify-between bg-[#ffffff] border-2 border-slate-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-slate-50 cursor-pointer">
                  <div className="flex justify-center items-center">
                    <input
                      type="radio"
                      name="membership"
                      value="yearly-installment"
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    />
                    <p className="pl-2">Membership Fee</p>
                    <div className="bg-[#012077] rounded-3xl px-2 py-0.5 text-white ml-2 text-sm">
                      12 Installments
                    </div>
                  </div>
                  <p className="text-black text-lg">$120.00</p>
                </label>
              </div>
            </section>

            {/* life membership */}
            <section className="life">
              <div>
                <p className="mt-5">Life Member</p>
              </div>
              <div className="rounded-md border-2 border-slate-100 p-1">
                <label className="flex justify-between bg-[#ffffff] border-2 border-slate-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-slate-50 cursor-pointer">
                  <div className="flex justify-center items-center">
                    <input
                      type="radio"
                      name="membership"
                      value="life"
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    />
                    <p className="pl-2">Membership Fee</p>
                    <div className="bg-[#012077] rounded-3xl px-2 py-0.5 text-white ml-2 text-sm">
                      Upfront
                    </div>
                  </div>
                  <p className="text-black text-lg">$500.00</p>
                </label>

                {/* installment */}
                <label className="flex justify-between bg-[#ffffff] border-2 border-slate-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-slate-50 cursor-pointer">
                  <div className="flex justify-center items-center">
                    <input
                      type="radio"
                      name="membership"
                      value="life-installment"
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    />
                    <p className="pl-2">Membership Fee</p>
                    <div className="bg-[#012077] rounded-3xl px-2 py-0.5 text-white ml-2 text-sm">
                      5 Installments
                    </div>
                  </div>
                  <p className="text-black text-lg">$100.00</p>
                </label>
              </div>
            </section>
          </div>

          {/* payment methods */}
          <div className="payment-method w-full lg:w-[40%] bg-[#ffffff] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-black mb-3">
              2. Payment Method
            </h2>
            <div className="space-y-4 flex-col">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handlePaymentClick(method)}
                  className={`w-full flex justify-between items-center rounded-2xl border-2 p-3 transition ${
                    selectedPaymentMethod?.id === method.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-100 hover:bg-slate-50"
                  }`}
                >
                  <p className="text-lg text-black">{method.name}</p>
                  <img
                    className="h-10 w-20 object-contain"
                    src={method.img}
                    alt={method.name}
                  />
                </button>
              ))}
            </div>
          </div>
        </main>

        {/* summary */}
        <section className="rounded-xl mt-5 w-full p-6 bg-[#ffffff]">
          <h2 className="text-2xl text-black mb-4">3. Payment Summary</h2>

          <div className="flex justify-between items-start mt-2">
            <p>Selected Plan</p>
            <p>
              {selectedPlan
                ? plans.find((p) => p.id === selectedPlan)?.type
                : "-"}
            </p>
          </div>

          <div className="flex justify-between items-start mt-2">
            <p>Installments</p>
            <p>
              {installmentInfo
                ? `${
                    installmentInfo.total
                  } × $${installmentInfo.perInstallment.toFixed(2)}`
                : "0/0"}
            </p>
          </div>

          {/* installments */}
          {installmentInfo && (
            <div className="mt-4 mb-4">
              <h3 className="font-semibold text-black mb-2">
                Installment Breakdown
              </h3>
              <p className="text-gray-700">
                Installments: {installmentInfo.total}
              </p>
              <p className="text-gray-700">
                Per Installment: ${installmentInfo.perInstallment.toFixed(2)}
              </p>

              <div className="bg-blue-50 p-3 rounded mt-3">
                <p className="text-blue-900 font-semibold">
                  Installment Progress: 1 / {installmentInfo.total}
                </p>
                <p className="text-blue-700 text-sm">
                  Next: Installment 2 of {installmentInfo.total}
                </p>
              </div>
            </div>
          )}

          <div className="mt-3">
            <div className="flex justify-between">
              <h1>Membership Fee</h1>
              <p>
                $
                {selectedPlan
                  ? plans.find((p) => p.id === selectedPlan)?.price.toFixed(2)
                  : "0.00"}
              </p>
            </div>

            <div className="flex justify-between mt-2">
              <p>Processing Fee</p>
              <p>${getProcessingFee()}</p>
            </div>

            <hr className="mt-4" />

            <div className="flex justify-between mt-3">
              <p className="font-semibold">Total Payable Amount</p>
              <p className="font-semibold">${calculateTotal()}</p>
            </div>

            <button
              onClick={handlePayNow}
              disabled={paymentHistory.length > 0}
              className={`w-full py-2 mt-3 rounded-xl text-xl text-white transition 
    ${
      paymentHistory.length > 0
        ? "bg-green-600 cursor-not-allowed"
        : "bg-[#012077] hover:bg-blue-900"
    }`}
            >
              {paymentHistory.length > 0 ? "Payment Completed" : "Pay now"}
            </button>
          </div>
        </section>

        {/* payment history */}
        {paymentHistory.length > 0 && (
          <section className="rounded-xl mt-10 w-full p-6 bg-[#ffffff]">
            <h2 className="text-2xl font-semibold text-black mb-4">
              4. Payment History
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left text-black">
                      #
                    </th>
                    <th className="py-2 px-4 border-b text-left text-black">
                      Plan
                    </th>
                    <th className="py-2 px-4 border-b text-left text-black">
                      Type
                    </th>
                    <th className="py-2 px-4 border-b text-left text-black">
                      Method
                    </th>
                    <th className="py-2 px-4 border-b text-left text-black">
                      Amount ($)
                    </th>
                    <th className="py-2 px-4 border-b text-left text-black">
                      Notes
                    </th>
                    <th className="py-2 px-4 border-b text-left text-black">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition duration-150"
                    >
                      <td className="py-2 px-4 border-b">{index + 1}</td>
                      <td className="py-2 px-4 border-b">
                        {payment.plan?.name || "-"}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {payment.plan?.type || "-"}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {payment.paymentMethod}
                      </td>
                      <td className="py-2 px-4 border-b">{payment.amount}</td>
                      <td className="py-2 px-4 border-b truncate max-w-xs">
                        {payment.notes || "–"}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {new Date(payment.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => {
                  localStorage.removeItem("paymentData");
                  setPaymentHistory([]);
                  setSelectedPaymentMethod(null);
                  Swal.fire({
                    icon: "success",
                    title: "Payment history cleared successfully",
                  });
                }}
                className="mt-4 bg-red-600 text-white text-sm px-3 py-2 rounded-2xl hover:bg-red-700 transition"
              >
                Clear Payment History
              </button>
            </div>
          </section>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        paymentMethod={selectedPaymentMethod}
        selectedAmount={calculateTotal()}
        selectedPlanData={getSelectedPlanData()}
        onSubmitPayment={handlePaymentSubmit}
      />
    </>
  );
};

export default Payment;
