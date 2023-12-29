const CategoryCard = (props) => {
  const { Icon, label } = props;
  return (
    <>
      <div className="w-44 aspect-square flex flex-col justify-center items-center gap-4 mark">
        <div className="w-14 aspect-square">
          <Icon className="w-full h-full" />
        </div>
        <div className="text-base font-base">{label}</div>
      </div>
    </>
  );
};

export default CategoryCard;
