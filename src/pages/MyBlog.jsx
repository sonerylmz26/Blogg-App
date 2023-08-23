import { useSelector } from "react-redux";
import HomeCard from "../components/blog/HomeCard";

const MyBlog = () => {
  const { categories, newBlog } = useSelector((state) => state.blog);

  return(
  <div>

{/* <HomeCard  /> */}
  </div>
)};

export default MyBlog;
