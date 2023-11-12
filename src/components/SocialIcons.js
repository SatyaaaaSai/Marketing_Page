const SocialIcons = ({ Icons }) => {
  return (
    <div className="grid grid-cols-5 gap-0 place-items-center text-teal-500">
      {Icons.map((ion) => (
        <span className="hover:text-teal-900 hover:cursor-pointer" key={ion.name}>{ion.name}</span>
      ))}
    </div>
  );
};

export default SocialIcons;
