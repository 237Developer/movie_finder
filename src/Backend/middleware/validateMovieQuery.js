import ApiError from "../errors/ApiError.js";

const validateMovieQuery = (req, res, next) => {
  const { title } = req.query;
  if (title === undefined) {
    return next();
  }
  if (!title || String(title).trim() === "") {
    return next(
      new ApiError("Le paramètre title est requis pour la recherche.", 400),
    );
  }

  return next();
};

export default validateMovieQuery;
