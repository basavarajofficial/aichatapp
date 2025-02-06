interface SubscriptionPlan {
    planName: string;
    price: string;
    startDate: string;
    duration: string;
    status: string;
    expiryDate: string;
    isSelected?: boolean;
  }

  const SubscriptionCard: React.FC<SubscriptionPlan> = ({
    planName,
    price,
    startDate,
    duration,
    status,
    expiryDate,
  }) => {
    return (
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6">
        <div className="rounded-lg bg-orange-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">{planName}</h2>
            <div className="text-right">
              <div className="text-2xl font-bold">{price}</div>
              <div className="text-sm">Started {startDate}</div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Payment Details :</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Duration: {duration}</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Status: {status}</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Expiry Date: {expiryDate}</span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <div className="rounded-lg bg-white p-4">
              <div className="flex items-center justify-center space-x-2 text-orange-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Selected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Example usage:
  const Card = () => {
    const planDetails: SubscriptionPlan = {
      planName: "Pro",
      price: "100k/Month",
      startDate: "20.01.25",
      duration: "12 Months",
      status: "Active",
      expiryDate: "22.06.24",
      isSelected: true
    };

    return <SubscriptionCard {...planDetails} />;
  };

  export default Card;
