// import {useEffect, useState } from 'react';
// import '../css/skills.css'
// import axios from 'axios';
// const Skills = () =>{
//     const [Skill,setSkill] = useState([]);
//     useEffect (() =>{
//         axios.get('http://localhost:3004/Skillspage')
//         .then(output => {
//             setSkill(output.data);
//         })
//         .catch (error => {
//             console.log(error);
//         });
//     },[]);
//     let x = '100%'
//     return (
//         <div className='skill_cards'>
//             <div className='skill_text'>
//                 <h1>Skills & Langauges</h1>
//                 <div>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</div>
//             </div>
//             <div className='skill_allcards'>
//                 <div className='cardparent'>
//                     <div className='cardtitle'>Front End Development</div>
//                     <div className='cardbody'>
//                         <div className='cardtext'>
//                             <div>Html</div>
//                             <div>90%</div>
//                         </div>
//                         <div className='rangeparent'>
//                             <div style={{height:`${x}`}} className='rangechild'></div>
//                         </div>
//                         <div className='cardtext'>
//                             <div>Html</div>
//                             <div>90%</div>
//                         </div>
//                         <div className='rangeparent'>
//                             <div style={{height:`${x}`}} className='rangechild'></div>
//                         </div>
//                         <div className='cardtext'>
//                             <div>Html</div>
//                             <div>90%</div>
//                         </div>
//                         <div className='rangeparent'>
//                             <div style={{height:`${x}`}} className='rangechild'></div>
//                         </div>
//                         <div className='cardtext'>
//                             <div>Html</div>
//                             <div>90%</div>
//                         </div>
//                         <div className='rangeparent'>
//                             <div style={{height:`${x}`}} className='rangechild'></div>
//                         </div>
//                         <div className='cardtext'>
//                             <div>Html</div>
//                             <div>90%</div>
//                         </div>
//                         <div className='rangeparent'>
//                             <div style={{height:`${x}`}} className='rangechild'></div>
//                         </div>
//                     </div>
//                 </div>
//             {/* { Skill.map(sub => (
//                 <div className='skill_card'>
//                     <p>{sub.title}</p>
//                     {sub.skills.map(skill => (
//                         <>
//                         <span>{skill.title}</span>
//                         <div className="prgress_bar"></div>
//                         </>
//                     ))}
//                 </div>
//             ))} */}
//             </div>
//         </div>
//     )
// }
// export default Skills;