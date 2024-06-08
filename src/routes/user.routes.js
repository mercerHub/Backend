import { Router } from "express";
import { refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount:1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

//secure routes

router.route("/logout").post(veryfyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

export default router