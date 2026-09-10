import express from "express";
import movieRoutes from "./routes/movieRoutes.js";
import ApiError from "./errors/ApiError.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", movieRoutes);

app.use((req, res, next) => {
  next(new ApiError("Route introuvable.", 404));
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.error("Erreur lors du démarrage du serveur :", err);
  } else {
    console.log(`Serveur démarré sur le port ${PORT}`);
  }
});
