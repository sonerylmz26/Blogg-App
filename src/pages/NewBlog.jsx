import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";



const NewBlog = () => {
const {categories} = useSelector((state)=> state.blog)
const { getCatagoryData} = useBlogCall()
console.log(categories)


useEffect(() => {
  
  getCatagoryData("categories")
 
}, [])



  return (
    <Box sx={{width:500, m:"auto", mt:10}}>
      <Formik
        initialValues={{
          title: "",
          image: "",
          content: "",
          category: "",
          status: "",
        }}
        //validationSchema={blogSchema}
        onSubmit={(values, action) => {
          console.log(values)
          action.resetForm();
          action.setSubmitting(false);
        }}
      >
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Title"
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
                label="Image URL"
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

              <FormControl sx={{ width:"100%" }}>

                <InputLabel id="catagory"
            >
                  Catogory *
                </InputLabel>
                <Select
               
                  id="catagory"
                  value={values. category}
                  onChange={handleChange}
                  autoWidth
                  label="Catogories *"
                >
                  {
                    categories?.map(({ id, name})=>{

return(
  <div key={id}>
    <MenuItem
    
    >{name}</MenuItem>            
  </div>
)

                    } )
                  }

               
                </Select>
              </FormControl>
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "orange" }}
                //onClick={() => commentPost("comments", detailsId)}
              >
                ADD COMMENT
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default NewBlog;