interface Props {
  text: string;
}

export const MyMessage = ({ text }: Props) => {
  return (
    <div className="col-start-2 md:col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-end justify-end md:items-center md:justify-start flex-col md:flex-row-reverse">
        <div className="flex mb-2 items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          U
        </div>
        <div className="relative mr-3 text-sm bg-indigo-700 py-2 px-4 shadow rounded-xl">
          <div>{ text }</div>
        </div>
      </div>
    </div>
  );
};
