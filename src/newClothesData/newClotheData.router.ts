import express from "express"
import { createNewClothe, getNewClothe } from "./newClotheData.controller"
const router = express.Router()

router.post("/", createNewClothe)
router.get("/", getNewClothe)




export default router