import { useState } from "react";
import { WEB3FORMS_CONFIG } from "../config/web3forms";

export default function TestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    try {
      // Submit to both Web3Forms accounts
      const submissions = await Promise.allSettled([
        // Submit to Mason's account
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_CONFIG.mason.accessKey,
            name: "Test User",
            email: "test@example.com",
            phone: "(704) 123-4567",
            message: "This is a test form submission to verify Web3Forms is working correctly.",
            to: WEB3FORMS_CONFIG.mason.email,
            subject: "Test Form Submission - Install It Guy",
            from_name: "Test User",
            reply_to: "test@example.com",
            ip_address: true,
            form_name: "Test Form",
            website: "Install It Guy",
          }),
        }),
        // Submit to Scott's account
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_CONFIG.scott.accessKey,
            name: "Test User",
            email: "test@example.com",
            phone: "(704) 123-4567",
            message: "This is a test form submission to verify Web3Forms is working correctly.",
            to: WEB3FORMS_CONFIG.scott.email,
            subject: "Test Form Submission - Install It Guy",
            from_name: "Test User",
            reply_to: "test@example.com",
            ip_address: true,
            form_name: "Test Form",
            website: "Install It Guy",
          }),
        }),
      ]);

      const successfulSubmissions = submissions.filter(result => result.status === 'fulfilled' && result.value.ok);
      const failedSubmissions = submissions.filter(result => result.status === 'rejected' || !result.value.ok);
      
      if (successfulSubmissions.length > 0) {
        setResult(`✅ Form submitted successfully! ${successfulSubmissions.length}/2 accounts received the email. Check both email addresses.`);
      } else {
        setResult(`❌ Error: All submissions failed`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult(`❌ Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Test Web3Forms</h2>
      <p className="text-sm text-gray-600 mb-4">
        This form will send test emails to both accounts:
        <br />• <strong>{WEB3FORMS_CONFIG.mason.email}</strong> (Mason)
        <br />• <strong>{WEB3FORMS_CONFIG.scott.email}</strong> (Scott)
      </p>
      
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Test Email"}
        </button>
      </form>

      {result && (
        <div className={`mt-4 p-3 rounded ${
          result.includes("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}>
          {result}
        </div>
      )}
    </div>
  );
}
