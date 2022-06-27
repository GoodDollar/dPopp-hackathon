import React from "react";

export const LoadingCard = (): JSX.Element => {
  return (
    <div className="m-4 flex w-full border border-gray-200 pt-6 md:w-1/2 xl:w-1/4">
      <div className="flex grow animate-pulse flex-col justify-around">
        <div className="ml-6 h-12 w-12 rounded-full bg-slate-700"></div>
        <div className="my-4 flex flex-1 flex-col justify-end pl-2">
          <div className="w-1/2 space-y-6">
            <div className="h-4 w-1/2 rounded-lg bg-slate-700"></div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7 h-3 rounded-md bg-slate-700"></div>
              <div className="col-span-4 h-3 rounded-md bg-slate-700"></div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex w-full shrink flex-row items-center justify-center p-5">
          <div className="grid w-1/3 grid-cols-4 gap-4">
            <div className="col-span-2 h-3 rounded-md bg-slate-700"></div>
            <div className="col-span-2 h-3 rounded-md bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
