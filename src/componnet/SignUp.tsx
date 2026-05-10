import { TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpass, setRepeatpass] = useState("");
  const [error, SetError] = useState("")

  function HandleSignup(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if(name ===("") || lastname ===("") || email ===("") || password ===("") || repeatpass ===("")){
      SetError("Please Fill In All Fields")
      return
    }
    SetError("")
    console.log({ name, lastname, email, password, repeatpass });
  }

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      borderRadius: "10px",
      "& fieldset": { borderColor: "rgba(168,85,247,0.3)" },
      "&:hover fieldset": { borderColor: "#a855f7" },
      "&.Mui-focused fieldset": { borderColor: "#a855f7" }
    },
    "& .MuiInputLabel-root": { color: "#ccc" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#a855f7" },
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: "10px",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center">
      <Box
        component="form"
        onSubmit={HandleSignup}
        sx={{
          width: "370px",
          padding: "35px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
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
          Create Account 🎮
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#aaa",
            fontSize: "14px",
            mb: 1,
          }}
        >
          Join GameStore and start your journey
        </Typography>
          {error &&(
            <Typography sx={{color:"red", textAlign:"center", fontSize:"20px"}}>{error}</Typography>
          )}
        <TextField
          label="First Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={inputStyle}
        />

        <TextField
          label="Last Name"
          fullWidth
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          sx={inputStyle}
        />

        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={inputStyle}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={inputStyle}
        />

        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          value={repeatpass}
          onChange={(e) => setRepeatpass(e.target.value)}
          sx={inputStyle}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 1,
            padding: "10px",
            fontWeight: "bold",
            borderRadius: "10px",
            background: "linear-gradient(to right, #a855f7, #ec4899)",
            "&:hover": {
              background: "linear-gradient(to right, #9333ea, #db2777)",
              transform: "scale(1.02)"
            },
          }}
        >
          Sign Up
        </Button>

        <Link 
          to="/Login" 
          className="text-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          Already have an account? Sign In →
        </Link>
      </Box>
    </div>
  );
}