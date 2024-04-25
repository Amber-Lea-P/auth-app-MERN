import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className='flex flex-col'>
        <img src={currentUser.profilePicture} alt="Profile Photo" className='h-24 w-24 self-center cursor-pointer rounded-full object-cover' />
      </form>
    </div>
  );
}
