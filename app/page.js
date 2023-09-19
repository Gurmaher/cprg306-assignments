import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Page()
{
  return(
      <div>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <Link href="/week2">week2</Link>
      </div>
    
  )
}