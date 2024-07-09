import profile from "../../assets/images/person.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-4 border-b-2 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="w-[60px] rounded-full" src={profile} alt="" />
    </header>
  );
};

export default Header;
