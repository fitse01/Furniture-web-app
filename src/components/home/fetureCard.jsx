const FetureCard = ({ icon, title, description }) => {
  return (
    <div className="w-[278px] h-[216px] bg-white rounded-[14px] flex flex-col justify-center items-center">
      <div className="h-[60px] bg-primary-100 w-[60px] rounded-[12px] p-[10px] flex items-center justify-center">
        {icon}
      </div>
      <div className="font-[500] text-[16px] font-montaga flex_center pt-2 text-[#08374C]">
        {title}
      </div>
      <div className="font-[300] font-montaga text-center pt-2 px-3 text-[14px] flex_center">
        {description}
      </div>
    </div>
  );
};

export default FetureCard;
