import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDetail } from "../Context/Context";
import './Detail.css';
const UserDetailPage = () => {
  const { id } = useParams();
  const { userDetails, fetchUserDetails } = useDetail();

  useEffect(() => {
    if (id) fetchUserDetails(id);
    console.log(userDetails);
  }, [id]);

  if (!userDetails) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <h2 className="text-2xl font-bold mb-4">User Info</h2>
      <p><strong>Username:</strong> {userDetails.username}</p>
      <p><strong>Role:</strong> {userDetails.role}</p>

      {userDetails.role === "STUDENT" && userDetails.student && (
        <div className="mt-6 bg-white p-4 shadow rounded">
          <h3 className="text-xl font-semibold">Student Details</h3>
          <p><strong>Name:</strong> {userDetails.student.name}</p>
          <p><strong>Email:</strong> {userDetails.student.email}</p>
          <p><strong>Roll No:</strong> {userDetails.student.roll_no}</p>
          <p><strong>Attendance:</strong> {userDetails.student.attendance ?? "N/A"}</p>
        </div>
      )}

      {userDetails.role === "TEACHER" && userDetails.teacher && (
        <div className="mt-6 bg-white p-4 shadow rounded">
          <h3 className="text-xl font-semibold">Teacher Details</h3>
          <p><strong>Name:</strong> {userDetails.teacher.name}</p>
          <p><strong>Email:</strong> {userDetails.teacher.email}</p>
          <p><strong>Subject:</strong> {userDetails.teacher.subject}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;
