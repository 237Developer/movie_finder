import { getMovieByName, getTenMovies } from "../database/query.js";
import ApiError from "../errors/ApiError.js";

export const getMovies = async (req, res, next) => {
  try {
    const { title } = req.query;

    const movies = title
      ? await getMovieByName(String(title))
      : await getTenMovies();

    if (!movies || movies.length === 0) {
      return next(new ApiError("Aucun film trouvé.", 404));
    }

    return res.status(200).json({
      success: true,
      data: movies,
    });
  } catch (error) {
    return next(error);
  }
};
