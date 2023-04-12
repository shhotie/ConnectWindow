import { myAxios } from "./helper";

export const postData = (post) => {

    return myAxios.post("/post",post)
    .then(
        (resp)=>{ return resp.data}
    )
}

export const getData = async () => {

    const resp = await myAxios.get("/post");
    return resp.data;
}

export const getPostUserId = async (userId) => {

    const resp = await myAxios.get("/post/"+userId);
    return resp.data;
}

export const getComments = async () => {

    const resp = await myAxios.get("/comments");
    return resp.data;
}

export const registerUser = (user) => {
    console.log("RegisterING USER");
    return myAxios.post("/user/signup",user)
    .then(
        (resp)=>{ return resp.data}
    )
}

export const sendOtpEmail = (email) => {
    console.log("RegisterING USER");
    return myAxios.post("/sendMail",{"email": email})
    .then(
        (resp)=>{ return resp.data}
    )
}

export const verifyOtp = (otp) => {
    console.log("verifying otp"+ otp);
    return myAxios.post("/verifyotp",{"value": otp})
    .then(
        (resp)=>{ return resp.data}
    )
}

export const login = (email,password) => {
    console.log("login...");
    return myAxios.post("/user/login",{
        "email":email,
        "password":password
       })
    .then(
        (resp)=>{ return resp.data}
    )
}

export const updateUser = (user) => {
    console.log("RegisterING USER");
    return myAxios.post("/user/update",user)
    .then(
        (resp)=>{ return resp.data}
    )
}