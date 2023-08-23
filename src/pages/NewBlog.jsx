import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";

const blogSchema = object({
  title: string().required("Bu alan zorunludur"),
  image: string().required("Bu alan zorunludur"),
  content: string().required("Bu alan zorunludur"),
  category: string().required("Bu alan zorunludur"),
  status: string().required("Bu alan zorunludur"),
});

const status = [
  {
    id: "d",
    name: "Draft",
  },
  {
    id: "p",
    name: "Published",
  },
];
const NewBlog = () => {
  const { categories, newBlog } = useSelector((state) => state.blog);
  console.log(newBlog)
  const {  getCatagoryData , createNewBlog } = useBlogCall();
const navigate = useNavigate()


  useEffect(() => {
    getCatagoryData("categories");
  }, []);
  return (
    <Box sx={{ width: 500, m: "auto", mt: 10 }}>
      <Formik
        initialValues={{
          title: "",
          image: "",
          content: "",
          category: "",
          status: "",
        }}
        validationSchema={blogSchema}
        onSubmit={(values, action) => {
console.log(values)
createNewBlog("blogs" , values);
navigate("/")
          action.resetForm();
          action.setSubmitting(false);
        }}
      >
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form>
            <Typography variant="h4" align="center" mb={5} color="orange">
              NEW BLOG
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Title *"
                name="title"
                id="title"
                type="text"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                error={touched.title && Boolean(errors.title)}
                helperText={errors.title}
              />
              <TextField
                label="Image URL *"
                name="image"
                id="image"
                type="url"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
                error={touched.image && Boolean(errors.image)}
                helperText={errors.image}
              />
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Category *
                </InputLabel>
                <Select
                  label="Category *"
                  id="category"
                  name="category"
                  variant="outlined"
                  value={values.category}
                  onChange={handleChange}
                  error={touched.category && Boolean(errors.category)}
                  helperText={errors.category}
                >
                  {categories.map(({ id, name }) => (
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Status*
                </InputLabel>
                <Select
                  label="Status"
                  id="status"
                  name="status"
                  variant="outlined"
                  value={values.status}
                  onChange={handleChange}
                  error={touched.status && Boolean(errors.status)}
                  helperText={errors.status}
                >
                  {status.map(({ id, name }) => (
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Content *"
                name="content"
                id="content"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
                error={touched.content && Boolean(errors.content)}
                helperText={errors.content}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "orange" }}
          
              >
               NEW BLOG
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default NewBlog;
