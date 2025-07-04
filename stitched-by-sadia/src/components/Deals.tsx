import { useState } from "react";
import DealCard from "./DealCard"; // <-- import your new DealCard

const dealData = [
  {
    id: "first-class-free",
    title: "First Class Free",
    description: "Try your first class completely free — no strings attached!",
    badge: "New",
  },
  {
    id: "bring-a-friend",
    title: "Bring a Friend",
    description: "Bring a friend and both get 25% off each class!",
    badge: "Hot",
  },
  {
    id: "buy-4-get-1-free",
    title: "4 Classes Paid, 5th Class Free",
    description: "Pay for 4 classes and get the 5th one free!",
  },
];

const Deals = () => {
  const [selectedDeal, setSelectedDeal] = useState<string | null>(null);

  return (
    <section className="py-5 text-center" style={{ backgroundColor: "#ffe4e6" }}>
      <div className="container px-4">
        <h2 className="h1 fw-semibold mb-4" style={{ color: "#ec4899" }}>
          Special Offers
        </h2>
        <div className="row g-4">
          {dealData.map((deal) => (
            <div className="col-12 col-sm-6 col-lg-4" key={deal.id}>
              <DealCard
                title={deal.title}
                description={deal.description}
                isSelected={selectedDeal === deal.id}
                onClick={() => setSelectedDeal(deal.id)}
                badgeText={deal.badge}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
