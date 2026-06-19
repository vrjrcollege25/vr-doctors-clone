
"use client";
import { useState } from "react";

export default function ContactForm() {
const [formData, setFormData] = useState({
studentName: "",
parentName: "",
mobileNumber: "",
currentClass: "",
interestedCourse: "",
residentialProgram: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");

const handleChange = (
e: React.ChangeEvent<
HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>
) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (
e: React.FormEvent<HTMLFormElement>
) => {
e.preventDefault();

if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
  alert("Please enter a valid 10-digit mobile number.");
  return;
}

setLoading(true);
setSuccess("");

try {
  await fetch(
    "https://script.google.com/macros/s/AKfycbz8dHCpSLdnLhgugb28zXjsc9MBUY3wKvpyfdbo4JgA0d1_QfrzUFc47cC4UaUrV-Xn/exec",
    {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        leadSource: "Website Contact Page",
      }),
    }
  );

  setSuccess(
    "Thank you! Our team of education counsellors will contact you shortly."
  );

  setFormData({
    studentName: "",
    parentName: "",
    mobileNumber: "",
    currentClass: "",
    interestedCourse: "",
    residentialProgram: "",
  });
} catch (error) {
  alert("Something went wrong. Please try again.");
  console.error(error);
}

setLoading(false);
};

return ( <section className="py-16 md:py-24 bg-gray-50"> <div className="max-w-5xl mx-auto px-6"> <div className="text-center mb-12"> <p className="text-orange-500 font-semibold uppercase tracking-widest">
Enquiry Form </p>

```
      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-blue-900">
        Request A Callback
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Fill in your details and our admissions team will
        get in touch with you shortly.
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl p-6 md:p-10"
    >
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-semibold text-blue-900 mb-2">
            Student Name *
          </label>

          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            placeholder="Enter student name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-blue-900 mb-2">
            Parent Name *
          </label>

          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
            placeholder="Enter parent name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-blue-900 mb-2">
            Mobile Number *
          </label>

          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="Enter 10-digit mobile number"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
        </div>

        <div>
          <label className="block text-sm font-semibold text-blue-900 mb-2">
            Current Class *
          </label>

          <select
            name="currentClass"
            value={formData.currentClass}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
          >
            <option value="">Select Current Class</option>
            <option>10th Appearing</option>
            <option>Completed 10th</option>
            <option>Inter 1st Year</option>
            <option>Inter 2nd Year</option>
            <option>Repeater</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-blue-900 mb-2">
            Interested Course *
          </label>

          <select
            name="interestedCourse"
            value={formData.interestedCourse}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
          >
            <option value="">Select Course</option>
            <option>Intermediate + NEET</option>
            <option>Long-Term NEET</option>
            <option>Short-Term Revision</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-blue-900 mb-2">
            Residential Program
          </label>

          <select
            name="residentialProgram"
            value={formData.residentialProgram}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
          >
            <option value="">Select Option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>

      {success && (
        <div className="mt-6 bg-green-100 text-green-800 rounded-xl p-4 text-center font-medium">
          {success}
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 transition text-white px-10 py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Request Callback"}
        </button>
      </div>
    </form>
  </div>
</section>
);
}