import { Box, Button, TextField } from "@mui/material";
import { object, string } from "yup";
export const registerSchema = object({
  username: string()
    .max(20, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required("username zorunludur"),
  image: string().required("Fotoğraf zorunludur"),
  bio: string().required("Bio zorunludur"),
  email: string().email().required("Email zorunludur"),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
});
const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="User Name"
          name="username"
          id="userName"
          type="text"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
          helperText={errors.username}
        />
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label="Image"
          name="image"
          id="image"
          type="url"
          variant="outlined"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.image && Boolean(errors.image)}
          helperText={errors.image}
        />
        <TextField
          label="Bio"
          name="bio"
          id="bio"
          type="text"
          variant="outlined"
          value={values.bio}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.bio && Boolean(errors.bio)}
          helperText={errors.bio}
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={errors.password}
        />
        <Button
          sx={{
            backgroundColor: "#90EE90",
            color: "#171717",
            fontWeight: "700",
            "&:hover": { color: "white" },
          }}
          type="submit"
          variant="contained"
          size="large"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};
export default RegisterForm;
