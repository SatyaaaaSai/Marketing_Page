

const Items = ({Links,title}) => {
  return (
   <ul>
    <h1 className="mb-1 text-white font-semibold">{title}</h1>
    {
        Links.map((link)=>(
            <li key={link.name}>
                <a href={link.link} className="text-gray-600 hover:text-teal-400 duration-300">{link.name}</a>
            </li>
        ))
    }
   </ul>
  );
};

export default Items;
