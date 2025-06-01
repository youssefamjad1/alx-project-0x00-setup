import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company }) => {
  return (
    <div className="max-w-md p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="mt-2">Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p className="mt-2 italic">Company: {company.name}</p>
    </div>
  );
};

export default UserCard;
