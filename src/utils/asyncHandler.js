const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}





export default asyncHandler;

// const asyncHandler = () => {}
// const asyncHandler = () => {(fun) => {}}
// const asyncHandler = () => (fun) => async () => {} 


// TRY CATCH METHOD
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500)
//         .json({
//             success: false,
//             message: err.message,
//         })
//     }
// }