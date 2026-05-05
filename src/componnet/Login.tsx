import { TextField, Button, Box, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login(){

const [email, setemail] = useState("")
const [password, setpassword]= useState("")
    function HundellSIGNIN(e: { preventDefault: () => void }){
        e.preventDefault()
        console.log({email, password})
    }
    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center flex-col">
            <Box
                component="form"
                sx={{
                    width: "350px",
                    padding: "30px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(15px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    border: "1px solid rgba(168, 85, 247, 0.3)"
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    Welcome Back 👋
                </Typography>

                <TextField 
                    sx={{
                        backgroundColor: "rgba(255,255,255,0.1)", 
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": { borderColor: "rgba(168,85,247,0.3)" },
                            "&:hover fieldset": { borderColor: "#a855f7" }
                        },
                        "& .MuiInputLabel-root": { color: "#ccc" }
                    }} 
                    label="Email" 
                    value={email} 
                    fullWidth
                    onChange={(e)=>{ setemail(e.target.value) }}
                />

                <TextField 
                    sx={{
                        backgroundColor: "rgba(255,255,255,0.1)", 
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": { borderColor: "rgba(168,85,247,0.3)" },
                            "&:hover fieldset": { borderColor: "#a855f7" }
                        },
                        "& .MuiInputLabel-root": { color: "#ccc" }
                    }} 
                    label="Password" 
                    type="password"
                    value={password} 
                    fullWidth
                    onChange={(e)=>{ setpassword(e.target.value) }}
                />
                
                <Button 
                    onClick={HundellSIGNIN}
                    variant="contained"
                    sx={{
                        fontSize:"16px",
                        padding:"10px 20px",
                        alignSelf:"center",
                        background: "linear-gradient(to right, #a855f7, #ec4899)",
                        color:"white",
                        borderRadius:"8px",
                        transition:"0.3s",
                        "&:hover":{
                            transform:"scale(1.05)",
                            background: "linear-gradient(to right, #9333ea, #db2777)"
                        }
                    }}
                >
                    SIGN IN
                </Button>
                
                <Link 
                    to="/register-page" 
                    className="text-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                    Create New Account →
                </Link>
                
            </Box>
            <Button 
                    
                    variant="contained"
                    sx={{
                        marginTop:"50px",
                        fontSize:"16px",
                        padding:"10px 20px",
                        alignSelf:"center",
                        background: "linear-gradient(to right, #a855f7, #ec4899)",
                        color:"white",
                        borderRadius:"8px",
                        transition:"0.3s",
                        "&:hover":{
                        transform:"scale(1.05)",
                        background: "linear-gradient(to right, #9333ea, #db2777)"
                        }
                    }}
                >
                    <Link to="/">Back To Home Page ←</Link>
                    
                </Button>
            
            

        </div>
    )
}