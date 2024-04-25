/**
 * An array of routes which do not require authentication
 */
export const publicRoutes = ["/"]
/**
 * An array of routes which are used for authentication purposes
 *
 * This routes will redirect user to `DEFAULT_LOGIN_REDIRECT`
 */
export const authRotues = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/new-verification",
]

/**
 * Routes that start with this prefix are used for api authentication
 *
 * We should not protect/block this route
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = "/"

/**
 * The route for logging in user
 */
export const LOGIN_ROUTE = "/auth/login"

/**
 * The route for registering user
 */
export const SIGNUP_ROUTE = "/auth/register"
