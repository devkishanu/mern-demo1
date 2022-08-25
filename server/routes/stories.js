import { Router } from "express";
import { getStories, createNewStory, updateStory, deleteStory, likeStory } from "../controllers/stories.js";

const router = new Router();

router.get("/", getStories);
router.post("/", createNewStory);
router.patch("/:id", updateStory);
router.delete("/:id", deleteStory);
router.patch("/:id/likeStory", likeStory);

export default router;