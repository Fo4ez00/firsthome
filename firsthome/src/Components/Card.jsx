
const Card = ({ course }) => {
    return (
    <div className="card">
    <div className="image__container">
    <img src={course.image} alt={course.title} />
      <div className="level">{course.level}</div>
    </div>
    <h3 className="card__title">{course.title}</h3>

    <div className="card__info">
        <div className="user">
        <img className="user-avatar" src={course.user.avatar} alt={course.user.name} />
          <p>{course.user.name}</p>
        </div>
        <div className="rating">
          <p>{course.rating}</p>
        </div>
      </div>


      <div className="card__info">
        <div>{course.students} Students</div>
        <div> {course.modules} Modules</div>
        <div> {course.finishedModules} </div>
        <div >Duration: {course.duration} seconds</div>
           {course.isMyCourse && <div>My Course</div>}
      </div>



    </div>
    );
  };
  
  export default Card;

  