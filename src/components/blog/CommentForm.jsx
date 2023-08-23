import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import useBlogCall from "../../hooks/useBlogCall";

const commentSchema = object({
  comment: string(),
});
const CommentForm = ({ detailsId }) => {
  const {commentPost} = useBlogCall()

  return (
    <Box mt={4}>
      <Formik
        initialValues={{ content: "" }}
        validationSchema={commentSchema}
        onSubmit={(values, action) => {
          commentPost("comments", detailsId, {...values, post:detailsId});
          action.resetForm();
          action.setSubmitting(false);
        }}
      >
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Comment"
                name="content"
                id="content"
                type="text"
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
                ADD COMMENT
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default CommentForm;