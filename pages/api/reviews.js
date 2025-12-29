export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    // If API credentials are not configured, return mock reviews
    if (!apiKey || !placeId) {
      const mockReviews = {
        name: "Install It Guy",
        rating: 4.9,
        user_ratings_total: 240,
        reviews: [
          {
            author_name: "Sarah Johnson",
            author_url: "",
            profile_photo_url: "",
            rating: 5,
            text: "Scott and his team did an amazing job mounting our 75-inch TV. They were professional, on time, and the work was perfect. Highly recommend!",
            relative_time_description: "2 weeks ago",
            time: Date.now() - 14 * 24 * 60 * 60 * 1000,
          },
          {
            author_name: "Mike Chen",
            author_url: "",
            profile_photo_url: "",
            rating: 5,
            text: "Excellent service! They installed our ceiling fan and fixed a few other things around the house. Fair pricing and great workmanship.",
            relative_time_description: "1 month ago",
            time: Date.now() - 30 * 24 * 60 * 60 * 1000,
          },
          {
            author_name: "Jennifer Davis",
            author_url: "",
            profile_photo_url: "",
            rating: 5,
            text: "Family-owned business with 30+ years of experience really shows. They installed our Ring doorbell and did some electrical work. Very satisfied!",
            relative_time_description: "2 months ago",
            time: Date.now() - 60 * 24 * 60 * 60 * 1000,
          },
          {
            author_name: "Robert Wilson",
            author_url: "",
            profile_photo_url: "",
            rating: 5,
            text: "Called for TV mounting service and they exceeded expectations. Clean work, reasonable price, and they even helped with cable management.",
            relative_time_description: "3 months ago",
            time: Date.now() - 90 * 24 * 60 * 60 * 1000,
          },
          {
            author_name: "Lisa Thompson",
            author_url: "",
            profile_photo_url: "",
            rating: 5,
            text: "Great handyman service! They installed our garbage disposal and fixed a leaky faucet. Professional and trustworthy team.",
            relative_time_description: "4 months ago",
            time: Date.now() - 120 * 24 * 60 * 60 * 1000,
          },
        ],
      };

      return res.status(200).json(mockReviews);
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Google Places API error:", {
        status: data.status,
        error_message: data.error_message,
        place_id: placeId,
      });
      return res.status(500).json({
        error: true,
        message: `Failed to fetch from Google Places API: ${data.status}`,
        details: data.error_message || "Unknown error",
        status: data.status,
      });
    }

    if (!data.result) {
      console.error("Google Places API returned OK but no result:", data);
      return res.status(500).json({
        error: true,
        message: "Google Places API returned no result data",
        details: "The API call succeeded but no place data was returned",
      });
    }

    const result = data.result;

    // Transform reviews to include all required fields
    const reviews = (result.reviews || []).map((review) => ({
      author_name: review.author_name,
      author_url: review.author_url,
      profile_photo_url: review.profile_photo_url,
      rating: review.rating,
      text: review.text,
      relative_time_description: review.relative_time_description,
      time: review.time,
    }));

    return res.status(200).json({
      name: result.name,
      rating: result.rating,
      user_ratings_total: result.user_ratings_total,
      reviews: reviews,
    });
  } catch (error) {
    console.error("Error in reviews API handler:", error);
    return res.status(500).json({
      error: true,
      message: "Internal server error",
      details: error.message,
    });
  }
}
