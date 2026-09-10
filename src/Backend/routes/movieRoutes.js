import express from "express";
import { getMovies } from "../controllers/movieController.js";
import validateMovieQuery from "../middleware/validateMovieQuery.js";

const router = express.Router();

router.get("/movies", validateMovieQuery, getMovies);

export default router;
