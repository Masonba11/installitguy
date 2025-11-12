import { useState, useEffect } from "react";
import Image from "next/image";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [businessName, setBusinessName] = useState("");
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});

  useEffect(() => {
    fetchReviews();
  }, []);

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

      // Transform reviews to include all required fields
      const reviews = (data.reviews || []).map((review) => ({
        author_name: review.author_name,
        author_url: review.author_url,
        profile_photo_url: review.profile_photo_url,
        rating: review.rating,
        text: review.text,
        relative_time_description: review.relative_time_description,
        time: review.time,
      }));

      setReviews(reviews);
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
        className={`text-lg ${
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Customer Reviews ⭐ {rating} ({totalRatings})
        </h2>

        {reviews.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600">No reviews available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                {/* Header with profile photo and name */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-blue-100 text-blue-600 flex items-center justify-center">
                    {review.profile_photo_url ? (
                      <Image
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-sm font-semibold">
                        {review.author_name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {review.author_name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center mb-3">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="ml-2 text-sm text-gray-600">
                    {review.rating}/5
                  </span>
                </div>

                {/* Review text */}
                <div className="text-gray-700 mb-4 leading-relaxed">
                  <p>
                    {expandedReviews[index]
                      ? review.text
                      : truncateText(review.text)}
                  </p>
                  {review.text.length > 110 && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors"
                    >
                      {expandedReviews[index] ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>

                {/* Footer with Google link */}
                {review.author_url && (
                  <div className="border-t pt-4">
                    <a
                      href={review.author_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
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
        )}
      </div>
    </section>
  );
}
