import projects from "./data";
import { CardImages } from "./Card";
import { nanoid } from "nanoid";
function Projects() {
  return (
    <section className="w-full h-auto flex justify-center">
      <div className="flex flex-col justify-start p-10 items-center w-[80%]">
        <h3 className="text-5xl text-cyan-500 relative text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-20px] after:w-1/2 after:h-1 after:bg-cyan-500 after:-translate-x-1/2 ">
          Projects
        </h3>
        <div className="flex justify-evenly flex-wrap mt-10">
            {projects.map(element=>{
                return <CardImages key={nanoid()} {...element}/>
            })}
        </div>
      </div>
    </section>
  );
}
export default Projects