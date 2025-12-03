"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Swal from "sweetalert2";

type EnquiryFormState = {
  student_name: string;
  father_name: string;
  mother_name: string;
  phone: string;
  email: string;
  address: string;
  class_interested: string;
  dob: string;
  gender: string;
  previous_school: string;
  remarks: string;
};

const CLASS_OPTIONS = [
  "Pre-Nursery",
  "Nursery",
  "LKG",
  "UKG",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
];

export default function EnquiryPage() {
  const [formData, setFormData] = useState<EnquiryFormState>({
    student_name: "",
    father_name: "",
    mother_name: "",
    phone: "",
    email: "",
    address: "",
    class_interested: "",
    dob: "",
    gender: "",
    previous_school: "",
    remarks: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));

      if (!digitsOnly) {
        setPhoneError("Phone number is required.");
      } else if (digitsOnly.length !== 10) {
        setPhoneError("Please enter a valid 10-digit Indian mobile number.");
      } else {
        setPhoneError("");
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const digitsOnly = (formData.phone || "").replace(/\D/g, "");

    if (!digitsOnly) {
      setPhoneError("Phone number is required.");
      Swal.fire(
        "Invalid Phone",
        "Please enter your 10-digit mobile number (without +91).",
        "error"
      );
      return;
    }

    if (digitsOnly.length !== 10) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number.");
      Swal.fire(
        "Invalid Phone",
        "Phone number must be exactly 10 digits. Example: 9876543210",
        "error"
      );
      return;
    }

    setPhoneError("");
    setIsSubmitting(true);

    const payload = {
      ...formData,
      phone: `+91${digitsOnly}`,
    };

    try {
      const response = await fetch(
        "https://api-pits.edubridgeerp.in/enquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        let message = "Something went wrong. Please try again.";

        if (response.status === 400 || response.status === 422) {
          message =
            data?.message ||
            "Some form fields seem invalid. Please check the details and try again.";
        } else if (response.status >= 500) {
          message =
            "Server error while saving your enquiry. Please try again after some time.";
        } else if (data?.message) {
          message = data.message;
        }

        Swal.fire("Error", message, "error");
        return;
      }

      Swal.fire(
        "Thank You!",
        "Your admission enquiry has been submitted successfully.",
        "success"
      );

      setFormData({
        student_name: "",
        father_name: "",
        mother_name: "",
        phone: "",
        email: "",
        address: "",
        class_interested: "",
        dob: "",
        gender: "",
        previous_school: "",
        remarks: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      Swal.fire(
        "Error",
        "Unable to reach the server. Please check your internet connection and try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background image + gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/images/SchooBackground.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/80 to-slate-950/95" />

      {/* Subtle glow circles */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-72 h-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-72 h-72 rounded-full bg-emerald-500/15 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 py-8 md:py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full border border-sky-400/60 bg-slate-900/70 flex items-center justify-center overflow-hidden shadow-lg shadow-black/40">
              <img
                src="/images/pts_logo.png"
                alt="PathSeeker Logo"
                className="w-full h-full object-contain p-1.5"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-sky-300 mb-1">
                Admission Enquiry · Session 2026–27
              </p>
              <h1 className="text-lg md:text-2xl font-semibold text-slate-50">
                PathSeeker International School
              </h1>
              <p className="text-xs md:text-sm text-slate-300">
                RAMGARH/VIJAYPUR, DISTRICT SAMBA (JKUT) INDIA.
              </p>
              <p className="text-[11px] md:text-xs text-sky-300 mt-1">
                Admission Enquiry Form (Pre-Nursery to 9th Grade)
              </p>
            </div>
          </div>

          <div className="text-[11px] md:text-sm text-right text-slate-300 space-y-1 max-w-xs md:max-w-sm">
            <p className="font-semibold text-emerald-300">
              Admissions Open · Session 2026–27
            </p>
            <p>CBSE-aligned curriculum · Child-centric learning</p>
            <p className="text-sky-300">
              School team will contact you after submission with fee details &
              process.
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-5 md:gap-8 items-start">
          {/* Form card */}
          <div className="rounded-3xl bg-slate-900/85 border border-slate-700/70 shadow-2xl shadow-black/50 backdrop-blur-xl p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 md:mb-6">
              <div>
                <h2 className="text-base md:text-lg font-semibold text-slate-50">
                  Admission Enquiry Form – 2026–27
                </h2>
                <p className="text-xs md:text-sm text-slate-400">
                  Kindly fill the information carefully. Fields marked with{" "}
                  <span className="text-red-400">*</span> are mandatory.
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] md:text-xs bg-sky-500/10 text-sky-300 border border-sky-500/40">
                Expected response: within 24 working hours*
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Student details */}
              <section>
                <h3 className="text-[11px] font-semibold text-sky-300 mb-2 uppercase tracking-[0.2em]">
                  Student Details
                </h3>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-200">
                      Student Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="student_name"
                      value={formData.student_name}
                      onChange={handleChange}
                      required
                      placeholder="Enter student's full name"
                      className="w-full rounded-xl bg-slate-950/70 border border-slate-600/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-200">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-slate-950/70 border border-slate-600/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                </div>
              </section>

              {/* Parents */}
              <section>
                <h3 className="text-[11px] font-semibold text-sky-300 mb-2 uppercase tracking-[0.2em]">
                  Parent / Guardian
                </h3>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-200">
                      Father&apos;s Name
                    </label>
                    <input
                      type="text"
                      name="father_name"
                      value={formData.father_name}
                      onChange={handleChange}
                      placeholder="Enter father's name"
                      className="w-full rounded-xl bg-slate-950/70 border border-slate-600/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-200">
                      Mother&apos;s Name
                    </label>
                    <input
                      type="text"
                      name="mother_name"
                      value={formData.mother_name}
                      onChange={handleChange}
                      placeholder="Enter mother's name"
                      className="w-full rounded-xl bg-slate-950/70 border border-slate-600/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                </div>
              </section>

              {/* Contact & class */}
              <section>
                <h3 className="text-[11px] font-semibold text-sky-300 mb-2 uppercase tracking-[0.2em]">
                  Contact & Class
                </h3>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-200">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center rounded-l-xl border border-r-0 border-slate-600/80 bg-slate-950/80 px-3 text-xs text-slate-200">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        className="flex-1 rounded-r-xl bg-slate-950/70 border border-l-0 border-slate-600/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Please enter without +91. It will be saved as{" "}
                      <span className="text-sky-300">+91XXXXXXXXXX</span>.
                    </p>
                    {phoneError && (
                      <p className="text-[11px] text-red-400 mt-1">
                        {phoneError}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-200">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full rounded-xl bg-slate-950/70 border border-slate-600/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-200">
                      Class Interested <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="class_interested"
                      value={formData.class_interested}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl bg-slate-950/70 border border-slate-600/80 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="" className="text-slate-900">
                        Select class
                      </option>
                      {CLASS_OPTIONS.map((cls) => (
                        <option
                          key={cls}
                          value={cls}
                          className="text-slate-900"
                        >
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-200">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-slate-950/70 border border-slate-600/80 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="" className="text-slate-900">
                        Select gender
                      </option>
                      <option className="text-slate-900">Male</option>
                      <option className="text-slate-900">Female</option>
                      <option className="text-slate-900">Other</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Additional info */}
              <section>
                <h3 className="text-[11px] font-semibold text-sky-300 mb-2 uppercase tracking-[0.2em]">
                  Additional Information
                </h3>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-200">
                      Previous School (if any)
                    </label>
                    <input
                      type="text"
                      name="previous_school"
                      value={formData.previous_school}
                      onChange={handleChange}
                      placeholder="Enter previous school"
                      className="w-full rounded-xl bg-slate-950/70 border border-slate-600/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-200">Address</label>
                    <textarea
                      name="address"
                      rows={2}
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter residential address"
                      className="w-full rounded-xl bg-slate-950/70 border border-slate-600/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-none"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 mt-3">
                  <label className="text-xs text-slate-200">Remarks</label>
                  <textarea
                    name="remarks"
                    rows={2}
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Any special requirements or queries"
                    className="w-full rounded-xl bg-slate-950/70 border border-slate-600/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-none"
                  />
                </div>
              </section>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-slate-950 text-sm font-semibold py-2.5 md:py-3 shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:from-sky-300 hover:via-sky-400 hover:to-sky-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.9)] disabled:bg-slate-600 disabled:shadow-none transition-all"
              >
                {isSubmitting ? "Submitting..." : "Submit Admission Enquiry"}
              </button>
            </form>

            <p className="mt-3 text-[11px] text-slate-400 text-center">
              *Response time may vary on Sundays / holidays. ©{" "}
              {new Date().getFullYear()} PathSeeker International School.
            </p>
          </div>

          {/* Right side info card */}
          <aside className="hidden md:block">
            <div className="h-full rounded-3xl bg-slate-900/80 border border-slate-700/70 shadow-xl backdrop-blur-xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-50 mb-2">
                  Before you visit the school
                </h3>
                <p className="text-xs text-slate-300 mb-3">
                  This enquiry form helps the school team understand your
                  requirement and guide you with the right information for
                  Session 2026–27.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• Get a call back from the school office</li>
                  <li>• Clarify fee structure & available seats</li>
                  <li>• Plan campus visit / interaction slot</li>
                  <li>• Discuss transport & other facilities</li>
                </ul>
              </div>

              <div className="mt-6 border-t border-slate-700/70 pt-4 text-[11px] text-slate-400 space-y-1">
                <p className="text-slate-300 font-medium">
                  Important Admission Note:
                </p>
                <p>
                  Submitting this form does not confirm admission. All
                  admissions are strictly as per school policies, interaction
                  (if required) and seat availability.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
