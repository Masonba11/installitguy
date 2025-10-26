import { useState, useEffect } from "react";

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
      "water-leak-repair": ["water", "leak", "plumbing", "repair", "emergency"],
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
      const finalReviews = contextualReviews.slice(0, maxReviews);

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

  if (error || reviews.length === 0) {
    return null; // Don't show anything if no contextual reviews
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
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  {review.profile_photo_url ? (
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextElementSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="w-full h-full bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"
                    style={{
                      display: review.profile_photo_url ? "none" : "flex",
                    }}
                  >
                    <span className="text-xs font-semibold">
                      {review.author_name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>
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

              {/* Footer with Google link */}
              {review.author_url && (
                <div className="border-t pt-2">
                  <a
                    href={review.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors"
                  >
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    View on Google
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
