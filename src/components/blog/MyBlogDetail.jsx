import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import BlogBadgeFav, {
    BlogBadgeComment,
    BlogBadgeVisit,
} from "../BlogBadgeFav";
import { useState } from "react";
import CommentCard from "../../components/blog/CommentCard";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import { Helmet } from "react-helmet";

const MyBlogDetail = () => {
    const [open, setOpen] = useState(false);
    const { details } = useSelector((state) => state.blog);
//! Delete modal icin state
    const [modal, setModal] = React.useState(false);
    const handleOpen = () => setModal(true);
    const handleClose = () => setModal(false);
//! UpDate modal icin state
    const [upmodal, setUpModal] = React.useState(false);
    const handleOpenUp = () => setUpModal(true);
    const handleCloseUp = () => setUpModal(false);

    const tarih = new Date(details.publish_date);

    return (
        <div>
        <Helmet>
        <title>My-Blog-Details</title>
      </Helmet>
            <Box sx={{ width: "600px", m: "auto", p: 2 }}>
                <CardMedia
                    component="img"
                    height="500"
                    image={details.image}
                    alt="green iguana"
                    sx={{
                        objectFit: "contain",
                        mt: 2,
                        width: "500px",
                        m: "auto",
                    }}
                />
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "start",
                        width: "95%",
                        p: 0.5,
                        gap: "15px",
                    }}
                >
                    <AccountCircleIcon
                        sx={{ fontSize: "50px" }}
                        color="success"
                    />

                    <Box>
                        <Typography variant="h6" component="h4">
                            {details.author}
                        </Typography>
                        <Typography variant="h6" component="h4">
                            {tarih.toDateString()}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography gutterBottom variant="h4" component="div">
                        {details.title}
                    </Typography>

                    <Typography gutterBottom variant="p" component="div">
                        {details.content}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <BlogBadgeFav
                            likes_n={details.likes_n}
                            id={details.id}
                            likes={details.likes}
                        />
                        <BlogBadgeComment
                            open={open}
                            setOpen={setOpen}
                            comment_count={details.comment_count}
                        />
                        <BlogBadgeVisit post_views={details.post_views} />
                    </Box>

                    {open ? <CommentCard details={details} /> : ""}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        mt: 7,
                    }}
                >
                    <Box>
                        <Button
                            sx={{ backgroundColor: "green", fontWeight: "600" }}
                            color="primary"
                            onClick={handleOpenUp}
                        >
                            UPDATE
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            sx={{ backgroundColor: "red", fontWeight: "600" }}
                            color="primary"
                            onClick={handleOpen}
                        >
                            DELETE
                        </Button>
                    </Box>
                    <DeleteModal
                        modal={modal}
                        handleClose={handleClose}
                        detailId={details.id}
                    />

                    <UpdateModal
                        upmodal={upmodal}
                        handleCloseUp={handleCloseUp}
                    />
                </Box>
            </Box>
        </div>
    );
};

export default MyBlogDetail;
