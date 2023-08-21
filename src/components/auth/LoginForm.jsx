import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { object, string } from "yup";
import { Form } from "formik";

//? harici validasyon şemasi
export const loginSchema = object({
  email: string()
    .email("Lutfen valid bir email giriniz")
    .required("Bu alan zorunludur"),
  password: string()
    .required("Bu alan zorunludur")
    .min(8, "En az 8 karakter girilmelidir")
    .max(16, "En fazla 16 karakter girilmelidir")
    .matches(/\d+/, "En az bir rakam içermelidir.")
    .matches(/[a-z]/, "En az bir küçük harf içermelidir.")
    .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
    .matches(/[!,?{}><%&$#£+-.]+/, "En az bir özel karekter içermelidir."),
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={errors.password}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "green" }}
          >
            Submit
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default LoginForm;
