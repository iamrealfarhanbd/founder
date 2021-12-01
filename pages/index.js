import Blog from "../Components/Homepage/Blog";
import Brands from "../Components/Homepage/Brands";
import Counter from "../Components/Homepage/Counter";
import CourseArea from "../Components/Homepage/Course-area";
import CourseCat from "../Components/Homepage/Course-cat";
import FreeResourse from "../Components/Homepage/Free-resourse";
import GalleryArea from "../Components/Homepage/Gallery-area";
import Hero from "../Components/Homepage/Hero";
import Instructor from "../Components/Homepage/Instructor";
import TeamMembers from "../Components/Homepage/Team-members";
import Testimonial from "../Components/Homepage/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Counter />
      <CourseCat />
      <CourseArea />
      <GalleryArea />
      <TeamMembers />
      <FreeResourse />
      <Testimonial />
      <Instructor />
      <Blog />
    </>
  );
}
