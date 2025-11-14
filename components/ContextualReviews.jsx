import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContextualReviews({
  context = "general",
  maxReviews = 3,
  showTitle = true,
  title = "Customer Reviews",
  className = "",
}) {
  const [reviews, setReviews] = useState([]);
  const [businessName, setBusinessName] = useState("");
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});

  // Context-specific review filtering
  const getContextualReviews = (allReviews, context) => {
    const contextKeywords = {
      "tv-mounting": ["tv", "television", "mount", "wall", "screen", "display"],
      "ceiling-fan-installation": [
        "fan",
        "ceiling",
        "air",
        "cooling",
        "ventilation",
      ],
      "lighting-installation": [
        "light",
        "lamp",
        "fixture",
        "bright",
        "illumination",
      ],
      "appliance-installation": [
        "appliance",
        "dishwasher",
        "washer",
        "dryer",
        "refrigerator",
      ],
      "garage-door-opener-installation": [
        "garage",
        "door",
        "opener",
        "remote",
        "motor",
      ],
      "ring-doorbell-installation": [
        "doorbell",
        "ring",
        "security",
        "camera",
        "video",
      ],
      "faucet-toilet-installation": [
        "faucet",
        "toilet",
        "bathroom",
        "plumbing",
        "water",
      ],
      "blinds-installation": [
        "blinds",
        "shades",
        "window",
        "privacy",
        "covering",
      ],
      "mirror-towel-bar-installation": [
        "mirror",
        "towel",
        "bathroom",
        "bar",
        "accessory",
      ],
      "door-installation": ["door", "entrance", "entry", "security", "access"],
      "deck-fence-repair": [
        "deck",
        "fence",
        "outdoor",
        "patio",
        "yard",
        "repair",
      ],
      "water-leak-repair": ["water", "leak", "plumbing", "repair"],
      "garbage-disposal-installation": [
        "garbage",
        "disposal",
        "kitchen",
        "waste",
        "sink",
      ],
      "shelving-installation": [
        "shelf",
        "storage",
        "organization",
        "closet",
        "garage",
      ],
      contact: ["service", "customer", "support", "help", "professional"],
      faqs: ["question", "help", "support", "service", "professional"],
      general: [],
    };

    const keywords = contextKeywords[context] || [];

    if (keywords.length === 0) {
      return allReviews; // Return all reviews for general context
    }

    // Filter reviews that mention context-specific keywords
    return allReviews.filter((review) => {
      const text = review.text.toLowerCase();
      return keywords.some((keyword) => text.includes(keyword));
    });
  };

  useEffect(() => {
    fetchReviews();
  }, [context]);

  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/reviews");
      const data = await response.json();

      if (data.error) {
        setError(data.message);
        return;
      }

      setBusinessName(data.name || "Install It Guy");
      setRating(data.rating || 0);
      setTotalRatings(data.user_ratings_total || 0);

      // Get all reviews and filter by context
      const allReviews = (data.reviews || []).sort(
        (a, b) => (b.time || 0) - (a.time || 0)
      );

      const contextualReviews = getContextualReviews(allReviews, context);

      // If we don't have enough contextual reviews, fall back to general reviews
      // but prioritize contextual ones first
      let finalReviews = contextualReviews;
      if (contextualReviews.length < maxReviews && context !== "general") {
        // Get reviews that aren't already in contextual reviews
        const contextualReviewTexts = new Set(
          contextualReviews.map((r) => r.text)
        );
        const generalReviews = allReviews.filter(
          (r) => !contextualReviewTexts.has(r.text)
        );
        // Combine contextual reviews first, then fill with general reviews
        finalReviews = [
          ...contextualReviews,
          ...generalReviews.slice(0, maxReviews - contextualReviews.length),
        ];
      }

      finalReviews = finalReviews.slice(0, maxReviews);
      setReviews(finalReviews);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setError("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ⭐
      </span>
    ));
  };

  const toggleExpanded = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text, maxLength = 110) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  if (loading) {
    return (
      <section className={`py-8 ${className}`}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600 text-sm">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`py-8 ${className}`}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={fetchReviews}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return null; // Don't show anything if no reviews available
  }

  return (
    <section className={`py-8 bg-gray-50 ${className}`}>
      <div className="max-w-5xl mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {title} ⭐ {rating} ({totalRatings})
            </h3>
            <p className="text-gray-600">
              What our customers say about{" "}
              {context === "general"
                ? "our services"
                : `our ${context.replace("-", " ")} services`}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
            >
              {/* Header with profile photo and name */}
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-blue-100 text-blue-600 flex items-center justify-center">
                  {review.profile_photo_url ? (
                    <Image
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-xs font-semibold">
                      {review.author_name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {review.author_name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>

              {/* Star rating */}
              <div className="flex items-center mb-3">
                <div className="flex">{renderStars(review.rating)}</div>
                <span className="ml-2 text-xs text-gray-600">
                  {review.rating}/5
                </span>
              </div>

              {/* Review text */}
              <div className="text-gray-700 mb-3 leading-relaxed text-sm">
                <p>
                  {expandedReviews[index]
                    ? review.text
                    : truncateText(review.text)}
                </p>
                {review.text.length > 110 && (
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium mt-1 transition-colors"
                  >
                    {expandedReviews[index] ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
