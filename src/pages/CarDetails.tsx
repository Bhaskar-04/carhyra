import { useParams } from "react-router-dom";
import { CARS, WHATSAPP_NUMBER } from "../constants";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect, useMemo } from "react";

/* ================= TESTIMONIAL IMPORTS ================= */
import testimonial1 from "../assets/testimonials/TEST1.png";
import testimonial2 from "../assets/testimonials/TEST2.png";
import testimonial3 from "../assets/testimonials/TEST3.png";
import testimonial4 from "../assets/testimonials/TEST4.png";
import testimonial5 from "../assets/testimonials/TEST5.png";
import testimonial6 from "../assets/testimonials/TEST6.png";
import testimonial7 from "../assets/testimonials/TEST7.png";
import testimonial8 from "../assets/testimonials/TEST8.png";
import testimonial9 from "../assets/testimonials/TEST9.png";
import testimonial10 from "../assets/testimonials/TEST10.png";
import testimonial11 from "../assets/testimonials/TEST11.png";
import testimonial12 from "../assets/testimonials/TEST12.png";
import testimonial13 from "../assets/testimonials/TEST13.png";
import testimonial14 from "../assets/testimonials/TEST14.png";
import testimonial15 from "../assets/testimonials/TEST15.png";

export default function CarDetails() {
  const { id } = useParams();
  const car = CARS.find((c) => c.id === id);

  const images = useMemo(() => {
    if (!car) return [];
    return car.images?.length ? car.images : car.image ? [car.image] : [];
  }, [car]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(
    null,
  );
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
    testimonial6,
    testimonial7,
    testimonial8,
    testimonial9,
    testimonial10,
    testimonial11,
    testimonial12,
    testimonial13,
    testimonial14,
    testimonial15,
  ];

  const itemsVisible = isMobile ? 1 : 3;
  const maxIndex = testimonials.length - itemsVisible;

  const nextTestimonial = () => {
    if (testimonialIndex < maxIndex) {
      setTestimonialIndex((prev) => prev + 1);
    }
  };

  const prevTestimonial = () => {
    if (testimonialIndex > 0) {
      setTestimonialIndex((prev) => prev - 1);
    }
  };

  /* ================= AUTO CAROUSEL ================= */
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  if (!car) {
    return <div className="p-20 text-2xl">Car Not Found</div>;
  }

  

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Carhyra, I want to book ${car.name}.`,
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
                className="w-full h-70 md:h-112.5 object-cover transition-all duration-700"
              />
            </div>

            <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-24 h-20 object-cover rounded-xl shrink-0 cursor-pointer border-2 transition-all duration-300
                    ${
                      currentIndex === index
                        ? "border-primary scale-105"
                        : "border-transparent hover:border-primary"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* ===== DETAILS ===== */}
          <div>
            <h1 className="text-4xl font-bold mb-6">{car.name}</h1>
            <p className="text-slate-500 mb-8">{car.description}</p>

            <div className="space-y-4 text-lg">
              <p>
                <b>Seats:</b> {car.seats}
              </p>
              <p>
                <b>Transmission:</b> {car.transmission}
              </p>
              <p>
                <b>Fuel:</b> {car.fuel}
              </p>
              <p>
                <b>Price:</b> ₹{car.price*24}/- per day (₹{car.price}/-hour*)
              </p>
              <p>
                <b>Booking Duration:</b> Minimum 1 day
              </p>
              <p>
                <b>Security Deposit:</b> ₹{car.security_deposit} (Refundable within 48 hours after the ride)
              </p>
            </div>

            <button
              onClick={handleWhatsApp}
              className="mt-10 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all"
            >
              Book This Car on WhatsApp
            </button>

            {/* ================= TESTIMONIALS ================= */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
                Customer Testimonials
              </h2>

              <div className="relative">
                {/* LEFT BUTTON */}
                {testimonialIndex > 0 && (
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-primary text-white w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg"
                  >
                    ‹
                  </button>
                )}

                {/* SLIDER */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${
                        testimonialIndex * (100 / itemsVisible)
                      }%)`,
                    }}
                  >
                    {testimonials.map((img, index) => (
                      <div
                        key={index}
                        className="min-w-full md:min-w-[33.333%] px-2 md:px-3"
                        onClick={() => setSelectedTestimonial(img)}
                      >
                        <div className="rounded-xl overflow-hidden shadow-md bg-white">
                          <img
                            src={img}
                            alt={`testimonial-${index}`}
                            className="w-full h-64 md:h-56 object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT BUTTON */}
                {testimonialIndex < maxIndex && (
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-primary text-white w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg"
                  >
                    ›
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL MODAL ================= */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedTestimonial}
              alt="Full Testimonial"
              className="w-full max-h-[90vh] object-contain rounded-xl shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelectedTestimonial(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* ================= TERMS SECTION ================= */}
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
                throughout the rental period. Carhyra reserves the right to
                verify identity and driving credentials before confirming any
                booking.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                2. Minimum Booking Duration
              </h3>
              <p>
                The minimum booking duration is 1 full day (24 hours).
                Partial-day bookings are not permitted. The rental period begins
                at the agreed pickup time and ends at the scheduled return time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                3. Booking & Advance Payment
              </h3>
              <p>
                All bookings must be confirmed with 100% advance payment of the
                rental amount along with the applicable security deposit.
                Bookings without full advance payment will not be considered
                confirmed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                4. Security Deposit (Refundable)
              </h3>
              <p>
                A refundable security deposit is mandatory prior to vehicle
                handover. The deposit will be refunded within 3–7 working days
                after vehicle return, subject to inspection and confirmation
                that there are no damages, traffic violations, fuel shortages,
                or policy violations. Any applicable charges will be deducted
                from the deposit.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                5. Cancellation Policy
              </h3>
              <p>
                Cancellations must be made at least 24 hours before the
                scheduled delivery or pickup time. Cancellations made within 24
                hours may attract cancellation charges. No-shows or last-minute
                cancellations may result in partial or full deduction of the
                rental amount.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                6. Late Return Charges
              </h3>
              <p>
                Vehicles must be returned at the agreed time. Late returns may
                incur additional hourly or daily rental charges. Repeated delays
                may result in penalties or restriction from future bookings.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                7. Vehicle Condition & Inspection
              </h3>
              <p>
                The renter must inspect the vehicle at the time of delivery. Any
                visible damage must be reported immediately. Failure to report
                pre-existing damage may result in the renter being held
                responsible. The vehicle must be returned in the same condition
                as delivered, excluding normal wear and tear.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">8. Fuel Policy</h3>
              <p>
                The vehicle must be returned with the same fuel level as
                provided at the time of pickup. Any fuel shortage will be
                charged at prevailing market rates along with applicable service
                charges.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                9. Traffic Violations & Penalties
              </h3>
              <p>
                The renter is fully responsible for any traffic violations,
                tolls, challans, parking fines, or legal penalties incurred
                during the rental period. Any unpaid penalties discovered after
                vehicle return will be recovered from the renter.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                10. Damage & Accident Liability
              </h3>
              <p>
                The renter is responsible for any damage caused during the
                rental period. In case of an accident, Carhyra must be informed
                immediately and necessary legal procedures must be followed.
                Repair costs not covered by insurance (if applicable) must be
                borne by the renter.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">11. Prohibited Use</h3>
              <p>
                The vehicle must not be used for illegal activities, racing,
                commercial transportation, subletting, or driving under the
                influence of alcohol or drugs. Violation of these conditions may
                result in immediate termination of the rental and forfeiture of
                the security deposit.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                12. Limitation of Liability
              </h3>
              <p>
                Carhyra shall not be held responsible for loss of personal
                belongings left inside the vehicle or delays caused by
                unforeseen circumstances. By booking and using the vehicle, the
                renter agrees to all terms and conditions stated above.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                13. GPS Tracking
              </h3>
              <p>
                Your safety is our priority, to keep you safe all our cars fitted with gps trackers & are monitored round the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
