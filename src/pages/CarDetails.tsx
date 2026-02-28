import { useParams } from "react-router-dom";
import { CARS, WHATSAPP_NUMBER } from "../constants";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function CarDetails() {
  const { id } = useParams();
  const car = CARS.find((c) => c.id === id);

  const images = car?.images?.length ? car.images : [car?.image];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Carousel
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (!car) {
    return <div className="p-20 text-2xl">Car Not Found</div>;
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Carhyra, I want to book ${car.name}.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div>
      <Navbar />

      {/* ================= CAR SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* ===== GALLERY ===== */}
          <div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={images[currentIndex]}
                alt={car.name}
                className="w-full h-[450px] object-cover transition-all duration-700"
              />
            </div>

            <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img: string, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-24 h-20 object-cover rounded-xl flex-shrink-0 cursor-pointer border-2 transition-all duration-300
                    ${
                      currentIndex === index
                        ? "border-primary scale-105"
                        : "border-transparent hover:border-primary"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* ===== DETAILS ===== */}
          <div>
            <h1 className="text-4xl font-bold mb-6">{car.name}</h1>
            <p className="text-slate-500 mb-8">{car.description}</p>

            <div className="space-y-4 text-lg">
              <p><b>Seats:</b> {car.seats}</p>
              <p><b>Transmission:</b> {car.transmission}</p>
              <p><b>Fuel:</b> {car.fuel}</p>
              <p><b>Starting Price:</b> ₹{car.price}/day</p>
            </div>

            <button
              onClick={handleWhatsApp}
              className="mt-10 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all"
            >
              Book This Car on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* ================= TERMS & CONDITIONS ================= */}
      <section className="bg-gray-50 py-20 border-t">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            🚗 Carhyra – Terms & Conditions
          </h2>

          <div className="space-y-8 text-slate-700 leading-relaxed">

            <div>
              <h3 className="font-semibold text-lg mb-2">1. Eligibility</h3>
              <p>
                The renter must be at least 21 years of age and hold a valid
                government-issued driving license. The license must remain valid
                throughout the rental period. Carhyra reserves the right to verify
                identity and driving credentials before approving any booking.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. Booking & Payment</h3>
              <p>
                A booking is confirmed only after full rental payment along with
                the mandatory ₹1000 security deposit has been successfully received
                by Carhyra.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                3. Security Deposit (Refundable)
              </h3>
              <p>
                A refundable security deposit of ₹1000 is required prior to vehicle
                handover. The deposit will be refunded within 3–7 working days after
                the vehicle is returned, subject to no damages, no policy violations,
                and no pending traffic fines. If damages occur, repair costs may be
                deducted from the deposit.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Vehicle Condition</h3>
              <p>
                The renter must inspect the vehicle at the time of pickup. Any
                visible damage must be reported immediately. Failure to report
                pre-existing damage may result in the renter being held responsible.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                5. Damage & Repair Liability
              </h3>
              <p>
                The renter is responsible for any damage caused during the rental
                period, including exterior, interior, tire, or mechanical damage
                due to negligence. If repair costs exceed ₹1000, the renter agrees
                to pay the additional amount.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">6. Fuel Policy</h3>
              <p>
                Vehicles must be returned with the same fuel level as provided at
                pickup. Any shortage in fuel will be charged at prevailing market
                rates.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">7. Late Return Charges</h3>
              <p>
                If the vehicle is returned later than the agreed time, additional
                hourly or daily rental charges may apply.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                8. Traffic Violations & Penalties
              </h3>
              <p>
                The renter is fully responsible for any traffic violations, tolls,
                challans, parking fines, or legal penalties incurred during the
                rental period. Carhyra reserves the right to recover unpaid penalties
                from the renter.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">9. Cancellation Policy</h3>
              <p>
                Cancellations must be made at least 24 hours before the scheduled
                pickup time to be eligible for refund consideration. Late
                cancellations may attract cancellation charges. Security deposits
                are refundable if cancellation occurs before vehicle delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}