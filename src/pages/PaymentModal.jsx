import { useState } from "react";
import { X } from "lucide-react";
import Swal from "sweetalert2";

const PaymentModal = ({
  isOpen,
  onClose,
  paymentMethod,
  selectedAmount,
  selectedPlanData,
  onSubmitPayment,
}) => {
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (file === null) {
      Swal.fire({
        icon: "error",
        title: "Please upload your payment image/pdf file",
        text: "Something went wrong!",
      });
      return;
    }

    const paymentData = {
      paymentMethod: paymentMethod.name,
      amount: selectedAmount,
      plan: selectedPlanData,
      fileName: file ? file.name : null,
      notes: notes,
      timestamp: new Date().toISOString(),
    };

    console.log("Payment submitted:", paymentData);

    Swal.fire({
      title: "Payment slip received and selected method",
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

    onSubmitPayment(paymentData);

    setFile(null);
    setNotes("");
    onClose();
  };

  const getInstallmentDetails = () => {
    if (!selectedPlanData) return null;

    if (selectedPlanData.id === "yearly-installment") {
      return { total: 12, amount: 10 };
    }
    if (selectedPlanData.id === "life-installment") {
      return { total: 5, amount: 100 };
    }
    return null;
  };

  const installmentDetails = getInstallmentDetails();

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="border-b-2 border-slate-400 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          <h2 className="text-3xl font-bold text-black">
            {paymentMethod.name}
          </h2>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-black mb-4">
              Complete your payment with:{" "}
              <span className="text-purple-600 font-semibold">
                {paymentMethod.name}
              </span>
            </p>

            {/* QR Code Section */}
            {(paymentMethod.id === "zelle" || paymentMethod.id === "venmo") && (
              <div className="flex justify-center my-6">
                <div className="border-2 border-gray-200 rounded-lg p-8">
                  <div className="w-48 h-48 bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-2">⊞</div>
                      <p className="text-purple-600 font-semibold">
                        {paymentMethod.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Scan with your mobile device
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">
              Payment Details
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="text-black font-semibold">Selected Plan</p>
                <p className="text-black">
                  {selectedPlanData?.type || "Upfront"}
                </p>
              </div>

              {installmentDetails && (
                <div className="flex justify-between">
                  <p className="text-black font-semibold">Installments</p>
                  <p className="text-black">
                    {installmentDetails.total} × $
                    {installmentDetails.amount.toFixed(2)}
                  </p>
                </div>
              )}
            </div>

            {/* Installment Breakdown */}
            {installmentDetails && (
              <div className="mb-4">
                <p className="text-black font-semibold mb-2">
                  Installment Breakdown
                </p>
                <p className="text-gray-700">
                  Installments: {installmentDetails.total}
                </p>
                <p className="text-gray-700">
                  Per Installment: ${installmentDetails.amount.toFixed(2)}
                </p>

                <div className="bg-blue-50 p-3 rounded mt-3">
                  <p className="text-blue-900 font-semibold">
                    Progress: 1 / {installmentDetails.total}
                  </p>
                  <p className="text-blue-700 text-sm">
                    Next: Installment 2 of {installmentDetails.total}
                  </p>
                </div>
              </div>
            )}

            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-700">Membership Fee</p>
                <p className="text-black font-semibold">
                  $
                  {installmentDetails
                    ? installmentDetails.amount.toFixed(2)
                    : selectedPlanData?.price.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <p className="text-black">Total Payable Amount</p>
                <p className="text-black">
                  $
                  {installmentDetails
                    ? installmentDetails.amount.toFixed(2)
                    : selectedAmount}
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-700 mb-4">
              How to complete payment:
            </h3>
            <ol className="space-y-2 text-gray-700">
              <li>1. Scan the QR code above with your payment app</li>
              <li>
                2. Complete the payment for $
                {installmentDetails
                  ? installmentDetails.amount.toFixed(2)
                  : selectedAmount}
              </li>
              <li>3. Take a screenshot of the payment confirmation</li>
              <li>4. Upload the receipt below</li>
            </ol>
          </div>

          {/* File Upload Section */}
          <div>
            <label className="block text-black font-bold mb-2">
              Upload Payment Receipt *{" "}
              <span className="font-normal text-gray-600">
                (JPG, PNG, PDF. Max 10 MB file)
              </span>
            </label>
            <div className="flex items-center gap-4">
              <label className="bg-gray-100 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-200 transition">
                Choose File
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="text-gray-600">
                {file ? file.name : "No File Chosen"}
              </span>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-black font-bold mb-2">
              Additional Notes{" "}
              <span className="font-normal text-gray-600">(Optional)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Type..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#012077] text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 transition"
          >
            Submit Payment Proof
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
