import pic from "C:/Users/dom/Desktop/react-lab-2/src/Resources/photo.jpg"
function ProfileCard() {
    return (
        <div className="wrap">
            <div className="profileCard">
                <img src={pic} alt="it's me" className="pic"></img>
                <h2 className="title">Gubina Anna Dmitrievna</h2>
            </div>
        </div>
    );
}
export default ProfileCard