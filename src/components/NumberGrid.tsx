import Num from "./Num";

type NumberGridProps = {
  total: number | null;
};

const generateNumberArray = (total: any): number[] => {
  return Array.from({ length: total }, (_, i) => i + 1);
};

function NumberGrid({ total }: NumberGridProps) {
  const numberArray: any = generateNumberArray(total);

  return (
    <div className="flex py-8 items-center flex-col">
     
      <div className=" px-4 py-8 grid grid-cols-5 gap-4 grid-rows-10 place-items-center  min-h-screen bg-black text-green-400 ">
        {numberArray.map((num: any) => (
          <Num num={num} />
        ))}
      </div>
    </div>
  );
}
export default NumberGrid;
