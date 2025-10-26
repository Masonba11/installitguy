export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return res.status(500).json({
        message: "API credentials not configured",
        error: "Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID",
      });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return res.status(500).json({
        message: "Failed to fetch from Google Places API",
        error: data.status,
        details: data.error_message,
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

    res.status(200).json({
      name: result.name,
      rating: result.rating,
      user_ratings_total: result.user_ratings_total,
      reviews: reviews,
    });
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}
