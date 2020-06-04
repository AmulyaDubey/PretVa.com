exports.userSignupValidator=(req,res,next) =>{
    //name is not empty 
    req.check("firstname", "First Name is Required").notEmpty();
    req.check("lastname", "Last Name is Required").notEmpty();

    const arr=['Buyer', 'Supplier']
    req.check("type", "You must either be a Buyer or Supplier").notEmpty().isIn(arr);

    req.check("cname", "Company name cannot be empty").notEmpty();
    req.check("address", "Address name cannot be empty").notEmpty();
    req.check("city", "City cannot be empty").notEmpty();
    req.check("contact", "Contact cannot be empty").notEmpty();
    req.check("contact", "Enter a valid phone number").isLength({min:10, max:10}).isNumeric();

    //email
    req.check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/).withMessage("Email must contain @")
    .isLength({ min: 4, max:2000})

    //password 
    req.check("password", "Password is required").notEmpty();
    req.check("password")
    .isLength({min:6}).withMessage("Password should be atleast 6 characters")
    .matches(/\d/).withMessage("Password should contain atleast one digit")

    //error
    const errors=req.validationErrors();
    if(errors){
        const firstError=errors.map((error)=> error.msg)[0]
        return res.status(400).json({error: firstError});
    }

    next();
}