import "./teachers.css";

const Teachers = () => {

  const teachersData = [
    {
      id: 1,
      name: "Ayesha Khan",
      qualification: "M.Sc (Mathematics), B.Ed",
      photo:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      qualification: "M.A (English Literature), Ph.D",
      photo:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      id: 3,
      name: "Neha Verma",
      qualification: "M.Sc (Computer Science), NET Qualified",
      photo:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    },
    {
      id: 4,
      name: "Imran Ali",
      qualification: "M.Com, MBA (Finance)",
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
      id: 5,
      name: "Sneha Patel",
      qualification: "M.Sc (Physics), B.Ed",
      photo:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      id: 6,
      name: "Arjun Singh",
      qualification: "M.A (History), UPSC Mentor",
      photo:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  ];

  return (

    <div className="teachers-container">
      <div className="teachers-header">
        <h2>Our Teachers</h2>
        <p>
          Meet our professional teachers who are dedicated to student success.
        </p>
      </div>

      <div className="teachers-grid">

        {teachersData.map((teacher) => (

          <div className="teacher-card" key={teacher.id}>

            <div className="teacher-image">

              <img src={teacher.photo} alt={teacher.name} />

            </div>

            <div className="teacher-info">

              <h3>{teacher.name}</h3>

              <p>{teacher.qualification}</p>

              <button className="teacher-btn">View Profile</button>

            </div>

          </div>
        ))}

      </div>
    </div>
    
  );
};

export default Teachers;